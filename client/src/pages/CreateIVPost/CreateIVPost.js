import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Dropdown, Row, Stack } from 'react-bootstrap';
import IAForm from '../../components/Form/IVForm';
import '../CreateIVPost/createivpost.css'

const CreateIVPost = (props) => {
  
  return (
    <Fragment>
      <br/>
      <br/>
      <Row>
      <Stack direction='horizontal'>
        <Col xs={4}>
              <div className="text-center">
              <h2>  Create a post:</h2>
              
              </div>
              </Col>
              <Col>
              <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                  c/CodeIt
              </Dropdown.Toggle >
              <Dropdown.Menu >
                  <Dropdown.Item href="#/action-1">c/Code</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">c/FunnyCode</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">c/CuteCode</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              </Col>
              </Stack>
              </Row>
      <Container className="ivWrapper">
        <Row>
            <Col>
            
              
             
              
              <br/>
              <br/>
              <br/>
              <br/>
              </Col>
              </Row>
              <IAForm  />
      </Container>
    </Fragment>
  );
}

export default CreateIVPost;
