import './jobcard.css'
import React from 'react';
import { Link } from "react-router-dom";
import AddPost from "../../components/AddPost";
import DeletePost from "../../components/DeletePost";
import { Card, Stack, Col, Row, Dropdown, Container, Button } from 'react-bootstrap';
import { ThreeDots, Person, PencilSquare, Eyeglasses, ChatSquareHeart, Gift, Share, CloudDownload } from 'react-bootstrap-icons';
import LadyBot from '../../assets/images/robot.png'
import JobPost from "../../assets/images/softwaretester_1-min.jpg"
import VoteBar from "../VoteBar";

const JobCard = () => {
  return (
    <div className="feed container gx-12">
      <div className="feedWrapper row">
        <AddPost />
            <Card >
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
                            <Card.Img src={LadyBot}
                              className="rounded-circle" style={{ width: '50px' }} />
                          </div>
                        </Col>
                        <Col>
                          c/jobs
                          <br></br>
                          <Link
                            to={`/profile/ladybot`}
                            style={{ fontWeight: 750, textDecoration: "none", color: "inherit" }}
                            className="text-start"
                          >
                            u/dolores
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
                              <Dropdown.Item><Stack direction="horizontal"> <DeletePost />Delete Post</Stack></Dropdown.Item>
                              <Dropdown.Item href="#/action-2"><Button type="submit" variant="warning" className="text-center"><PencilSquare /></Button>Edit Post</Dropdown.Item>
                              <Dropdown.Item href="#/action-3"><Link
                                to={`/`}
                                style={{ textDecoration: "none", color: "inherit" }}
                                className="text-start"
                              > <Button type="submit" variant="success" className="text-center"><Person /></Button> See Profile</Link>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3"><Button type="submit" variant="primary" className="text-center"><Eyeglasses /></Button>See SubCodeIt</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Text className="titleCard">Hiring Testers NOW!! Sign On BONUS!</Card.Text>
                    <Card.Body>
                      <Card.Text className="textCard text-center" >
                      <a style={{color: 'orangered', fontWeight: '700', textDecoration: "none"}} href="https://www.indeed.com/">Click on Link to Apply!</a>

                        <Container className='imgCont text-center'>
                        <img className="postImg" src={JobPost} alt="" />
                        </Container>
                      </Card.Text>
                         
                    </Card.Body>

                    <Card.Footer className="cardFooter">
                      <Stack direction="horizontal" gap={8}>
                        <Col>

                          <Link to={`/`}
                            style={{ fontWeight: 600, textDecoration: "none", color: "inherit" }}>
                            <Stack direction="horizontal" gap={3}>
                              <div className="hover"><ChatSquareHeart width="30" height="30" /></div>
                              <div className="hover">Comments </div>
                              <div className="hover"><Gift width="30" height="30" /></div>
                              <div className="hover">Award</div>
                              <div className="hover"><Share width="30" height="30" /></div>
                              <div className="hover">Share</div>
                              <div className="hover"><CloudDownload width="30" height="30" /></div>
                              <div className="hover">Save</div>
                            </Stack>
                          </Link>
                        </Col>
                        <Col className="text-end">
                          <div>Nov 16th, 2022 at 8:01 pm</div>
                        </Col>
                      </Stack>
                    </Card.Footer>
                  </Col>
                </Row>
              </Container>
            </Card>
      </div>
    </div>

  );
 
}

export default JobCard;