import React, {useState, useEffect} from 'react';
import Cookie from '../components/Cookie';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import PubSection from '../components/Section/PubSection';
import StepSection from '../components/Section/StepSection';

function HomeUser() {
  return (
    <div className='w-full h-screen bg-white'>
      <div id='bodyBlog' className='bodyBlog z-0 bg-white'>
        <div className='md:conainer md:mx-auto relative d-flex justify-center'>
          <Header />
        </div>
        <Main />
        <StepSection />
        <PubSection />
        <Footer />
      </div>
    </div>
  );
}

export default HomeUser;
