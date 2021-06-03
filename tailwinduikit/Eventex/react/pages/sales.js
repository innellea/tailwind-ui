import React, { useState } from "react";
export default function SalesPage() {
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(false);
    return (
        <>
            <div>
                <div className="mt-6 md:mt-14">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                        <div className="py-6 pl-4 w-full bg-red-400 rounded-sm ">
                            <p className="text-4xl font-bold leading-9 text-white">132</p>
                            <p className="mt-3 text-lg leading-none text-white">Total Sales</p>
                        </div>
                        <div className="py-6 pl-4 w-full bg-gray-100 rounded-sm border border-gray-100 ">
                            <p className="text-4xl font-bold leading-9 text-gray-700">$768,89</p>
                            <p className="text-lg leading-none text-gray-600 mt-3">Revenue Generated</p>
                        </div>
                        <div className="py-6 pl-4 w-full bg-gray-100 rounded-sm border border-gray-100 ">
                            <p className="text-4xl font-bold leading-9 text-gray-700">11,500</p>
                            <p className="text-lg leading-none text-gray-600 mt-3">People Attended</p>
                        </div>
                        <div className="py-6 pl-4 w-full bg-gray-100 rounded-sm border border-gray-100 ">
                            <p className="text-4xl font-bold leading-9 text-gray-700">8,000</p>
                            <p className="text-lg leading-none text-gray-600 mt-3">Tickets Sold</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-14">
                    <div className="flex w-full justify-between ">
                        <p className="text-base md:text-xl font-bold leading-tight text-gray-700">Event Sale Tickets</p>
                        <div className="static sm:relative">
                            <div onClick={() => setshow(!show)} className="py-2 px-3 cursor-pointer flex items-center flex-no-wrap bg-gray-100 ease-in duration-150 hover:bg-gray-200  w-auto">
                                <p className="text-gray-700 mr-2 text-xs">12 Aug - 19 Aug</p>
                                <div>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="2.66666" y="3.33337" width="10.6667" height="10.6667" rx="1.33333" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 2V4.66667" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.33333 2V4.66667" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2.66666 7.33333H13.3333" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.33334 9.99996H8.00001" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.99999 10V12" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={show ? "w-full h-full" : "hidden"}>
                                <div onClick={() => setshow(!show)} className="fixed w-full h-full inset-0 bg-transparent z-40" />
                                <div className="bg-white absolute -ml-44 sm:-ml-64 px-6  py-6 z-50 shadow-xl">
                                    <p className="text-base text-gray-700">June</p>
                                    <table className="mt-6">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Mon</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Tue</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Wed</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Thu</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Fri</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Sat</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Sun</p>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="pt-6">
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                                                </td>
                                                <td className="pt-6">
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                                                </td>
                                                <td className="pt-6">
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">1</p>
                                                    </div>
                                                </td>
                                                <td className="pt-6">
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">2</p>
                                                    </div>
                                                </td>
                                                <td className="pt-6">
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                        <p className="text-sm text-red-600">3</p>
                                                    </div>
                                                </td>
                                                <td className="pt-6">
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                        <p className="text-sm text-red-600">4</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                        <p className="text-sm text-gray-700">5</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                        <p className="text-sm text-gray-700">6</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                        <p className="text-sm text-gray-700">7</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                        <p className="text-sm text-gray-700">8</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="w-full h-full">
                                                        <div className="w-12 h-12 flex w-full rounded-full justify-center items-center cursor-pointer bg-red-500">
                                                            <p className="text-sm font-bold text-white">9</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-red-600">10</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-red-600">11</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">12</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">13</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">14</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">15</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="px-4 py-2 flex w-full  justify-center">
                                                        <p className="text-sm text-gray-700">16</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-red-600">17</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-red-600">18</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">19</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">20</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">21</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">22</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="px-4 py-2 flex w-full  justify-center">
                                                        <p className="text-sm text-gray-700">23</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-red-600">24</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-red-600">25</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">26</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">27</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">28</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                        <p className="text-sm text-gray-700">29</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="px-4 py-2 flex w-full  justify-center">
                                                        <p className="text-sm text-gray-700">30</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7">
                        <div>
                            <div onClick={() => setshow1(!show1)} className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                        
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-100 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-100 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setshow1(!show1)} className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                        
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-100 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-100 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setshow1(!show1)} className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                        
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-100 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-100 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setshow1(!show1)} className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                     
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-100 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-100 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setshow1(!show1)} className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                       
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-100 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-100 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setshow1(!show1)} className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                        
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-100 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-100 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setshow1(!show1)} className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                        
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-100 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-100 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={() => setshow1(!show1)} className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                      
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-100 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-100 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="popup2" className={show1 ? "fixed overflow-y-scroll inset-0 z-50 block" : "hidden"}>
                        <div onClick={() => setshow1(!show1)} className="absolute inset-0 bg-gray-900 opacity-80 z-0" />
                        <div className="flex w-full justify-center items-center h-full">
                            <div className="cursor-pointer rounded-md shadow-lg bg-white relative">
                                <div className="py-5">
                                    <div className="px-6">
                                        <p className="text-xs text-gray-400">Event</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">New Year Costume Party</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Day</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                                    </div>
                                    <div className="mt-5 px-6">
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm leading-none text-justify text-gray-800 mt-1">14th September 2020</p>
                                    </div>
                                    <div className="mt-5 px-6 flex items-center w-full">
                                        <div>
                                            <p className="text-xs text-gray-400">Tickets Sold</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">857</p>
                                        </div>
                                        <div className="ml-14">
                                            <p className="text-xs text-gray-400">Revenue Earned</p>
                                            <p className="text-sm leading-none text-justify text-gray-800 mt-1">$7698</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-6 flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <p className="ml-2 text-xs leading-3 text-gray-600">Veevents.com/cosutmeparty</p>
                                        
                                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="#718096" strokeLinecap="round" strokeLinejoin="round"></rect>
                                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div className="pt-6 flex justify-between relative items-center w-full">
                                        <div className="w-3 h-5 bg-gray-900 opacity-80 div-custom-border" />
                                        <div className="w-full border-b-2 border-dashed border-gray-100" />
                                        <div className="w-3 h-5  bg-gray-900 opacity-80 div-custom-border2" />
                                    </div>
                                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                                        <p className="text-sm font-bold leading-none text-gray-700 mt-2">253704938890287467</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
