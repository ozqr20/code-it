import "./reactpost.css";
import React from 'react';
import { useNavigate } from "react-router-dom";
import BotLtBlue from "../../../assets/images/bot-lightBlue.png";
import { Image, Link, FileText } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReactPost = (props) => {
    const navigate = useNavigate();
    
    
  return (
    <>
    <Container fluid="md" className="postReact">
      <Row className="">
        <Col md="auto gy-3">
        <Stack direction="horizontal" gap={4}>
          <div className="botWrapper">
        <img className="profileBot" src={BotLtBlue} alt="profile bot" />
        </div>
          <input
          type="text"
          onClick={(e) => {
              navigate("/createreactpost");
            }
        }
            placeholder="New Post"
            className="postInput"
          />
          <FileText  onClick={(e) => {
              navigate("/createreactpost"); }} className="postIcon"/>
          <Image onClick={(e) => {
              navigate("/createreactpost"); }} className="postIcon"/>
          <Link onClick={(e) => {
              navigate("/createreactpost"); }} className="postIcon"/>
          </Stack>
        </Col>
      </Row>
    </Container>
    </>
  );
    };


export default ReactPost;