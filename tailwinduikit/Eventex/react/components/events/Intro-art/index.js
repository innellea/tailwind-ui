import React, { useState } from "react";
export default function IndexPage() {
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(false);
    const [show2, setshow2] = useState(false);
    return (
        <>
            <div className="mt-4 md:mt-8 w-full">
                <div className="flex">
                    <div className="mr-2">
                        <p className="text-base font-medium text-right text-gray-800">11:35</p>
                        <p className="text-sm font-medium text-right text-gray-300 mt-2">13:05</p>
                    </div>
                    <div className="ml-2 w-full pl-4 border-l-4 border-gray-200">
                        <div className="py-4 px-4 bg-gradient-to-br w-full from-red-400 to-red-400 border rounded-sm border-white">
                            <div className="flex items-center justify-between">
                                <p className="text-sm md:text-base font-bold leading-none text-white">Introduction to Art</p>
                                <div className="relative">
                                    <div className={show ? "mt-5 absolute right-0  shadow-md z-30 w-32" : "hidden"}>
                                        <ul className="bg-white shadow rounded py-1">
                                            <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                        </ul>
                                    </div>
                                    <button>
                                        <svg className="dropbtn" onClick={() => setshow(!show)} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M8.00004 8.66634C8.36823 8.66634 8.66671 8.36786 8.66671 7.99967C8.66671 7.63148 8.36823 7.33301 8.00004 7.33301C7.63185 7.33301 7.33337 7.63148 7.33337 7.99967C7.33337 8.36786 7.63185 8.66634 8.00004 8.66634Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.00004 13.3333C8.36823 13.3333 8.66671 13.0349 8.66671 12.6667C8.66671 12.2985 8.36823 12 8.00004 12C7.63185 12 7.33337 12.2985 7.33337 12.6667C7.33337 13.0349 7.63185 13.3333 8.00004 13.3333Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.00004 4.00033C8.36823 4.00033 8.66671 3.70185 8.66671 3.33366C8.66671 2.96547 8.36823 2.66699 8.00004 2.66699C7.63185 2.66699 7.33337 2.96547 7.33337 3.33366C7.33337 3.70185 7.63185 4.00033 8.00004 4.00033Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p className="text-xs leading-3 text-white mt-3">An overview of what art is and how we perceive it in the contemporary world</p>
                            <div className="flex items-center mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.00002 13.3337C10.9455 13.3337 13.3334 10.9458 13.3334 8.00033C13.3334 5.05481 10.9455 2.66699 8.00002 2.66699C5.0545 2.66699 2.66669 5.05481 2.66669 8.00033C2.66669 10.9458 5.0545 13.3337 8.00002 13.3337Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 1.33301V2.66634" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 13.333V14.6663" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.3333 8H14.6666" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.33331 8H2.66665" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xs text-white ml-3">Room 6-205</p>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="rounded-full flex justify-center items-center">
                                    <img className="w-4 h-4 object-cover object-center" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" alt="profile" />
                                </div>
                                <p className="text-xs text-white ml-3">Ashley Wilson</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-2 pt-6">
                        <p className="text-base font-medium text-right text-gray-800">11:35</p>
                        <p className="text-sm font-medium text-right text-gray-300 mt-2">13:05</p>
                    </div>
                    <div className="ml-2 w-full pl-4 border-l-4 border-gray-200">
                        <div className="py-4 mt-6 px-4 bg-gray-100 w-full border rounded-sm border-white">
                            <div className="flex items-center justify-between">
                                <p className="text-sm md:text-base font-bold leading-none text-gray-700">Introduction to Art</p>
                                <div className="relative">
                                    <div className={show1 ? "mt-5 absolute right-0  shadow-md z-30 w-32" : "hidden"}>
                                        <ul className="bg-white shadow rounded py-1">
                                            <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                        </ul>
                                    </div>
                                    <button>
                                        <svg className="dropbtn" onClick={() => setshow1(!show1)} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M8.00004 8.66634C8.36823 8.66634 8.66671 8.36786 8.66671 7.99967C8.66671 7.63148 8.36823 7.33301 8.00004 7.33301C7.63185 7.33301 7.33337 7.63148 7.33337 7.99967C7.33337 8.36786 7.63185 8.66634 8.00004 8.66634Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.00004 13.3333C8.36823 13.3333 8.66671 13.0349 8.66671 12.6667C8.66671 12.2985 8.36823 12 8.00004 12C7.63185 12 7.33337 12.2985 7.33337 12.6667C7.33337 13.0349 7.63185 13.3333 8.00004 13.3333Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.00004 4.00033C8.36823 4.00033 8.66671 3.70185 8.66671 3.33366C8.66671 2.96547 8.36823 2.66699 8.00004 2.66699C7.63185 2.66699 7.33337 2.96547 7.33337 3.33366C7.33337 3.70185 7.63185 4.00033 8.00004 4.00033Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p className="text-xs leading-3 text-gray-700 mt-3">An overview of what art is and how we perceive it in the contemporary world</p>
                            <div className="flex items-center mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.00002 13.3337C10.9455 13.3337 13.3334 10.9458 13.3334 8.00033C13.3334 5.05481 10.9455 2.66699 8.00002 2.66699C5.0545 2.66699 2.66669 5.05481 2.66669 8.00033C2.66669 10.9458 5.0545 13.3337 8.00002 13.3337Z" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 1.33301V2.66634" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 13.333V14.6663" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.3333 8H14.6666" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.33331 8H2.66665" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xs text-gray-700 ml-3">Room 6-205</p>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="rounded-full flex justify-center items-center">
                                    <img className="w-4 h-4 object-cover object-center" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" alt="profile" />
                                </div>
                                <p className="text-xs text-gray-700 ml-3">Ashley Wilson</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-2 pt-6">
                        <p className="text-base font-medium text-right text-gray-800">11:35</p>
                        <p className="text-sm font-medium text-right text-gray-300 mt-2">13:05</p>
                    </div>
                    <div className="ml-2 w-full pl-4 border-l-4 border-gray-200">
                        <div className="py-4 mt-6 px-4 bg-gray-100 w-full border rounded-sm border-white">
                            <div className="flex items-center justify-between">
                                <p className="text-sm md:text-base font-bold leading-none text-gray-700">Introduction to Art</p>
                                <div className="relative">
                                    <div className={show2 ? "mt-5 absolute right-0  shadow-md z-30 w-32" : "hidden"}>
                                        <ul className="bg-white shadow rounded py-1">
                                            <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                        </ul>
                                    </div>
                                    <button>
                                        <svg className="dropbtn" onClick={() => setshow2(!show2)} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M8.00004 8.66634C8.36823 8.66634 8.66671 8.36786 8.66671 7.99967C8.66671 7.63148 8.36823 7.33301 8.00004 7.33301C7.63185 7.33301 7.33337 7.63148 7.33337 7.99967C7.33337 8.36786 7.63185 8.66634 8.00004 8.66634Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.00004 13.3333C8.36823 13.3333 8.66671 13.0349 8.66671 12.6667C8.66671 12.2985 8.36823 12 8.00004 12C7.63185 12 7.33337 12.2985 7.33337 12.6667C7.33337 13.0349 7.63185 13.3333 8.00004 13.3333Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.00004 4.00033C8.36823 4.00033 8.66671 3.70185 8.66671 3.33366C8.66671 2.96547 8.36823 2.66699 8.00004 2.66699C7.63185 2.66699 7.33337 2.96547 7.33337 3.33366C7.33337 3.70185 7.63185 4.00033 8.00004 4.00033Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p className="text-xs leading-3 text-gray-700 mt-3">An overview of what art is and how we perceive it in the contemporary world</p>
                            <div className="flex items-center mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.00002 13.3337C10.9455 13.3337 13.3334 10.9458 13.3334 8.00033C13.3334 5.05481 10.9455 2.66699 8.00002 2.66699C5.0545 2.66699 2.66669 5.05481 2.66669 8.00033C2.66669 10.9458 5.0545 13.3337 8.00002 13.3337Z" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 1.33301V2.66634" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 13.333V14.6663" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.3333 8H14.6666" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.33331 8H2.66665" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xs text-gray-700 ml-3">Room 6-205</p>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="rounded-full flex justify-center items-center">
                                    <img className="w-4 h-4 object-cover object-center" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" alt="profile" />
                                </div>
                                <p className="text-xs text-gray-700 ml-3">Ashley Wilson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
