import React from 'react';
import Sidebar from "../../components/SideBar/index";
import Feed from "../../components/Feed/index";
import ProfileBar from "../../components/ProfileBar/index"
import { QUERY_POSTS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import "./home.css"

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
        <ProfileBar />
      </div>
    </>
  );
}

export default Home;