import React, { useState , useEffect } from "react";
import Router from "next/router";
export default function Home() {
    const [show, setShow] = useState(null);
     const [query, setQuery] = useState("");
    useEffect(() => {
        if (Router.router.asPath) {
            const item = Router.router.asPath;
            setQuery(item);
        }
    }, [Router]);
    console.log("query", query);
    const checkActive = () => {
        if (query.indexOf("gallery") !== -1) {
            return "gallery";
        } else if (query.indexOf("gallery-categories") !== -1) {
            return "gallery";
        } else if (query.indexOf("contact-us") !== -1) {
            return "contact-us";
        } 
        return "home";
    };
    return (
        <>
            <div className={show ? "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-color-black shadow min-h-screen flex-col justify-between  pb-12 transition duration-150    ease-in-out transform  translate-x-0" : "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-color-black shadow min-h-screen flex-col justify-between  pb-12 transition duration-150 ease-in-out transform  -translate-x-full"}>
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
                            <li className={checkActive ()== "home" ? "text-base font-bold bg-gold-color lg:py-6 py-3 lg:px-10 px-5 hover-gold text-color-black rounded-full" : "text-base font-bold text-off-white lg:py-6 py-3 lg:px-10 px-5 hover-gold rounded-full"}>Home</li>
                        </a>
                        <a href="./gallery" className="cursor-pointer">
                            <li className={checkActive ()== "gallery" ? "text-base font-bold bg-gold-color lg:py-6 py-3 lg:px-10 px-5 hover-gold text-color-black rounded-full my-6" : "text-base font-bold text-off-white lg:py-6 py-3 lg:px-10 px-5 hover-gold rounded-full my-6"}>Gallery</li>
                        </a>
                        <a href="./contact-us" className="cursor-pointer">
                            <li className={checkActive ()== "contact-us" ? "text-base font-bold bg-gold-color lg:py-6 py-3 lg:px-10 px-5 hover-gold text-color-black rounded-full" : "text-base font-bold text-off-white lg:py-6 py-3 lg:px-10 px-5 hover-gold rounded-full"}>Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="mx-auto container lg:px-0 px-4 h-full relative">
                {/* Navbar */}
                <div className="lg:flex hidden items-center pt-16  w-full">
                    <div className="cursor-pointer pr-6" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={31} viewBox="0 0 50 31" fill="none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="31" viewBox="0 0 50 31" fill="none">
                                <rect x="50" y="31" width="50" height="5" rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                                <rect x="50" y="5" width="50" height="5" rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                                <rect x="35" y="18" width="35" height="5" rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                            </svg>
                        </svg>
                    </div>
                    <a href="/" className="cursor-pointer">
                        <img src="https://i.ibb.co/rxRwqvX/REELS.png" class="w-28" />
                    </a>
                </div>
                {/* Mobile */}
                <nav className="lg:hidden">
                    <div className="flex pt-8 items-center px-4">
                        <div className="cursor-pointer pr-6" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 50 31" fill="none">
                                <rect x="50" y="31" width="50" height="5" rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                                <rect x="50" y="5" width="50" height="5" rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                                <rect x="35" y="18" width="35" height="5" rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                            </svg>
                        </div>
                        <a href="/">
                            <div>
                                <img src="https://i.ibb.co/rxRwqvX/REELS.png" class="w-20" />
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}
