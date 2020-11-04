import React, { useEffect } from 'react';

import MainContent from '../../components/MainContent';
import About from '../../components/About';
import Footer from '../../components/Footer';

const MainPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Amanhã da criança';
  }, []);

  return (
    <>
      <MainContent />
      <About />
      <Footer />
    </>
  );
};

export default MainPage;
