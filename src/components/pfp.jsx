import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import linkedinPfp from '../assets/linkedin-pfp.jpg';

function ShapeExample() {
  return (
    <Container>
      <Row className="pfp-row">
        <Col xs={6} md={4} className="pfp-col">
          <Image src={linkedinPfp} rounded className="profile-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;