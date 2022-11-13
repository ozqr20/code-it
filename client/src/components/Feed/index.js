import "../Feed/feed.css";
import React from 'react';
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
//import Auth from '../utils/auth';
import { Card } from 'react-bootstrap'
import AddPost from "../../components/AddPost";
import DeleteComment from "../../components/DeleteComment";
import { QUERY_POSTS } from "../../utils/queries";
//import Posts from "../../components/Posts/index"

//dummy data?
//const loggedIn = Auth.loggedIn();

const Feed =({ posts })  => {


  const { _id } = useParams();
  const { data } = useQuery(QUERY_POSTS, {variables: { _id }});

  return (
    
    <div className="feed container gx-12">
      <div className="feedWrapper row">
        {/* {loggedIn && ( */}
        <AddPost />
      {/*  )} */}
        {/* {PostsDummy.map((p) => (
          <Posts key={p.id} posts={p} />
        ))} */}
      {posts && 
      posts.map(post => (
    <Card key={post._id} className="text-center">
      <Card.Header>
        <Link
          to={`/profile/${post.username}`}
          style={{ fontWeight: 750 }}
          className="cardHead"
          >
            {post.username}
          </Link>{' '}
      </Card.Header>
      <Card.Body>
        <Link to={`/post/${post._id}`}>
        <Card.Title>{post.enteredTitle}</Card.Title>
        <Card.Text>
          {post.enteredText}
        </Card.Text>
        </Link>
        
        
        <DeleteComment _id={data.posts._id} 
        />
      </Card.Body>
      <Card.Footer className="cardFooter">
        <div>Comments: {post.commentCount} || Click to{' '}
        {post.commentCount ? 'Add' : 'Start'} comments.</div>
       <div>{post.createdAt}</div></Card.Footer>
    </Card>
  
  ))
  };
      </div>
    </div>
  );
}

export default Feed;