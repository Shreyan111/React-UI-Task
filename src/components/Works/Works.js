import React from 'react';
import Pic2 from "../../assets/picture2.gif";
import Pic3 from "../../assets/picture3.gif";
import Pic4 from "../../assets/picture4.gif";
import Pic5 from "../../assets/picture5.webp";
import Pic6 from "../../assets/picture6.webp";
import Pic7 from "../../assets/picture7.webp";

export const Works = () => {
    return (
        <>
            <section className='bg-black'>
                <div className='flex justify-center'>
                    <div className='mt-10 mb-20'>
                        <h1 className='text-5xl font-bold text-white'>How it works?</h1>
                    </div>
                </div>
                <div class="grid lg:grid-cols-3 lg:gap-10">
                    <div class="flex justify-center text-center align-center">
                        <div>
                            <div className='flex justify-center text-center align-center'>
                                <h2 className='text-white text-3xl font-bold mt-4 mr-1 ml-5'>Design</h2>
                                <img src={Pic4} alt='image4' className='h-10 mt-4' />
                            </div>
                            <h3 className='text-white text-base font-normal mt-5'>your card the way you want with <br /> the SlayPay app. <br />(Go crazy!)</h3>
                            <div className='flex justify-center'>
                                <img src={Pic5} alt='image5' className='mt-14 justify-center text-center align-center mb-24' />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center text-center align-center">
                        <div>
                            <div className='flex justify-center text-center align-center ml-5'>
                                <h2 className='text-white text-3xl font-bold mt-4 mr-1'>Load</h2>
                                <img src={Pic2} alt='image2' />
                            </div>
                            <h3 className='text-white text-base font-normal mt-5'>funds using cards, banks & UPI <br /> apps to securely spend with <br /> SlayPay.</h3>
                            <div className='flex justify-center'>
                                <img src={Pic6} alt='image6' className='mt-14 justify-center text-center align-center mb-24' />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center text-center align-center">
                        <div>
                            <div className='flex justify-center text-center align-center'>
                                <h2 className='text-white text-3xl font-bold mt-4 mr-1 ml-5'>Slay</h2>
                                <img src={Pic3} alt='image3' />
                            </div>
                            <h3 className='text-white text-base font-normal mt-5'>while you pay using your cool <br /> card & earn rewards on each <br /> spend!</h3>
                            <div className='flex justify-center'>
                                <img src={Pic7} alt='image7' className='mt-14 justify-center text-center align-center mb-24' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
