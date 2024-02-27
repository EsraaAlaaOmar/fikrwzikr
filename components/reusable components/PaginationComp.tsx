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
   }
   const MyComponent: React.FC<Props> = ({itemsPerPage}) => {
  // const itemsPerPage = itemsPerPage; // Number of items to display per page
  const [pageNum, setPageNum] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async (page: number) => {
    const response = await axios.get(`https://vf.alerting.services/fekrwzekrApis/Users/GetAllVideos?Page=${page + 1}&PageSize=${itemsPerPage}`, {
      headers: {
        'content-type': 'text/json'
      }
    });
    return response.data;
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(["videos", currentPage], () => fetchData(currentPage), {
    keepPreviousData: true, // Keep previous data while fetching new data
    staleTime: 0,
  });

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    
  };
  console.log(currentPage);
  const renderedVideos = data?.map((video: VideoData) => {
    console.log( video.UsersVotes)
    return<span key={video.VideoId}>  <Video videodetails={video} /></span>
});


  return (
    <div>
      {isLoading ? <Loader /> : (
        <>
         <div className='videos-grid container'>   {renderedVideos}</div>
        {/* <div className='paginate-component'>  <ReactPaginate
            pageCount={data?.length / itemsPerPage} // Calculate pageCount based on fetched data
            pageRangeDisplayed={5} // Adjust as needed
            marginPagesDisplayed={2} // Adjust as needed
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div> */}
        <div className="pagination-butons">
          
           <span  onClick={()=>setCurrentPage(currentPage-1)}>prev</span> 
           page{currentPage + 1}
           <span onClick={()=>setCurrentPage(currentPage+1)}>next</span>
        </div>

        </>
      )}
    </div>
  );
};

export default MyComponent;