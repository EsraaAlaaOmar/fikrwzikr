import axios from 'axios';
import React, { useState } from 'react'
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

  interface VideoCompetitionProps {
    // playVideoo: React.Dispatch<React.SetStateAction<boolean>>;
    playVideoo: (videosrc:string, describtion:string, votes:number, videoId:number)=>any;
    videodetails:VideoData
    addVote:(VideoId:number,MSISDN:string)=>{}
    }
    const VideoCompetition: React.FC<VideoCompetitionProps> = ({ playVideoo, videodetails }) => {

  
    
    const [vote, setVote] = useState<boolean>(false);
    
      const MSISDN = "MSISDN";
      const VideoId= videodetails.VideoId;
      const addVote = async () => {
        setVote(true)
       
        try {
          const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/AddVote?VideoId=${VideoId}&MSISDN=${MSISDN}`, {}, {
            headers: {
              "Api_Key": "elinxfthr62023",
              'content-type': 'text/json'
            }
          });
        
          if (response.status === 200) {
            return response
            // Handle successful upload
          } else {
            // Handle upload error
          }
        } catch (error) {
          // Handle network error or any other error
        }
      }
    
    const removeVote = async (id:number) => {
      setVote(false)
      try {
        const response = await axios.post(`https://vodafone.alerting.services/LawMawhobApis/Talents/DeleteVote?VoteId=${id}`, {}, {
          headers: {
            "Api_Key": "elinxfthr62023",
            'content-type': 'text/json'
          }
        });
      
        if (response.status === 200) {
          return response
          // Handle successful upload
        } else {
          // Handle upload error
        }
      } catch (error) {
        // Handle network error or any other error
      }
      }
    
      // function playVideo(videosrc:string, describtion:string, votes:number) {
      //     console.log('play video')
      //     playVideoo(true)
      // }
    console.log(videodetails)
  return (
    <div className="col-md-4">
    <video
      className="competetion-video"
      width="320"
      height="240"
      // controls="false"
      muted
      onClick={() => playVideoo(videodetails?.Url, videodetails?.Title, videodetails?.Votes?.length, videodetails?.VideoId )}
    >
      <source src={videodetails?.Url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-describtion">{videodetails?.Title}  </div>
    <div className="actions">
              {vote ?
                    <button
                    
                    className="like-video remove-vote"
                    onClick={() => removeVote(8)}
                >
                    ❤️ <br /> إلغاء التصويت{" "}
                </button>
                  :
                  
                  <button
                  
                  className="like-video"
                  onClick={ addVote}
              >
                  ♡
                  <br /> اضغط للتصويت{" "}
              </button>
                  
                 }
      <button
        className="like-video"
        onClick={() => playVideoo(videodetails?.Url, videodetails?.Title, videodetails?.Votes?.length , videodetails?.VideoId)}
      >
        {" "}
        ▶<br />
        مشاهدة
      </button>
    </div>
  </div>
  )
}

export default VideoCompetition