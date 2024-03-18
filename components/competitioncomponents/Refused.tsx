import React , {useState,useRef} from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import Image from 'next/image';
import {BsPlay } from 'react-icons/bs'
import { BiShare , BiBasket} from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { useOnClickOutside } from 'usehooks-ts'
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


  
const Myvideo =({ videodetails }: { videodetails: VideoData }) => {
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
  return (
    <>
     {play && <div className='video-overlayer'>
           
           <div className='details'>
          
           {videodetails.Title}
           </div>
           <video
           ref={ref2}
           
           src={videodetails.VideoUrl}
             controls
          autoPlay
          >
      
          <source  type={videodetails.VideoUrl} />
        
           </video>
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
      <div className='videoname'>{videodetails.Description} </div>
      <div className='like-vid'><AiOutlineHeart /></div>
  
        {/* <div className='share-vid' onClick={() => setShowList(true)}><FiMoreVertical /></div> */}
    
      
     
      </div>
    </>
   
  )
}


export default Myvideo