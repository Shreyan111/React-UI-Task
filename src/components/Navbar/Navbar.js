import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <img
                                className="h-14 w-14 mt-10 ml-20"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden md:block justify-items-end mr-14">
                            <div className="ml-10 flex justify-items-end space-x-4">
                                <a
                                    href="#"
                                    className="text-black-300 hover:text-orange-500 px-3 py-2 rounded-md font-normal text-lg mt-8"
                                >
                                    Features
                                </a>

                                <a
                                    href="#"
                                    className="text-black-300 hover:text-orange-500 px-3 py-2 rounded-md font-normal text-lg mt-8"
                                >
                                    Offers & Rewards
                                </a>

                                <a
                                    href="#"
                                    className="text-black-300 hover:text-orange-500 px-3 py-2 rounded-md font-normal text-lg mt-8"
                                >
                                    Security
                                </a>

                                <a
                                    href="#"
                                    className="text-black-300 hover:text-orange-500 px-3 py-2 rounded-md font-normal text-lg mt-8"
                                >
                                    About
                                </a>

                                <a
                                    href="#"
                                    className="text-black-300 hover:text-orange-500 px-3 py-2 rounded-md font-normal text-lg mt-8"
                                >
                                    FAQ
                                </a>
                                <button className="bg-pink-900 hover:bg-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full px-5 py-2 mt-8">
                                    <div className="flex">
                                        <h2 className="text-white align-center">Reserve Now</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Features
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Offers & Rewards
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Security
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    FAQ
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Navbar;