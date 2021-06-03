import React from "react";
export default function IndexPage() {
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
                    <h1 className="text-5xl font-bold text-gray-900">Calendar</h1>
                </div>
                <div className="w-full flex items-cente justify-between">
                    <div>
                        <h4 className="text-xs xl:text-base text-custom-1">6 September 2018</h4>
                    </div>
                    <div className="hidden md:flex justify-center w-1/2">
                        <div className="flex items-center">
                            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#353F47" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <svg className="cursor-pointer ml-20" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#353F47" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <a href="/calender_month_view">
                            <h4 className="text-custom-2 cursor-pointer text-xs lg:text-base font-light text-right">Month view</h4>
                        </a>
                    </div>
                    <div>
                        <a href="/calender_week_view">
                            <h4 className="text-xs lg:text-base cursor-pointer text-custom-2 font-light text-right ml-6">Week view</h4>
                        </a>
                    </div>
                    <div>
                        <a href="/calender_day_view">
                            <h4 className="text-xs lg:text-base cursor-pointer text-orange font-light text-right ml-6">Day view</h4>
                        </a>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden mt-4">
                    <table className="min-w-full bg-white">
                        <thead className="items-center">
                            <tr className="h-20">
                                <th className="border-r border-gray-300 px-10">
                                    <p className="text-custom-3 font-light text-xs">12:00</p>
                                </th>
                                <th className="border-r border-gray-300 px-10">
                                    <p className="text-custom-3 font-light text-xs">13:00</p>
                                </th>
                                <th className="border-r border-gray-300 px-10">
                                    <p className="text-custom-3 font-light text-xs">14:00</p>
                                </th>
                                <th className="border-r border-gray-300 px-10">
                                    <p className="text-custom-3 font-light text-xs">15:00</p>
                                </th>
                                <th className="border-r border-gray-300 px-10">
                                    <p className="text-custom-3 font-light text-xs">16:00</p>
                                </th>
                                <th className="border-r border-gray-300 px-10">
                                    <p className="text-custom-3 font-light text-xs">17:00</p>
                                </th>
                                <th className="border-r border-gray-300 px-10">
                                    <p className="text-custom-3 font-light text-xs">18:00</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="relative">
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r relative md:static border-gray-300 h-20">
                                    <div className="absolute w-48 xl:w-1/5 ml-3 -mt-10 flex items-center bg-custom-gray border-custom-green-light py-1">
                                        <div className="ml-1">
                                            <p className="text-xs">13:00 - 14:40</p>
                                            <p className="text-xs text-custom-blue mt-0.5">Doctor’s</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-r border-gray-300 h-20 relative">
                                    <div className="w-4 h-2 flex justify-center bg-custom-orange-2 absolute inset-0 mx-auto -mt-3">
                                        <div className="vl mt-2" />
                                    </div>
                                </td>
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                            </tr>
                            <tr>
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                            </tr>
                            <tr>
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r relative border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                            </tr>
                            <tr>
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                            </tr>
                            <tr>
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                                <td className="border-r border-gray-300 h-20" />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
