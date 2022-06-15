import React from 'react';
import logoWhite from "../../assets/img/logo.png";
import Button from '@mui/material/Button';
import ContactPage from '../../pages/Contact'


const FakeHeader = () => {

    return (
        <nav className="max-w-full my-6 z-10 w-full shadow-none bg-transparent">
            <div className="container flex justify-between items-center text-blue-grey-900">
                <img
                    alt="..."
                    className="w-[24%]"
                    src={logoWhite}
                />
                
                <Button variant="contained" id='button' onClick={ContactPage} className='!bg-[#EC1922]'>Sign Up Now</Button>
            </div>
        </nav>
    );
}


export default FakeHeader