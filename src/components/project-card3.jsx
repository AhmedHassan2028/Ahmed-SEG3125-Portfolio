import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import eCommerceLogo from '../assets/e-commerce.png';
// import eCommerceLogo2 from '../assets/cart.jpg';
import groceryLogo from '../assets/grocery.png';

function Card3Example({onClick}) {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img
        variant="top"
        src={groceryLogo}
        style={{ height: '180px', objectFit: 'cover', objectPosition: '65% top' }}
      />
      <Card.Body>
        <Card.Title>E-commerce Website</Card.Title>
        <Card.Text>
          A grocery e-commerce website for customers to browse products and make online purchases.
        </Card.Text>
        <Button variant="primary" onClick={onClick}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3Example;