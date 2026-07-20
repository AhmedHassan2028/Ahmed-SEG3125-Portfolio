import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import sportsLogo from '../assets/Sports.jpg';
// import sportsBall from '../assets/sport-ball.jpg';
import dashboard from '../assets/dashboard.png';

function Card4Example({onClick}) {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img
        variant="top"
        src={dashboard}
        style={{ height: '180px', objectFit: 'cover', objectPosition: 'left top' }}
      />
      <Card.Body>
        <Card.Title>Basketball Scoring Dashboard</Card.Title> 
        <Card.Text>
          A dashboard that demonstrates the NBA's best scorers since 2010.
        </Card.Text>
        <Button variant="primary" onClick={onClick}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Card4Example;