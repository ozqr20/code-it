import './Rules.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BlueBot from '../../assets/images/bot-blue.png'
import Stack from 'react-bootstrap/Stack'


const Rules = (props) => {
  return (
    <Card className="ruleCard">
    <Card.Header>
             <Stack direction="vertical" gap={0}><span className='code text-center'><img className="bot" src={BlueBot} alt="blue bot" /> Code-it</span><div className='rules text-center'> posting rules.</div>
            </Stack>
            </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item> Remember the coder</ListGroup.Item>
      <ListGroup.Item> Behave like you would in real life</ListGroup.Item>
      <ListGroup.Item> Avoid politics</ListGroup.Item>
      <ListGroup.Item> No data trackers</ListGroup.Item>
      <ListGroup.Item> No spam, unless in a can</ListGroup.Item>
      <ListGroup.Item> Avoid politics</ListGroup.Item>
      
    </ListGroup>
  </Card>
);
}

export default Rules;
