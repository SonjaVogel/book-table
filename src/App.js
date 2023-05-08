import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Main />
      <Footer />
    </>
  );
}

export default App;
