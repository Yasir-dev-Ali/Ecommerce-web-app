import React from 'react'
import img from '../Home/Home.svg'
import Product from '../Product/Product'

const Home = () => {
  return (
   <>
   
   <div class="flex flex-col justify-center h-full py-12">
                <div class="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
                    <div class="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8">
                        <h1 class="tracking-wide text-purple-600 text-2xl mb-6">
                            New Thing: <span class="text-gray-800 font-bold tracking tracking-widest">AWE.SOME</span>
                        </h1>
                        <h2 class="text-6xl font-bold text-gray-800">Think about it!</h2>
                        <p class="text-lg text-gray-600 mt-4">AWE.SOME is a new way to think about things. It's a new way to think about the  to think about the things you don't even know you don
                        </p>
                        <p class="font-bold tracking-widest text-4xl">...think about it!</p>
                        {/* Buttone */}
                        <div class="mt-8">
                            <a href="#" class="bg-purple-600 text-white font-bold py-2 px-4 rounded-full">Get Started</a>

                    </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <img src={img} alt="AWE.SOME header"/>
                    </div>
                </div>
            </div>
            <Product/>
   
   </>
  )
}

export default Home