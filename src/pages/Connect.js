/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';

import logo from '../assets/logo.png'

function Connect() {

    const [identityname, setIdentityName] = useState('');

    const handleGoBack = () => {
        window.history.back();
      };

  return (
    <div className='bg-black p-8 h-screen'>

           {/* navigate back icon */}
           <div className='flex justify-start items-center'>
            <a 
            onClick={handleGoBack}
            className="inline-block cursor-pointer rounded-full border border-emerald-600 bg-emerald-600 p-3 text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500">

            <FaArrowCircleLeft className='lg:w-5 lg:h-5' />
            </a>
            <img src={logo} alt='logo' className='text-white h-8 w-8 lg:w-[35px] lg:h-[35px]' />
            <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>Collectibles.</h1>
        </div>
        
        <article className="mx-auto max-w-xl rounded-xl border border-gray-700 bg-black mt-8 p-4">
            <div className="flex items-center gap-4">
                <img
                alt="Developer"
                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                <h3 className="text-lg font-medium text-white">
                {identityname ? (
                        <h3 className="text-lg font-medium text-white">
                          {identityname}
                        </h3>
                        ) : (
                          <h3 className="text-lg font-medium text-white">
                          Identity Name
                        </h3>
                        )}
                </h3>
                <div className="flow-root">
                    <ul className="-m-1 flex flex-wrap">
                    <li className="p-1 leading-none">
                        <a className="text-xs font-medium text-gray-300"> 
                            0x7fv7...9BFnb
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <ul className="mt-4 space-y-2">
                <li>
                    <a
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-emerald-600"
                    >

                        <label
                        for="identityname"
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-gray-200 focus-within:ring-1 focus-within:ring-gray-200"
                    >
                        <input
                        type="text"
                        id="identityname"
                        className="peer h-14 w-full text-white px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="eg. John Doe"
                        value={identityname} 
                        onChange={(e) => setIdentityName(e.target.value)}
                        />

                        <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-emerald-600 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                        eg. John Doe
                        </span>
                    </label>
                    </a>
                </li>

                <li>
                    <a
                        type="submit"
                        className="w-full border border-emerald-600 cursor-pointer rounded-lg bg-emerald-600 hover:bg-transparent hover:text-gray-100 hover:border hover:border-gray-100 px-6 justify-center flex py-3 text-sm font-bold uppercase tracking-wide text-white"
                    >
                        Set Identity
                    </a>
                </li>

            </ul>
        </article>

    </div>
  )
}

export default Connect