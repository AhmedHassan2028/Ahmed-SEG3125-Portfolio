// import Button from 'react-bootstrap/Button';
import './App.css'
import BasicExample from './components/nabvar';
// import ShapeExample from './components/pfp';
// import BodyShorthandExample from './components/textbox';
import FigureExample from './components/aboutme';
import AlertExample from './components/alert';

//For now im putting a coming soon pop up instead of new coming soon page because it's been a while since i used router
//I put my components in a folder to organize
function App() {
  return (
    <>
      <BasicExample />
      <FigureExample />
      <div className="projects-title d-flex justify-content-center padding-top-40">
        <h1>My Projects</h1>
      </div>
      <div>
        <AlertExample />
      </div>
      
    </>
  )
}

export default App
