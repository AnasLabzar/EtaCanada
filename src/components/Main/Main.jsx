import React from 'react';
import Button from '@mui/material/Button';

function Main() {
  return (
    <div className='w-full absolute top-0 h-[40em] bg-center bg-cover z-0 bg-[url("https://i.ibb.co/K6zqfdF/bg-canada.jpg")]'>
      <div className='d-flex flex-row md:container md:mx-auto relative top-48'>
        <div className="flex-1 gap-y-4 pb-14 flex flex-col">
          <h1 className='text-6xl font-medium text-white'>Get your Visa<br />Now !</h1>
          <h3 className='text-2xl font-light text-white ml-1'>Electronic Travel Authorization</h3>
          <p className='text-lg pr-10'>The quality of our services is our reputation<br />and we have more than a <b>1 050 000</b> customer<br />people who trust us and our services...</p>
          <Button variant="contained" id='button' href={"https://apply-ca.com/apply-en/"} className='!bg-[#EC1922] !mt-4 w-40'>Apply Quickly</Button>
        </div>
      </div>
    </div>
  )
}

export default Main