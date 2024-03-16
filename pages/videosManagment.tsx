import React ,{useState, useEffect}from 'react'
import VideoManagment from '../components/competitioncomponents/VideoManagment'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Pagination } from 'react-bootstrap';
import Loader from '../components/competitioncomponents/Loader';
const lvideosManagment = () => {
  const[currentPage,setCurrentPage]=useState(1)

var pageSize=10;

  const fetchVideos = async () => {
    const response = await axios.post(
      `https://vf.alerting.services/fekrwzekrApis/Users/GetAllPendingVideos?Page=${currentPage}&PageSize=${pageSize}`,
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
    const renderedvideo = data? arr.map((video: any) => {
      return <VideoManagment details={video} refetchVideos={refetch}  />
    }):<></>;
  return (
    <><h2 className="admin-title"> إدارة الفيديوهات</h2>
    
 {isLoading? <Loader /> :   
  arr?.length>0 ? <table className="admin-table">
  <thead>
    <tr>
      <th></th>
      <th>عنوان الفديو</th>
      <th>وصف الفيديو</th>
      <th>التاريخ</th>
      <th>الاجراء</th>
    </tr>
  </thead>
  <tbody>
   {renderedvideo}
  </tbody>
</table> : <div className="text-center" style={{height:"200px"}}>لا يوجد فيديوهات</div>}



  
 
  <div className="overlay">
    <div id="player-box"  className="videoplayer">
      <div className="video-player-close" >ⓧ</div>
        <video id ="videoplayer" width="100%" height="240"  controls>
          <source  src="movie.mp4" type="video/mp4"/>
      
          Your browser does not support the video tag.
  
          
        </video>
        <div className="videoplayer-description">
          <span id="videoplayer-description"> ما تيسر  من سورة البقرة </span>
          <button  className="video-decision" >
            رفض
         </button>
          <button  className="video-decision" >
            إضافة
          </button>
          
  
          <div >
           01234123567
          </div> 
        
  
        </div>
        </div>
        </div>
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