import React, {useState, useEffect} from 'react';
import Cookie from '../components/Cookie';
import FakeHeader from '../components/Header/FakeHeader';
import FakeMain from '../components/Main/FakeMain';
import FakeStepSection from '../components/Section/FakeStepSection';

function HomeBut() {
  return (
    <div className='w-full h-screen overflow-hidden bg-white-400'>
      <Cookie />
      <div id='bodyBlog' className='bodyBlog z-0'>
        <div className='md:container md:mx-auto z-10 relative d-flex justify-center'>
          <FakeHeader />
        </div>
        <FakeMain />
        <FakeStepSection />
      </div>
    </div>
  );
}

export default HomeBut;
