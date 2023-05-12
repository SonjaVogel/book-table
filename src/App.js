import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

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
