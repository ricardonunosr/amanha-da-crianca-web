import React from 'react';

import MainContent from '../../components/MainContent';
import About from '../../components/About';
import Footer from '../../components/Footer';

const MainPage: React.FC = () => {
  return (
    <>
      <MainContent />
      <About />
      <Footer />
    </>
  );
};

export default MainPage;
