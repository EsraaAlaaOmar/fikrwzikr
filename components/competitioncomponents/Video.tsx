import React, { useState,useEffect, useRef} from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { PiEyeBold } from "react-icons/pi";
import {BsPlay } from 'react-icons/bs'
import { BiShare } from 'react-icons/bi'
import { IoIosTimer } from 'react-icons/io'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useOnClickOutside } from 'usehooks-ts'
import Head from 'next/head';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
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
  VotesCount:number;
  UsersVotes:[any];
  PosterUrl:string

}
interface VideoProps {
  videodetails: VideoData;
  refetchVideos:any // Define the type of refetchVideos prop
  Msdn:String
  userId:string
}

const Video: React.FC<VideoProps> = ({ videodetails, refetchVideos,Msdn,userId }) =>  {
  //need to change user ID
 
  const router = useRouter();
  var Liked = videodetails?.UsersVotes.find((vote) => {
    return vote?.UserId === userId && vote?.Liked === true;
  });
  {console.log(Liked)}
  const [play, setPlay] = useState(false)

  
  // const ref = useRef(null)

  // const handleClickOutside = () => {
  //   // Your custom logic here
  //   setPlay(false)
    
  // }

  // const handleClickInside = () => {
  //   // Your custom logic here
  //   console.log('clicked inside')
  // }

  // useOnClickOutside(ref, handleClickOutside)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).FB?.init({
        appId: 'YOUR_APP_ID',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v10.0',
      });
    }
  }, []);

  const handleShareClick = () => {
    (window as any).FB?.ui({
      method: 'share',
      href: 'https://example.com', // URL you want to share
    });
  };
 
 const addVote = async (videoId: number) => {
 
  try {
    const response = await axios.post(
      `https://vf.alerting.services/fekrwzekrOrangeApis/Users/AddVote?VideoId=${videoId}&MobileNumber=${Msdn}&Vote=${!Liked}`,
      null, // Since there's no request body, pass null
      {
        headers: {
          'content-type': 'application/json' // Correct content type
        }
      }
    );

    // Update the state
   

    // Trigger a refetch of the videos
    await refetchVideos();

    // Return the response data
    return response.data;
  } catch (error) {
    console.error('Error adding vote:', error);
    // Return a default value or handle the error as needed
    return null;
  }
};    

 const addVoteRedirect =(videoId: number)=>  !Msdn || Msdn=='NA' || Msdn==="000" || Msdn=='undefined' ?  router.push(`http://fikrwzikr.com/SignIn`) :addVote(videoId);

//     const { isLoading, data, isError, error, isFetching, refetch } = useQuery("votes", addVote)
//  console.log(error)
// Parse the date string into a Date object
const date = new Date(videodetails.DateIn);

// Define options for formatting the date
const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',  hour12: true, timeZone: 'UTC' };

// Convert the date to a string in Arabic
const formattedDate = date.toLocaleString('ar-EG', options);
  return (
    <>
       <Head>
      {/* Add Facebook SDK script here */}
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=YOUR_APP_ID"
      ></script>
    </Head>
      {/* <Box bgColor='#fff' w='100%' h="130px" textAlign='center' position='relative' bgImage={`url(${videodetails?.Url})`}  bgRepeat="no-repeat" bgSize="cover" borderRadius="10px">
          
          <Text  as="span" position='absolute' top='calc( 50% - 15px )' left =' calc(50% - 15px )' p="3px 4px" bgColor="#fe7701" color="#fff" fontSize="30px" borderRadius="50%" >     <BsFillPlayFill /></Text>
      </Box>
      <Text color="#fff">{videodetails?.Title}</Text> */}
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
      {Liked ?<div className='vote-btn'onClick={()=>addVoteRedirect(videodetails.VideoId)}><AiFillHeart /></div> :<div className='vote-btn'onClick={()=>addVoteRedirect(videodetails.VideoId)}><AiOutlineHeart/></div>}
         </div>
          </div>}
      <div className='video-box'>
     
        <div className='rel'>
          <span className='play-icon' onClick={()=>{ !Msdn || Msdn=='NA' || Msdn==="000" || Msdn=='undefined' ?  router.push(`http://fikrwzikr.com/SignIn`) :setPlay(true)}}><BsPlay /></span>
          <video
        className="competetion-video"
           
            src={videodetails?.VideoUrl}
            poster={videodetails.PosterUrl ?videodetails.PosterUrl:"/images/menu-logo.png"}
        // controls="false"
        muted
        >
    
        <source  type="video/mp4" />
        Your bro
      </video>
      </div>
      <div className='video-info'>
      <span style={{cursor:"pointer", color:"#f16e00"}} onClick={()=>addVoteRedirect( videodetails.VideoId)}>{Liked? <AiFillHeart/>: <AiOutlineHeart /> }</span>{videodetails.VotesCount}
        
        {/* <span><BiShare /> </span>3k */}
        {/* <span><PiEyeBold /> </span>10k */}
      
      </div>
        <div className='userName'>{videodetails?.Title}</div>
        <div className='videoname'>{ videodetails?.Description}</div>
      {/* <div className='like-vid' onClick={()=>setLike(!like)} >{Liked? <AiFillHeart/>: <AiOutlineHeart /> }</div>
      <div className='share-vid' onClick={handleShareClick}><BiShare /></div> */}
      <div className='video-time'> <span><IoIosTimer /> </span> {formattedDate}</div>
      {/* <div className='vote' onClick={()=>addVote( {videoId: videodetails.VideoId, vote: true})}>تصويت</div> */}
      </div>
    </>
   
  )
}

export default Video