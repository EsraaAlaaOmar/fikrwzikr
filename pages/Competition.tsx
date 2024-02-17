import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Video from '../components/competitioncomponents/Video'

import Link from 'next/link'
import Image from 'next/image'
import Loader from '../components/competitioncomponents/Loader';

interface VideoData {
  // Define the properties of the video data you are expecting
  // id: number;
  // title: string;
  // url: string;
  // Add other properties as needed
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

const Competition = () => {
  // const [data, setData] = useState<VideoData[] | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
  
    const response = await axios.get('https://vf.alerting.services/fekrwzekrApis/Users/GetAllVideos?Page=1&PageSize=8', {
      headers: {

      
        'content-type': 'text/json'
      }});
      return response.data;
 
    
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("videos", fetchData)
  
 
  
  // useEffect(() => {
  //   // fetchData();

  //   console.log(data)
  //   console.log('esraa')
  // }, []);
 
  const renderedVideos = data?.slice(0, 3)?.map((video:VideoData) => {
    return<span key={video.VideoId}>   <Video videodetails={video} /></span>
  })
  return (
    <>
    {isLoading ? <Loader />:
      <>
       
      <Link href='/AllVideos' className="section-title">
          فديوهات المواهب
          </Link>
          <Link href='/AllVideos' className="section-page">
            عرض الكل 
          </Link>
          <br style={{clear: "both"}}/>
          <div className='videos-grid container'>
              {renderedVideos}
           
        </div >
          
      </>}
    


        
    </>
  )
}

export default Competition