import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio/little-lemon">
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;