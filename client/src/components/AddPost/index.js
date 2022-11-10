import "../AddPost/addpost.css";
import React from 'react';
import { useNavigate } from "react-router-dom";
import BotBlack from "../../assets/images/bot-black.png";
import { Image, Link, FileText } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';


const AddPost = (props) => {
    const navigate = useNavigate();
    
    
  return (
    <>
    <div className="post row gx-5">
      <div className="postWrapper">
        <div className="postTop">
          <img className="profileBot" src={BotBlack} alt="profile bot" />
          <p className="p">
          <input
          type="text"
          onClick={(e) => {
              navigate("/form");
            }
        }
            placeholder="New Post"
            className="postInput me-2"
          /></p>
          <Stack direction="horizontal" gap={4}>
          <FileText className="postIcon"/>
          <Image htmlColor="tomato" className="postIcon"/>
          <Link htmlColor="blue" className="postIcon"/>
          </Stack>
        </div>
      </div>
    </div>
    
    </>
  );
    };


export default AddPost;