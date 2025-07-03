import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';

const Router = () => {
  return (
    <div className="app-layout">
      <main className="flex-grow-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default Router;
