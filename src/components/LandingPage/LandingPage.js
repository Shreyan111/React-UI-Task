import React from 'react';
import Pic1 from "../../assets/picture1.gif";

export const LandingPage = () => {
    return (
        <>
            <section className='bg-red-50'>
                <div className="grid lg:grid-cols-2">
                    <div className="col-1 mt-36 ml-20 lg:ml-32">
                        <h2 className='font-normal text-2xl lg:text-3xl'>Introducting Slay<span className='font-bold'>Pay</span></h2>
                        <h1 className='mt-3 font-bold text-4xl lg:text-6xl mb-10'>India's coolest <br />payment card</h1>
                        <span className='font-normal text-2xl lg:text-3xl'>Pay in style with a card <br></br> designed by</span>
                        <span className='font-normal text-3xl font-script text-red-500'> you</span>
                        <br />
                        <button className="bg-pink-900 hover:bg-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full px-14 py-4 mt-10">
                            <div className="flex">
                                <h2 className="text-white text-xl">Reserve Now</h2>
                            </div>
                        </button>
                    </div>
                    <div className="mt-16 mb-10 col-1">
                        <img src={Pic1} alt='image1' className='h-full' />
                    </div>
                </div>
            </section>
        </>
    )
}
