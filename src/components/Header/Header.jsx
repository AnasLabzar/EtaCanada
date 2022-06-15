import React from 'react';
import logoWhite from "../../assets/img/logo.png";
import Button from '@mui/material/Button';


const Header = () => {
    // const icon = (
    //     <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-4 w-4 opacity-75"
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //     >
    //         <path
    //             fillRule="evenodd"
    //             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //         />
    //     </svg>
    // );

    return (
        <nav className="max-w-full my-6 z-10 w-full shadow-none bg-transparent">
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