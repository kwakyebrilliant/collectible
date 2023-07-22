/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation'

import profile from '../assets/profile.avif';
import Try from '../assets/try.avif';
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

  const [showModal, setShowModal] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className='bg-black'>
        
        <Navigation />

        <div className="lg:pt-32 pt-20 justify-center">
          <section>
            <div className="max-w-screen-xl px-4 py-2 mx-auto lg:py-12 sm:px-6 lg:px-8">
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <div>
                    <span className="group flex shrink-0 items-center rounded-lg transition">
                        <span className="sr-only">Profile Image</span>
                        <img
                            alt="profile"
                            src={profile}
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
                        onClick={() => setShowModal(true)}
                    >
                        <FaPlusCircle className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        <span className="text-sm font-medium">
                            Upload
                        </span>
                    </a>
                </div>
            </div>

            {showModal ? (
              <>
                                <div className="justify-center items-center flex overflow-x-scroll overflow-y-scroll top-10 fixed pt-[20%] inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="font-medium text-lg text-gray-900">
                                            Add Collectibles
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                            </span>
                                        </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative lg:w-[700px] w-80 space-y-4 p-6 flex-auto">
                            

                                        <div className='pt-4'>

                                          <div className="relative">
                                          <input
                                              type="text"
                                              className="w-full bg-gray-200 focus:outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm"
                                              placeholder="Enter Title"
                                          />
                                          </div>
                                        </div>

                                        <div className='pt-4'>

                                          <div className="relative">
                                          <input
                                              type="number"
                                              className="w-full bg-gray-200 focus:outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm"
                                              placeholder="Enter Price"
                                          />
                                          </div>
                                          </div>

                                          <div className='pt-4'>

                                            <div className="relative">
                                            <select className="w-full bg-gray-200 focus:outline-none rounded-md bg-transparent border-none p-4 pe-12 text-sm sm:text-sm">
                                            <option value="">Select Category</option>
                                            <option value="image">Image</option>
                                            <option value="video">Video</option>
                                            </select>
                                            </div>
                                        </div>

                                        <div className='pt-4'>

                                          <div className="relative">
                                          <textarea
                                              type="text"
                                              className="w-full bg-gray-50 focus:outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm"
                                              placeholder="Describe collectible"
                                              rows={4}
                                          />
                                          </div>
                                      </div>

                                      <div className="flex flex-col items-center justify-center bg-gray-100">
                                        <div className="group w-full relative bg-gray-100 p-2 py-4 shadow-lg rounded-lg">

                                        <label
                                          htmlFor="image-file-input"
                                          className="relative items-center justify-center w-full h-12 px-4 py-2 text-sm font-medium text-black bg-white rounded-md cursor-pointer hover:bg-black hover:text-white focus:outline-none"
                                        >
                                          Choose File
                                          <input
                                            id="image-file-input"
                                            type="file"
                                            accept="image/*, video/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                          />
                                        </label>

                                          {selectedFile && (
                                            <div className='m-2'>
                                              {selectedFile.type.startsWith('image/') ? (
                                                <img
                                                  src={URL.createObjectURL(selectedFile)}
                                                  alt="Uploaded Image"
                                                  className="object-cover w-full h-60 mt-4 rounded-lg"
                                                />
                                              ) : (
                                                <video
                                                  src={URL.createObjectURL(selectedFile)}
                                                  controls
                                                  className="w-full h-60 mt-4 rounded-lg"
                                                />
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      </div>



                                    <a className="group w-full relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-600" href="/">
                                        <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                                            <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                            </svg>
                                        </span>

                                        <span className="text-sm font-medium transition-all group-hover:ml-4">
                                            Submit
                                        </span>
                                        </a>

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <a
                                            className="text-white bg-black cursor-pointer rounded-lg hover:bg-red-950 hover:text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
              ) : null}



            </div>
          </section>
        </div>

        <div className='lg:mx-28 mx-8 pt-4 lg:pt-0'>
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
          

          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}
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


          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}
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


          
          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}              
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



          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}
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


          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}
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
              src={Try}
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
          

          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}
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


          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}
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


          
          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}
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


          <a href="/single" className="group relative bg-black">
            <img
              alt="Developer"
              src={Try}
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
              src={Try}
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