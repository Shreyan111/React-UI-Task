import React from 'react';
import Pic14 from "../../assets/picture14.webp";

export const MiddlePage = () => {
    return (
        <>
            <section className='bg-[#97181a]'>
                <div className="grid grid-cols-2">
                    <div className="col-1 mt-36 mb-20 ml-32">
                        <h1 className='mt-3 font-semibold text-5xl text-white mb-10'>We are here to <br />rescue you from</h1>
                        <ul className='text-white'>
                            <li className='mt-5'>1) Dullness of boring cards</li>
                            <li className='mt-5'>2) Overspendings on your credit cards</li>
                            <li className='mt-5'>3) Exposing your debit cards and bank accounts for payments</li>
                        </ul>
                        <button className="bg-black hover:bg-white hover:text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full px-14 py-3 mt-10">
                            <h2 className="text-xl text-white hover:text-black">Get Secured</h2>
                        </button>
                    </div>
                    <div className="mt-10 mb-20 col-1">
                        <img src={Pic14} alt='image1' className='h-full' />
                    </div>
                </div>
            </section>
        </>
    )
}
