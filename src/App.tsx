import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from 'page/Home';
import About from 'page/About';

function App() {
  return (
    <div className='App'>
      <a href='/'>호우</a>
      <a href='/about'>느리군</a>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
