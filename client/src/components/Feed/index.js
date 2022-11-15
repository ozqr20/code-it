import "../Feed/feed.css";
import React from 'react';
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
//import Auth from '../utils/auth';
import { Card } from 'react-bootstrap'
import AddPost from "../../components/AddPost";
import DeletePost from "../../components/DeletePost";
import { QUERY_POSTS } from "../../utils/queries";
import { Stack, Col, Row, Dropdown } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';
import Bot from '../../assets/images/bot.png'
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
                        <Dropdown.Item href="#/action-1"><Stack direction="horizontal"> <DeletePost />DELETE</Stack></Dropdown.Item>
                        <Dropdown.Item href="#/action-2">EDIT</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">PROFILE</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">SUBCODEIT</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </Col>
                </Row>
              </Card.Header>
              <Card.Title>{post.enteredTitle}</Card.Title>
              <Card.Body>


                <Card.Text>
                  {post.enteredText}
                </Card.Text>


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