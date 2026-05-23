import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card3Example() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/e-commerce.png" />
      <Card.Body>
        <Card.Title>E-commerce Website</Card.Title>
        <Card.Text>
          An e-commerce website built using React and React-Bootstrap.
        </Card.Text>
        <Button variant="primary">View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3Example;