/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaUserAlt } from 'react-icons/fa'
import logo from '../assets/logo.png'

export default function Navigation() {
    const [nav, setNav] = useState(false)
    
    const handleClick = () => setNav(!nav)

   

    const handleClose = () => {
      setNav(false);
    };
    
    return (

        // Navigation links on large screen
        <div className='w-screen bg-black h-[70px] z-10 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
      <img src={logo} alt='logo' className='text-white h-8 w-8 lg:w-[35px] lg:h-[35px]' />
      <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>Collectibles.</h1>
      <ul className='hidden text-white md:flex'>
        <li className='hover:bg-white hover:text-black hover:rounded-lg'>
          <Link to="/">
            Home
          </Link>
        </li>
        <li className='relative group hover:bg-white hover:text-black hover:rounded-lg'>
            <Link to="/shop">
            Shop
          </Link>
        </li>
      </ul>
    </div>
        <div className='hidden md:flex pr-4'>
         
            <a
            className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-white bg-transparent border border-white rounded hover:bg-white hover:text-black active:text-white focus:outline-none focus:ring"
            type="submit"
            href='/login'
            >
            <span className="text-sm font-medium">
            Connect
            </span>
            </a>

            <a
            href="/profile"
            className="block shrink-0 rounded-lg bg-white p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-gray-100 hover:border hover:border-gray-100"
          >
            <span className="sr-only">Profile</span>
            <FaUserAlt className='hover:text-gray-100 text-black lg:w-5 lg:h-5' />
          </a>
    
       
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 text-white' /> : <div className='flex'>
            <a
            href="/profile"
            className="block mx-2 shrink-0 rounded-lg bg-white p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-gray-100 hover:border hover:border-gray-100"
          >
            <span className="sr-only">Profile</span>
            <FaUserAlt className='hover:text-gray-100 text-black lg:w-5 lg:h-5' />
          </a>
                <XIcon className='w-5 text-white' /> 
                </div>}
          
        </div>
      </div>


      {/* Navigation links on small screen */}
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>
              <Link to="/" onClick={handleClose}>Home</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
              <Link to="/shop" onClick={handleClose}>Shop</Link>
            </li>
            <div className='my-4'>
              <a
                className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-white bg-black border border-black rounded hover:bg-transparent hover:text-black active:text-black focus:outline-none focus:ring"
                href='/login'
                type="submit"
              >
                <span className="text-sm font-medium">
                  Connect
                </span>
              </a>
            </div>
          </ul>
    </div>
    );
}
