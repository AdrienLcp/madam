import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Offer from './pages/Offer';
import DataScience from './pages/Offer/DataScience';
import LeanSixSigma from './pages/Offer/LeanSixSigma';
import ConduiteDeProjets from './pages/Offer/ConduiteDeProjets';
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

        <Route path='/a_propos' element={ <About /> } />

        <Route path='/offre' element={ <Offer /> } />

        <Route path='/offre/data_science' element={ <DataScience /> } />
        <Route path='/offre/lean_six_sigma' element={ <LeanSixSigma /> } />
        <Route path='/offre/conduite_de_projets' element={ <ConduiteDeProjets /> } />

        <Route path="/*" element={ <NotFound /> } />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;