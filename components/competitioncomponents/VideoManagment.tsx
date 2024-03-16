import React from 'react'
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
 
  }
  
  const VideoManagment: React.FC<VideoProps> =({details})=>{

  return (
    <tr>
    <td>{details.UserId}</td>
    <td>{details.Title} ▶</td>
    <td className="td-describtion">{details.Description}</td>
    <td>{details.DateIn}</td>
    <td><button>اضافة</button> <button>رفض</button></td>
  </tr>
  )
}

export default VideoManagment