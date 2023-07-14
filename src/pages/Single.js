/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import Footer from '../components/Footer';

import Try from '../assets/try.avif';
import profile from '../assets/profile.avif';

function Single() {

    const handleGoBack = () => {
        window.history.back();
      };

  return (
    <div className='bg-black p-8'>

       
            {/* navigate back icon */}
        <div>
            <a 
            onClick={handleGoBack}
            className="inline-block cursor-pointer rounded-full border border-emerald-600 bg-emerald-600 p-3 text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500">

            <FaArrowCircleLeft className='lg:w-5 lg:h-5' />
            </a>
        </div>

        <section>
        <div className="relative mx-auto max-w-screen-xl px-4">

            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
                <div className="relative mt-4">
                <img
                    alt="Tee"
                    src={Try}
                    className="aspect-square w-full rounded-xl object-cover lg:h-[540px]"
                />
                </div>

                <ul className="mt-1 flex gap-1">
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

                    <div className="mt-2 flex flex-wrap gap-2">
                    <legend className="text-lg font-bold text-gray-100">Title</legend>

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

                <div>
                    <p className="text-xl text-gray-100 font-bold">$19.99</p>
                </div>

                <a
                    type="submit"
                    className="w-full cursor-pointer rounded bg-gray-100 hover:bg-transparent hover:text-gray-100 hover:border hover:border-gray-100 px-6 justify-center flex py-3 text-sm font-bold uppercase tracking-wide text-black"
                >
                    Buy Collectible
                </a>
                </form>
            </div>

            <div className="lg:col-span-3">
                <div className="prose max-w-2xl">
                <p className='text-gray-100'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam
                    eos iusto repellat blanditiis voluptate aspernatur, quae nemo
                    exercitationem cum debitis! Sint consectetur laborum tempora
                    repellat odit. Impedit quasi reprehenderit harum illum sequi
                    provident soluta cum quisquam odit possimus? Officia illum saepe
                    magnam nostrum, officiis placeat iure itaque cumque voluptate?
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>


        <Footer />

    </div>
  )
}

export default Single