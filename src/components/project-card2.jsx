import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2Example() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/memory.webp" />
      <Card.Body>
        <Card.Title>Memory Game</Card.Title>
        <Card.Text>
          A simple memory game built using React and React-Bootstrap.
        </Card.Text>
        <Button variant="primary">View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2Example;