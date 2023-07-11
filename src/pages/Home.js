/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navigation from '../components/Navigation'

function Home() {
  return (
    <div className='bg-black'>
        
        <Navigation />

        <div className="pt-32 lg:flex mx-auto justify-center">
  <section>
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <img 
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
        alt=""
        className="grid object-cover w-full aspect-square rounded place-content-center" />
         
          

        <div className="lg:col-span-2 lg:py-8">
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <a href="#" className="block group">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                  alt=""
                  className="object-cover w-full rounded aspect-square"
                />

              
              </a>
            </li>

            <li>
              <a href="#" className="block group">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                  alt=""
                  className="object-cover w-full rounded aspect-square"
                />

                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>




    </div>
  )
}

export default Home