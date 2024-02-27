import React, { useState,useEffect, useRef} from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io'
import {BsPlay } from 'react-icons/bs'
import { BiShare } from 'react-icons/bi'
import { IoIosTimer } from 'react-icons/io'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useOnClickOutside } from 'usehooks-ts'
import Head from 'next/head';
import axios from 'axios';
import { useQuery } from 'react-query';
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

// { videodetails }: { videodetails: VideoData } in()
const Video = ({ videodetails }: { videodetails: VideoData }) => {
  const [play, setPlay] = useState(false)
  const [like, setLike] = useState(false)
  
  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    setPlay(false)
    
  }

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(ref, handleClickOutside)
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
  // const addVote = async (event: any) => {
  //   console.log('vote');
  //   event.preventDefault();
  
  //   try {
  //     const response = await axios.post(
  //       `https://vf.alerting.services/fekrwzekrApis/Users/AddVote?VideoId=${12}&Vote=${true}`,
  //       null, // Since there's no request body, pass null or an empty object
  //       {
  //         headers: {
  //           'Content-Type': 'application/json' // Correcting content type
  //         }
  //       }
  //     );
  
  //     if (response.status === 200) {
  //       // Success handling
  //       // router.push('/myvideos');
  //     } else {
  //       // Handle error when status code is not 200
  //     }
  //   } catch (error) {
  //     // Handle network error or any other error
  //   }
  // };

  const addVote = async ({ videoId, vote }: { videoId: number, vote: boolean }) => {
    console.log(videoId,vote)
    try {
      const response = await axios.post(
        `https://vf.alerting.services/fekrwzekrApis/Users/AddVote?VideoId=${1}&MobileNumber=01126214650&Vote=${true}`,
        {
          headers: {
         'content-type': 'text/json'
          }
        }
      );
  
      return response.data; // Return the response data
    } catch (error) {
      throw new Error('Error adding vote'); // Throw error to be caught by React Query
      console.log(error)
    }
  };

  var Liked = videodetails?.UsersVotes.find(vote=>vote?.UserId === 3)
  
//     const { isLoading, data, isError, error, isFetching, refetch } = useQuery("votes", addVote)
//  console.log(error)
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
           
        <div className='details'>
       
      {videodetails?.Title}
        </div>
          <video
           ref={ref}
           onClick={handleClickInside}
           src={videodetails?.VideoUrl}
             controls
          autoPlay
          >
      
          <source  type="video/mp4" />
          Your bro
        </video>
          </div>}
      <div className='video-box'>
     
        <div className='rel'>
          <span className='play-icon' onClick={()=>setPlay(true)}><BsPlay /></span>
          <video
        className="competetion-video"
           
            src={videodetails?.VideoUrl}
            poster={videodetails.PosterUrl ?videodetails.PosterUrl:"https://i.ytimg.com/vi/-Yv1w-iVCJk/maxresdefault.jpg"}
        // controls="false"
        muted
        >
    
        <source  type="video/mp4" />
        Your bro
      </video>
      </div>
      <div className='video-info'>
      <span>{<AiOutlineHeart />}</span>{videodetails.VotesCount}
        
        <span><BiShare /> </span>3k
        <span><IoIosPeople /> </span>10k
      
      </div>
        <div className='userName'>{videodetails?.Title}</div>
        <div className='videoname'>{ videodetails?.Description}</div>
      <div className='like-vid' onClick={()=>setLike(!like)} >{Liked? <AiFillHeart/>: <AiOutlineHeart /> }</div>
      <div className='share-vid' onClick={handleShareClick}><BiShare /></div>
      <div className='video-time'> <span><IoIosTimer /></span>{videodetails?.DateIn}</div>
      <div className='vote' onClick={()=>addVote( {videoId: videodetails.VideoId, vote: true})}>تصويت</div>
      </div>
    </>
   
  )
}

export default Video