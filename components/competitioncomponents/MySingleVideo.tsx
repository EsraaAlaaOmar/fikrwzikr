import React from 'react'
const axios = require("axios");
import { useQuery } from 'react-query';
interface VideoData {
  // Define the properties of the video data you are expecting
  // id: number;
  // title: string;
  // Url: string;
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


interface MySingleVideoProps{
  videoDetails: VideoData | any
  useDeleteItem: (vidId:string) => any;
}

const MySingleVideo: React.FC<MySingleVideoProps> = ({ videoDetails, useDeleteItem }) =>{
  const vidId = videoDetails?.VideoId
  const { mutate } = useDeleteItem(vidId);
  const deleteVideo = async () => {
  
    

  mutate(vidId)
  // try {
  //      const vidId = videoDetails?.VideoId
  //     const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/DeleteVideo?VideoId=${vidId}`,{},{ headers: {
  //       "Api_Key": "elinxfthr62023",
  //       'content-type': 'text/json'
  //     }});
    
  //     if (response.status === 200) {
  //       // Handle successful upload
  //       console.log(response)
  //       return response.data
  //       // setData(response)
  //     } else {
  //       // Handle upload error
  //     }
  //   } catch (error) {
  //     // Handle network error or any other error
  //   }

};
const { isLoading, data, isError, error, isFetching, refetch } = useQuery("videos")
console.log(data)


  return (
    <div className="col-md-4">
          <div className="upload-msg text-success">
          تم نشر هذا الفيديو 
         
         </div>
       
         
        <video width="320" height="240" src={videoDetails?.Url} autoPlay controls>
          <source id='source' src={videoDetails?.Url} type="video/mp4" />
      {videoDetails?.Url}
           Your browser does not support the video tag.

           
        </video>
        <div className="video-describtion">
        {videoDetails?.Title}
         </div>
    <div className="actions">
       
        <button className="video-action-upload-button video-upload-delete" onClick={()=>deleteVideo()}> حذف الفيديو</button>
    </div>
      </div>
  )
}

export default MySingleVideo