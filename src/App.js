import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects';
import TopBar from './Components/Menu/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
      </Router>
    </div>
  );
}

export default App;
