import { Fragment } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import PostForm from '../../components/Form/PostForm';

const CreatePost = (props) => {
  //const subredditList = ["r/Funny"]
  return (
    <Fragment>
      
      {/* emp container, shud probs make it root... */}
      <div className="">
          <div className="">
              <h2>Create a post</h2>
              <h2>Select SubCode-it:</h2>
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  r/FunnyCode
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">r/Code</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">r/FunnyCode</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">r/CuteCode</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              <PostForm submissionHandlers={props.submissionHandlers}/>
          </div>
      </div>
    </Fragment>
  );
}

export default CreatePost;
