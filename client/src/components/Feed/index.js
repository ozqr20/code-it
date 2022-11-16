import "../Feed/feed.css";
import React from 'react';
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
//import Auth from '../utils/auth';
import AddPost from "../../components/AddPost";
import DeletePost from "../../components/DeletePost";
import { QUERY_POSTS } from "../../utils/queries";
import { Card, Stack, Col, Row, Dropdown, Container, Button } from 'react-bootstrap';
import { ThreeDots, Person, PencilSquare, Eyeglasses, ChatSquareHeart, Gift, Share, CloudDownload } from 'react-bootstrap-icons';
import Bot from '../../assets/images/bot.png'
import VoteBar from "../VoteBar";
//import Posts from "../../components/Posts/index"


//const loggedIn = Auth.loggedIn();

const Feed = ({ posts }) => {
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


                    <VoteBar />
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
                            style={{ fontWeight: 750, textDecoration: "none", color: "inherit" }}
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
                              {/* <Dropdown.Item href="#/action-1"><Stack direction="horizontal"> <DeletePost _id={data.posts._id} />Delete Post</Stack></Dropdown.Item> */}
                              <Dropdown.Item href="#/action-2"><Button type="submit" variant="warning" className="text-center"><PencilSquare/></Button>Edit Post</Dropdown.Item>
                              <Dropdown.Item href="#/action-3"><Link
                                to={`/profile/${post.username}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                                className="text-start"
                              > <Button type="submit" variant="success" className="text-center"><Person/></Button> See Profile</Link>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3"><Button type="submit" variant="primary" className="text-center"><Eyeglasses/></Button>See SubCodeIt</Dropdown.Item>
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
                        
                        <Link to={`/post/${post._id}`}
                         style={{ fontWeight: 600, textDecoration: "none", color: "inherit" }}>
                          <Stack direction="horizontal" gap={3}>
                          <div className="hover"><ChatSquareHeart width="30" height="30"/></div>
                          <div className="hover">Comments {post.commentCount}</div>
                          <div className="hover"><Gift width="30" height="30"/></div>
                          <div className="hover">Award</div>
                          <div className="hover"><Share width="30" height="30"/></div>
                          <div className="hover">Share</div>
                          <div className="hover"><CloudDownload width="30" height="30"/></div>
                          <div className="hover">Save</div>
                          </Stack>
                            </Link>
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
        }
      </div>
    </div>

  );
}

export default Feed;