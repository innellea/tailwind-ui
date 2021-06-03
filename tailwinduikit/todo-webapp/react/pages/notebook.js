import React, { useState } from "react";
export default function IndexPage() {
    const [edit, setEdit] = useState(0);
    const [popup, setPopup] = useState(false);

    let flag = true;
    function checkAll() {
        if (flag) {
            document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                el.nextElementSibling.classList.remove("hidden");
            });
            flag = false;
        } else {
            document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                el.nextElementSibling.classList.add("hidden");
            });
            flag = true;
        }
    }
    return (
        <>
            <div className="py-8 px-12 w-full ">
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
                    <h1 className="text-5xl font-bold text-gray-900">Notebook</h1>
                    <div className="cursor-pointer w-10 h-10 bg-gray-900 text-white rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="w-full h-16 bg-gray-800 py-8">
                                <th className="rounded-l-lg pl-3 w-12 text-gray-300 font-normal text-left tracking-normal leading-4 opacity-0">
                                    <div className="flex items-center">
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
                                    </div>
                                </th>
                                <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">
                                    <div className="bg-gray-800 border rounded-sm border-gray-300 w-5 h-5 flex flex-shrink-0 justify-center items-center relative" onClick={() => checkAll()}>
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </th>
                                <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Title</th>
                                <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Total notes</th>
                                <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Created by</th>
                                <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Collaborators</th>
                                <th className="rounded-r-lg text-gray-300 font-normal pr-8 text-left tracking-normal leading-4">More</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="cursor-pointer h-20 border-gray-300 border-b">
                                <td className="pl-3 text-gray-600 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
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
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input onClick={() => setPopup(!popup)} type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-10 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <a href="/notes">Rachel’s notebook</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 font-semibold">24</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">Rachel Anthony</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">None</td>
                                <td className="pr-8 relative">
                                    {edit == 1 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
                                            <ul className="bg-white shadow rounded py-1">
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                            </ul>
                                        </div>
                                    )}

                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg
                                            onClick={() => {
                                                edit == 0 ? setEdit(1) : setEdit(0);
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-dots dropbtn"
                                            width={28}
                                            height={28}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={5} cy={12} r={1} />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer h-20 border-gray-300 border-b">
                                <td className="pl-3 text-gray-600 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
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
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-10 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <a href="/notes">Rachel’s notebook</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 font-semibold">24</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">Rachel Anthony</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 2 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
                                            <ul className="bg-white shadow rounded py-1">
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                            </ul>
                                        </div>
                                    )}

                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg
                                            onClick={() => {
                                                edit == 0 ? setEdit(2) : setEdit(0);
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-dots dropbtn"
                                            width={28}
                                            height={28}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={5} cy={12} r={1} />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer h-20 border-gray-300 border-b">
                                <td className="pl-3 text-gray-600 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
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
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-10 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <a href="/notes">Rachel’s notebook</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 font-semibold">24</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">Rachel Anthony</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">None</td>
                                <td className="pr-8 relative">
                                    {edit == 3 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
                                            <ul className="bg-white shadow rounded py-1">
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                            </ul>
                                        </div>
                                    )}

                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg
                                            onClick={() => {
                                                edit == 0 ? setEdit(3) : setEdit(0);
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-dots dropbtn"
                                            width={28}
                                            height={28}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={5} cy={12} r={1} />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer h-20 border-gray-300 border-b">
                                <td className="pl-3 text-gray-600 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
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
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-10 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <a href="/notes">Rachel’s notebook</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 font-semibold">24</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">Rachel Anthony</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">None</td>
                                <td className="pr-8 relative">
                                    {edit == 4 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
                                            <ul className="bg-white shadow rounded py-1">
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                            </ul>
                                        </div>
                                    )}

                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg
                                            onClick={() => {
                                                edit == 0 ? setEdit(4) : setEdit(0);
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-dots dropbtn"
                                            width={28}
                                            height={28}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={5} cy={12} r={1} />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer h-20 border-gray-300 border-b">
                                <td className="pl-3 text-gray-600 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
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
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-10 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <a href="/notes">Rachel’s notebook</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 font-semibold">24</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">Rachel Anthony</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 5 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
                                            <ul className="bg-white shadow rounded py-1">
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                            </ul>
                                        </div>
                                    )}

                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg
                                            onClick={() => {
                                                edit == 0 ? setEdit(5) : setEdit(0);
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-dots dropbtn"
                                            width={28}
                                            height={28}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={5} cy={12} r={1} />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer h-20 border-gray-300 border-b">
                                <td className="pl-3 text-gray-600 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
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
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-10 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <a href="/notes">Rachel’s notebook</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 font-semibold">24</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">Rachel Anthony</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-yellow-400 rounded-full text-white border-2 border-white flex items-center justify-center -ml-2">3</div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 6 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
                                            <ul className="bg-white shadow rounded py-1">
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                            </ul>
                                        </div>
                                    )}

                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg
                                            onClick={() => {
                                                edit == 0 ? setEdit(6) : setEdit(0);
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-dots dropbtn"
                                            width={28}
                                            height={28}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={5} cy={12} r={1} />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {popup && (
                    <div className="w-full md:flex bg-white shadow-lg items-center justify-between mt-20 py-7 px-4 ">
                        <div className="flex items-center">
                            <svg onclick="selection(false)" className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                                <circle cx={10} cy={10} r={10} stroke="#CBD5E0" />
                                <path d="M6 10.5H14" stroke="#CBD5E0" strokeLinecap="square" />
                            </svg>
                            <p className="text-dark text-base ml-3">1 notebook selected</p>
                        </div>
                        <div className="flex items-center mt-5 md:mt-0">
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
                )}
            </div>
        </>
    );
}
