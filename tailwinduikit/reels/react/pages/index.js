import React, { useState } from "react";
export default function Home() {
    const [show, setShow] = useState(null);
    return (
        <>
            <div className="min-h-screen relative">
                <img src="https://images.unsplash.com/photo-1609910276422-d1892a5c6463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" className="absolute h-full object-cover object-center w-full" />
                <div className={show ? "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-color-black shadow min-h-screen flex-col justify-between pb-12 transition duration-150    ease-in-out transform  translate-x-0" : "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-color-black shadow min-h-screen flex-col justify-between pb-12 transition duration-150 ease-in-out transform  -translate-x-full"}>
                    <div className="lg:px-6 px-4 flex justify-between items-center pt-16">
                        <a href="/" className="cursor-pointer">
                            <img src="https://i.ibb.co/z7zB0mg/REELS.png" className="lg:w-28 w-16" />
                        </a>
                        <div className="cursor-pointer lg:block hidden" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 40 40" fill="none">
                                <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                                <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                            </svg>
                        </div>
                        <div className="cursor-pointer lg:hidden block" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 40 40" fill="none">
                                <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                                <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="lg:px-6 px-4">
                        <ul className="mt-36">
                            <a href="/" className="cursor-pointer">
                                <li className="text-base font-bold bg-gold-color lg:py-6 py-3 lg:px-10 px-5 hover-gold text-color-black rounded-full">Home</li>
                            </a>
                            <a href="/gallery" className="cursor-pointer">
                                <li className="text-base font-bold text-off-white lg:py-6 py-3 lg:px-10 px-5 hover-gold rounded-full my-6">Gallery</li>
                            </a>
                            <a href="/contact-us" className="cursor-pointer">
                                <li className="text-base font-bold text-off-white lg:py-6 py-3 lg:px-10 px-5 hover-gold rounded-full">Contact</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="absolute bg-gray-900 h-full w-full opacity-25"></div>
                <div className="mx-auto container lg:px-0 px-4 h-full relative">
                    <div className="lg:flex hidden items-center pt-16 absolute w-full">
                        <div className="cursor-pointer pr-6" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={31} viewBox="0 0 50 31" fill="none">
                                <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="white" />
                                <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="white" />
                                <rect x={35} y={18} width={35} height={5} rx="2.5" transform="rotate(180 35 18)" fill="white" />
                            </svg>
                        </div>
                        <a href="/" className="cursor-pointer">
                            <img src="https://i.ibb.co/z7zB0mg/REELS.png" className="w-28" />
                        </a>
                    </div>
                    {/* Mobile */}
                    <nav className="lg:hidden">
                        <div className="flex pt-8 items-center px-4">
                            <div className="cursor-pointer pr-6" onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 50 31" fill="none">
                                    <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="white" />
                                    <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="white" />
                                    <rect x={35} y={18} width={35} height={5} rx="2.5" transform="rotate(180 35 18)" fill="white" />
                                </svg>
                            </div>
                            <a href="/">
                                <div>
                                    <img src="https://cdn.tuk.dev/assets/templates/reels/logo.png" alt className="w-20" />
                                </div>
                            </a>
                        </div>
                    </nav>
                    {/* Navbar */}
                    <div className="flex flex-col items-center justify-end h-screen lg:pb-28 pb-14">
                        <h1 className="lg:text-7xl text-4xl text-white font-bold py-16 text-center">
                            EVERYDAY LIFE, <span className="font-light">CAPTURED</span>
                        </h1>
                        <a href="/gallery">
                            {" "}
                            <button className="text-2xl font-bold text-off-white text-off-white-button border-4 border-off-white rounded-full lg:py-5 py-3 lg:px-28 px-14 focus:outline-none">View Gallery</button>{" "}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
