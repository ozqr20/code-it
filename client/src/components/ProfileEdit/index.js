import { Card, Col, Row, Container, ProgressBar, ListGroup, Form } from "react-bootstrap";
import { Facebook, Github, Globe, Linkedin, Slack } from "react-bootstrap-icons";


export default function ProfileEdit() {
    return (

<section>

    
        <Container>
            <Row>
                <Col>
                <Card className="mb-4 mb-lg-0">
              <Card.Body className="p-0">
                <ListGroup flush className="rounded-3">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <Globe color="goldenRod"/>
                    <Form.Control className="text-end" placeholder= "Website"/>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <Github color="black"/>
                    <Form.Control className="text-end" placeholder= "Github"/>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <Slack color="purple"/>
                    <Form.Control className="text-end" placeholder= "Slack"/>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <Linkedin color="blue"/>
                    <Form.Control className="text-end" placeholder= "LinkedIn"/>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <Facebook color="royalBlue"/>
                    <Form.Control className="text-end" placeholder= "FaceBook"/>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="8">
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col sm="3">
                    <Card.Text>Full Name</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Form.Control className="text-muted" placeholder= "Jon Smith" />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Email</Card.Text>
                  </Col>
                  <Col sm="9">
                  <Form.Control className="text-muted" placeholder= "example@example.com" />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Phone</Card.Text>
                  </Col>
                  <Col sm="9">
                  <Form.Control className="text-muted" placeholder= "(123)-456-7890" />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Mobile</Card.Text>
                  </Col>
                  <Col sm="9">
                  <Form.Control className="text-muted" placeholder= "(123)-456-7890" />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Address</Card.Text>
                  </Col>
                  <Col sm="9">
                  <Form.Control className="text-muted" placeholder= "Bay Area, San Francisco, CA" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Row>
              <Col md="6">
                <Card className="mb-4 mb-md-0">
                  <Card.Body>
                    <Card.Text className="mb-4"><span className="text-primary font-italic me-1">Frontend</span>Brain Status</Card.Text>
                    <Card.Text className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={80} />
                    </ProgressBar>

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>HTML/CSS</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={60} />
                    </ProgressBar>

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={70} />
                    </ProgressBar>

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={60} />
                    </ProgressBar>

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>UI/UX</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={90} />
                    </ProgressBar>
                  </Card.Body>
                </Card>
              </Col>

              <Col md="6">
                <Card className="mb-4 mb-md-0">
                  <Card.Body>
                    <Card.Text className="mb-4"><span className="text-primary font-italic me-1">Backend</span>Brain Status</Card.Text>
                    <Card.Text className="mb-1" style={{ fontSize: '.77rem' }}>Backend</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={80} />
                    </ProgressBar>

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>MongoDB</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={90} />
                    </ProgressBar>

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>MySQL</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={66} />
                    </ProgressBar>

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>GraphQL</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={90} />
                    </ProgressBar>

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</Card.Text>
                    <ProgressBar className="rounded">
                      <ProgressBar animated now={80} />
                    </ProgressBar>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

