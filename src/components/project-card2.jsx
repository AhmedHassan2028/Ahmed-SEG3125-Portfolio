import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import memoryLogo from '../assets/memory.webp';
import memoryLogo2 from '../assets/brain-memory.jpg';

function Card2Example({onClick}) {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img variant="top" src={memoryLogo2} style={{ height: '180px', objectFit: 'cover' }} />
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