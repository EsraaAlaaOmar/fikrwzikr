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
 const [Msdn,setMsdn]=useState('')
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value && setMsdn(param1Value)
    
   

  }, []);
  
  return (
  
   
      <>

          <br style={{clear: "both"}}/>
      
          <div className='page-hierarchy'>
                <span className='parent'>
                <a href="https://ka2naktraho.com/Index" style={{color:"#000"}}>
                            الرئيسية 
                        </a>
                        
                    <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
                    </span>
                    <span className='parent'>
                <Link href="/Competition" style={{color:"#000"}}>
                           مسابقة رمضان 
                      </Link>
                        
                    <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
                    </span>
                    <span className='child'>فيديوهات المسابقة  </span>

                    <br />
      
    </div>
      <div className='video-links-div container'>
        
        <div className=" videos-page   video-links-div">
        <Link className='videos-link-div ' href={`/Competition?MSISDN=${Msdn}`}  style={{color:"#000"}} >
          <button className="my-videos-link active" >
      فيديوهات المسابقة
        </button>
        </Link>
        <Link className='videos-link-div' href={`/Myvideos?MSISDN=${Msdn}`} style={{color:"#000"}}>
          <button className="my-videos-link" >
       فيديوهاتي
        </button>
        </Link>
        <Link className='videos-link-div' href={`/AddVideo?MSISDN=${Msdn}`} style={{color:"#000"}}>
          <button className="my-videos-link" >
اضافة فيديو        </button>
        </Link>
              
           
        </div >
        </div>

<PaginationCom itemsPerPage={12} Msdn={Msdn}/>

    </>
  )
}

export default Competition