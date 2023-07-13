/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import '../utils/animations.css'
import Try from '../assets/try.avif'
import profile from '../assets/profile.avif'
import images2 from '../assets/images2.svg';

function Home() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items to display per page

  // Your data array with actual items
  const data = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugitnatus?',
      media: Try,
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugitnatus?',
      media: profile,
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugitnatus?',
      media: Try,
    },
    {
      id: 4,
      title: 'Item 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugitnatus?',
      media: profile,
    },
    {
      id: 5,
      title: 'Item 5',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugitnatus?',
      media: Try,
    },
  ];

  // Calculate the index range of items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='bg-black' 
    style={{ 
    backgroundImage: `url(${images2})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}
    >
        
        <Navigation />
        

        <div className="pt-32 lg:flex mx-auto justify-center">
          <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">

              <a href="#" className="bg-gray-100 flex rounded">
                <img
                  src={Try}
                  alt=""
                  className="grid object-cover w-full aspect-square rounded place-content-center lg:hover:transform lg:hover:-rotate-3 lg:hover:translate-x-2 lg:hover:translate-y-2"
                />
              </a>

                  

                <div className="lg:col-span-2 lg:py-8">
                  <ul className="grid grid-cols-2 gap-4">
                    <li>
                      <a href="#" className="bg-gray-100 flex rounded">
                        <img
                          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                          alt=""
                          className="object-cover w-full rounded aspect-square lg:hover:transform lg:hover:-rotate-3 lg:hover:translate-x-2 lg:hover:translate-y-2"
                        />

                      
                      </a>
                    </li>

                    <li>
                      <a href="#" className="bg-gray-100 flex rounded">
                        <img
                         src={profile}
                         alt=""
                          className="object-cover w-full rounded aspect-square lg:hover:transform lg:hover:-rotate-3 lg:hover:translate-x-2 lg:hover:translate-y-2"
                        />

                        
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                {/* circles here */}
                <div className="absolute top-20 right-0 mr-16 flex justify-end items-end">
                  <div className="lg:h-32 lg:w-32 rounded-full bg-gray-100 shadow-slate-400 shadow-md transform rotate-45 animate-circle" />
                </div>
                <div className="absolute bottom-0 -left-0 flex justify-end items-end">
                  <div className="lg:w-24 lg:h-24 rounded-full bg-gray-100 shadow-slate-400 shadow-md transform rotate-45 animate-circle -ml-10" />
                </div>
          </section>
        </div>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
                <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">
                    New Collectibles
                </h2>

                <p className="mt-4 max-w-md text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                    praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                    natus?
                </p>
              </header>

              <div className="bg-black shadow-lg shadow-gray-700 rounded-md h-full">
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {currentItems.map((item) => (
                  <li key={item.id}>
                    <a href="#" className="group relative bg-black">
                    <img
                            alt="Developer"
                            src={item.media}
                            className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 pb-8"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">
                                {item.title}
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                <p className="text-sm text-white">
                                    {item.description}
                                </p>
                                </div>
                            </div>
                            </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex justify-end">
                {data.length > itemsPerPage && (
                  <ul className="pagination flex m-4">
                    {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                      <li
                        key={index}
                        className={`px-3 py-1 mx-0.5 cursor-pointer rounded-full ${
                          currentPage === index + 1 ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>
        </section>


      <Footer />

    </div>
  )
}

export default Home