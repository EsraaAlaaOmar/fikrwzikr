import React,{useState,useRef, ReactNode, useEffect} from 'react'
import Link from 'next/link'
import { useMutation, useQuery  } from 'react-query';
import Loader from '../components/competitioncomponents/Loader';
import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import CompetitonTerms from '../components/competitioncomponents/competitonTerms';

const axios = require("axios");


const AddVideoComp=()=>{


  const [Msdn,setMsdn]=useState('')
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value && setMsdn(param1Value)
    
   

  }, []);

  const router = useRouter();
  const [formData, setFormData] = useState(
    {
      Title: '',
      Description: '',
      MobileNumber: Msdn,
      videoFile:null ,
      posterFile:null,
      
    }
  )
  const [showvideo, setShowVideo] = useState(false)
  // important
  // const upload_msg = document.getElementById('upload-msg')
  // if(upload_msg){upload_msg.style.display='block'}


  const { Title, Description, MobileNumber, videoFile,posterFile } = formData;
  const onChange = (e: any) => {
 
    if (e.target.name === 'videoFile'&&e.target.files&& e.target.files.length > 0) {
      // Set the videoFile property to the selected file
      
    
       const file = e.target.files[0];
  const video = document.createElement('video');
  video.preload = 'metadata';
  video.onloadedmetadata = () => {
    window.URL.revokeObjectURL(video.src);
    if (video.duration > 60) {
      // Alert the user that the video duration exceeds the limit
      alert('عفوا .. لا يجب ان تتجاوز مدة الفيديو 1دقيقة (60 ثانية)');
      setFormData({ ...formData, videoFile:null});
      setShowVideo(false);
      e.target.value = '';
    } else {
      // Proceed with uploading the video
      setFormData({ ...formData, videoFile: e.target.files[0] });
    }
  };
  video.src = URL.createObjectURL(file);


    } 
    else if ( e.target.name === 'posterFile'&&e.target.files&&e.target.files.length > 0) {
      // Set the videoFile property to the selected file
      
      setFormData({ ...formData, posterFile: e.target.files[0] });
      
    } 
    else {
      // For other input fields (e.g., Title, Description, MobileNumber), update accordingly
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  //start reqdata
  const reqdata = new FormData();
  reqdata.append("Title", formData.Title);
  reqdata.append("Description", formData.Description);
  reqdata.append("MobileNumber", Msdn);
  if (formData.videoFile !== null) {
    reqdata.append("videoFile", formData.videoFile);
  }
  
  // Check if posterFile is not null before appending
  if (formData.posterFile !== null) {
    reqdata.append("posterFile", formData.posterFile);
  }
 //end reqdata

  const addVideoMutation = useMutation(
      () =>
        axios.post('https://vf.alerting.services/fekrwzekrApis/Users/Addvideo', reqdata, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }),
    {
      onSuccess: () => {

        router.push(`/Myvideos?MSISDN=${Msdn}&title=${formData?.Title}`);
      },
      onError: (error) => {
        
        console.error('Error adding video:', error);
        // Handle error
      },
    }
  );
  const addVideo = async (event:any) => {
    
    console.log('submit')
    event.preventDefault(); 

      addVideoMutation.mutate()
  

     
    }
 
 
 
  function video(e:any) {
    setShowVideo(true)
 onChange(e)
  
 
    }
    var srcComp=(): ReactNode=>{  if (formData.videoFile) { 
      var fileUrl = URL.createObjectURL(formData.videoFile);
     
      // Render the <source> element with the created object URL
      return (
        <source id='source' src={fileUrl} type="video/mp4" />
      )}
    else{
      return<></>
    }
    }
    
    function buttonClick(){
   
      const video_input =   document.getElementById('video_input')
      video_input&&video_input.click()
    
    }

    function publish(){
      const upload_msg = document.getElementById('upload-msg')
      if(upload_msg){upload_msg.style.display='block'}
      
  }
  
 
  const fetchVideos = async () => {
    const response = await axios.post(
      `https://vf.alerting.services/fekrwzekrApis/Users/GetMyVdeos?MobileNumber=${Msdn}`,
      {},
      {
    
      }
    );
    return response.data;
  };

  const queryKey = Msdn ? ["myvideos", Msdn] : ["myvideos"];
  const {  data } = useQuery(
    queryKey,
    fetchVideos)

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
                           المسابقة 
                      </Link>
                        
                    <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
                    </span>
                    <span className='child'>اضافة فيديو </span>

                    <br />
      
    </div>
             <div className='video-links-div container'>
        
        <div className=" videos-page   video-links-div">
        <Link className='videos-link-div ' href={`/Competition?MSISDN=${Msdn}`} style={{color:"#000"}} >
          <button className="my-videos-link " >
      فيديوهات المسابقة
        </button>
        </Link>
        <Link className='videos-link-div' href={`/Myvideos?MSISDN=${Msdn}`} style={{color:"#000"}}>
          <button className="my-videos-link" >
       فيديوهاتي
        </button>
        </Link>
        <Link className='videos-link-div ' href={`/AddVideo?MSISDN=${Msdn}`}style={{color:"#000"}} >
          <button className="my-videos-link active" >
اضافة فيديو        </button> 
        </Link>
              
           
        </div >
        </div>
       {data?.length>= 10 ?<div className="videos-limit">عفوا لقد تجاوزت العدد المسموح به للمستخدم الواحد وهو 10 فيديوهات</div>:
        <form onSubmit={(e) => addVideo(e)} className='container'>
        {addVideoMutation.isLoading &&<div className="overlay"><div className="overlay-text">   <img  alt='loading'  src="/images/Rolling-2.gif"/> </div> </div>}
        <div className='right-section'>
            <div className='page-title'>
               <div className="upload-video-input">
          <label className="upload-video-label" >عنوان الفيديو </label>
              <input required className="upload-video-textarea"  placeholder="أدخل عنوان الفيديو " maxLength={25} name='Title' value={Title} onChange={e=>onChange(e)} />
      </div>
      <div className="upload-video-input">
          <label className="upload-video-label">اسم المشترك باللغة العربية  (ثلاثي)</label>
          <input required className="upload-video-textarea" placeholder="أدخل اسم المشترك " maxLength={35} name='Description' value={Description} onChange={e=>onChange(e)} />
      </div>
      <div className="upload-video-input">
          <label className="upload-video-label" style={{fontSize:"14px"}}>غلاف الفيديو(اختياري) </label>
          <input type='file'  className="" placeholder="أدخل غلاف الفيديو " name='posterFile'  onChange={e=>onChange(e)} style={{fontSize:"14px"}} />
      </div>
            </div>
         <div id="uploaded-data">
            
          
       
 

           
<div id="upload-msg">
  شكرا لك .. سيتم مراجعة الفيديو قبل النشر 
 
            </div>
            
        </div>
        </div>
        <div className='left-section'>
       { showvideo && <video width="320" height="240" style={{margin:'auto'}} autoPlay controls>
            {srcComp()}
          
              Your browser does not support the video tag.
            </video>}
          <input required id='video_input' type="file" accept="video/*" name='videoFile'onChange={(e)=>video(e)}  />
          {!showvideo&&  <button id="choose-to-upload" className="video-upload-button" onClick={() => buttonClick()}>اضافة فيديو + </button> }
       { showvideo&&    <div className="actions">
         <button type='submit' className="video-action-upload-button" > نشر الفيديو  </button> 
         <button className="video-action-upload-button video-upload-delete" onClick={()=>{setShowVideo(false); setFormData({ ...formData, videoFile:null}); }}> حذف الفيديو</button>
    
            </div>}
          </div>

       
        </form>
}
      </div>
  )
}

export default AddVideoComp
