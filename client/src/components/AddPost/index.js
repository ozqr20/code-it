import "../AddPost/addpost.css";
import React from 'react';
import { useNavigate } from "react-router-dom";
import BotBlack from "../../assets/images/bot-black.png";
import { Image, Link, FileText } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddPost = (props) => {
    const navigate = useNavigate();
    
    
  return (
    <>
    <Container fluid="md" className="post">
      <Row className="">
        <Col md="auto gy-3">
        <Stack direction="horizontal" gap={4}>
          <div className="botWrapper">
        <img className="profileBot" src={BotBlack} alt="profile bot" />
        </div>
          <input
          type="text"
          onClick={(e) => {
              navigate("/createpost");
            }
        }
            placeholder="New Post"
            className="postInput"
          />
          <FileText  onClick={(e) => {
              navigate("/createpost"); }} className="postIcon"/>
          <Image className="postIcon"/>
          <Link className="postIcon"/>

          </Stack>
        </Col>
      </Row>
    </Container>
    </>
  );
    };


export default AddPost;