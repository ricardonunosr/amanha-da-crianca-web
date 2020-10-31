import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import About from './components/About';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <About />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
