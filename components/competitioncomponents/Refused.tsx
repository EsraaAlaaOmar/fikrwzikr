import React , {useState,useRef} from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io'
import {BsPlay } from 'react-icons/bs'
import { BiShare , BiBasket} from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { useOnClickOutside } from 'usehooks-ts'
import axios from 'axios';
interface VideoData {
  // Define the properties of the video data you are expecting
  // id: number;
  // title: string;
  // url: string;
  // Add other properties as needed
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
}


  
const Myvideo =({ videodetails,refetch }: { videodetails: VideoData,refetch:any }) => {
  const [showList, setShowList] = useState(false)
  const [play, setPlay] = useState(false)
  
const ref = useRef(null)
const ref2 = useRef(null)
const handleClickOutside = () => {
  // Your custom logic here
  setShowList(false)

}

const handleClickInside = () => {
  // Your custom logic here
  console.log('clicked inside')
}

  useOnClickOutside(ref, handleClickOutside)
  const handleClickOutside2 = () => {
    // Your custom logic here
    setPlay(false)
    
  }
  useOnClickOutside(ref2, handleClickOutside2)
  const DeleteVideo = async (VideoId:number) => {

    await axios.post(
      `https://vf.alerting.services/fekrwzekrOrangeApis/Users/DeleteVideo=${VideoId}
      `,
      {},
      {
    
      }
    );
    refetch()
  };
  // Parse the date string into a Date object
const date = new Date(videodetails.DateIn);

// Define options for formatting the date
const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',  hour12: true, timeZone: 'UTC' };

// Convert the date to a string in Arabic
const formattedDate = date.toLocaleString('ar-EG', options);
  return (
    <>
     {play && <div className='video-overlayer'>
           
           
           <video
           
            src={videodetails?.VideoUrl}
              controls
           autoPlay
           >
       
           <source  type="video/mp4" />
           Your bro
         </video>
         <span className='close-btn' onClick={()=>setPlay(false)}>×</span>
         <div className='details'>
        
        {videodetails?.Title}
          </div>
           </div>}
          <div className='video-box'>
              <div className='refuse-msg'>
                  <span><AiOutlineCloseCircle /></span>تم رفض الفيديو بسبب عدم مراعاة الشروط والأحكام
              </div>
        <div className='rel'>
          <span className='play-icon' onClick={()=>setPlay(true)}><BsPlay /></span>
          <video
        className="competetion-video"
        width="320"
        height="240"
            // controls="false"
            poster={videodetails.PosterUrl}
        muted
        >
    
        <source src='' type="video/mp4" />
        Your bro
      </video>
      </div>
   
       <div className='userName'>{videodetails.Title}</div>
     <div></div>
     <div className='video-time'> <span><IoIosTimer /></span> {formattedDate}</div>
      <div className='videoname'> {videodetails.Description}</div>
      <div className='like-vid'></div>
      <div className='like-vid'><AiOutlineHeart /></div>
      <div className='share-vid' onClick={() => setShowList(true)}><FiMoreVertical /></div>
      
      {showList && <div className='list'  ref={ref}  onClick={handleClickInside}>
         {/* <div><span><BiShare /></span>مشاركة </div>
         <div><span><FiEdit /> </span>تعديل </div> */}
         <div onClick={() => DeleteVideo(videodetails.VideoId)} ><span ><BiBasket /></span>حذف</div>
       </div>}
      </div>
    </>
   
  )
}


export default Myvideo