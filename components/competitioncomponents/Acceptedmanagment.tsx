import axios from 'axios';
import React, { Dispatch, SetStateAction } from 'react'
interface VideoData {    
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
    UserId:string
  }
  interface VideoProps {
    details: VideoData;
    refetchVideos:any // Define the type of refetchVideos prop
    setPlayerVideo: Dispatch<SetStateAction<VideoData | undefined>>;// This is expecting an object
    setShowVideo: (arg0: boolean) => void;
  }
  
  const VideoManagment: React.FC<VideoProps> =({details, setPlayerVideo,setShowVideo,refetchVideos})=>{

    const DeleteVideo = async (VideoId:number) => {

        await axios.post(
          
          `https://vf.alerting.services/fekrwzekrOrangeApis/Users/DeleteVideo?VideoId=${VideoId}
          `,
          {},
          {
        
          }
        );
        refetchVideos()
      };
  return (
    <tr>
    <td>{details.UserId}</td>
    <td  className="td-describtion" onClick={()=>{setPlayerVideo(details); setShowVideo(true);}} >{details.Title} ▶</td>
    <td >{details.Description}</td>
    <td>{details.VotesCount}</td>
    <td>{details.DateIn}</td>
    <td><button onClick={()=>DeleteVideo(details.VideoId)}  >حذف</button> </td>
  </tr>
  )
}

export default VideoManagment