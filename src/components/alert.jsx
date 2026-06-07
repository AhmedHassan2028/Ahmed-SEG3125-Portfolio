import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import Card1Example from './project-card1';
import Card2Example from './project-card2';
import Card3Example from './project-card3';
import Card4Example from './project-card4';

function AlertExample() {

  const [alertCard, setAlertCard] = useState(null);

  //I wanna have 2s alerts
  //I use my react hook to indicare which card is clicked
  const handleAlertClick = (cardId) => {
    if (cardId == 1) {
      window.open('https://dentist-service.vercel.app/', '_blank');
      return;
    }
    setAlertCard(cardId);
    setTimeout(() => {
      setAlertCard(null);
    }, 2000);
  };


  //
  // Im able to make it where the pop up is right above its specific card like this, maybe if i had more i'd use map but not sure how yet
  return (
    <>

      <div className="project-section d-flex flex-wrap gap-4 justify-content-center">
        <div>
          {alertCard === 1 && <Alert variant="primary">Project Coming Soon</Alert>}
          <Card1Example onClick={() => handleAlertClick(1)} />
        </div>
        <div>
          {alertCard === 2 && <Alert variant="primary">Project Coming Soon</Alert>}
          <Card2Example onClick={() => handleAlertClick(2)} />
        </div>
        <div>
          {alertCard === 3 && <Alert variant="primary">Project Coming Soon</Alert>}
          <Card3Example onClick={() => handleAlertClick(3)} />
        </div>
        <div>
          {alertCard === 4 && <Alert variant="primary">Project Coming Soon</Alert>}
          <Card4Example onClick={() => handleAlertClick(4)} />
        </div>
      </div>
    </>
  );
}

export default AlertExample;