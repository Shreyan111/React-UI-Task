import React from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './Animation.css';
import Pic15 from "../../assets/picture15.webp";
import Pic16 from "../../assets/picture16.webp";
import Pic17 from "../../assets/picture17.webp";
import Pic18 from "../../assets/picture18.webp";
import Pic19 from "../../assets/picture19.webp";
import Pic20 from "../../assets/picture20.webp";
import Pic21 from "../../assets/picture21.webp";
import Pic22 from "../../assets/picture22.webp";
import Pic23 from "../../assets/picture23.webp";
import Pic24 from "../../assets/picture24.webp";
import Pic25 from "../../assets/picture25.webp";
import Pic26 from "../../assets/Picture26.webp";

export const Animation = () => {
    return (
        <>
            <div className='bg-red-100'>
                <div>
                    <div className='flex justify-center text-center'>
                        <h2 className='text-red-400 font-bold text-5xl mt-10'>#SpendsWithBenefits</h2>
                    </div>
                    <div className='flex justify-center text-center'>
                        <h3 className='text-2xl mt-4'>Get exclusive rewards, offers & cashbacks from 1500+ brands</h3>
                    </div>
                    <div className='flex justify-center text-center'>
                        <img src={Pic15} alt='img' className='float-center mt-32 h-80 w-12/12' />
                    </div>
                    <div className='flex justify-center text-center'>
                        <h2 className='mt-10'>Checkout early bird offers</h2>
                    </div>
                    <div className='flex justify-center text-center'>
                        <button className="bg-red-400 hover:bg-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full px-14 py-4 mt-2 mb-20">
                            <div className="flex">
                                <h2 className="text-white text-xl">Get Rewarded</h2>
                            </div>
                        </button>
                    </div>
                </div>

                <AnimatedOnScroll animationIn="bounceInLeft">
                    <div className='relative top-[-380px]'>
                        <div className='ani transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-1/4 absolute'>
                            <img src={Pic16} alt='img' className='w-12/12 h-12/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-2/3 absolute'>
                            <img src={Pic17} alt='img' className='w-11/12 h-11/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 bottom-2/4 left-[75%] absolute'>
                            <img src={Pic18} alt='img' className='w-11/12 h-11/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-[83%] absolute'>
                            <img src={Pic19} alt='img' className='w-11/12 h-11/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-[18%] top-[-80px] absolute'>
                            <img src={Pic20} alt='img' className='w-12/12 h-12/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-[45%] top-[-270px] absolute'>
                            <img src={Pic21} alt='img' className='w-12/12 h-12/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-[30%] top-[-200px] absolute'>
                            <img src={Pic22} alt='img' className='w-11/12 h-11/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-[60%] top-[-220px] absolute'>
                            <img src={Pic23} alt='img' className='w-11/12 h-11/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-[80%] top-[-275px] absolute'>
                            <img src={Pic24} alt='img' className='w-12/12 h-12/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-[15%] top-[-270px] absolute'>
                            <img src={Pic25} alt='img' className='w-12/12 h-12/12' />
                        </div>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12/12 h-12/12 left-[8%] absolute'>
                            <img src={Pic26} alt='img' className='w-10/12 h-10/12' />
                        </div>
                    </div>
                </AnimatedOnScroll>
            </div>
        </>
    )
}
