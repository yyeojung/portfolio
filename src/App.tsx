import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from 'page/Home';
import About from 'page/About';

function App() {
    return (
        <div className="App">
            <a href='/'>home</a>
            <a href='/about'>about</a>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
