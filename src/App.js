import './App.css';
import Navbar from './component/Navbar';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './component/Footer';
import Home from './component/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
