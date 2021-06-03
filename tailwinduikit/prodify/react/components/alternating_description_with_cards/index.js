import React from "react";
function IndexPage() {
    return (
        <>
            <div className="mx-auto container px-4 lg:px-0">
                <div className="pt-10 lg:pt-40">
                    <div className="container mx-auto">
                        <div className="flex flex-col-reverse flex-col lg:flex-row  items-center">
                            <div className="lg:w-2/3 w-full mt-24 lg:mt-0 xl:pr-20">
                                <div className="py-2 text-color">
                                    <h1 className=" text-2xl lg:text-6xl lg:leading-snug tracking-tighter f-f-l font-black">Boost adoption of product and services</h1>
                                    <h2 className="text-lg lg:text-3xl leading-7 lg:leading-10 f-f-r py-4 lg:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer">
                                        <h3 className="f-f-r text-2xl font-semibold underline text-color-pink ">Lets Get Started</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full relative min-height-images flex items-end justify-center ">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-xl" src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png" alt />
                                <div className="relative z-10  bg-white rounded shadow p-6 w-10/12 -mb-20">
                                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                        <div className="flex items-center">
                                            <div className="p-4 bg-yellow-200 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={9} y1={15} x2={15} y2={9} />
                                                    <circle cx="9.5" cy="9.5" r=".5" />
                                                    <circle cx="14.5" cy="14.5" r=".5" />
                                                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-6">
                                                <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                                                <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pl-3 text-green-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="3 17 9 11 13 15 21 7" />
                                                    <polyline points="14 7 21 7 21 14" />
                                                </svg>
                                                <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                            </div>
                                            <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Increase</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-3">
                                        <hr className="h-1 rounded-sm bg-gray-200" />
                                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                                    </div>
                                    <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Yearly Goal</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-28  lg:py-28">
                    <div className>
                        <div className="flex flex-wrap items-center">
                            <div className="lg:w-1/3 w-full relative min-height-images flex items-end justify-center ">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-xl" src="https://cdn.tuk.dev/assets/templates/prodify/stayUpdated.png" alt />
                                <div className="relative z-10  bg-white rounded shadow p-6 w-10/12 -mb-20">
                                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                        <div className="flex items-center">
                                            <div className="p-4 bg-yellow-200 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={9} y1={15} x2={15} y2={9} />
                                                    <circle cx="9.5" cy="9.5" r=".5" />
                                                    <circle cx="14.5" cy="14.5" r=".5" />
                                                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-6">
                                                <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                                                <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pl-3 text-green-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="3 17 9 11 13 15 21 7" />
                                                    <polyline points="14 7 21 7 21 14" />
                                                </svg>
                                                <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                            </div>
                                            <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Increase</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-3">
                                        <hr className="h-1 rounded-sm bg-gray-200" />
                                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                                    </div>
                                    <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Yearly Goal</h4>
                                </div>
                            </div>
                            <div className="lg:w-2/3 py-24 lg:py-0 w-full lg:pl-20">
                                <div className="py-2 text-color">
                                    <h1 className=" text-2xl lg:text-3xl lg:text-6xl tracking-tighter lg:leading-snug f-f-l font-black">Stay up to date with how you’re performing</h1>
                                    <h2 className="text-lg lg:text-3xl leading-7 lg:leading-10 f-f-r py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer">
                                        <h3 className="f-f-r text-2xl font-semibold underline text-color-pink ">Lets Get Started</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-32">
                    <div className="mx-auto">
                        <div className="flex flex-col-reverse flex-col lg:flex-row  items-center">
                            <div className="lg:w-2/3 mt-24 lg:mt-0 w-full lg:pr-20">
                                <div className="py-2 text-color">
                                    <h1 className="text-2xl lg:text-6xl tracking-tighter lg:leading-snug f-f-l font-black">Easily manage sales through our invoicing system</h1>
                                    <h2 className="text-lg lg:text-3xl leading-10 f-f-r py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer">
                                        <h3 className="f-f-r text-2xl font-semibold underline text-color-pink ">Lets Get Started</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full relative min-height-images flex items-end justify-center ">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-xl" src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png" alt />
                                <div className="relative z-10 p-4 bg-white shadow-lg rounded mx-auto w-9/12 -mb-20">
                                    <h4 className="text-gray-800 font-normal text-lg leading-4 tracking-normal mb-2">Invoice # 35RD87</h4>
                                    <p className="text-gray-600 text-xs leading-3 font-normal">Assigned to: Josh Rollins</p>
                                    <div className="mt-4 flex items-center">
                                        <span className="text-gray-600">
                                            <svg className="feather feather-user" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                        </span>
                                        <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">Specter Consultancy</p>
                                    </div>
                                    <div className="mt-3 flex items-center">
                                        <span className="text-gray-600">
                                            <svg className="feather feather-dollar-sign" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1={12} y1={1} x2={12} y2={23} />
                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        </span>
                                        <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">2,354 USD</p>
                                    </div>
                                    <button className="relative focus:outline-none mt-4 py-2 pr-10 bg-linear-button-home text-white tracking-normal text-xs pl-3 cursor-pointer">
                                        View Invoice
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                            <line x1={13} y1={18} x2={19} y2={12} />
                                            <line x1={13} y1={6} x2={19} y2={12} />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
        .min-height-images {
            min-height: 600px;
        }
        .bg-linear-button-home {
    background: linear-gradient(91.12deg, #F56565 0%, #E55278 53.57%, #D53F8C 100%);
    border-radius: 6px;
}
.text-color-pink {
    color: #d53f8c;
}

`}
            </style>
        </>
    );
}

export default IndexPage;
