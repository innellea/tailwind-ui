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
                <div className="lg:flex items-center mt-16 hidden xl:px-0 px-4">
                    <a href="/gallery" className="cursor-pointer">
                        <div className="text-base relative text-color-black font-light border-r border-color-gray leading-4 border-r pl-5 pr-11">
                            All
                            <hr className="border-2 border-gold-color bg-gold-color w-14 left-0 rounded-full absolute mt-1" />
                        </div>
                    </a>
                    <a href="/gallery" className="cursor-pointer">
                        <div className="text-hr px-11 text-base relative text-color-black font-light leading-4 border-r border-color-gray">Nature</div>
                    </a>
                    <a href="/gallery" className="cursor-pointer">
                        <div className="px-11 text-hr text-base relative text-color-black font-light leading-4 border-r border-color-gray">Wedding</div>
                    </a>
                    <a href="/gallery" className="cursor-pointer">
                        <div className="px-11 text-hr text-base relative text-color-black font-light leading-4 border-r border-color-gray">Street</div>
                    </a>
                    <a href="/gallery" className="cursor-pointer">
                        <div className="px-11 text-hr text-base relative text-color-black font-light leading-4 border-r border-color-gray">People</div>
                    </a>
                    <a href="/gallery-categories" className="cursor-pointer">
                        <div className="px-11 text-hr text-base relative text-color-black font-light leading-4">Architecture</div>
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
                            <ul className="transition duration-300 opacity-100  ease-out bg-color-black shadow rounded mt-2 py-1 w-full absolute z-20" id="list2">
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
                <div className="height md:block hidden mt-16 mx-auto container">
                    <div className="grid relative">
                        <div className="grid-sizer" />
                        <div className="grid-item grid-item--img1">
                            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery1.png" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="grid-item--img2">
                            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery2.png" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="grid-item--img3">
                            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery3.png" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="grid-item--img4">
                            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery4.png" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="grid-item--img5">
                            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery5.png" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="grid-item--img6">
                            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery6.png" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="grid-item--img7">
                            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery7.png" className="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                </div>
                <div className="img-10 mt-6 xl:block hidden 2xl:px-0 px-4 mx-auto container">
                    <img src="https://cdn.tuk.dev/assets/templates/reels/gallery8.png" />
                </div>
                <div className="mt-16 md:hidden block">
                    <div>
                        <img src="https://cdn.tuk.dev/assets/templates/reels/gallery1.png" className="w-full h-full my-2" />
                        <img src="https://cdn.tuk.dev/assets/templates/reels/gallery2.png" className="w-full h-full my-2" />
                        <img src="https://cdn.tuk.dev/assets/templates/reels/gallery3.png" className="w-full h-full my-2" />
                        <img src="https://cdn.tuk.dev/assets/templates/reels/gallery4.png" className="w-full h-full my-2" />
                        <img src="https://cdn.tuk.dev/assets/templates/reels/gallery6.png" className="w-full h-full my-2" />
                        <img src="https://cdn.tuk.dev/assets/templates/reels/gallery7.png" className="w-full h-full my-2" />
                    </div>
                </div>
                <div className="xl:hidden block mb-10 xl:px-0 lg:px-4 md:px-4 sm:px-0 px-0 h-full mx-auto container">
                    <img src="https://cdn.tuk.dev/assets/templates/reels/gallery8.png" className="h-full md:my-0 my-2 w-full" />
                </div>
                <div className="my-24 flex items-center justify-center">
                    <button className="lg:text-2xl text-base text-gold-color border-gold-color hover-gold border-2 focus:outline-none lg:py-5 py-2 lg:px-32 px-16 rounded-full">See More</button>
                </div>
            </div>

            <Footer />
        </>
    );
}
