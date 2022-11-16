import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactBG1 from '../../../../assets/images/reactBG1.webp';
import { useNavigate } from "react-router-dom";
import { Col, Dropdown, Row, Stack } from "react-bootstrap";
import "../ReactComCard/reactcomcard.css"
import { Dot, BalloonHeart, CaretDown } from 'react-bootstrap-icons'

function ReactComCard() {
    const navigate = useNavigate();
    return (
        <Card style={{ width: '17rem', paddingTop: "1px", paddingBottom: "1px" }}>
            <Card.Img style={{ height: '35%', opacity: '88%' }} src={ReactBG1} />
            <Card.ImgOverlay>
                <div className='text-center' style={{ padding: "30px", fontWeight: 950, fontSize: "130%", color: "whitesmoke" }}>React CodeIt Community</div>
            </Card.ImgOverlay>
            <Card.Body>React News and Highlights from everything React.JS from developers around the world.</Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <Stack direction="horizontal" gap={4}>
                        <div> <BalloonHeart /></div><div>Created Nov 17, 2007</div>
                    </Stack>
                </ListGroup.Item>
                <Card.Body>
                    <Stack direction="horizontal">
                        <Stack direction="vertical"><div style={{ fontWeight: '500' }}>20.6m</div><div>Fans</div></Stack>
                        <Stack direction="vertical"><div style={{ fontWeight: '500' }}><Dot style={{ color: 'green' }} />2.3K</div><div>Spectating</div></Stack>
                        <Stack direction="vertical"><div style={{ fontWeight: '500' }}>#1</div><div>Ranked</div></Stack>
                    </Stack>
                </Card.Body>
                <ListGroup.Item>
                    <Row>

                        <Col className="text-center">
                            <button
                                className="reactCreate"
                                onClick={(e) => { navigate("/profile"); }}
                            >Create Post</button>
                        </Col>
                    </Row></ListGroup.Item>


                <ListGroup>
                    <ListGroup.Item className="text-center">
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="text-dark"
                                id="dropdown-basic"
                                size="sm"
                                bsPrefix
                                className="dropdown"
                            >
                               
                                    <Stack direction="horizontal" gap={5}>
                                    <Col>
                                    <div className='options'>Community Options</div>
                                    </Col>
                                    <Col className="text-end"><CaretDown/></Col>
                                    </Stack>
                               
                              
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ListGroup.Item>
                </ListGroup>
            </ListGroup>
        </Card>
    );
}

export default ReactComCard;