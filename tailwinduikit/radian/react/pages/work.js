import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="2xl:mx-auto 2xl:container xl:px-0 px-4">
                <div className="flex flex-wrap items-center relative py-10 lg:py-40 2xl:px-0 xl:px-16 px-0">
                    <div className="lg:w-1/3 w-full">
                        <h1 className="text-4xl xl:block hidden md:text-5xl lg:text-7xl font-bold tracking-wider text-dark2 uppercase">
                            What <br /> <span>We</span>
                            <br />
                            <span className="text-indigo2">Do?</span>
                        </h1>
                        <h1 className="text-4xl xl:hidden md:text-5xl lg:text-7xl font-bold tracking-wider text-dark2 uppercase">
                            What We
                            <span className="text-indigo2">Do?</span>
                        </h1>
                        <ul className="mt-5 md:mt-11 flex flex-col">
                            <li className="text-lg md:text-2xl tracking-wider text-dark2">01. HOME DESIGN</li>
                            <li className="text-lg md:text-2xl tracking-wider text-dark2 mt-5 md:mt-11">02. COMMERCIAL DESIGN</li>
                            <li className="text-lg md:text-2xl tracking-wider text-dark2 mt-5 md:mt-11">03. LANDSCAPE</li>
                            <li className="text-lg md:text-2xl tracking-wider text-dark2 mt-5 md:mt-11">04. GARDEN &amp; OUTDOOR</li>
                            <li className="text-lg md:text-2xl tracking-wider text-dark2 mt-5 md:mt-11">05. CONSULTANCY</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-2/3 xl:flex flex-row xl:flex-col items-end mt-5 lg:mt-0">
                        <div className="flex flex-col w-full xl:w-auto md:flex-row justify-center md:justify-start  items-center">
                            <div className="hoverDiv md:w-auto w-full">
                                <img src="https://cdn.tuk.dev/assets/templates/radian/work(1).png" alt className="md:w-auto w-full object-cover object-fill" />
                                <div className="overlay">
                                    <div className="flex flex-col justify-between">
                                        <div className="absolute  text uppercase">Books</div>
                                        <div className="absolute bottom-0 right-0 pb-8 pr-8">
                                            <button className="text-base font-semibold text-white  px-3 py-3 bg-light-dark">View All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hoverDiv md:w-auto w-full mt-5 md:mt-0 md:ml-5">
                                <img className="md:w-auto w-full object-cover object-fill" src="https://cdn.tuk.dev/assets/templates/radian/work(2).png" alt="image" />
                                <div className="overlay">
                                    <div className="flex flex-col justify-between">
                                        <div className="absolute text uppercase">Room</div>
                                        <div className="absolute bottom-0 right-0 pb-8 pr-8">
                                            <button className="text-base font-semibold text-white  px-3 py-3 bg-light-dark">View All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full xl:w-auto md:flex-row justify-center md:justify-start items-center mt-5">
                            <div className="hoverDiv md:w-auto w-full">
                                <img className="md:w-auto w-full object-cover object-fill" src="https://cdn.tuk.dev/assets/templates/radian/work(3).png" alt="GARDEN" />
                                <div className="overlay">
                                    <div className="flex flex-col justify-between">
                                        <div className="text1 absolute">
                                            GARDEN &amp; <br />
                                            OUTDOOR
                                        </div>
                                        <div className="absolute bottom-0 right-0 pb-8 pr-8">
                                            <button className="text-base font-semibold text-white  px-3 py-3 bg-light-dark">View All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hoverDiv md:w-auto w-full mt-5 md:mt-0 md:ml-5">
                                <img className="md:w-auto w-full object-cover object-fill" src="https://cdn.tuk.dev/assets/templates/radian/work(4).png" alt="guest hall" />
                                <div className="overlay">
                                    <div className="flex flex-col justify-between">
                                        <div className="text1 absolute uppercase">
                                            Indoor Hall &amp; <br />
                                            Guest Room
                                        </div>
                                        <div className="absolute bottom-0 right-0 pb-8 pr-8">
                                            <button className="text-base font-semibold text-white  px-3 py-3 bg-light-dark">View All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row xl:flex-col w-full xl:w-auto items-center  2xl:-mr-20 justify-center relative xl:absolute right-0 2xl:px-0 xl:px-4 px-0">
                        <a className="hidden xl:block" href="./">
                            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={19} viewBox="0 0 35 19" fill="none">
                                <path d="M1 18L17.5 1L34 18" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="xl:hidden" href="./">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </a>
                        <div className="flex items-center xl:flex-col justify-center  py-16">
                            <a href="./">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray " />
                            </a>
                            <a href="./work">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0  bg-indigo xl:mt-10" />
                            </a>
                            <a href="./projects">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0  bg-gray xl:mt-10" />
                            </a>
                            <a href="./testimonials">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0  bg-gray xl:mt-10" />
                            </a>
                            <a href="./team">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0  bg-gray xl:mt-10" />
                            </a>
                            <a href="./contacts">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0  bg-gray xl:mt-10" />
                            </a>
                        </div>
                        <a className="hidden xl:block" href="./projects">
                            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={18} viewBox="0 0 35 18" fill="none">
                                <path d="M34 1L17.5 17L1 1" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="ml-5 xl:hidden" href="./projects">
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
