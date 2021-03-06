import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="2xl:mx-auto 2xl:container xl:px-0 px-4">
                <div className="flex flex-wrap items-center justify-between relative py-10 lg:py-28 2xl:px-0 xl:px-16 px-0">
                    <div>
                        <div className="flex flex-col flex-col-reverse md:flex-row w-full justify-between flex-wrap">
                            <div className="md:w-1/4 w-full mt-10 md:mt-0 pb-6 md:pb-0">
                                <div className="w-28 h-28 rounded-full img-1 flex justify-center items-center bg-transparent cursor-pointer">
                                    <img src="https://cdn.tuk.dev/assets/templates/radian/client1.png" alt="client1" />
                                </div>
                                <div className="flex w-full justify-end mt-12">
                                    <div className="w-28 h-28 rounded-full img-1 flex justify-center items-center bg-transparent cursor-pointer">
                                        <img src="https://cdn.tuk.dev/assets/templates/radian/client2.png" alt="client1" />
                                    </div>
                                </div>
                                <div className="w-28 mt-12 h-28 rounded-full img-1 flex justify-center items-center bg-transparent cursor-pointer">
                                    <img src="https://cdn.tuk.dev/assets/templates/radian/client3.png" alt="client1" />
                                </div>
                                <div className="flex w-full justify-end mt-12">
                                    <div className="w-28 h-28 rounded-full img-1 flex justify-center items-center bg-transparent cursor-pointer">
                                        <img src="https://cdn.tuk.dev/assets/templates/radian/client4.png" alt="client1" />
                                    </div>
                                </div>
                                <div className="w-28 mt-12 h-28 rounded-full img-1 flex justify-center items-center bg-transparent cursor-pointer">
                                    <img src="https://cdn.tuk.dev/assets/templates/radian/client5.png" alt="client1" />
                                </div>
                                <div className="flex w-full justify-end mt-12">
                                    <div className="w-28 h-28 rounded-full img-1 flex justify-center items-center bg-transparent cursor-pointer">
                                        <img src="https://cdn.tuk.dev/assets/templates/radian/client6.png" alt="client1" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-3/4 w-full md:pl-24">
                                <h1 className="hidden xl:block text-7xl font-bold tracking-wider text-dark2 uppercase">
                                    WHAT OUR <br />
                                    <span className="text-indigo2">clients</span> SAY
                                </h1>
                                <h1 className="xl:hidden text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-dark2 uppercase">
                                    WHAT OUR <span className="text-indigo2">clients</span> SAY
                                </h1>
                                <div className="mt-12 flex pl-6 py-6 border border-gray-700">
                                    <svg className="mr-7" xmlns="http://www.w3.org/2000/svg" width={44} height={37} viewBox="0 0 44 37" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M35.5677 37C37.9069 37 39.897 36.179 41.5382 34.537C43.1794 32.895 44 30.9063 44 28.571C44 26.2357 43.1794 24.247 41.5382 22.605C39.897 20.963 37.9069 20.142 35.5677 20.142C33.4549 20.142 32.1816 19.3028 31.7477 17.6243C31.3139 15.9457 31.5308 14.0848 32.3986 12.0414C33.2663 9.99801 34.7188 8.13709 36.7562 6.45858C38.7935 4.78007 41.2081 3.94083 44 3.94083L44 -3.8147e-06C38.9821 -4.25337e-06 34.8038 1.92478 31.4648 5.7744C28.1258 9.62403 25.947 13.8567 24.9284 18.4726C23.9097 23.0885 24.2021 27.3304 25.8055 31.1982C27.409 35.0661 30.663 37 35.5677 37ZM11.233 37C13.5722 37 15.5623 36.179 17.2035 34.537C18.8447 32.895 19.6653 30.9063 19.6653 28.571C19.6653 26.2357 18.8447 24.247 17.2035 22.605C15.5623 20.963 13.5722 20.142 11.233 20.142C9.12023 20.142 7.83748 19.3028 7.38473 17.6243C6.93199 15.9457 7.14893 14.0848 8.03555 12.0414C8.92217 9.99802 10.3747 8.13709 12.3932 6.45858C14.4116 4.78007 16.8357 3.94083 19.6653 3.94083L19.6653 -2.12741e-06C14.6474 -2.56609e-06 10.469 1.92478 7.13007 5.77441C3.7911 9.62403 1.61231 13.8567 0.593645 18.4726C-0.425021 23.0885 -0.132629 27.3304 1.47083 31.1982C3.07429 35.0661 6.32832 37 11.233 37Z"
                                            fill="#5A67D8"
                                        />
                                    </svg>
                                    <p className="text-base md:text-lg leading-8 tracking-wider mt-4 pr-4 lg:pr-0 w-full lg:w-1/2">In my history of working with companies, I can honestly say that there is not one company that I've ever worked with that has better service than them.</p>
                                </div>
                                <div className="w-full flex justify-end mt-5">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold tracking-wider text-indigo2 text-right">Billy Butcher</h3>
                                        <h4 className="text-base md:text-lg tracking-wider mt-1 text-right text-dark2">VP Operations, InertiaCo.</h4>
                                        <h4 className="text-base md:text-lg tracking-wider mt-1 text-right text-dark2">October, 2020</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row xl:flex-col w-full xl:w-auto items-center 2xl:-mr-20 justify-center relative xl:absolute right-0 2xl:px-0 px-4">
                        <a className="hidden xl:block" href="./projects">
                            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={19} viewBox="0 0 35 19" fill="none">
                                <path d="M1 18L17.5 1L34 18" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="xl:hidden" href="./projects">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </a>
                        <div className="flex items-center xl:flex-col justify-center  py-16">
                            <a href="./">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray" />
                            </a>
                            <a href="./work">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                            <a href="./projects">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                            <a href="./testimonials">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-indigo xl:mt-10" />
                            </a>
                            <a href="./team">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                            <a href="./contacts">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                        </div>
                        <a className="hidden xl:block" href="./team">
                            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={18} viewBox="0 0 35 18" fill="none">
                                <path d="M34 1L17.5 17L1 1" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="ml-5 xl:hidden" href="./team">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
