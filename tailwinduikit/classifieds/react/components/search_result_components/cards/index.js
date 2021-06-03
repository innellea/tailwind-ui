import React, { useState } from "react";
import Filters from "../filters/index";
import SearchResult from "../search_result/index";
import SearchAlternative from "../search_alternative_view/index";
export default function IndexPage() {
    const [show, setShow] = useState("");
    return (
        <>
            <div className="container mx-auto">
                <h4 className="light-gray text-xs font-normal lg:pt-24 pt-8 lg:px-0 px-4">Home</h4>
                <div className="lg:flex lg:px-0 px-4">
                    <Filters />

                    <div className="w-full lg:pl-16 lg:mt-0 mt-8">
                        <div className="lg:flex items-center justify-between">
                            <div>
                                <h4 className="text-xl font-normal dark-gray">Search results (234)</h4>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center lg:border-l lg:border-r border-gray-300 lg:py-0 lg:px-6 mr-6">
                                    <p className="text-base light-gray" id="page-view">
                                        Viewing 1 - 20 of 60
                                    </p>
                                    <a className="light-gray ml-2 border-transparent border cursor-pointer rounded" onclick="pageView(false)">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                    </a>
                                    <a className="light-gray border-transparent border rounded focus:outline-none cursor-pointer" onclick="pageView(true)">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="9 6 15 12 9 18" />
                                        </svg>
                                    </a>
                                </div>

                                <div onClick={() => setShow(!show)}>
                                    {show ? (
                                        <div className=" flex items-center border-gray-200 border w-full rounded mt-3 md:mt-0">
                                            <a className="text-indigo-700 p-2 bg-gray-200 border border-transparent rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                                </svg>
                                            </a>
                                            <a className="text-gray-600 p-2 border-transparent border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-columns" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <rect x={4} y={4} width={16} height={16} rx={2} />
                                                    <line x1={12} y1={4} x2={12} y2={20} />
                                                </svg>
                                            </a>
                                        </div>
                                    ) : (
                                        <div className=" flex items-center border-gray-200 border w-full rounded mt-3 md:mt-0">
                                            <a className="text-gray-600 p-2 border-transparent border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                                </svg>
                                            </a>
                                            <a className="text-indigo-700 p-2 bg-gray-200 border border-transparent rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-columns" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <rect x={4} y={4} width={16} height={16} rx={2} />
                                                    <line x1={12} y1={4} x2={12} y2={20} />
                                                </svg>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {show ? <SearchAlternative /> : <SearchResult />}
                    </div>
                </div>
            </div>
        </>
    );
}
