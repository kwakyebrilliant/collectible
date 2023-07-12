/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation'

import {
    FaPlusCircle
  } from "react-icons/fa";

function Profile() {
    const [angle, setAngle] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 1);
    }, 10);

    return () => clearInterval(animationInterval);
  }, []);

  const calculatePosition = (radius, angle) => {
    const centerX = 200; // X-coordinate of the center of the container
    const centerY = 200; // Y-coordinate of the center of the container
    const circleX = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const circleY = centerY + radius * Math.sin((angle * Math.PI) / 180);
    return { circleX, circleY };
  };

  return (
    <div className='bg-black'>
        
        <Navigation />

        <div className="pt-32 justify-center">
          <section>
            <div className="max-w-screen-xl px-4 py-2 mx-auto lg:py-12 sm:px-6 lg:px-8">
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
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

                <div className=" hidden sm:block bottom-40 relative">
                {[1, 2, 3].map((index) => {
                  const radius = 100;
                  const position = calculatePosition(radius, angle + (index - 1) * 120);
                  return (
                    <div
                      key={index}
                      className="absolute rounded-full bg-gray-100"
                      style={{
                        width: '20px',
                        height: '20px',
                        left: position.circleX,
                        top: position.circleY,
                      }}
                    ></div>
                  );
                })}
              </div>

                <div className="flex items-center justify-end"> {/* Add this div and class */}
                    <a
                        className="flex text-center cursor-pointer items-center px-8 py-2 mx-2 hover:text-black text-white bg-transparent border border-white rounded hover:bg-white active:text-white focus:outline-none focus:ring"
                        type="submit"
                    >
                        <FaPlusCircle className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        <span className="text-sm font-medium">
                            Upload
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