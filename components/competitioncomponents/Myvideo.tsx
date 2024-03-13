import React , {useState,useRef} from 'react'
import { BsFillPlayFill } from 'react-icons/bs';


import { IoIosPeople, IoIosTimer } from 'react-icons/io'
import {BsPlay } from 'react-icons/bs'
import { BiShare , BiBasket} from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
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


  
const Myvideo = ({ videodetails }: { videodetails: VideoData }) => {
  const [showList, setShowList] = useState(false)
  
  const [play, setPlay] = useState(false)

  
  const ref2 = useRef(null)

  const handleClickOutside2 = () => {
    // Your custom logic here
    setPlay(false)
    
  }


  useOnClickOutside(ref2, handleClickOutside2)

const ref = useRef(null)

const handleClickOutside = () => {
  // Your custom logic here
  setShowList(false)

}

const handleClickInside = () => {
  // Your custom logic here
  console.log('clicked inside')
}

  useOnClickOutside(ref, handleClickOutside)
  
  return (
    <>
      {/* <Box bgColor='#fff' w='100%' h="130px" textAlign='center' position='relative' bgImage={`url(${videodetails?.Url})`}  bgRepeat="no-repeat" bgSize="cover" borderRadius="10px">
          
          <Text  as="span" position='absolute' top='calc( 50% - 15px )' left =' calc(50% - 15px )' p="3px 4px" bgColor="#fe7701" color="#fff" fontSize="30px" borderRadius="50%" >     <BsFillPlayFill /></Text>
      </Box>
      <Text color="#fff">{videodetails?.Title}</Text> */}
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
           
      <div className='video-box myvedio-box'>
        <div className='rel'>
          <span className='play-icon' onClick={()=>setPlay(true)}><BsPlay /></span>
          <video
        className="competetion-video"
        width="320"
            height="240"
            poster={videodetails.PosterUrl}
        // controls="false"
        muted
        >
    
        <source src={videodetails.VideoUrl} type="video/mp4" />
        Your bro
      </video>
      </div>
   
      <div className='video-info'>
      
        <span><AiOutlineHeart /></span>100
        <span><BiShare /> </span>3k
        <span><IoIosPeople /> </span>10k
      
      </div>
  
      <div className='userName'>{videodetails.Title}</div>
     <div></div>
     <div className='video-time'> <span><IoIosTimer /></span> 2023-09-10 .. 15:53:48.3</div>
      <div className='videoname'> {videodetails.Description}</div>
      <div className='like-vid'></div>
  
        <div className='share-vid' onClick={() => setShowList(true)}><FiMoreVertical /></div>
      
       {showList && <div className='list'  ref={ref}  onClick={handleClickInside}>
          <div><span><BiShare /></span>مشاركة </div>
          <div><span><FiEdit /> </span>تعديل </div>
          <div><span><BiBasket /></span>مسح</div>
        </div>}
     
      </div>
    </>
   
  )
}


export default Myvideo