import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card4Example() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/sports.jpg" />
      <Card.Body>
        <Card.Title>Sport Analytics Site</Card.Title>
        <Card.Text>
          A website for analyzing sports data and providing insights.
        </Card.Text>
        <Button variant="primary">View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card4Example;