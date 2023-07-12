/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation'

import images2 from '../assets/images2.svg';

import {
    FaPlusCircle
  } from "react-icons/fa";
import Footer from '../components/Footer';

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

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabNames = ['Your Uploads', 'Acquired'];

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


        <div className='lg:mx-28 mx-8 pt-16 lg:pt-0'>
        <label
        for="Search"
        className="relative lg:w-96 w-full block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-gray-100"
        >
        <input
            type="text"
            id="Search"
            placeholder="Search collectibles"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none sm:text-sm"
        />

        <span
            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
            Search
        </span>
        </label>
        </div>

        <div>

        <div className="relative pb-16" style={{ backgroundImage: `url(${images2})`}}>
        

        <div className='bg-black mt-8 shadow-lg shadow-gray-700 lg:mx-20 mx-8 rounded-md h-full'>

        <div className='flex justify-center lg:pt-16 pt-8'>
            <h1 className='lg:text-5xl text-xl font-bold text-gray-100'>Collectibles in</h1>
            {tabNames.map((name, index) => (
          <h1 className='lg:text-5xl text-2xl font-bold ml-1.5 text-emerald-600' key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
            {name}
          </h1>
        ))}
          </div>

          <div className="">
          <nav aria-label="Tabs" className="overflow-x-auto sm:w-full md:w-2/3 mx-auto">
          <ul className="flex whitespace-nowrap">
            {tabNames.map((name, index) => (
              <li
                key={index}
                className={`flex-1 cursor-pointer ${
                  activeTab === index ? '' : ''
                }`}
                onClick={() => handleTabClick(index)}
              >
                <div className="relative block p-4">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-sm font-medium text-gray-100">{name}</span>
                  </div>
                  {activeTab === index && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 w-full"></span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4">

        {activeTab === 0 && 
        <div>

          <section>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div
              className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
            >
          

          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>


          
          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>



          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>

         


            </div>
          </div>
        </section>
          </div>}


          {activeTab === 1 && 
        <div>
           <section>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div
              className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
            >
          

          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>


          
          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>



          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative bg-black">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>

         


            </div>
          </div>
        </section>
        </div>}


        </div>


          </div>


        </div>

       

        </div>

        </div>

        <Footer />
        
    </div>
  )
}

export default Profile