import React, { useState } from "react";
export default function IndexPage() {
    const[show,setshow]=useState(false)
    return (
        <>
            {/* Filter */}
            <div className="lg:w-1/3">
                <h4 className="text-xl font-normal pt-1.5 dark-gray">‘OnePlus 5T’ in Mobile phones</h4>
                <div className="bg-light-gray mt-6 p-5">
                    <h4 className="text-xl font-semibold dark-gray pt-1.5">Filters</h4>
                    <div className="flex items-center justify-between mt-8 mb-2">
                        <h4 className="text-xl font-semibold dark-gray">Categories</h4>
                        <div  className="cursor-pointer" onClick={()=>setshow(!show)}>
                            {show ?<svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon  block icon-tabler icon-tabler-chevron-down" id="andicators" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" id="andicators1" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 15 12 9 18 15" />
                            </svg>}
                        </div>
                    </div>
                    <div>
                        {show && <ul className="cursor-pointer dark-gray" >
                            <li className="mt-5 mb-4 text-base hover:opacity-75">
                                <a> All categories</a>
                            </li>
                            <li className="mb-4 text-base font-semibold dark-blue hover:opacity-75">
                                <a>Mobile phones</a>
                            </li>
                            <li className="mb-4 text-base hover:opacity-75">
                                <a> Tablets</a>
                            </li>
                            <li className="mb-6 text-base hover:opacity-75">
                                <a> Accessories</a>
                            </li>
                        </ul>}
                    </div>
                    <hr />
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold dark-gray">Location</h4>
                        <div>
                            <ul className="cursor-pointer dark-gray">
                                <li className="mt-5 mb-4 text-base hover:opacity-75">
                                    <a> San Diego</a>
                                </li>
                                <li className="mb-4 text-base hover:opacity-75">
                                    <a> Orange County</a>
                                </li>
                                <li className="mb-4 text-base hover:opacity-75">
                                    <a> Washington</a>
                                </li>
                                <li className="mb-6 text-base hover:opacity-75">
                                    <a> Accessories</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex w-3/5 items-center relative border border-light-gray bg-light-gray">
                            <div className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={12} cy={11} r={3} />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                            </div>
                            <select className="w-full focus:outline-none appearance-none dark-gray bg-light-gray">
                                <option>Select location...</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg " className="icon icon-tabler icon-tabler-chevron-down absolute pointer-events-none right-0 mr-2" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        <hr className="my-6" />
                        <div className="mb-24">
                            <h4 className="text-xl font-semibold dark-gray">Price range</h4>
                            <div className="mt-6">
                                <div className="flex items-center">
                                    <div className="flex flex-col w-24">
                                        <label htmlFor="Price" className="text-base font-normal leading-tight mb-2 dark-gray">
                                            Minimum
                                        </label>
                                        <div className="relative">
                                            <div className="absolute light-gray flex items-center pl-2 h-full cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dollar" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                                                    <path d="M12 3v3m0 12v3" />
                                                </svg>
                                            </div>
                                            <input id="min" className="focus:outline-none w-full font-normal h-8 flex items-center pl-8 bg-light-gray text-xs border-light-gray rounded border" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-24 ml-8">
                                        <label htmlFor="Price" className="text-base font-normal leading-tight mb-2 dark-gray">
                                            Maximum
                                        </label>
                                        <div className="relative">
                                            <div className="absolute light-gray flex items-center pl-2 h-full cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dollar" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                                                    <path d="M12 3v3m0 12v3" />
                                                </svg>
                                            </div>
                                            <input id="min" className="focus:outline-none w-full font-normal h-8 flex items-center bg-light-gray pl-8 text-xs border-light-gray rounded border" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Filter */}
        </>
    );
}
