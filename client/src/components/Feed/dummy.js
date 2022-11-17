
import React from 'react';
import { Link } from "react-router-dom";
import DeletePost from "../../components/DeletePost";
import { Card, Stack, Col, Row, Dropdown, Container, Button } from 'react-bootstrap';
import { ThreeDots, Person, PencilSquare, Eyeglasses, ChatSquareHeart, Gift, Share, CloudDownload } from 'react-bootstrap-icons';
import BotBlue from '../../assets/images/bot-blue.png'
import VoteBar from '../VoteBar';
const Dummy = () => {
  return (
    

       
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
                            <Card.Img src={BotBlue}
                              className="rounded-circle" style={{ width: '50px' }} />
                          </div>
                        </Col>
                        <Col>
                          c/Help
                          <br></br>
                          <Link
                            to={`/profile/wolverine`}
                            style={{ fontWeight: 750, textDecoration: "none", color: "inherit" }}
                            className="text-start"
                          >
                            u/wolverine
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
                                to={`/profile/wolverine`}
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
                    <Card.Text className="titleCard">Messed up another laptop</Card.Text>
                    <Card.Body>


                      <Card.Text className="textCard">
                        Any vibranium laptops? asking for a friend
                        
                        <img
                          className="postUploadImg"
                          src=""
                          alt=""
                        />
                      </Card.Text>



                    </Card.Body>

                    <Card.Footer className="cardFooter">
                      <Stack direction="horizontal" gap={8}>
                        <Col>

                          <Link to={`/post/`}
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
                          <div>Nov 16th, 2002 at 8:50 pm</div>
                        </Col>
                      </Stack>
                    </Card.Footer>
                  </Col>
                </Row>
              </Container>
            </Card>
          
     

  );
}

export default Dummy;