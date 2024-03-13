import React , {useState,useRef} from 'react'
import { BsFillPlayFill } from 'react-icons/bs';

import Image from 'next/image';
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
  Url: string;
  VideoId: number;
  Votes:[];
  PosterUrl:string
}


  
const Myvideo = ({ videodetails }: { videodetails: VideoData }) => {
  const [showList, setShowList] = useState(false)
  
  
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
      {/* <Box bgColor='#ffff' w='100%' h="130px" textAlign='center' position='relative' bgImage={`url(${videodetails?.Url})`}  bgRepeat="no-repeat" bgSize="cover" borderRadius="10px">
          
          <Text  as="span" position='absolute' top='calc( 50% - 15px )' left =' calc(50% - 15px )' p="3px 4px" bgColor="#fe7701" color="#fff" fontSize="30px" borderRadius="50%" >     <BsFillPlayFill /></Text>
      </Box>
      <Text color="#fff">{videodetails?.Title}</Text> */}
          <div className='video-box'>
             
         <div className='rel'>
            <div className='overlay'>
             <div className='overlay-text'> قيد المراجعة..  </div>      
             </div>
        
          <video
        className="competetion-video"
        width="320"
        height="240"
            // controls="false"
            poster={videodetails.PosterUrl}
        muted
        >
    
        <source src={''} type="video/mp4" />
        Your bro
      </video>
      </div>
   
      <div className='userName'> {videodetails.Title}</div>
      <div className='videoname'>{videodetails.Description} </div>
      
 
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