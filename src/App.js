import logo from './logo.svg';
import React from 'react';
import Footer from './components/footer'
import Navbar from './components/navbar'
import Catalog from './pages/catalog'
import Home from './pages/home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalProvider from './state/globalProvider'

function App() {

  console.log("Running app.js");
  
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          
          <Routes>
            <Route path="/" element={<Home />}></Route> 
            <Route path="/catalog" element={<Catalog />}></Route> 
          </Routes>
          {/* 
            admin
            about
            cart
          */}

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
