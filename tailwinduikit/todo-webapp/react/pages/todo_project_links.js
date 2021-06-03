import React, { useState } from "react";
export default function IndexPage() {
    const [edit, setEdit] = useState(0);
    return (
        <>
            <div className="py-8 px-12 w-full">
                <div className="flex w-full justify-between items-center mb-6 md:mb-12">
                    <div className="rounded relative w-full w-8/12 md:w-1/3 ">
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
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Projects</h1>
                    <div className="cursor-pointer w-10 h-10 bg-gray-900 text-white rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </div>
                </div>
                <div className="mb-16  px-4 xl:px-0">
                    <div className="mb-20  px-4 xl:px-0">
                        <ul className="hidden text-lg md:flex items-center">
                            <li className="cursor-pointer pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                                <div className="w-6 h-6 rounded-full bg-yellow-200 text-yellow-400 text-xs mr-2 flex items-center justify-center">05</div>
                                <p className="text-gray-700">
                                    <a href="/todos">Todos</a>
                                </p>
                            </li>
                            <li className="cursor-pointer  pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                                <div className="w-6 h-6 rounded-full bg-yellow-200 text-yellow-400 text-xs mr-2 flex items-center justify-center">05</div>
                                <p className="text-gray-700">
                                    <a href="/todo_project_notes">Notes</a>
                                </p>
                            </li>
                            <li className="cursor-pointer pb-3 border-b-4 border-yellow-600 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                                <p className="text-gray-700">
                                    <a href="/todo_project_links">Links</a>
                                </p>
                            </li>
                            <li className="cursor-pointer  pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                                <p className="text-gray-700">
                                    <a href="/todo_project_files">Files</a>
                                </p>
                            </li>
                        </ul>
                        <hr className="hidden md:block border-t-4 border-gray-200 -mt-1" />
                    </div>
                    <div className="flex w-full justify-between md:hidden my-10 items-center border-b border-gray-500">
                        <p className=" text-xs text-gray-700">
                            <a href="/todos">Todos</a>
                        </p>
                        <p className="text-gray-700    text-xs">
                            <a href="/todo_project_notes">Notes</a>
                        </p>
                        <p className="text-yellow-600 text-xs border-b-2 border-yellow-600">
                            <a href="/todo_project_links">Links</a>
                        </p>
                        <p className="text-gray-700 text-xs ">
                            <a href="/todo_project_files">Files</a>
                        </p>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className=" min-w-full  bg-white">
                        <tbody>
                            <tr className="h-20">
                                <td className="w-6 pr-2">
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
                                <td className="text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4 pr-6 w-6">
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
                                <td className="pl-6 pr-20">
                                    <div className="flex items-center">
                                        <img src="https://cdn.tuk.dev/assets/components/todos/Bitmap.png" alt="logo" srcSet />
                                        <div className="ml-4">
                                            <h3 className="text-lg text-gray-dark">How to design a wireframe in Figma</h3>
                                            <h4 className="text-sm text-gray-light mt-1">https://www.figma.com/community?tab=files</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14.4697 12.4697C14.1768 12.7626 14.1768 13.2374 14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303L14.4697 12.4697ZM19 9L19.5303 9.53033C19.8232 9.23744 19.8232 8.76256 19.5303 8.46967L19 9ZM15.5303 4.46967C15.2374 4.17678 14.7626 4.17678 14.4697 4.46967C14.1768 4.76256 14.1768 5.23744 14.4697 5.53033L15.5303 4.46967ZM19 9.75C19.4142 9.75 19.75 9.41421 19.75 9C19.75 8.58579 19.4142 8.25 19 8.25V9.75ZM9 17.75C9.41421 17.75 9.75 17.4142 9.75 17C9.75 16.5858 9.41421 16.25 9 16.25V17.75ZM15.5303 13.5303L19.5303 9.53033L18.4697 8.46967L14.4697 12.4697L15.5303 13.5303ZM19.5303 8.46967L15.5303 4.46967L14.4697 5.53033L18.4697 9.53033L19.5303 8.46967ZM19 8.25H8V9.75H19V8.25ZM8 8.25C5.37665 8.25 3.25 10.3766 3.25 13H4.75C4.75 11.2051 6.20507 9.75 8 9.75V8.25ZM3.25 13C3.25 15.6234 5.37665 17.75 8 17.75V16.25C6.20507 16.25 4.75 14.7949 4.75 13H3.25ZM8 17.75H9V16.25H8V17.75Z"
                                            fill="#718096"
                                        />
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M4 7H20" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                                <td className="relative w-5">
                                    {edit == 1 && (
                                        <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
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
                            <tr className="h-20">
                                <td className="w-6 pr-2">
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
                                <td className="text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4 pr-6 w-6">
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
                                <td className="pl-6 pr-20">
                                    <div className="flex items-center">
                                        <img src="https://cdn.tuk.dev/assets/components/todos/Bitmap.png" alt="logo" srcSet />
                                        <div className="ml-4">
                                            <h3 className="text-lg text-gray-dark">How to design a wireframe in Figma</h3>
                                            <h4 className="text-sm text-gray-light mt-1">https://www.figma.com/community?tab=files</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14.4697 12.4697C14.1768 12.7626 14.1768 13.2374 14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303L14.4697 12.4697ZM19 9L19.5303 9.53033C19.8232 9.23744 19.8232 8.76256 19.5303 8.46967L19 9ZM15.5303 4.46967C15.2374 4.17678 14.7626 4.17678 14.4697 4.46967C14.1768 4.76256 14.1768 5.23744 14.4697 5.53033L15.5303 4.46967ZM19 9.75C19.4142 9.75 19.75 9.41421 19.75 9C19.75 8.58579 19.4142 8.25 19 8.25V9.75ZM9 17.75C9.41421 17.75 9.75 17.4142 9.75 17C9.75 16.5858 9.41421 16.25 9 16.25V17.75ZM15.5303 13.5303L19.5303 9.53033L18.4697 8.46967L14.4697 12.4697L15.5303 13.5303ZM19.5303 8.46967L15.5303 4.46967L14.4697 5.53033L18.4697 9.53033L19.5303 8.46967ZM19 8.25H8V9.75H19V8.25ZM8 8.25C5.37665 8.25 3.25 10.3766 3.25 13H4.75C4.75 11.2051 6.20507 9.75 8 9.75V8.25ZM3.25 13C3.25 15.6234 5.37665 17.75 8 17.75V16.25C6.20507 16.25 4.75 14.7949 4.75 13H3.25ZM8 17.75H9V16.25H8V17.75Z"
                                            fill="#718096"
                                        />
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M4 7H20" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                                <td className="relative w-5">
                                    {edit == 2 && (
                                        <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
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
                            <tr className="h-20">
                                <td className="w-6 pr-2">
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
                                <td className="text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4 pr-6 w-6">
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
                                <td className="pl-6 pr-20">
                                    <div className="flex items-center">
                                        <img src="https://cdn.tuk.dev/assets/components/todos/Bitmap.png" alt="logo" srcSet />
                                        <div className="ml-4">
                                            <h3 className="text-lg text-gray-dark">How to design a wireframe in Figma</h3>
                                            <h4 className="text-sm text-gray-light mt-1">https://www.figma.com/community?tab=files</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14.4697 12.4697C14.1768 12.7626 14.1768 13.2374 14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303L14.4697 12.4697ZM19 9L19.5303 9.53033C19.8232 9.23744 19.8232 8.76256 19.5303 8.46967L19 9ZM15.5303 4.46967C15.2374 4.17678 14.7626 4.17678 14.4697 4.46967C14.1768 4.76256 14.1768 5.23744 14.4697 5.53033L15.5303 4.46967ZM19 9.75C19.4142 9.75 19.75 9.41421 19.75 9C19.75 8.58579 19.4142 8.25 19 8.25V9.75ZM9 17.75C9.41421 17.75 9.75 17.4142 9.75 17C9.75 16.5858 9.41421 16.25 9 16.25V17.75ZM15.5303 13.5303L19.5303 9.53033L18.4697 8.46967L14.4697 12.4697L15.5303 13.5303ZM19.5303 8.46967L15.5303 4.46967L14.4697 5.53033L18.4697 9.53033L19.5303 8.46967ZM19 8.25H8V9.75H19V8.25ZM8 8.25C5.37665 8.25 3.25 10.3766 3.25 13H4.75C4.75 11.2051 6.20507 9.75 8 9.75V8.25ZM3.25 13C3.25 15.6234 5.37665 17.75 8 17.75V16.25C6.20507 16.25 4.75 14.7949 4.75 13H3.25ZM8 17.75H9V16.25H8V17.75Z"
                                            fill="#718096"
                                        />
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M4 7H20" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                                <td className="relative w-5">
                                    {edit == 3 && (
                                        <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
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
                            <tr className="h-20">
                                <td className="w-6 pr-2">
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
                                <td className="text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4 pr-6 w-6">
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
                                <td className="pl-6 pr-20">
                                    <div className="flex items-center">
                                        <img src="https://cdn.tuk.dev/assets/components/todos/Bitmap.png" alt="logo" srcSet />
                                        <div className="ml-4">
                                            <h3 className="text-lg text-gray-dark">How to design a wireframe in Figma</h3>
                                            <h4 className="text-sm text-gray-light mt-1">https://www.figma.com/community?tab=files</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14.4697 12.4697C14.1768 12.7626 14.1768 13.2374 14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303L14.4697 12.4697ZM19 9L19.5303 9.53033C19.8232 9.23744 19.8232 8.76256 19.5303 8.46967L19 9ZM15.5303 4.46967C15.2374 4.17678 14.7626 4.17678 14.4697 4.46967C14.1768 4.76256 14.1768 5.23744 14.4697 5.53033L15.5303 4.46967ZM19 9.75C19.4142 9.75 19.75 9.41421 19.75 9C19.75 8.58579 19.4142 8.25 19 8.25V9.75ZM9 17.75C9.41421 17.75 9.75 17.4142 9.75 17C9.75 16.5858 9.41421 16.25 9 16.25V17.75ZM15.5303 13.5303L19.5303 9.53033L18.4697 8.46967L14.4697 12.4697L15.5303 13.5303ZM19.5303 8.46967L15.5303 4.46967L14.4697 5.53033L18.4697 9.53033L19.5303 8.46967ZM19 8.25H8V9.75H19V8.25ZM8 8.25C5.37665 8.25 3.25 10.3766 3.25 13H4.75C4.75 11.2051 6.20507 9.75 8 9.75V8.25ZM3.25 13C3.25 15.6234 5.37665 17.75 8 17.75V16.25C6.20507 16.25 4.75 14.7949 4.75 13H3.25ZM8 17.75H9V16.25H8V17.75Z"
                                            fill="#718096"
                                        />
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M4 7H20" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                                <td className="relative w-5">
                                    {edit == 4 && (
                                        <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
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
                            <tr className="h-20">
                                <td className="w-6 pr-2">
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
                                <td className="text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4 pr-6 w-6">
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
                                <td className="pl-6 pr-20">
                                    <div className="flex items-center">
                                        <img src="https://cdn.tuk.dev/assets/components/todos/Bitmap.png" alt="logo" srcSet />
                                        <div className="ml-4">
                                            <h3 className="text-lg text-gray-dark">How to design a wireframe in Figma</h3>
                                            <h4 className="text-sm text-gray-light mt-1">https://www.figma.com/community?tab=files</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14.4697 12.4697C14.1768 12.7626 14.1768 13.2374 14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303L14.4697 12.4697ZM19 9L19.5303 9.53033C19.8232 9.23744 19.8232 8.76256 19.5303 8.46967L19 9ZM15.5303 4.46967C15.2374 4.17678 14.7626 4.17678 14.4697 4.46967C14.1768 4.76256 14.1768 5.23744 14.4697 5.53033L15.5303 4.46967ZM19 9.75C19.4142 9.75 19.75 9.41421 19.75 9C19.75 8.58579 19.4142 8.25 19 8.25V9.75ZM9 17.75C9.41421 17.75 9.75 17.4142 9.75 17C9.75 16.5858 9.41421 16.25 9 16.25V17.75ZM15.5303 13.5303L19.5303 9.53033L18.4697 8.46967L14.4697 12.4697L15.5303 13.5303ZM19.5303 8.46967L15.5303 4.46967L14.4697 5.53033L18.4697 9.53033L19.5303 8.46967ZM19 8.25H8V9.75H19V8.25ZM8 8.25C5.37665 8.25 3.25 10.3766 3.25 13H4.75C4.75 11.2051 6.20507 9.75 8 9.75V8.25ZM3.25 13C3.25 15.6234 5.37665 17.75 8 17.75V16.25C6.20507 16.25 4.75 14.7949 4.75 13H3.25ZM8 17.75H9V16.25H8V17.75Z"
                                            fill="#718096"
                                        />
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M4 7H20" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                                <td className="relative w-5">
                                    {edit == 5 && (
                                        <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
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
                            <tr className="h-20">
                                <td className="w-6 pr-2">
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
                                <td className="text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4 pr-6 w-6">
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
                                <td className="pl-6 pr-20">
                                    <div className="flex items-center">
                                        <img src="https://cdn.tuk.dev/assets/components/todos/Bitmap.png" alt="logo" srcSet />
                                        <div className="ml-4">
                                            <h3 className="text-lg text-gray-dark">How to design a wireframe in Figma</h3>
                                            <h4 className="text-sm text-gray-light mt-1">https://www.figma.com/community?tab=files</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14.4697 12.4697C14.1768 12.7626 14.1768 13.2374 14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303L14.4697 12.4697ZM19 9L19.5303 9.53033C19.8232 9.23744 19.8232 8.76256 19.5303 8.46967L19 9ZM15.5303 4.46967C15.2374 4.17678 14.7626 4.17678 14.4697 4.46967C14.1768 4.76256 14.1768 5.23744 14.4697 5.53033L15.5303 4.46967ZM19 9.75C19.4142 9.75 19.75 9.41421 19.75 9C19.75 8.58579 19.4142 8.25 19 8.25V9.75ZM9 17.75C9.41421 17.75 9.75 17.4142 9.75 17C9.75 16.5858 9.41421 16.25 9 16.25V17.75ZM15.5303 13.5303L19.5303 9.53033L18.4697 8.46967L14.4697 12.4697L15.5303 13.5303ZM19.5303 8.46967L15.5303 4.46967L14.4697 5.53033L18.4697 9.53033L19.5303 8.46967ZM19 8.25H8V9.75H19V8.25ZM8 8.25C5.37665 8.25 3.25 10.3766 3.25 13H4.75C4.75 11.2051 6.20507 9.75 8 9.75V8.25ZM3.25 13C3.25 15.6234 5.37665 17.75 8 17.75V16.25C6.20507 16.25 4.75 14.7949 4.75 13H3.25ZM8 17.75H9V16.25H8V17.75Z"
                                            fill="#718096"
                                        />
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M4 7H20" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 11V17" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                                <td className="relative w-5">
                                    {edit == 6 && (
                                        <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
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
            </div>
        </>
    );
}
