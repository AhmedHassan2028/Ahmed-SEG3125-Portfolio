import Figure from 'react-bootstrap/Figure';
import linkedinPfp from '../assets/linkedin-pfp.jpg';

function FigureExample() {
  return (
    <Figure className="aboutme-section d-flex align-items-start gap-4">
        <Figure.Caption className="aboutme-caption mb-0">
        <h1>Ahmed Hassan</h1>
        I am a software engineering student at the University of Ottawa. I enjoy full stack developement and working with data. I am currently taking the SEG 3125 course (Analysis and design of user interfaces) and through this experience, we’ll develop our skills in UI design and increase our knowledge on design elements.
    </Figure.Caption>

      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={linkedinPfp}
        rounded
      />
      
    </Figure>
  );
}

export default FigureExample;