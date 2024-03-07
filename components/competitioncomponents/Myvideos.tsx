import React, {useEffect,useState} from 'react'
import Link from 'next/link'
import { useQuery, useMutation , useQueryClient } from 'react-query';
import Pending from './Pending';
import Loader from './Loader';
import Myvideo from './Myvideo';
import Refused from './Refused';
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import Upload from './Upload';
const axios = require("axios");

interface VideoData {
    DateIn: string;
  Deleted: Boolean;
  Description: string;
  NViews: number;
  TalentId: number;
  Title: string;
  VideoUrl: string;
  VideoId: number;
  Votes:[];
  Url:string
}
const Myvideos = () => {
  // const [data, setData] = useState<VideoData[] | null>(null);
   const [upload,setUpload] = useState(false)
  // const fetchData = async () => {
    

  
  //   try {
  //       const Msisdn ="Msisdn"
  //       const response = await axios.post(`https://vf.alerting.services/fekrwzekrApis/Users/GetMyVdeos?MobileNumber=01126214650`,{},{ headers: {
          
  //       'Content-Type': 'application/json'
  //       }});
      
  //       if (response.status === 200) {
  //         // Handle successful upload
  //         console.log(response)
  //         return response.data
  //         // setData(response)
  //       } else {
  //         // Handle upload error
  //       }
  //     } catch (error) {
  //       // Handle network error or any other error
  //     }

  // };


  const fetchVideos = async () => {
    const response = await axios.post(
      'https://vf.alerting.services/fekrwzekrApis/Users/GetMyVdeos?MobileNumber=01126214650',
      {},
      {
    
      }
    );
    return response.data;
  };

  
  function useDeleteItem() {
    const queryClient = useQueryClient();
  
    const deleteItem = async (vidId:string) => {
      // Make your delete API request here
      const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/DeleteVideo?VideoId=${vidId}`,{},{ headers: {
        "Header" :" Access-Control-Allow-Headers",
        "value":"api_key",
        "Api_Key": "elinxfthr62023",
        'content-type': 'text/json'
      }});
  
      // Invalidate the query to refetch the data
      queryClient.invalidateQueries('myvideos');
  
      return response.data;
    };
  
    return useMutation((vidId: string) => {
      return  deleteItem(vidId)
    })
  }
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("myvideos", fetchVideos)
  
  // start pending videos 
  var pendingVideos =data?.filter((video:any)=>video?.Status === 0) 
  const renderedPending =
 ( pendingVideos?.length === 0)?<>ليس لديك اي فديوهات </>
   :
   pendingVideos?.map((video:VideoData)=><Pending key={video.VideoId} videodetails={video}  />)
   // end pending videos 
    // start accepted videos 
    var acceptedVideos =data?.filter((video:any)=>video.Status === 1) 
    const renderedaccepted =
   ( acceptedVideos?.length === 0)?<>ليس لديك اي فديوهات </>
     :
     acceptedVideos?.map((video:VideoData)=><Myvideo key={video.VideoId} videodetails={video}  />)
     // end pending videos 
       // start pending videos 
  var refusedVideos =data?.filter((video:any)=>video.Status === 2) 
  const renderedrefused =
 ( refusedVideos?.length === 0)?<>ليس لديك اي فديوهات </>
   :
   refusedVideos?.map((video:VideoData)=> <Refused  key={video.VideoId} videodetails={video}  />)
   // end pending videos 
   return (
      <div className='page container'>
        <br/>
        <div className='page-hierarchy'>
             <span className='parent'>
             <a href="https://ka2naktraho.com/Index" style={{color:"#000"}}>
                الرئيسية 
             </a>
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
           <span className='child'>فديوهاتي</span>

         </div>
         <div className=" videos-page   video-links-div">
        <Link className='videos-link-div ' href='' style={{color:"#000"}} >
          <button className="my-videos-link " >
      فديوهات المسابقة
        </button>
        </Link>
        <Link className='videos-link-div' href='/Myvideos' style={{color:"#000"}}>
          <button className="my-videos-link active" >
       فديوهاتي
        </button>
        </Link>
        <Link className='videos-link-div' href='/Myvideos' style={{color:"#000"}}>
          <button className="my-videos-link"   onClick={()=>setUpload(true)}>
          اضافة فديو        </button>
        </Link>
              
           
        </div >
       
       
  
     
        
  
    
     <div className='section-title'>
     قيد  المراجعة
      </div> 
      <div className=' videos-page'>
       {renderedPending}
    
   


    </div>
    <div className='section-title'>
    الفيديوهات المقبولة
      </div> 
      <div className='videos-grid videos-page'>
      {/* {isLoading? <Loader />  : renderedVideos} */}
      {/* <Myvideo />
      <Myvideo /> */}
      {renderedaccepted}
   

    </div>
    

      <div className='section-title'>
      الفيديوهات المرفوضة
      </div> 
      <div className='videos-grid videos-page'>
       {renderedrefused}
   

    </div>
    <div >
    
      </div>
      {upload && <div className='overlay'>
        <Upload hideUpload={ setUpload} />
      </div>}
   
    </div>
  )
}

export default Myvideos