import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import memoryLogo from '../assets/memory.webp';


function Card2Example({onClick}) {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img variant="top" src={memoryLogo} />
      <Card.Body>
        <Card.Title>Memory Game</Card.Title>
        <Card.Text>
          A simple memory game built using React and React-Bootstrap.
        </Card.Text>
        <Button variant="primary" onClick={onClick}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2Example;