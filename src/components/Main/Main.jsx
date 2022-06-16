import React from 'react';
import Button from '@mui/material/Button';

function Main() {
  return (
    <div className='w-full absolute top-0 h-[44em] bg-center bg-cover z-0 bg-[url("https://i.ibb.co/Jp17H42/bg-canada1.jpg")]'>
      <div className='d-flex flex-row md:container md:mx-auto relative top-40 pt-6'>
        <div className="flex-1 gap-y-4 pb-14 flex flex-col">
          <h1 className='text-6xl font-medium text-white'>Get your Visa<br />Now !</h1>
          <h3 className='text-2xl font-light text-white ml-1'>Electronic Travel Authorization</h3>
          <p className='text-[18px] pr-10 text-white'>Your ETA authorizes you to move you on the Canadian<br />ground (tourism or business) during one duration of 3<br />or 6 months, or possibly, until the date scheduled by<br />the immigration department at the time of your arrival<br />on the Canadian ground.</p>
          <Button variant="contained" id='button' href={"https://apply-ca.com/apply-en/"} className='!bg-[#EC1922] !mt-4 w-40 !rounded-sm'>Apply Quickly</Button>
        </div>
      </div>
    </div>
  )
}

export default Main