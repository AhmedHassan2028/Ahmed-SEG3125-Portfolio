import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <Figure className="aboutme-section d-flex align-items-start gap-4">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="src/assets/linkedin-pfp.jpg"
        rounded
      />
      <Figure.Caption className="aboutme-caption mb-0">
        I am a software engineering student at the University of Ottawa. I am currently taking the SEG 3125 course (Analysis and design of user interfaces) and through this experience, we’ll develop our skills in UI design and increase our knowledge on
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;