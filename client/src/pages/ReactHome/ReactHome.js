import React from 'react';
import Sidebar from "../../components/SideBar/index";
import ReactFeed from "../../components/Sub/ReactSub/ReactFeed";
// import { QUERY_REACT_POSTS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import "./reacthome.css"
import ReactComCard from '../../components/Sub/ReactSub/ReactComCard/index';
import { Stack } from 'react-bootstrap';

 const Home = () => {
//   const { data } = useQuery(QUERY_REACT_POSTS);
  // const { data: userData } = useQuery(QUERY_ME);
//   const reactposts = data?.reactposts || [];
  return (
    <>
      
      <div className="reactContainer">
        <Sidebar />
        {/* <ReactFeed
        reactposts={reactposts}
        /> */}
        <Stack direction="vertical">
        
        <ReactComCard/>
        </Stack>
      </div>
    </>
  );
}

export default Home;