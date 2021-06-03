import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="py-8 px-10 md:px-12 w-full">
                <div className="flex w-full justify-between items-center mb-6 md:mb-12">
                    <div className="rounded relative w-8/12 md:w-1/3 ">
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
                    <h1 className="text-5xl font-bold text-gray-900">Tasks Overview</h1>
                    <div className="cursor-pointer w-10 h-10 bg-gray-900 text-white rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    <div className="rounded">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-gray-900">To do</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={5} cy={12} r={1} />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                            </svg>
                        </div>
                        <div className="w-full h-full py-3 px-2 bg-gray-200 rounded-lg">
                            <div className="w-full bg-white rounded-lg shadow mb-3 py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg shadow mb-3 py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg shadow py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-gray-900">For review</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={5} cy={12} r={1} />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                            </svg>
                        </div>
                        <div className="w-full h-full py-3 px-2 bg-gray-200 rounded-lg">
                            <div className="w-full bg-white rounded-lg shadow mb-3 py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg shadow mb-3 py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg shadow py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-gray-900">Completed</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={5} cy={12} r={1} />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                            </svg>
                        </div>
                        <div className="w-full h-full py-3 px-2 bg-gray-200 rounded-lg">
                            <div className="w-full bg-white rounded-lg shadow mb-3 py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg shadow mb-3 py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg shadow py-5 px-4">
                                <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                    <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    <p className="text-xs text-gray-800">Family</p>
                                </div>
                                <h4 className="text-gray-800 font-semibold mb-4">Company website redesign</h4>
                                <p className="mb-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                                <div className="flex items-center justify-between text-gray-600">
                                    <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={13} r={7} />
                                            <polyline points="12 10 12 13 14 13" />
                                            <line x1={7} y1={4} x2="4.25" y2={6} />
                                            <line x1={17} y1={4} x2="19.75" y2={6} />
                                        </svg>
                                        <p className="ml-2 text-xs">7 Sept, 23:00</p>
                                    </div>
                                    <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-gray-600">
                                    <div className="flex items-center flex-no-wrap">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={5} cy={12} r={1} />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
