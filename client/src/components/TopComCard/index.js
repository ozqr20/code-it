import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Space from '../../assets/images/space-back.jpg';
import { useNavigate } from "react-router-dom";
import { Col, Row, Stack } from "react-bootstrap";
import "../TopComCard/topcomcard.css"
 
function TopComCard() {
    const navigate = useNavigate();
    return (
        <Card style={{ width: '17rem', paddingTop: "1px", paddingBottom: "1px"}}>
            <Card.Img style={{ height: '20%', opacity: '88%' }} src={Space} />
            <Card.ImgOverlay>
                <div className='text-center' style={{ padding: "30px", fontWeight: 900, fontSize: "110%", color: "whitesmoke" }}>Top Coding Communities</div>
            </Card.ImgOverlay>

            <ListGroup className="list-group-flush">
                <ListGroup.Item
                ><Row>
                    <Col style={{fontWeight: 600}}>c/react</Col>
                    <Col className="text-end">
                    <button 
                    className="join"
                    onClick={(e) => {navigate("/react");}}
                    >Join</button>
                </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                    <Col style={{fontWeight: 600}}>c/mongoDB</Col>
                    <Col className="text-end">
                    <button 
                    className="join"
                    onClick={(e) => {navigate("/profile");}}
                    >Join</button>
                </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                    <Col style={{fontWeight: 600}}>c/vue</Col>
                    <Col className="text-end">
                    <button 
                    className="join"
                    onClick={(e) => {navigate("/profile");}}
                    >Join</button>
                </Col>
                </Row></ListGroup.Item>
                <ListGroup.Item>
                <Row>
                    <Col style={{fontWeight: 600}}>c/funnycode</Col>
                    <Col className="text-end">
                    <button 
                    className="join"
                    onClick={(e) => {navigate("/profile");}}
                    >Join</button>
                </Col>
                </Row></ListGroup.Item>
                <ListGroup.Item>
                <Row>
                    <Col style={{fontWeight: 600}}>c/graphQL</Col>
                    <Col className="text-end">
                    <button 
                    className="join"
                    onClick={(e) => {navigate("/profile");}}
                    >Join</button>
                </Col>
                </Row></ListGroup.Item>
            </ListGroup>
            <ListGroup.Item className="text-center" style={{paddingTop: "20px", paddingBottom: "20px"}}>  <Card.Link href="/"><button className="bodyBtn">View All</button></Card.Link>
            </ListGroup.Item>
            <ListGroup>
            <ListGroup.Item className="text-center">
                <Stack direction="horizontal" gap={0}>
                <Card.Link href="#"><button className="footerBtn">Top</button></Card.Link>
                <Card.Link href="#"><button className="footerBtn">Near</button></Card.Link>
                <Card.Link href="#"><button className="footerBtn">News</button></Card.Link>
                <Card.Link href="#"><button className="footerBtn">Aww</button></Card.Link>
                </Stack>
                </ListGroup.Item>
                </ListGroup>
                
        </Card>
    );
}

export default TopComCard;