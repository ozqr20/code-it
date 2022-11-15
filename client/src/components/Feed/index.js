import "../Feed/feed.css";
import React from 'react';
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
//import Auth from '../utils/auth';
import AddPost from "../../components/AddPost";
import DeletePost from "../../components/DeletePost";
import { QUERY_POSTS } from "../../utils/queries";
import { Card, Stack, Col, Row, Dropdown, Container } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';
import Bot from '../../assets/images/bot.png'
import VoteBar from "../VoteBar";
//import Posts from "../../components/Posts/index"


//const loggedIn = Auth.loggedIn();

const Feed = ({ posts }) => {


  const { _id } = useParams();
  const { data } = useQuery(QUERY_POSTS, { variables: { _id } });

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
            
            
              
              
            <Card key={post._id} >
              <Container>
                <Row>
                <Col xs={1} className="text-center">
            
            
                  <VoteBar/>
                  </Col>
                  <Col>
              <Card.Header >
                <Row>
                  
                  <Col xs={1}>
                    <div className="">
                      <Card.Img src={Bot}
                        className="rounded-circle" style={{ width: '50px' }} />
                    </div>
                  </Col>
                  <Col>
                    c/codeIt
                    <br></br>
                    <Link
                      to={`/profile/${post.username}`}
                      style={{ fontWeight: 750 }}
                      className="text-start"
                    >
                      u/{post.username}
                    </Link>
                  </Col>
                  <Col className="text-end">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="text-dark"
                        id="dropdown-basic"
                        size="lg"
                        bsPrefix
                        className="dropdown"
                      >
                        <ThreeDots />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><Stack direction="horizontal"> <DeletePost _id={data.posts._id} />Delete Post</Stack></Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Edit Post</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">See Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">See SubCodeIt</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </Col>
                </Row>
              </Card.Header>
              <Card.Text className="titleCard">{post.enteredTitle}</Card.Text>
              <Card.Body>


                <Card.Text className="textCard">
                  {post.enteredText}
                </Card.Text>


              </Card.Body>

              <Card.Footer className="cardFooter">
                <Stack direction="horizontal" gap={8}>
                  <Col>
                <div>Comments: {post.commentCount} || Click to{' '}
                  {post.commentCount ? 'Add' : 'Start'} comments.</div>
                  </Col>
                  <Col className="text-end">
                <div>{post.createdAt}</div>
                </Col>
                </Stack>
                </Card.Footer>
                </Col>
                </Row>
                </Container>
            </Card>
            
            
            
          ))
        };
      </div>
    </div>
    
  );
}

export default Feed;