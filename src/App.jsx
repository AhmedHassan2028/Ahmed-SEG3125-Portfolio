// import Button from 'react-bootstrap/Button';
import './App.css'
import BasicExample from './components/nabvar';
// import ShapeExample from './components/pfp';
// import BodyShorthandExample from './components/textbox';
import FigureExample from './components/aboutme';
import Card1Example from './components/project-card1';
import Card2Example from './components/project-card2';
import Card3Example from './components/project-card3';
import Card4Example from './components/project-card4'; 

function App() {
  return (
    <>
      <BasicExample />
      <FigureExample />
      <div className="projects-title d-flex justify-content-center padding-top-40">
        <h1>My Projects</h1>
      </div>
      <div className="project-section d-flex flex-wrap gap-4 justify-content-center">
        <Card1Example />
        <Card2Example />
        <Card3Example />
        <Card4Example />
      </div>
      
    </>
  )
}

export default App
