import React,{useState} from "react";
export default function IndexPage() {
    const[show,setShow]=useState(false)
    return (
        <>
            <div className="mx-auto container">
                {/* search */}
                {/* search */}
                <div className="lg:flex w-full items-center py-2 lg:pt-16 lg:px-0 px-4">
                    <div className="w-full lg:w-1/4">
                        <div className="relative w-full border-dark-gray border z-0">
                            <div className="absolute bg-chat border-r border-t border-b bg-chat-border cursor-pointer text-gray-700 flex items-center right-0 h-full lg:p-4 p-3" onClick={() =>setShow(!show)}>
                                {show ? <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" id="andicators5" width={24} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg> :<svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon  block icon-tabler icon-tabler-chevron-down" id="andicators4" width={24} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                                }
                                {show &&
                                <ul className="bg-white p-4 shadow-lg  duration-300 opacity-100 mt-40 absolute z-40 -ml-20" id="listHolder2">
                                <li className="hover:opacity-75 mt-1">All Category</li>
                            </ul>}
                            </div>
                            <div className="absolute text-black flex items-center pl-6 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 28 28" fill="none">
                                    <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24.5 24.5L17.5 17.5" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input id="search" className="w-full text-light-gray focus:outline-none focus:border font-normal pl-16 pr-16 py-3 flex items-center text-sm placeholder-black" placeholder="Search" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:ml-8 lg:mt-0 mt-4">
                        <button className="py-3 px-6 bg-purple border border-dark-blue hover:opacity-75 text-white text-sm mr-4 focus:outline-none f-s-s-p">Search</button>
                        <button className="py-3 px-6 bg-transparent border border-dark-blue purple text-sm focus:outline-none hover:opacity-75 f-s-s-p">Advance Search</button>
                    </div>
                </div>
                {/* search */}

            </div>
        </>
    );
}
