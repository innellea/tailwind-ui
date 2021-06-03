import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
export default function IndexPage() {
    const [menu, setMenu] = useState(null);
    return (
        <>
            <Header />

            <div className="xl:mx-auto xl:container md:px-0 px-4 pt-12">
                <h1 className="text-4xl font-bold text-color-black xl:px-0 md:px-4">Gallery</h1>
                <div className="lg:flex items-center mt-16 hidden">
                    <a href="/gallery" className="cursor-pointer">
                        {" "}
                        <div className="text-base relative font-light text-color-black border-r border-color-gray leading-4 border-r pl-5 pr-11">All</div>
                    </a>
                    <a href="/gallery" className="cursor-pointer">
                        <div className="text-hr px-11 text-base relative font-light text-color-black leading-4 border-r border-color-gray">Nature</div>
                    </a>
                    <a href="/gallery" className="cursor-pointer">
                        <div className="px-11 text-hr text-base relative font-light text-color-black leading-4 border-r border-color-gray">Wedding</div>
                    </a>
                    <a href="/gallery" className="cursor-pointer">
                        <div className="px-11 text-hr text-base relative font-light text-color-black leading-4 border-r border-color-gray">Street</div>
                    </a>
                    <a href="/gallery" className="cursor-pointer">
                        <div className="px-11 text-hr text-base relative font-light text-color-black leading-4 border-r border-color-gray">People</div>
                    </a>
                    <a href="/gallery-categories" className="cursor-pointer">
                        <div className="px-11 text-hr text-base relative font-light text-color-black leading-4">
                            Architecture
                            <hr className="border-2 border-gold-color bg-gold-color w-14 right-0 mr-14 mt-1 rounded-full absolute" />
                        </div>
                    </a>
                </div>

                <div className="lg:hidden block xl:px-0 md:px-4">
                    <div className="relative">
                        <div className="bg-gold-color flex items-center justify-between rounded w-full border border-gold-color cursor-pointer mt-8" onClick={() => setMenu(!menu)}>
                            <p className="pl-3 py-3 text-white text-sm leading-3 tracking-normal font-normal">categories</p>
                            <div className="cursor-pointer text-white mr-3">
                                {menu ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" id="close2" className="icon icon-tabler  icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" id="open2" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        {menu && (
                            <ul className="transition duration-300 opacity-100  ease-out bg-color-black shadow rounded mt-2 py-1 w-full absolute z-30" id="list2">
                                <a href="/gallery">
                                    {" "}
                                    <li className="cursor-pointer text-white text-sm leading-3 tracking-normal py-3 hover-gold px-3 font-bold">All</li>{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <li className="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">Nature</li>{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <li className="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">Wedding</li>{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <li className="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">Street</li>{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <li className="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">People</li>{" "}
                                </a>
                                <a href="/gallery-categories">
                                    {" "}
                                    <li className="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">Architecture</li>{" "}
                                </a>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <div className="mx-auto container">
                <div class="flex items-center justify-center relative mt-36 2xl:block hidden">
                    <div class="flex items-center justify-center">
                        <img src="https://cdn.tuk.dev/assets/templates/reels/archi1.png" class="absolute left-0 z-0" />
                        <img src="https://cdn.tuk.dev/assets/templates/reels/archi2.png" class="relative z-10" />
                        <img src="https://cdn.tuk.dev/assets/templates/reels/archi3.png" class="absolute right-0 z-0" />
                    </div>
                </div>
                <div class="flex relative lg:mt-36 mt-16 2xl:hidden block">
                    <div class="relative h-full flex items-center justify-center w-full">
                        <div class="flex items-center justify-center relative">
                            <img src="https://cdn.tuk.dev/assets/templates/reels/archi1.png" class="absolute xl:w-1/4 w-1/6 left-0 xl:-ml-36 xl:ml-0 lg:ml-12 md:ml-10 sm:ml-8 ml-7" />
                            <img src="https://cdn.tuk.dev/assets/templates/reels/archi2.png" class="xl:w-10/12 w-7/12 z-20" />
                            <img src="https://cdn.tuk.dev/assets/templates/reels/archi3.png" class="absolute right-0 xl:w-1/4 w-1/6 z-0 xl:-mr-36 xl:mr-0 lg:mr-12 md:mr-10 sm:mr-8 mr-7" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full bg-peach 2xl:-mt-96 xl:-mt-80 lg:-mt-56 sm:-mt-32 -mt-16 xl:px-0 px-4">
                    <div className="2xl:pt-96 xl:pt-72 lg:pt-32 pt-4 mx-auto container">
                        <div className="sm:flex items-center justify-between 2xl:pt-32 lg:pt-40 2xl:pb-24 sm:pt-32 pt-16 lg:pb-16 sm:pb-8 pb-2">
                            <h1 className="xl:text-8xl text-4xl font-bold text-off-white">ARCHITECTURE</h1>
                        </div>
                    </div>
                </div>
                {/* hero */}
                {/* body */}
                {/* Featured Work */}
                <div className="my-16 w-full mx-auto container xl:px-0 px-8">
                    <div className="lg:flex items-center justify-between">
                        <div className="w-2/5 lg:block hidden">
                            <hr className />
                        </div>
                        <div className="text-center">
                            <p className="text-color-black text-center text-base font-light">Featured Work</p>
                        </div>
                        <div className="w-2/5 lg:block hidden">
                            <hr />
                        </div>
                    </div>
                    <div className="md:mt-48 mt-40">
                        <div className="flex xl:flex-row flex-col items-center md:justify-between justify-center">
                            <div className="xl:mr-7 sm:flex sm:items-center sm:justify-center xl:mt-0 mt-16 xl:w-1/3 w-full">
                                <div className="bg-peach flex px-5 items-center justify-center relative xl:w-full sm:w-1/2 h-full pb-32">
                                    <img className="xl:w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/cat1.png" />
                                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                                        <hr className="w-16 border-2 bg-black border-black" />
                                        <p className="text-2xl font-light leading-normal ml-2 text-color-black">New Building</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:mr-7 sm:flex sm:items-center sm:justify-center xl:mt-0 mt-48 xl:w-1/3 w-full lg:-mb-48">
                                <div className="bg-peach flex px-5 items-center justify-center relative xl:w-full sm:w-1/2 h-full pb-32">
                                    <img className="xl:w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/cat1.png" />
                                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                                        <hr className="w-16 border-2 bg-black border-black" />
                                        <p className="text-2xl font-light leading-normal ml-2 text-color-black">New Building</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-96 mt-48 xl:w-1/3 w-full">
                                <div className="bg-peach flex px-5 items-center justify-center relative xl:w-full sm:w-1/2 h-full pb-32">
                                    <img className="xl:w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/cat1.png" />
                                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                                        <hr className="w-16 border-2 bg-black border-black" />
                                        <p className="text-2xl font-light leading-normal ml-2 text-color-black">New Building</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex xl:flex-row flex-col items-center xl:justify-between justify-center xl:mt-48">
                            <div className="xl:mr-7 sm:flex sm:items-center sm:justify-center xl:mt-0 mt-48 xl:w-1/3 w-full">
                                <div className="bg-peach flex px-5 items-center justify-center relative xl:w-full sm:w-1/2 h-full pb-32">
                                    <img className="xl:w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/cat1.png" />
                                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                                        <hr className="w-16 border-2 bg-black border-black" />
                                        <p className="text-2xl font-light leading-normal ml-2 text-color-black">New Building</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:mr-7 sm:flex sm:items-center sm:justify-center xl:mt-0 mt-48 xl:w-1/3 w-full lg:-mb-48">
                                <div className="bg-peach flex px-5 items-center justify-center relative xl:w-full sm:w-1/2 h-full pb-32">
                                    <img className="xl:w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/cat1.png" />
                                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                                        <hr className="w-16 border-2 bg-black border-black" />
                                        <p className="text-2xl font-light leading-normal ml-2 text-color-black">New Building</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-96 mt-48 xl:w-1/3 w-full">
                                <div className="bg-peach flex px-5 items-center justify-center relative xl:w-full sm:w-1/2 h-full pb-32">
                                    <img className="xl:w-full -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/cat1.png" />
                                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                                        <hr className="w-16 border-2 bg-black border-black" />
                                        <p className="text-2xl font-light leading-normal ml-2 text-color-black">New Building</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Featured Work */}
                {/* body */}
            </div>

            <Footer />
        </>
    );
}
