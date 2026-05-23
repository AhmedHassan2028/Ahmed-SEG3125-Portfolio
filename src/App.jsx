// import Button from 'react-bootstrap/Button';
import './App.css'
import BasicExample from './components/nabvar';
// import ShapeExample from './components/pfp';
// import BodyShorthandExample from './components/textbox';
import FigureExample from './components/aboutme';
import CardExample from './components/project-card';


function App() {
  return (
    <>
      <BasicExample />
      <FigureExample />
      <div className="d-flex justify-content-center padding-top-40">
        <h1>My Projects</h1>
      </div>
      <div className="project-section d-flex flex-wrap gap-4 justify-content-center">
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
      </div>
      
    </>
  )
}

export default App
