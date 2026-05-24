// import Button from 'react-bootstrap/Button';
import './App.css'
import BasicExample from './components/nabvar';
import FigureExample from './components/aboutme';
import AlertExample from './components/alert';
// import TextExample from './components/textbox';
//For now im putting a coming soon pop up instead of new coming soon page because it's been a while since i used router
//I put my components in a folder to organize
function App() {
  return (
    <>
      <BasicExample />
      <div id="AboutMe">
        <FigureExample />
      </div>
      <div id="Projects" className="projects-title d-flex justify-content-center padding-top-40">
        <h1>My Projects</h1>
      </div>
      <div id="Contact">
        <AlertExample />
      </div>
      {/* <TextExample /> */}
      
    </>
  )
}

export default App
