/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';

import logo from '../assets/logo.png'

function Connect() {

    const handleGoBack = () => {
        window.history.back();
      };

  return (
    <div className='bg-black p-8'>

           {/* navigate back icon */}
           <div className='flex'>
            <a 
            onClick={handleGoBack}
            className="inline-block cursor-pointer rounded-full border border-emerald-600 bg-emerald-600 p-3 text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500">

            <FaArrowCircleLeft className='lg:w-5 lg:h-5' />
            </a>
            <img src={logo} alt='logo' className='text-white h-8 w-8 lg:w-[35px] lg:h-[35px]' />
            <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>Collectibles.</h1>
        </div>
        
        Connect
    </div>
  )
}

export default Connect