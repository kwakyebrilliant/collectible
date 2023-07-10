import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaLinode, FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'

export default function Navigation() {
    const [nav, setNav] = useState(false)
    
    const handleClick = () => setNav(!nav)

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const handleClose = () => {
      setNav(false);
      setDropdownOpen(false);
    };

    const [showDropdown, setShowDropdown] = useState(false);

    const handleLinkClick = () => {
      setShowDropdown(false);
    }; 
    
    return (

        // Navigation links on large screen
        <div className='w-screen h-[70px] z-10 bg-emerald-600 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
      <FaLinode className='text-white lg:w-[35px] lg:h-[35px]' />
      <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>XRChain.</h1>
      <ul className='hidden text-white md:flex'>
        <li className='hover:bg-white hover:text-emerald-600 hover:rounded-lg'>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li className='relative group hover:bg-white hover:text-emerald-600 hover:rounded-lg'>
          <span
            className='cursor-pointer flex'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {!showDropdown ? (
              <FaArrowAltCircleDown className='mt-0.5 lg:w-5 lg:h-5' />
            ) : (
              <FaArrowAltCircleUp className='mt-0.5 lg:w-5 lg:h-5' />
            )}
            Invoicing
          </span>
          {showDropdown && (
            <ul className='absolute w-48 z-10 mt-2 py-2 bg-white text-black rounded-md'>
              <li className='hover:bg-emerald-600 hover:text-white'>
                <Link to="/ifinancing" onClick={handleLinkClick}>
                  Invoice Financing
                </Link>
              </li>
              <li className='hover:bg-emerald-600 hover:text-white'>
                <Link to="/ifactoring" onClick={handleLinkClick}>
                  Invoice Factoring
                </Link>
              </li>
              <li className='hover:bg-emerald-600 hover:text-white'>
                <Link to="/tfinancing" onClick={handleLinkClick}>
                  Trade Financing
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className='hover:bg-white hover:text-emerald-600 hover:rounded-lg'>
          <Link to="/tokenization" onClick={handleLinkClick}>
            Tokenization
          </Link>
        </li>
      </ul>
    </div>
        <div className='hidden md:flex pr-4'>
         
            <a
            className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-emerald-600 bg-white border border-white rounded hover:bg-transparent hover:text-white active:text-white focus:outline-none focus:ring"
            type="submit"
            href='/login'
            >
            <span className="text-sm font-medium">
            Connect
            </span>
            </a>
    
       
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 text-white' /> : <XIcon className='w-5 text-white' />}
          
        </div>
      </div>


      {/* Navigation links on small screen */}
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>
              <Link to="/" onClick={handleClose}>Home</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full dropdown'>
            <div className="flex items-center">
        <span className="relative group">
          {!dropdownOpen ? (
            <FaArrowAltCircleDown className="mt-0.5 lg:w-5 lg:h-5" />
          ) : (
            <FaArrowAltCircleUp className="mt-0.5 lg:w-5 lg:h-5" />
          )}
        </span>
        <span onClick={handleDropdownToggle} className="ml-0.5">Invoicing</span>
      </div>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-content ml-3 flex flex-col">
                    <Link className='border-b-2 py-2 border-zinc-300 w-full' to="/ifinancing" onClick={handleClose}>Invoice Financing</Link>
                    <Link className='border-b-2 py-2 border-zinc-300 w-full' to="/ifactoring" onClick={handleClose}>Invoice Factoring</Link>
                    <Link to="/tfinancing" onClick={handleClose}>Trade Financing</Link>
                  </div>
                </div>
              )}
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
              <Link to="/tokenization" onClick={handleClose}>Tokenization</Link>
            </li>
            <div className='my-4'>
              <a
                className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-white bg-emerald-700 border border-emerald-700 rounded hover:bg-transparent hover:text-emerald-700 active:text-black focus:outline-none focus:ring"
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
