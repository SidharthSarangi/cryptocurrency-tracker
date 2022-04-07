import React from 'react';
import './App.css';
import Crypto from './components/Crypto';
import Footer from './components/Footer';
import Global from './components/Global';
import Navbar from './components/Navbar';
import ScrollButton from './components/ScrollButton';
import Top from './components/Top';
import Trend from './components/Trend';
import Trendingsearch from './components/Trendingsearch';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Global/>
      <Trendingsearch/>
      <Trend/>
      <h1 id="best-3-title">Best 3 Cryptos</h1>
      <Top />
      <Crypto/>
      <ScrollButton/>
      <Footer/>
    </div>
  );
}

export default App;
