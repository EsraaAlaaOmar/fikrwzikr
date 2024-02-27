import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Video from '../components/competitioncomponents/Video'

import Link from 'next/link'
import Image from 'next/image'
import Loader from '../components/competitioncomponents/Loader';
import PaginationCom from '../components/reusable components/PaginationComp';

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
  Votes:[]
}

const Competition = () => {


  
  return (
  
   
      <>
  
      <Link href='/AllVideos' className="section-title">
          فديوهات المواهب
          </Link>
          <Link href='/AllVideos' className="section-page">
            عرض الكل 
          </Link>
          <br style={{clear: "both"}}/>
          <div className='videos-grid container'>
              {/* {renderedVideos} */}
           
        </div >
          
      
    

<PaginationCom itemsPerPage={12}/>
        
    </>
  )
}

export default Competition