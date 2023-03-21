import React from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import MainContent from './components/MainContent';

const Homepage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Cards />
    </>
  );
};

export default Homepage;
