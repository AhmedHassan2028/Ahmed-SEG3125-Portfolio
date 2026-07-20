import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import memoryLogo from '../assets/memory.webp';
// import memoryLogo2 from '../assets/brain-memory.jpg';
import memoryGame from '../assets/memory.png';

function Card2Example({onClick}) {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.ImgUpdate
        variant="top"
        src={memoryGame}
        style={{ height: '180px', objectFit: 'cover', objectPosition: 'center top' }}
      />
      <Card.Body>
        <Card.Title>Memory Game</Card.Title>
        <Card.Text>
          A memory game containingfor players to memorize and recreate tile patterns.
        </Card.Text>
        <Button variant="primary" onClick={onClick}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2Example;