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
  DateIn: Date;
  Deleted: Boolean;
  Description: string;
  NViews: number;
  TalentId: number;
  Title: string;
  Url: string;
  VideoId: number;
  Votes:[]
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
  console.log(data)
  
  // const renderedVideos =
//  ( data?.length === 0)?<>ليس لديك اي فديوهات </>
//    :
//   data?.map((video:VideoData)=><Myvideo key={video.VideoId} videodetails={video}  />)
  return (
      <div className='page container'>
        <div className='page-hierarchy'>
             <span className='parent'>
              <Link href='/'>
                الرئيسية 
             </Link>
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
           <span className='child'>فديوهاتي</span>

         </div>
         <button className="add-vid-button" onClick={()=>setUpload(true)}>
        اضافة فيديو
        </button>
         <div className='page-title'>فديوهاتي</div>
  
     
        
  
    
     <div className='section-title'>
     قيد  المراجعة
      </div> 
      <div className='videos-grid videos-page'>
        <Pending  />
    
   


    </div>
    <div className='section-title'>
    الفيديوهات المقبولة
      </div> 
      <div className='videos-grid videos-page'>
      {isLoading? <Loader />  : renderedVideos}
      {/* <Myvideo />
      <Myvideo /> */}
   

    </div>
    

      <div className='section-title'>
      الفيديوهات المرفوضة
      </div> 
      <div className='videos-grid videos-page'>
       <Refused />
   

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