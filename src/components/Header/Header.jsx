import React from 'react';
import logoWhite from "../../assets/img/logo.png";
import Button from '@mui/material/Button';


const Header = () => {

    return (
        <nav className="max-w-full md:container mx-auto my-6 z-20 w-full shadow-none bg-transparent">
            <div className="container flex justify-between items-center text-blue-grey-900">
                <img
                    alt="..."
                    className="w-[24%] z-10"
                    src={logoWhite}
                />
            </div>
        </nav>
    );
}


export default Header