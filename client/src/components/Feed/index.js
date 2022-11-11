import "../Feed/feed.css";
import React from 'react';
//import Auth from '../utils/auth';
import AddPost from "../../components/AddPost";
//import Posts from "../../components/Posts/index"

//dummy data?
//const loggedIn = Auth.loggedIn();

function Feed() {
  return (
    <div className="feed container gx-12">
      <div className="feedWrapper row">
      {/* {loggedIn && ( */}
        <AddPost />
      {/*  )} */}
        {/* {PostsDummy.map((p) => (
          <Posts key={p.id} posts={p} />
        ))} */}
      </div>
    </div>
  );
}

export default Feed;