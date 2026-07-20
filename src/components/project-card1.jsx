import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import dentalLogo from '../assets/dental-logo.jpg';
// import dentalLogo2 from '../assets/toothbrush.jpg';
import dentalSite from '../assets/dental-site.png';

//I switched to unsplash images
function Card1Example({ onClick }) {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img
        variant="top"
        src={dentalSite}
        style={{ height: '182px', objectFit: 'cover', objectPosition: 'left' }}
      />
      <Card.Body>
        <Card.Title>Dental Clinic Website</Card.Title>
        <Card.Text>
          Dental clinic website for clients to learn about services and book appointments.
        </Card.Text>
        <Button variant="primary" onClick={onClick}>
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Card1Example;