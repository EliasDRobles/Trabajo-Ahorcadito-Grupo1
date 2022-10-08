import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Desarrolladores from './components/Desarrolladores';
import React from 'react';

function Game() {
  return (
  
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/desarrolladores' element={<Desarrolladores/>}/>
      </Routes>
    </Router>
    
  );
}

export default Game;

