import React,{useState,useRef} from 'react'
import Link from 'next/link'
import { useMutation  } from 'react-query';
import Loader from '../components/competitioncomponents/Loader';
import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import CompetitonTerms from '../components/competitioncomponents/CompetitonTerms';
const axios = require("axios");


const AddVideoComp=()=>{




  const router = useRouter();
  const [formData, setFormData] = useState(
    {
      Title: '',
      Description: '',
      MobileNumber: '01126214650',
      videoFile: '',
      posterFile:"",
      
    }
  )
  const [showvideo, setShowVideo] = useState(false)
  // important
  // const upload_msg = document.getElementById('upload-msg')
  // if(upload_msg){upload_msg.style.display='block'}


  const { Title, Description, MobileNumber, videoFile,posterFile } = formData;
  const onChange = (e: any) => {
 
    if (e.target.name === 'videoFile') {
      // Set the videoFile property to the selected file
      
      setFormData({ ...formData, videoFile: e.target.files[0] });

    } 
    else if ( e.target.name === 'posterFile') {
      // Set the videoFile property to the selected file
      
      setFormData({ ...formData, posterFile: e.target.files[0] });
      
    } 
    else {
      // For other input fields (e.g., Title, Description, MobileNumber), update accordingly
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  
  const addVideo = async (event:any) => {
    
    console.log('submit')
    event.preventDefault(); 

      
      const reqdata = new FormData();
      reqdata.append("Title", formData.Title);
      reqdata.append("Description", formData.Description);
      reqdata.append("MobileNumber", formData.MobileNumber);
      reqdata.append("videoFile", formData.videoFile);
      reqdata.append("posterFile", formData.posterFile);
      
      // try {
      //   const response = await fetch("https://vodafone.alerting.services/LawMawhobApis/Talents/Addvideo", {
      //     method: "POST",
      //     body: formData,
      //   });
  
      //   if (response.ok) {
      //     // Handle successful upload
      //   } else {
      //     // Handle upload error
      //   }
      // } catch (error) {
      //   // Handle network error
      // }
     
  console.log(formData)
      try {
        const response = await axios.post("https://vf.alerting.services/fekrwzekrApis/Users/Addvideo", reqdata,{ headers: {
     
          'content-type': 'text/json'
        }});
      
        if (response.status === 200) {
       
            router.push('/myvideos');
       
        } else {
          // Handle upload error
        }
      } catch (error) {
        // Handle network error or any other error
      }
     
    }
 
  const mutation = useMutation(addVideo)
  console.log(mutation)
  function video(e:any) {
    setShowVideo(true)
      var fileInput = document.getElementById('video_input') as any;
     var fileUrl = URL.createObjectURL(fileInput?.files[0]);
     const videoselector = document.querySelector("video")
     if(videoselector){videoselector.src = fileUrl}
      const uploaded_data = document.getElementById('uploaded-data')
      if(uploaded_data){uploaded_data.style.display='block'}
      const choose_to_upload =   document.getElementById('choose-to-upload')
      if(choose_to_upload){choose_to_upload.style.display='none'}

 onChange(e)
  
 
    }


    function buttonClick(){
   
      const video_input =   document.getElementById('video_input')
      if(video_input){video_input.click()}
    
    }

    function publish(){
      const upload_msg = document.getElementById('upload-msg')
      if(upload_msg){upload_msg.style.display='block'}
      
  }
  
 



  return (
        <div className="white-background upload-white-bg">
             <CompetitonTerms />     
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
                    <span className='child'>اضافة فيديو </span>

                    <br />
      
    </div>
             <div className='video-links-div container'>
        
        <div className=" videos-page   video-links-div">
        <Link className='videos-link-div ' href='' style={{color:"#000"}} >
          <button className="my-videos-link " >
      فيديوهات المسابقة
        </button>
        </Link>
        <Link className='videos-link-div' href='/Myvideos' style={{color:"#000"}}>
          <button className="my-videos-link" >
       فيديوهاتي
        </button>
        </Link>
        <Link className='videos-link-div ' href='/AddVideo' style={{color:"#000"}}>
          <button className="my-videos-link active" >
اضافة فيديو        </button>
        </Link>
              
           
        </div >
        </div>
        <form onSubmit={(e) => addVideo(e)} className='container'>
        <div className='right-section'>
            <div className='page-title'>
               <div className="upload-video-input">
          <label className="upload-video-label" >عنوان الفيديو </label>
              <input className="upload-video-textarea"  placeholder="أدخل عنوان الفيديو " name='Title' value={Title} onChange={e=>onChange(e)} />
      </div>
      <div className="upload-video-input">
          <label className="upload-video-label">وصف الفيديو </label>
          <textarea  className="upload-video-textarea" placeholder="أدخل وصف الفيديو " name='Description' value={Description} onChange={e=>onChange(e)} ></textarea>
      </div>
      <div className="upload-video-input">
          <label className="upload-video-label" style={{fontSize:"14px"}}>غلاف الفيديو(اختياري) </label>
          <input type='file'  className="" placeholder="أدخل غلاف الفيديو " name='posterFile'  onChange={e=>onChange(e)} style={{fontSize:"14px"}} />
      </div>
            </div>
          {mutation.isLoading ? <Loader /> : <div id="uploaded-data">
            
          
       
 

           
<div id="upload-msg">
  شكرا لك .. سيتم مراجعة الفيديو قبل النشر 
 
            </div>
            
        </div>}
        </div>
        <div className='left-section'>
       { showvideo && <video width="320" height="240" style={{margin:'auto'}} autoPlay controls>
              <source id='source' src="movie.mp4" type="video/mp4" />
          
              Your browser does not support the video tag.
            </video>}
          <input id='video_input' type="file" accept="video/*" onChange={(e)=>video(e)} name='videoFile'  />
          {!showvideo&&  <button id="choose-to-upload" className="video-upload-button" onClick={() => buttonClick()}>اضافة فيديو + </button> }
       { showvideo&&    <div className="actions">
         <button type='submit' className="video-action-upload-button" > نشر الفيديو  </button> 
         <button className="video-action-upload-button video-upload-delete" onClick={()=>setShowVideo(false)}> حذف الفيديو</button>
    
            </div>}
          </div>

       
        </form>
      </div>
  )
}

export default AddVideoComp