import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import Loader from '../competitioncomponents/Loader';
import Video from '../competitioncomponents/Video';
import { Pagination } from 'react-bootstrap';

interface VideoData {
  // Define the properties of the video data you are expecting
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
}
interface Props {
   itemsPerPage: number;
   Msdn:string;
   userId:string;
   }
   const MyComponent: React.FC<Props> = ({itemsPerPage,Msdn,userId}) => {
  // const itemsPerPage = itemsPerPage; // Number of items to display per page
  const [uprefetch, setUPRfetch] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async (page: number) => {

    const response = await axios.get(`https://vf.alerting.services/fekrwzekrApis/Users/GetAllVideosV3?Page=${page + 1}&PageSize=${itemsPerPage}`, {
      headers: {
        'content-type': 'text/json'
      }
    });
    return response.data;
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(["videosV3", currentPage,], () => fetchData(currentPage), {
    keepPreviousData: true, // Keep previous data while fetching new data
    staleTime: 0,
    
  });
 



  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    
  };
  console.log(currentPage);
  const renderedVideos = data?.map((video: VideoData) => {
    console.log( video.UsersVotes)
    return<span key={video.VideoId}>  <Video videodetails={video} refetchVideos={refetch} Msdn={Msdn} userId={userId}/></span>
});

const scrolToTop=()=>{
      // Assuming you have a reference to the pagination element
const paginationElement = document.getElementById('pagination');

// Scroll to the pagination element
paginationElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });

}
  return (
    <div >
      <h3 className='comp-name' style={{textAlign:"center"}}>لا توجد مسابقة حاليا </h3>
    <h3 className='comp-name'>مسابقة شهر  سبتمبر</h3>
      {isLoading ? <Loader /> : (
       data?.length>0 ? <>
         <div className='videos-grid container' >   {renderedVideos}</div>
        <div className="pagination-butons">
        <Pagination>
        <li className="page-item" onClick={()=>{currentPage>0&&setCurrentPage(currentPage-1);scrolToTop()}}><a className="page-link"   style={{color: '#000'}} >السابق</a></li>
        <li className="page-item"><a className="page-link" style={{color: '#000'}} >{currentPage + 1}</a></li>
        <li className="page-item"  onClick={()=> {  data.length==itemsPerPage &&setCurrentPage(currentPage+1);scrolToTop()}}><a className="page-link" style={{color: '#000'}} >التالي</a></li>
       </Pagination>
        </div> 
       
        </>
         : <div className="text-center" style={{height:"200px"}}>لا يوجد فيديوهات</div>
      )}
    </div>
  );
};

export default MyComponent;