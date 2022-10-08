import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Ahorcadito from './components/Ahorcadito';
import Desarrolladores from './components/Desarrolladores';
import "./styles/Game.css"
import React from 'react';

function Game() {
  return (
  
    <Router>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/Ahorcadito' element={<Ahorcadito/>}/>
        <Route path='/desarrolladores' element={<Desarrolladores/>}/>
        <Route path='*' element={<h1>Errores 404</h1>}/>
      </Routes>
      
    </Router>
    
  );
}

export default Game;

