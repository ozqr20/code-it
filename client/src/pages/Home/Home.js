import React from 'react';
import Sidebar from "../../components/SideBar/index";
import Feed from "../../components/Feed/index";
import ProfileBar from "../../components/ProfileBar/index"
import { QUERY_POSTS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import "./home.css"
import TopComCard from '../../components/TopComCard';
import { Stack } from 'react-bootstrap';

 const Home = () => {
  const { data } = useQuery(QUERY_POSTS);
  // const { data: userData } = useQuery(QUERY_ME);
  const posts = data?.posts || [];
  return (
    <>
      
      <div className="homeContainer">
        <Sidebar />
        <Feed
        posts={posts}
        />
        <Stack direction="vertical">
        <ProfileBar />
        <TopComCard/>
        </Stack>
      </div>
    </>
  );
}

export default Home;