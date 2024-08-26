import './App.css'
import Home from './Home'

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Hackathon from './Hackathon';
import Project from './Project';
import Workexperience from './Workexperience';




function App() {

  return (
    

    // <Router basename='/MyWebsite'>

    <Router >
      <div className='Route'>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/work" element={<Workexperience/>}/>

          <Route path="/hackathon" element={<Hackathon/>}/>
          <Route path="/project" element={<Project/>}/>


      </Routes>
      </div>
    </Router>
  );
}
export default App 
