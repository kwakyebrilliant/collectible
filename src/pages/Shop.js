/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';

import Try from '../assets/try.avif'
import profile from '../assets/profile.avif'

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

        
        
        <Footer />
    </div>
  )
}

export default Shop