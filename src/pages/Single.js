/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import Footer from '../components/Footer';

import Try from '../assets/try.avif';
import profile from '../assets/profile.avif';
import logo from '../assets/logo.png'

import ReactModal from 'react-modal';

function Single() {

    const handleGoBack = () => {
        window.history.back();
      };

    const [resell, setResell] = useState(false);

    const customStyles = {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 9999,
        },
        content: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: 'none',
          background: 'rgba(0, 0, 0, 0.75)',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: 0,
          outline: 'none',
          padding: 0,
        },
      };
    

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        // Close the modal and perform any additional actions
        setModalIsOpen(false);
      };

  return (
    <div className='bg-black p-8'>
       
            {/* navigate back icon */}
        <div className='flex'>
            <a 
            onClick={handleGoBack}
            className="inline-block cursor-pointer rounded-full border border-emerald-600 bg-emerald-600 p-3 text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500">

            <FaArrowCircleLeft className='lg:w-5 lg:h-5' />
            </a>
            <img src={logo} alt='logo' className='text-white h-8 w-8 lg:w-[35px] lg:h-[35px]' />
            <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>Collectibles.</h1>
        </div>

         {/* modal starts here */}
         <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <button className='bg-gray-100 text-black hover:bg-transparent hover:text-white m-4 px-2' onClick={closeModal}>X</button>
            <img
                alt="Tee"
                src={Try}
                className="w-full h-auto lg:h-screen object-contain"
            />

        </ReactModal>

        <section>
        <div className="relative pt-8 mx-auto max-w-screen-xl px-4">

            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
                <div className="relative mt-4">
                <img
                    alt="Tee"
                    src={Try}
                    className="aspect-square w-full rounded-xl object-cover lg:h-[540px]"
                    onClick={() => setModalIsOpen(true)}
                />
                </div>

                <h2 className="text-sm mt-4 mx-4 font-bold text-gray-100">
                    Similar Collectibles
                </h2>

                <ul className="flex gap-1">
                <li>
                    <img
                    alt="Tee"
                    src={Try}
                    className="lg:h-32 lg:w-32 h-16 w-16 rounded-md object-cover"
                    />
                </li>

                <li>
                    <img
                    alt="Tee"
                    src={Try}
                    className="lg:h-32 lg:w-32 h-16 w-16 rounded-md object-cover"
                    />
                </li>

                <li>
                    <img
                    alt="Tee"
                    src={Try}
                    className="lg:h-32 lg:w-32 h-16 w-16 rounded-md object-cover"
                    />
                </li>

                <li>
                    <img
                    alt="Tee"
                    src={Try}
                    className="lg:h-32 lg:w-32 h-16 w-16 rounded-md object-cover"
                    />
                </li>
                </ul>
            </div>

            <div className="lg:sticky lg:top-0">
                <form className="space-y-4 lg:pt-8">
                <div>
                    <span className="group flex shrink-0 items-center rounded-lg transition">
                        <span className="sr-only">Profile Image</span>
                        <img
                            alt="profile"
                            src={profile}
                            className="h-12 w-12 rounded-full object-cover"
                        />

                        <p className="ms-2 text-left text-xs">
                            <strong className="block text-white font-medium">Eric Frusciante</strong>
                            <span className="text-gray-500"> eric@frusciante.com </span>
                        </p>
                    </span>
                </div>

                <fieldset>
                <legend className="text-lg font-bold text-gray-100">Title</legend>

                    <div className="mt-2 flex flex-wrap gap-2">

                    <label for="material_wool" className="cursor-pointer">
                        <span
                        className="block rounded-full border text-gray-100 border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                        >
                        Image
                        </span>
                    </label>
                    </div>
                </fieldset>

                <div className="rounded border bg-gray-100 p-4">
                    <p className="text-sm">
                    <span className="block"> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Itaque praesentium cumque iure dicta incidunt est ipsam, officia
                        dolor fugitnatus?
                    </span>
                    </p>
                </div>

                <div className='flex'>
                    <p className="font-bold text-base bg-white p-2 rounded-e-full text-black">$19.99</p>
                </div>

                <a
                    type="submit"
                    className="w-full border border-gray-200 cursor-pointer rounded bg-gray-100 hover:bg-transparent hover:text-gray-100 hover:border hover:border-gray-100 px-6 justify-center flex py-3 text-sm font-bold uppercase tracking-wide text-black"
                >
                    Buy Collectible
                </a>

                {resell ? (
                           <a
                           type="submit"
                           onClick={() => setResell(!resell)}
                           className="w-full border border-gray-200 cursor-pointer rounded bg-gray-100 hover:bg-transparent hover:text-gray-100 hover:border hover:border-gray-100 px-6 justify-center flex py-3 text-sm font-bold uppercase tracking-wide text-black"
                       >
                           Cancel Resell
                       </a>
                        ) : (
                            <a
                            type="submit"
                            onClick={() => setResell(!resell)}
                            className="w-full border border-gray-200 cursor-pointer rounded bg-gray-100 hover:bg-transparent hover:text-gray-100 hover:border hover:border-gray-100 px-6 justify-center flex py-3 text-sm font-bold uppercase tracking-wide text-black"
                        >
                            Resell Collectible
                        </a>
                            )
                }

                {resell &&
                <div>
                <label
                    for="newprice"
                    className="relative w-full block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-gray-100"
                    >
                    <input
                        type="number"
                        id="newprice"
                        placeholder="New price"
                        className="peer h-8 w-full text-gray-100 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none sm:text-sm"
                    />

                    <span
                        className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                        New Price
                    </span>
                    </label>

                    <a
                    type="submit"
                    className="w-full mt-4 border border-gray-200 cursor-pointer rounded bg-gray-100 hover:bg-transparent hover:text-gray-100 hover:border hover:border-gray-100 px-6 justify-center flex py-3 text-sm font-bold uppercase tracking-wide text-black"
                >
                    Submit New Price
                </a>
                </div>
                }

                </form>
            </div>
                    
            <div className="lg:col-span-3">
                <div className="prose max-w-2xl">

                <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">
                    History
                </h2>
                </div>
            </div>
            
            </div>

            <div className="overflow-x-auto lg:max-w-4xl mb-16 mt-2 bg-black shadow-lg shadow-gray-700 rounded-md">
                <table className="min-w-full overflow-x-auto divide-y-2 divide-gray-100 text-sm">
                <thead className="ltr:text-left overflow-x-auto bg-gray-50 rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap p-2 text-sm text-gray-400">
                    PREVIOUS OWNERS
                    </th>
                    <th className="whitespace-nowrap p-2 text-sm text-gray-400">
                    OLD PRICE
                    </th>
                    <th className="whitespace-nowrap p-2 ext-sm text-gray-400">
                    NEW PRICE
                    </th>
                    <th className="whitespace-nowrap p-2 text-sm text-gray-400">
                    DATE ACQUIRED
                    </th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                <tr style={{height: 50}}>
                    <td className="whitespace-nowrap px-4 py-2 text-lg font-medium text-center text-gray-400">
                    0xF...y6b
                    </td>
                    <td className="whitespace-nowrap px-4 text-lg text-center text-gray-400">$15.99</td>
                    <td className="whitespace-nowrap px-4 text-lg text-center text-gray-400">$19.99</td>
                    <td className="whitespace-nowrap px-4 text-lg text-center text-gray-400">24/05/1995</td>
                </tr>
                
                </tbody>
            </table>
            </div>
        </div>
        </section>


        <Footer />

    </div>
  )
}

export default Single