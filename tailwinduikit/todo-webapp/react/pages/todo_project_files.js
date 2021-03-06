import React, { useState } from "react";
export default function IndexPage() {
    const [edit, setEdit] = useState(0);
    const [folder, setFolder] = useState(true);
    const [file, setFile] = useState(true);
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
                            <li className="cursor-pointer pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                                <p className="text-gray-700">
                                    <a href="/todo_project_links">Links</a>
                                </p>
                            </li>
                            <li className="cursor-pointer border-b-4 border-yellow-600 pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
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
                        <p className="text-gray-700 text-xs">
                            <a href="/todo_project_links">Links</a>
                        </p>
                        <p className="text-yellow-600 text-xs border-b-2 border-yellow-600">
                            <a href="/todo_project_files">Files</a>
                        </p>
                    </div>
                </div>
                <div className>
                    <div>
                        <div className="flex pt-6 items-center">
                            <div className="cursor-pointer" onClick={() => setFolder(!folder)}>
                                {folder ? (
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
                            <h1 className="text-lg text-gray-900 font-semibold ml-3">Folders</h1>
                        </div>
                        {folder && (
                            <ul className=" mt-8">
                                <div>
                                    <div className="flex items-center w-full justify-between">
                                        <div className="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={46} height={38} viewBox="0 0 46 38" fill="none">
                                                <g filter="url(#filter0_d)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4238 4.28135V2.15224C15.4238 0.963594 14.4565 0 13.2632 0H2.66058C1.46732 0 0.5 0.963594 0.5 2.15224V29.8477C0.5 31.0364 1.46732 32 2.66058 32H39.2282C40.4216 32 41.3889 31.0364 41.3889 29.8477V8.58601C41.3889 7.39727 40.4216 6.43368 39.2282 6.43368H17.5844C16.3912 6.43368 15.4238 5.47009 15.4238 4.28135Z" fill="#529FD9" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d" x="-3.5" y={-2} width="48.8889" height={40} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                        <feOffset dy={2} />
                                                        <feGaussianBlur stdDeviation={2} />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <h4 className="text-xl text-light-dark pl-4">Assets</h4>
                                        </div>
                                        <div className="relative">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mt-6">
                                    <div className="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={46} height={38} viewBox="0 0 46 38" fill="none">
                                            <g filter="url(#filter0_d)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.4238 4.28135V2.15224C15.4238 0.963594 14.4565 0 13.2632 0H2.66058C1.46732 0 0.5 0.963594 0.5 2.15224V29.8477C0.5 31.0364 1.46732 32 2.66058 32H39.2282C40.4216 32 41.3889 31.0364 41.3889 29.8477V8.58601C41.3889 7.39727 40.4216 6.43368 39.2282 6.43368H17.5844C16.3912 6.43368 15.4238 5.47009 15.4238 4.28135Z" fill="#529FD9" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d" x="-3.5" y={-2} width="48.8889" height={40} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dy={2} />
                                                    <feGaussianBlur stdDeviation={2} />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                        <h4 className="text-xl text-light-dark pl-4">Images</h4>
                                    </div>
                                    <div className="relative">
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
                                    </div>
                                </div>
                            </ul>
                        )}
                    </div>
                </div>
                <div>
                    <div className="mt-16">
                        <div className="flex pt-6 items-center">
                            <div className="cursor-pointer" onClick={() => setFile(!file)}>
                                {file ? (
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
                            <h1 className="text-lg text-gray-900 font-semibold ml-3">Files</h1>
                        </div>
                        {file && (
                            <ul className=" mt-8">
                                <div className="flex items-center w-full justify-between mt-8">
                                    <div className="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                            <rect width={40} height={40} rx={4} fill="#EDF2F7" />
                                            <path d="M20.0002 10.3335L9.3335 15.6668L20.0002 21.0002L30.6668 15.6668L20.0002 10.3335" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.3335 21L20.0002 26.3333L30.6668 21" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.3335 26.3335L20.0002 31.6668L30.6668 26.3335" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 className="text-xl text-light-dark pl-4">Fonts.zip</h4>
                                    </div>
                                    <div className="relative">
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
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mt-6">
                                    <div className="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                            <rect width={40} height={40} rx={4} fill="#FEEBC8" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.34929 18.5042L19.004 30.2229C19.5373 30.8095 20.4586 30.8095 20.992 30.2229L31.6493 18.5029C32.0666 18.0442 32.1146 17.3575 31.7653 16.8455L27.0493 9.9202C26.8016 9.55752 26.3912 9.34009 25.952 9.33887H14.0506C13.6114 9.34009 13.201 9.55752 12.9533 9.9202L8.23329 16.8429C7.88262 17.3562 7.93062 18.0442 8.34929 18.5042Z" stroke="#ED8936" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 className="text-xl text-light-dark pl-4">Tasks list web app.sketch</h4>
                                    </div>
                                    <div className="relative">
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
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mt-6">
                                    <div className="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                            <rect width={40} height={40} rx={4} fill="#C3DAFE" />
                                            <path d="M22.6665 8V13.3333C22.6665 14.0697 23.2635 14.6667 23.9998 14.6667H29.3332" stroke="#667EEA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M26.6665 32H13.3332C11.8604 32 10.6665 30.8061 10.6665 29.3333V10.6667C10.6665 9.19391 11.8604 8 13.3332 8H22.6665L29.3332 14.6667V29.3333C29.3332 30.8061 28.1393 32 26.6665 32Z" stroke="#667EEA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 16.0002H17.3333" stroke="#667EEA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 21.3332H24" stroke="#667EEA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 26.6667H24" stroke="#667EEA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 className="text-xl text-light-dark pl-4">Tasks list web app.sketch</h4>
                                    </div>
                                    <div className="relative">
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
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mt-6">
                                    <div className="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                            <rect width={40} height={40} rx={4} fill="#BEE3F8" />
                                            <path
                                                d="M12.5254 21.4336V27H10.6504V12.7812H15.8945C17.4505 12.7812 18.668 13.1784 19.5469 13.9727C20.4323 14.7669 20.875 15.8184 20.875 17.127C20.875 18.5072 20.4421 19.5716 19.5762 20.3203C18.7168 21.0625 17.4831 21.4336 15.875 21.4336H12.5254ZM12.5254 19.9004H15.8945C16.8971 19.9004 17.6654 19.666 18.1992 19.1973C18.7331 18.722 19 18.0384 19 17.1465C19 16.3001 18.7331 15.623 18.1992 15.1152C17.6654 14.6074 16.9329 14.3438 16.002 14.3242H12.5254V19.9004ZM29.1367 24.1973C29.1367 23.709 28.9512 23.3314 28.5801 23.0645C28.2155 22.791 27.5742 22.5566 26.6562 22.3613C25.7448 22.166 25.0189 21.9316 24.4785 21.6582C23.9447 21.3848 23.5475 21.0592 23.2871 20.6816C23.0332 20.304 22.9062 19.8548 22.9062 19.334C22.9062 18.4681 23.2708 17.7357 24 17.1367C24.7357 16.5378 25.6732 16.2383 26.8125 16.2383C28.0104 16.2383 28.9805 16.5475 29.7227 17.166C30.4714 17.7845 30.8457 18.5755 30.8457 19.5391H29.0293C29.0293 19.0443 28.8177 18.6178 28.3945 18.2598C27.9779 17.9017 27.4505 17.7227 26.8125 17.7227C26.1549 17.7227 25.6406 17.8659 25.2695 18.1523C24.8984 18.4388 24.7129 18.8132 24.7129 19.2754C24.7129 19.7116 24.8854 20.0404 25.2305 20.2617C25.5755 20.4831 26.1973 20.6947 27.0957 20.8965C28.0007 21.0983 28.7331 21.3392 29.293 21.6191C29.8529 21.8991 30.2663 22.2376 30.5332 22.6348C30.8066 23.0254 30.9434 23.5039 30.9434 24.0703C30.9434 25.0143 30.5658 25.7728 29.8105 26.3457C29.0553 26.9121 28.0755 27.1953 26.8711 27.1953C26.0247 27.1953 25.276 27.0456 24.625 26.7461C23.974 26.4466 23.4629 26.0299 23.0918 25.4961C22.7272 24.9557 22.5449 24.373 22.5449 23.748H24.3516C24.3841 24.3535 24.625 24.8353 25.0742 25.1934C25.5299 25.5449 26.1289 25.7207 26.8711 25.7207C27.5547 25.7207 28.1016 25.584 28.5117 25.3105C28.9284 25.0306 29.1367 24.6595 29.1367 24.1973Z"
                                                fill="#4299E1"
                                            />
                                        </svg>
                                        <h4 className="text-xl text-light-dark pl-4">Project file.psd</h4>
                                    </div>
                                    <div className="relative">
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
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mt-6">
                                    <div className="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                            <rect width={40} height={40} rx={4} fill="#FEEBC8" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.34929 18.5042L19.004 30.2229C19.5373 30.8095 20.4586 30.8095 20.992 30.2229L31.6493 18.5029C32.0666 18.0442 32.1146 17.3575 31.7653 16.8455L27.0493 9.9202C26.8016 9.55752 26.3912 9.34009 25.952 9.33887H14.0506C13.6114 9.34009 13.201 9.55752 12.9533 9.9202L8.23329 16.8429C7.88262 17.3562 7.93062 18.0442 8.34929 18.5042Z" stroke="#ED8936" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 className="text-xl text-light-dark pl-4">Symbols.sketch</h4>
                                    </div>
                                    <div className="relative">
                                        {edit == 7 && (
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
                                                    edit == 0 ? setEdit(7) : setEdit(0);
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
                                    </div>
                                </div>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
