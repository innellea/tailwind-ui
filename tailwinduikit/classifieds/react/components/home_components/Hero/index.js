import React, { useState } from "react";
export default function Home() {
    const[show,setShow]=useState(false)
    return (
        <>
            <div>
                <div className="mx-auto container">
                    {/* Hero */}
                    <div className="flex w-full flex-col items-center justif-center py-16 lg:px-0 px-4">
                        <h1 className="lg:text-6xl text-3xl dark-blue font-bold text-center">What are you looking for?</h1>
                        <h2 className="lg:text-2xl text-lg light-gray pt-6 text-centerlg:mb-0 mb-4">Mobile phones, laptops, automobiles, houses and much more.</h2>
                        <div className="flex flex-col w-full sm:w-1/2 md:ml-4 mt-3 md:mt-10">
                            <div className="relative w-full">
                                <div className="lg:absolute bg-chat lg:border-r lg:border-t lg:border-b lg:mb-0 mb-4 lg:py-5 py-3 border-dark-gray cursor-pointer flex items-center justify-between pr-3 right-0 h-full z-30" onClick={()=>setShow(!show)}>
                                    <p className="lg:text-2xl text-lg leading-tight tracking-normal dark-gray px-4">All Categories</p>
                                    {show ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up"  width={24} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 15 12 9 18 15" />
                                    </svg>:<svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon  block icon-tabler icon-tabler-chevron-down"  width={24} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>}
                                    {show && <ul className="bg-white w-64 shadow-lg p-4  duration-300 opacity-100 mt-56 absolute z-40 -ml-16" id="listHolder2">
                                        <li className="hover:opacity-75 py-3 text-base">All Category</li>
                                        <li className="hover:opacity-75 py-3 text-base">Mobile Phones</li>
                                        <li className="hover:opacity-75 py-3 text-base">Tablets</li>
                                    </ul>}
                                </div>
                                <div className="absolute inset-0 lg:mt-0 mt-8 dark-gray flex items-center pl-6 h-full lg:py-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                                        <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M24.5 24.5L17.5 17.5" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input id="search" className="w-full text-light-gray focus:outline-none focus:border font-normal pl-16 pr-24 lg:py-5 py-2 flex items-center text-2xl border-dark-gray rounded border" placeholder="Search" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center pt-12">
                            <button className="py-4 px-8 bg-light-blue text-white lg:text-2xl border border-dark-blue hover:opacity-75 text-lg mr-4 focus:outline-none">Search</button>
                            <button className="py-4 px-8 bg-transparent border border-dark-blue dark-blue text-light-blue hover:opacity-75 lg:text-2xl text-lg focus:outline-none">Advance Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
