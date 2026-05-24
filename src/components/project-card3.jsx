import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import eCommerceLogo from '../assets/e-commerce.png';
import eCommerceLogo2 from '../assets/cart.jpg';

function Card3Example({onClick}) {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img variant="top" src={eCommerceLogo2} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>E-commerce Website</Card.Title>
        <Card.Text>
          An e-commerce website built using React and React-Bootstrap.
        </Card.Text>
        <Button variant="primary" onClick={onClick}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3Example;