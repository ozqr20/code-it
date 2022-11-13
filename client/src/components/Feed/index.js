import "../Feed/feed.css";
import React from 'react';
import { Link } from "react-router-dom";
//import Auth from '../utils/auth';
import { Card, Button } from 'react-bootstrap'
import AddPost from "../../components/AddPost";
import DeletePost from "../../components/DeleteComment";
//import Posts from "../../components/Posts/index"

//dummy data?
//const loggedIn = Auth.loggedIn();

const Feed =({ posts })  => {

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
        
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="cardFooter">
        <div>Comments: {post.commentCount} || Click to{' '}
        {post.commentCount ? 'Add' : 'Start'} comments.</div>
       <div> Posted {post.createdAt}</div></Card.Footer>
    </Card>
  
  ))
  };
      </div>
    </div>
  );
}

export default Feed;