import React from 'react';
import Button from '@mui/material/Button';
import ContactPage from '../../pages/Contact'

function FakeMain() {
  return (
    <div className='w-full absolute top-0 h-[45em] bg-center bg-cover z-0 bg-[url("https://i.ibb.co/Jp17H42/bg-canada1.jpg")]'>
        <div className='d-flex flex-row md:container md:mx-auto relative top-60'>
            <div className="flex-1 gap-y-4 flex flex-col">
                <h1 className='text-6xl font-medium text-white'>Let's all go<br />to Canada !</h1>
                <h3 className='text-2xl font-light text-white ml-1'>We will be more than happy<br />to know about your experience<br />during your trip in Canada. Your<br />opinion matters the most!</h3>
                <Button variant="contained" id='button1' href={ContactPage} className='!bg-[#EC1922] w-36 button'>Sign Up Now</Button>
            </div>
        </div>
    </div>
  )
}

export default FakeMain