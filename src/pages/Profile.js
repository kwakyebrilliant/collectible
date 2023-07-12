/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navigation from '../components/Navigation'

function Profile() {
  return (
    <div className='bg-black'>
        
        <Navigation />

        <div className="pt-32 justify-center">
          <section>
            <div className="max-w-screen-xl px-4 py-2 mx-auto lg:py-12 sm:px-6 lg:px-8">
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-2'>
                <div>
                    <span className="group flex shrink-0 items-center rounded-lg transition">
                        <span className="sr-only">Profile Image</span>
                        <img
                            alt="profile"
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="lg:h-40 lg:w-40 h-20 w-20 rounded-full object-cover"
                        />

                        <p className="ms-2 hidden text-left text-xs sm:block">
                            <strong className="block text-white font-medium">Eric Frusciante</strong>
                            <span className="text-gray-500"> eric@frusciante.com </span>
                        </p>
                    </span>
                </div>

                <div className="flex items-center justify-end"> {/* Add this div and class */}
                    <a
                        className="text-center cursor-pointer items-center px-8 py-2 mx-2 text-white bg-transparent border border-white rounded hover:bg-white hover:text-black active:text-white focus:outline-none focus:ring"
                        type="submit"
                    >
                        <span className="text-sm font-medium">
                            Upload File
                        </span>
                    </a>
                </div>
            </div>




            </div>
          </section>
        </div>
        
    </div>
  )
}

export default Profile