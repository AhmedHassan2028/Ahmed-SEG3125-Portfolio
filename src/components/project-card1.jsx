import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1Example() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/dental-logo.jpg" />
      <Card.Body>
        <Card.Title>Dental Clinic Website</Card.Title>
        <Card.Text>
          Dental clinic website built using React and React-Bootstrap.
        </Card.Text>
        <Button variant="primary">View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1Example;