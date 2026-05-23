import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sportsLogo from '../assets/sports.jpg';

function Card4Example({onClick}) {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img variant="top" src={sportsLogo} />
      <Card.Body>
        <Card.Title>Sport Analytics Site</Card.Title>
        <Card.Text>
          A website for analyzing sports data and providing insights.
        </Card.Text>
        <Button variant="primary" onClick={onClick}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card4Example;