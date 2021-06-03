import React, { useState } from "react";
export default function IndexPage() {
    const [task, setTask] = useState(true);
    const [note, setNote] = useState(true);
    return (
        <>
            <div className="py-8 px-12 w-full">
                <div className="flex w-full justify-between items-center mb-6 md:mb-12">
                    <div className="rounded relative w-full w-8/12 md:w-1/3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 absolute ml-4 inset-0 m-auto icon icon-tabler icon-tabler-search" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                        <input className="border border-gray-100 focus:outline-none focus:border-brand rounded-full w-full text-sm bg-gray-100 text-gray-500 pl-12 sm:pl-10 md:pl-12 py-3 pr-4" type="text" placeholder="Search" />
                    </div>
                    <div className="flex items-center ml-6 md:ml-0">
                        <div className="mr-2 md:mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                                <path d="M11.6667 5.83333C11.6667 4.54467 12.7113 3.5 14 3.5C15.2887 3.5 16.3333 4.54467 16.3333 5.83333C19.0635 7.12431 20.8584 9.81662 21 12.8333V16.3333C21.178 17.8043 22.044 19.1032 23.3333 19.8333H4.66666C5.95596 19.1032 6.82195 17.8043 7 16.3333V12.8333C7.14159 9.81662 8.93647 7.12431 11.6667 5.83333" stroke="#718096" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5 19.8333V21C10.5 22.933 12.067 24.5 14 24.5C15.933 24.5 17.5 22.933 17.5 21V19.8333" stroke="#718096" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <img className src="https://cdn.tuk.dev/assets/components/todos/profile.png" alt="profile" srcSet />
                    </div>
                </div>
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-5xl font-bold text-gray-900">Important</h1>
                    <div className="cursor-pointer w-10 h-10 bg-gray-900 text-white rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </div>
                </div>
                <div>
                    <div className="flex pt-6 items-center">
                        <div data-menu className="cursor-pointer" onClick={() => setTask(!task)}>
                            {task ? (
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className=" icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>
                            )}
                        </div>
                        <h1 className="text-lg text-gray-900 font-semibold ml-3">Tasks</h1>
                    </div>
                    {task && (
                        <ul className="pt-6">
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-red-500 mt-4 md:mt-0 mr-10">Due today at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr className="my-5 border-t border-gray-300" />
                            </li>
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-red-500 mt-4 md:mt-0 mr-10">Due today at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr className="my-5 border-t border-gray-300" />
                            </li>
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-blue-500 mt-4 md:mt-0 mr-10">Due next week at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="mt-10">
                    <div className="flex items-center">
                        <div className="cursor-pointer" onClick={() => setNote(!note)}>
                            {note ? (
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className=" icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>
                            )}
                        </div>
                        <h1 className="text-lg text-gray-900 font-semibold ml-3">Notes</h1>
                    </div>
                    {note && (
                        <ul className="pt-6">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                <div className="rounded">
                                    <div className="w-full h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                        <div>
                                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center">
                                                <div className="border border-gray-300 rounded-full px-3 py-1 text-gray-600 text-xs flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={12} cy={13} r={7} />
                                                        <polyline points="12 10 12 13 14 13" />
                                                        <line x1={7} y1={4} x2="4.25" y2={6} />
                                                        <line x1={17} y1={4} x2="19.75" y2={6} />
                                                    </svg>
                                                    <p className="ml-2">7 Sept, 23:00</p>
                                                </div>
                                                <div className="p-1 bg-gray-800 rounded-full ml-2 text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-800">
                                                <p className="text-sm">March 28, 2020</p>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-64 flex flex-col justify-between bg-red-300 rounded-lg border border-red-300 mb-6 py-5 px-4">
                                        <div>
                                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center">
                                                <div className="border border-gray-300 rounded-full px-3 py-1 text-gray-600 text-xs flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={12} cy={13} r={7} />
                                                        <polyline points="12 10 12 13 14 13" />
                                                        <line x1={7} y1={4} x2="4.25" y2={6} />
                                                        <line x1={17} y1={4} x2="19.75" y2={6} />
                                                    </svg>
                                                    <p className="ml-2">7 Sept, 23:00</p>
                                                </div>
                                                <div className="p-1 bg-gray-800 rounded-full ml-2 text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-800">
                                                <p className="text-sm">March 28, 2020</p>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="w-full h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                        <div>
                                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center flex-no-wrap">
                                                <div className="w-6 h-6 bg-cover bg-center rounded-md">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                                </div>
                                                <div className="w-6 h-6 bg-cover rounded-md -ml-2">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                                </div>
                                                <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-800">
                                                <p className="text-sm">March 28, 2020</p>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                        <div>
                                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center">
                                                <div className="p-1 bg-gray-800 rounded-full text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-800">
                                                <p className="text-sm">March 28, 2020</p>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
                                        <div>
                                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center">
                                                <div className="p-1 bg-gray-800 rounded-full text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-800">
                                                <p className="text-sm">March 28, 2020</p>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                        <div>
                                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center">
                                                <div className="p-1 bg-gray-800 rounded-full text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-800">
                                                <p className="text-sm">March 28, 2020</p>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="w-full h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                        <div>
                                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center">
                                                <div className="border border-gray-300 rounded-full px-3 py-1 text-gray-600 text-xs flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={12} cy={13} r={7} />
                                                        <polyline points="12 10 12 13 14 13" />
                                                        <line x1={7} y1={4} x2="4.25" y2={6} />
                                                        <line x1={17} y1={4} x2="19.75" y2={6} />
                                                    </svg>
                                                    <p className="ml-2">7 Sept, 23:00</p>
                                                </div>
                                                <div className="p-1 bg-gray-800 rounded-full ml-2 text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-800">
                                                <p className="text-sm">March 28, 2020</p>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                        <div>
                                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                                        </div>
                                        <div>
                                            <div className="mb-3 flex items-center">
                                                <div className="border border-gray-300 rounded-full px-3 py-1 text-gray-600 text-xs flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={12} cy={13} r={7} />
                                                        <polyline points="12 10 12 13 14 13" />
                                                        <line x1={7} y1={4} x2="4.25" y2={6} />
                                                        <line x1={17} y1={4} x2="19.75" y2={6} />
                                                    </svg>
                                                    <p className="ml-2">7 Sept, 23:00</p>
                                                </div>
                                                <div className="p-1 bg-gray-800 rounded-full ml-2 text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-800">
                                                <p className="text-sm">March 28, 2020</p>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
