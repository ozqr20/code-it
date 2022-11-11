// import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './PostOpts.css';
import Stack from 'react-bootstrap/Stack';

const PostOpts = (props) => {

    //change form based on options
  const optionChangedHandler = (event) => {
    if (event.target.name === "TEXT") {
      props.onSetFormType("TEXT")
    } else if (event.target.name === "IV") {
      props.onSetFormType("IV")
    } else if (event.target.name === "LINK") {
      props.onSetFormType("LINK")
    }
  }
  return (
    <div className="">
        <Stack direction="horizontal" gap={4}>
        <Button size="sm" name="TEXT" type="button" className="btn"  onClick={optionChangedHandler}>Post</Button>
        <Button size="sm" name="IV" type="button" className="btn" onClick={optionChangedHandler}>Images / Video</Button>
        <Button size="sm" name="LINK" type="button" className="btn"  onClick={optionChangedHandler}>Link</Button>
        </Stack>
    </div>
  );
}

export default PostOpts;
