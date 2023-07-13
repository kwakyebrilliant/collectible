/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
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

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };


  return (
    <div className='bg-black'>

        <Navigation />

        <div className="flex lg:pt-32 pt-8 items-center justify-center">
            <div className="w-full max-w-7xl">
                <div className="relative">
                <div className="overflow-hidden rounded-lg">
                    <img
                    src={images[activeIndex]}
                    alt="Carousel Item"
                    className="object-cover w-full h-64 md:h-96"
                    />
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
                    className="inline-flex cursor-pointer h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                    >
                    <FaImage className="h-5 w-5" aria-hidden="true" />
                    </a>

                    <a
                    className="inline-flex cursor-pointer h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
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

                <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li>
                    <a href="#" class="group block overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div class="relative bg-white pt-3">
                        <h3
                        class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                        Basic Tee
                        </h3>

                        <p class="mt-2">
                        <span class="sr-only"> Regular Price </span>

                        <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                        </p>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="group block overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div class="relative bg-white pt-3">
                        <h3
                        class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                        Basic Tee
                        </h3>

                        <p class="mt-2">
                        <span class="sr-only"> Regular Price </span>

                        <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                        </p>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="group block overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div class="relative bg-white pt-3">
                        <h3
                        class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                        Basic Tee
                        </h3>

                        <p class="mt-2">
                        <span class="sr-only"> Regular Price </span>

                        <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                        </p>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="group block overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div class="relative bg-white pt-3">
                        <h3
                        class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                        Basic Tee
                        </h3>

                        <p class="mt-2">
                        <span class="sr-only"> Regular Price </span>

                        <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                        </p>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            </section>

        
        
        <Footer />
    </div>
  )
}

export default Shop