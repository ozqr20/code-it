import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Dropdown, Row, Stack } from 'react-bootstrap';
import PostForm from '../../components/Form/PostForm';
import './createpost.css'

const CreatePost = (props) => {
  //const subredditList = ["r/Funny"]
  return (
    <Fragment>
      <br/>
      <br/>
      <Container className="postWrapper">
        <Row>
            <Col>
            <Stack direction='horizontal'>
              <div className="text-center">
              <h2>  Create a post:</h2>
              
              </div>
              </Stack>
              </Col>
              <Col>
              <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                  r/FunnyCode
              </Dropdown.Toggle >
              <Dropdown.Menu >
                  <Dropdown.Item href="#/action-1">r/Code</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">r/FunnyCode</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">r/CuteCode</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              
              <br/>
              <br/>
              <br/>
              <br/>
              </Col>
              </Row>
              <PostForm />
      </Container>
    </Fragment>
  );
}

export default CreatePost;
