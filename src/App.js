import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './styles/index.scss';

const App = () => {
  return (
    <BrowserRouter>

      <Navigation />

      <Header />

      <Routes>

        <Route path='/' element={ <Home /> } />

        <Route path='/contact' element={ <Contact /> } />

        <Route path='/a-propos' element={ <About /> } />

        <Route path="/*" element={ <NotFound /> } />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;