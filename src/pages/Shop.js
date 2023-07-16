/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';

import Try from '../assets/try.avif'
import profile from '../assets/profile.avif'

import {
    FaImage,
    FaVideo
  } from "react-icons/fa";

function Shop() {

    const images = [
        Try,
        profile,
        Try,
        // Add more image URLs as needed
      ];

      const [activeIndex, setActiveIndex] = useState(0);
      const [selectedOption, setSelectedOption] = useState('image');
    
      const handleNext = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrev = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 10000);
    
        return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


  return (
    <div className='bg-black'>

        <Navigation />

        <div className="flex lg:pt-32 pt-8 items-center justify-center">
            <div className="w-full max-w-7xl">
                <div className="relative">
                <div className="overflow-hidden rounded-lg">
                    <a href='/single'>
                    <img
                    src={images[activeIndex]}
                    alt="Carousel Item"
                    className="object-cover w-full h-64 md:h-96"
                    />
                    </a>
                </div>
                <a
                    onClick={handlePrev}
                    className="absolute cursor-pointer border border-gray-100 text-white top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 ml-4 focus:outline-none"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    >
                    <path d="M15 18l-6-6 6-6" />
                    </svg>
                </a>
                <a
                    onClick={handleNext}
                    className="absolute cursor-pointer border border-gray-100 text-white top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 mr-4 focus:outline-none"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    >
                    <path d="M9 6l6 6-6 6" />
                    </svg>
                </a>
                </div>
            </div>
        </div>


        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">
                    Browse Collectibles
                </h2>

                <p className="mt-4 max-w-md text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                    praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                    natus?
                </p>
                </header>

                <div className="mt-8 flex items-center justify-between">
                <div className="flex rounded border border-gray-100">
                <a
                className={`inline-flex cursor-pointer h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700 ${
                selectedOption === 'image' ? 'bg-gray-50 text-gray-700' : ''
                }`}
                onClick={() => handleOptionSelect('image')}
            >
                <FaImage className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
                className={`inline-flex cursor-pointer h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700 ${
                selectedOption === 'video' ? 'bg-gray-50 text-gray-700' : ''
                }`}
                onClick={() => handleOptionSelect('video')}
            >
                <FaVideo className="h-5 w-5" aria-hidden="true" />
            </a>
                </div>

                <div>
                <label
                    for="Search"
                    className="relative lg:w-64 w-full block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-gray-100"
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
                </div>

                {selectedOption === 'image' && <div>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li>
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
                </li>

                <li>
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
                </li>

                <li>
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
                </li>

                <li>
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
                </li>
                
                </ul>
               </div>}

               {selectedOption === 'video' && <div>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li>
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
                </li>

                <li>
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
                </li>

                
                
                </ul>
               </div>}

            </div>
            </section>

        
        
        <Footer />
    </div>
  )
}

export default Shop