import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Jop from './pages/Jop';
import Myapplication from './pages/Myapplication';
import Application from './components/job/Application';
import Admin from './pages/Admin';
import Viewapplyer from './components/admin/Viewapplyer';
import EditJob from './components/admin/EditJop';
import Addjob from './components/admin/Addjob';

const Router = () => {
  return (
    <div className="app-layout">
      <main className="flex-grow-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/jobs" element={<Jop/>}/>
            <Route path="/application/:jobId" element={<Application />} />
            <Route path="/myApplications" element={<Myapplication />} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/viewapplyer" element={<Viewapplyer/>}/>
            <Route path="/editjop" element={<EditJob/>}/>
            <Route path="/addjob" element={<Addjob/>}/>
            
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default Router;
