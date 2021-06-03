import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="2xl:mx-auto 2xl:container xl:px-0 px-4">
                <div className="md:flex-row flex flex-col flex-wrap items-center relative py-10 md:py-40 2xl:px-0 xl:px-16 px-0">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-dark2 uppercase">
                            INFINITY MADE
                            <br />
                            <span className="text-indigo2">REAL</span>
                        </h1>
                        <p className="text-dark2 leading-8 tracking-wide mt-6 text-base md:text-lg">One of the best designers in the buisness who will make your location look good and professional with the highest quality materials available.</p>
                    </div>
                    <div className="w-full md:w-2/3 flex md:justify-end relative mt-10 md:mt-0 md:pl-20">
                        <img className="w-full z-20" src="https://cdn.tuk.dev/assets/templates/radian/hero1.png" alt="hero" />
                        <img className="absolute z-0 left-0 bottom-0 pb-64 ml-14 hidden 2xl:-mb-16 xl:block" src="https://cdn.tuk.dev/assets/templates/radian/small_circle.png" alt="small circle" />
                        <img className="hidden md:block absolute z-0 xl:-mb-16 left-0 bottom-0 2xl:w-1/4 xl:w-1/3 lg:w-1/4 w-1/5 xl:ml-0 lg:ml-0 ml-10" src="https://cdn.tuk.dev/assets/templates/radian/circle.png" alt="circle" />
                        <div className>
                            <div className="absolute md:-mb-8 xl:-mb-16 bg-white border-2 border-gray-800 flex justify-between items-center w-full md:ml-10 lg:ml-0 md:w-10/12 shadow-xl z-40 bottom-0 left-0 py-4 px-4 lg:px-9 lg:py-9">
                                <p className="text-sm md:text-lg lg:text-2xl font-semibold tracking-wider leading-9 text-gray-900">
                                    308 Negra Arroyo Lane,
                                    <br />
                                    Albuquerque, New Mexico.
                                </p>
                                <div className="w-16 h-16 cursor-pointer hover:bg-gray-200 ease-in duration-150 rounded-full border-black border-4 flex items-center justify-center">
                                    <svg className xmlns="http://www.w3.org/2000/svg" width={29} height={29} viewBox="0 0 29 29" fill="none">
                                        <path d="M2.47308 14.3386H27.0261" stroke="#1A202C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.503 26.6624L27.0257 14.3386" stroke="#1A202C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.503 2.01477L27.0257 14.3386" stroke="#1A202C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row xl:flex-col w-full xl:w-auto items-center 2xl:-mr-20 justify-center relative xl:absolute right-0 2xl:px-0 xl:px-4 px-0">
                        <a className="hidden xl:block" href="./contacts">
                            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={19} viewBox="0 0 35 19" fill="none">
                                <path d="M1 18L17.5 1L34 18" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="xl:hidden" href="./contacts">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </a>
                        <div className="flex items-center xl:flex-col justify-center  py-16">
                            <a href="./">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-indigo" />
                            </a>
                            <a href="./work">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                            <a href="./projects">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                            <a href="./testimonials">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                            <a href="./team">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                            <a href="./contacts">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
                            </a>
                        </div>
                        <a className="hidden xl:block" href="./work">
                            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={18} viewBox="0 0 35 18" fill="none">
                                <path d="M34 1L17.5 17L1 1" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="ml-5 xl:hidden" href="./work">
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
