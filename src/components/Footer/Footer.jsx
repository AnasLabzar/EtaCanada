import React from 'react';
import logo from '../../assets/img/logo-black.png'
import Button from '@mui/material/Button';


function Footer() {
  return (
    <footer className='bg-white h-full flex py-6 mx-auto text-center flex-col self-center w-full relative top-[312vh]'>
        <img src={logo} className="w-[350px] mx-auto mb-8" alt="" />
        <h1 className='text-3xl mb-4 font-semibold'>Apply Now For Get Your VISA !</h1>
        <Button variant="contained"  className='!bg-red-600 text-white py-2 w-40 flex mx-auto self-center px-4 mt-8' href={"https://apply-ca.com/apply-en/"} >Apply Quickly</Button>
    </footer>
  )
}

export default Footer