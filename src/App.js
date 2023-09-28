import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

class App extends Component {


  // render function
  render() {
    return (
      <div>
      <Router>
      <Routes>
        <Route path="/register" element=<Register/> />
        <Route path="/" element=<Login/> />

        <Route path="/home/:id" element=<Home/> />
        {/* Other routes go here */}
      </Routes>
    </Router>
      </div>
    );
  }
}

export default App;
