import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div>
        {/* Footer starts here */}
        <footer className="bg-black">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center text-teal-600 sm:justify-start">
                <img src={logo} alt='logo' className='text-white h-8 w-8 lg:w-[35px] lg:h-[35px]' />
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Collectibles.</h1>
                </div>

                <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                    Copyright &copy; 2023. All rights reserved.
                </p>
                </div>
            </div>
        </footer>
        {/* Footer ends here */}
    </div>
  )
}

export default Footer