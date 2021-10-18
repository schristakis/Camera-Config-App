import React from 'react';
import {Route } from 'react-router-dom';
import Navbar from './Navbar';
import Settings from './Pages/Settings';
import Home from './Pages/Home'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Settings' component={Settings}/>
      </Router>
    </>
  );
}

export default App;
