import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 lg:gap-32 bg-red-50">
                <div className="col-1 mb-20">
                    <div className='flex'>
                        <img
                            className="h-14 w-14 mt-10 ml-20"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                        />
                        <h2 className='text-bold text-3xl mt-12 ml-3'>Slay<span className='font-bold'>Pay</span></h2>
                    </div>
                    <h2 className='ml-20 mt-4'>SlayPay is India's coolest payment card that you can customize the way you want. Use the SlayPay app to design your card with images, quotes, characters and more. Get revolutionary banking features with evolutionary security mechanisms.</h2>
                    <h1 className='font-bold mt-8 text-2xl ml-20'>Reach Us</h1>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-20 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <h2 className='text-gray-600 ml-2 mt-3'>care@slaypay.app</h2>
                    </div>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-20 mt-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        <h2 className='text-gray-600 ml-2 mt-3'>SlayPay Corporate Office<br /> 3rd Floor, Magnum Towers 2, <br />Gurgaon - 122011</h2>
                    </div>
                    <h2 className='ml-20 font-bold mt-8 text-2xl'>Legal</h2>
                    <h3 className='ml-20 text-gray-600'>Terms & Conditions</h3>
                    <h3 className='ml-20 text-gray-600'>Privacy Policy</h3>
                    <h3 className='ml-20 text-gray-600'>Return & Refund</h3>
                </div>
                <div className="col-1 mb-20">
                    <div className='ml-32'>
                        <h2 className='text-2xl font-bold text-black mt-10'>Contact Us</h2>
                    </div>
                    <div>
                        <input className="shadow appearance-none border rounded-3xl w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4 border-gray-400 border-2 hover:border-black xl:ml-10" type="text" placeholder="First Name"></input>
                        <input className="shadow appearance-none border rounded-3xl w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-6 border-gray-400 border-2 hover:border-black xl:ml-10" type="text" placeholder="Email"></input>
                        <textarea className="shadow appearance-none border rounded-3xl w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-6 border-gray-400 border-2 hover:border-black xl:ml-10" type="text" placeholder="Type your message here..." rows="6"></textarea>
                    </div>
                    <div>
                        <button className="bg-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full px-44 py-3 mt-10 xl:ml-10">
                            <h2 className="text-xl text-white">Submit</h2>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
