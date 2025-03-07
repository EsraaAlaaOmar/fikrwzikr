import React, {useEffect,useRef,useState} from 'react'
import Link from 'next/link'
import { useQuery, useMutation , useQueryClient } from 'react-query';
import Pending from './Pending';
import Loader from './Loader';
import Myvideo from './Myvideo';
import Refused from './Refused';
import {MdOutlineKeyboardArrowLeft} from'react-icons/md'
import Upload from './Upload';
import { useOnClickOutside } from 'usehooks-ts'
import { IoClose } from "react-icons/io5";
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
  Url:string;
  PosterUrl:string;
  VotesCount:number;
}
interface Props {

  }
  const Myvideos: React.FC<Props> = () => {
    
    const [Msdn, setMsdn] = useState<string>();
    const [pendingVideo,setPendingVideo] = useState<any>(null);
    const[showPendingMsg,setShowPendingMsg] =useState(true)
    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      
      const param1Value = queryParams.get('MSISDN');
      const param2Value = queryParams.get('title');
  
      param1Value && setMsdn(param1Value);
      param2Value && setPendingVideo(param2Value);

     
      // Delay the URL modification to ensure it happens after the page has rendered
      const timeoutId = setTimeout(() => {
          queryParams.delete('title');
         
          const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
          history.replaceState(null, '', newUrl);
        
      }, 500);
      return () => {
        clearTimeout(timeoutId); // Cleanup the timeout
      };
  
    }, []);
 

   const [upload,setUpload] = useState(false)



  const fetchVideos = async () => {
    const response = await axios.post(
      `https://vf.alerting.services/fekrwzekrOrangeApis/Users/GetMyVdeos?MobileNumber=${Msdn}`,
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
  const queryKey = Msdn ? ["myvideos", Msdn] : ["myvideos"];
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    queryKey,
    fetchVideos)
  
  // start pending videos 
  var pendingVideos =data?.filter((video:any)=>video?.Status === 0) 
  const renderedPending =
 ( pendingVideos?.length === 0)?<>ليس لديك اي فيديوهات </>
   :
   pendingVideos?.map((video:VideoData)=><Pending key={video.VideoId} videodetails={video}  refetch={refetch}  />)
   // end pending videos 
    // start accepted videos 
    var acceptedVideos =data?.filter((video:any)=>video.Status === 1) 
    const renderedaccepted =
   ( acceptedVideos?.length === 0)?<>ليس لديك اي فيديوهات </>
     :
     acceptedVideos?.map((video:VideoData)=><Myvideo key={video.VideoId} videodetails={video} refetch={refetch} />)
     // end accepted videos 
       // start refused videos 
  var refusedVideos =data?.filter((video:any)=>video.Status === 2) 
  const renderedrefused =
 ( refusedVideos?.length === 0)?<>ليس لديك اي فيديوهات </>
   :
   refusedVideos?.map((video:VideoData)=> <Refused  key={video.VideoId} videodetails={video} refetch={refetch}   />)
   // end refused videos
   //ref for alert 
   const ref = useRef(null)

   const handleClickOutside = () => {
     console.log('clicked outside')
     setShowPendingMsg(false)
 
   }

 
   useOnClickOutside(ref, handleClickOutside) 
   return (
      <div className='page container'>
        { showPendingMsg&&pendingVideo&&     <div className='overlay overlay_full_page'  >
            
            <div className="white-background comp-terms " ref={ref}>
            <span className="icon" onClick={()=>setShowPendingMsg(false)}><IoClose /></span>
            <h3>تنبيه  </h3>
           <div style={{ fontSize:"20px",textAlign:"center", marginBottom:"20px" }}> تم اضافة فيديو بعنوان  {pendingVideo} والفيديو قيد المراجعة </div>
            <div className="terms-btn" onClick={()=>setShowPendingMsg(false)}>OK</div>
            </div>
           

      </div>}
        <br/>
        {/* {pendingVideo&&<div className='pending-msg'>تم اضافة فيديو بعنوان {pendingVideo} والفيديو قيد المراجعة </div>} */}
        <div className='page-hierarchy'>
             <span className='parent'>
             <a href="http://fikrwzikr.com/Index" style={{color:"#000"}}>
                الرئيسية 
             </a>
           <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
           </span>
           <span className='child'>فيديوهاتي</span>

         </div>
       
         <div className=" videos-page   video-links-div">
        <Link className='videos-link-div ' href={`/Competition?MSISDN=${Msdn}`}style={{color:"#000"}} >
          <button className="my-videos-link " >
      فيديوهات المسابقة
        </button>
        </Link>
        <Link className='videos-link-div' href={`/Myvideos?MSISDN=${Msdn}`}style={{color:"#000"}}>
          <button className="my-videos-link active" >
       فيديوهاتي
        </button>
        </Link>
        <Link className='videos-link-div' href={`/AddVideo?MSISDN=${Msdn}`}style={{color:"#000"}}>
          <button className="my-videos-link"  >
          اضافة فيديو        </button>
        </Link>
              
           
        </div >
       
       
  
     
        
 {isLoading? <Loader />  :<>
 
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
     قيد  المراجعة
      </div> 
      <div className=' videos-page'>
       {renderedPending}
    
   


    </div>
    <div className='section-title'>
      الفيديوهات المرفوضة
      </div> 
      <div className='videos-grid videos-page'>
       {renderedrefused}
   

    </div>
    <div >
    
      </div>
    </>}

      {upload && <div className='overlay overlay_full_page'>
        <Upload hideUpload={ setUpload} />
      </div>}
   
    </div>
  )
}

export default Myvideos