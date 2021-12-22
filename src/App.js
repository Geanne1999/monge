import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* Routes substitui o Switch na nova versão*/}
      <Routes>
        <Route path='/' exact/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
