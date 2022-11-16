// import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './PostOpts.css';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";

const PostOpts = (props) => {
    const navigate = useNavigate();

return (
    <Stack direction="horizontal" gap={4}>
    <Button 
    variant="outline-primary" 
    size="sm" name="TEXT" type="button" 
    className="btn"  
    onClick={(e) => {
        navigate("/createpost");
    }}>Post
    </Button>
    <Button 
    variant="outline-primary" 
    size="sm" name="IV" type="button" 
    className="btn" 
    onClick={(e) => {
        navigate("/createivpost");
    }}>Images / Video
    </Button>
    <Button variant="outline-primary" 
    size="sm" name="LINK" type="button" 
    className="btn"  
    onClick={(e) => {
        navigate("/createpost");
    }}>Link
    </Button>
    </Stack>
);
}

export default PostOpts;
