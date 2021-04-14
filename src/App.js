import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import General_Settings from './Pages/General_Settings';
import Advanced_Settings from './Pages/Advanced_Settings';
import Home from './Pages/Home'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/General_Settings' component={General_Settings}/>
        <Route exact path='/Advanced_Settings' component={Advanced_Settings}/>
      </Router>
    </>
  );
}

export default App;
