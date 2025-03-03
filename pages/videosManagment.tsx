import React ,{useState, useEffect}from 'react'
import VideoManagment from '../components/competitioncomponents/VideoManagment'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Pagination } from 'react-bootstrap';
import Loader from '../components/competitioncomponents/Loader';
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
const lvideosManagment = () => {
  const[currentPage,setCurrentPage]=useState(1)
  const [playerVideo, setPlayerVideo] = useState<VideoData >();
  const[showVideo,setShowVideo] = useState(false)
var pageSize=10;

  const fetchVideos = async () => {
    const response = await axios.post(
      `https://vf.alerting.services/fekrwzekrOrangeApis/Users/GetAllPendingVideos?Page=${currentPage}&PageSize=${pageSize}`,
      {},
      {
    
      }
    );
    return response.data.description;
   

  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ["pending", currentPage],
    fetchVideos)
    const arr = data&&JSON.parse(data);
    console.log(data)
    const ApproveorRejectVideo = async (VideoId:any,status:number) => {

      await axios.post(
        `https://vf.alerting.services/fekrwzekrApis/Users/ApproveorRejectVideo?VideoID=${VideoId}&Status=${status}
        `,
        {},
        {
      
        }
      );
      refetch()
    
    };
    const renderedvideo = data? arr.map((video: any) => {
      return <VideoManagment details={video} refetchVideos={refetch} setPlayerVideo={setPlayerVideo}  setShowVideo={setShowVideo} />
    }):<></>;
  return (
    <><h2 className="admin-title"> إدارة الفيديوهات</h2>
    
 {isLoading? <Loader /> :   
  arr?.length>0 ? <table className="admin-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>عنوان الفيديو</th>
      <th>وصف الفيديو</th>
      <th>التاريخ</th>
      <th>الاجراء</th>
    </tr>
  </thead>
  <tbody>
   {renderedvideo}
  </tbody>
</table> : <div className="text-center" style={{height:"200px"}}>لا يوجد فيديوهات</div>}



  
 
  {showVideo&&<div className="">
    <div id="player-box"  className="videoplayer">
      <div className="video-player-close" onClick={()=>setShowVideo(false)} >ⓧ</div>
        <video id ="videoplayer" width="100%" height="240"  controls>
          <source  src= {playerVideo?.VideoUrl} type="video/mp4"/>
      
          Your browser does not support the video tag.
  
          
        </video>
        <div className="videoplayer-description">
          <span id="videoplayer-description"> {playerVideo?.Title}</span>
          <button  className="video-decision" onClick={()=>ApproveorRejectVideo(playerVideo?.VideoId,2)} >
            رفض
         </button>
          <button  className="video-decision" onClick={()=>ApproveorRejectVideo(playerVideo?.VideoId,1)} >
            إضافة
          </button>
          
  
          <div >
          {playerVideo?.Description}
          </div> 
        
  
        </div>
        </div>
  </div>}
        <div className="pagination-butons">
        <Pagination>
        <li className="page-item" onClick={()=>{currentPage>1&&setCurrentPage(currentPage-1)}}><a className="page-link"   style={{color: '#000'}} >السابق</a></li>
        <li className="page-item"><a className="page-link" style={{color: '#000'}} >{currentPage }</a></li>
        <li className="page-item"  onClick={()=>arr?.length==pageSize&&setCurrentPage(currentPage+1)}><a className="page-link" style={{color: '#000'}} >التالي</a></li>
       </Pagination>
       </div>
        </>
  )
}

export default lvideosManagment