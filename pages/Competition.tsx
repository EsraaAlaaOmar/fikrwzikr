import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Video from '../components/competitioncomponents/Video'

import Link from 'next/link'
import Image from 'next/image'
import Loader from '../components/competitioncomponents/Loader';
import PaginationCom from '../components/reusable components/PaginationComp';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
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

     
          <br style={{clear: "both"}}/>
      
          <div className='page-hierarchy'>
                <span className='parent'>
                        <Link href='/' style={{color:"#000"}}>
                            الرئيسية 
                        </Link>
                        
                    <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
                    </span>
                    <span className='child'>مسابقة رمضان </span>

                    <br />
      
    </div>
        <Link className='my-videos-link-div' href='/Myvideos' style={{color:"#000"}}>
          <button className="my-videos-link" >
       فديوهاتي
        </button>
        </Link>
          <div className='videos-grid '>
      
              {/* {renderedVideos} */}
           
        </div >
   

<PaginationCom itemsPerPage={12}/>

    </>
  )
}

export default Competition