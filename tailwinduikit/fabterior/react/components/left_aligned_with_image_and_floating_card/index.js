import React from "react";
export default function IndexPage() {
    return (
        <>
            <div>
                <div className="mx-auto container h-full">
                    <div className="relative w-full h-screen lg:flex items-center justify-between">
                        <div>
                            <div className="lg:absolute lg:pt-20 right-0 top-0 lg:w-7/12">
                                <div className="hidden lg:block h-8 w-8 h-24 w-24 border-2 bg-img-border-color inset-0 absolute -ml-10 z-0 mt-6" />
                                <img src="https://cdn.tuk.dev/assets/templates/Fabterior/header.png" alt className="w-full relative z-10" />
                                <div className="hidden absolute z-20 right-0 bottom-0 background-color -mb-10 mr-12 h-24 w-24 lg:flex items-center justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} viewBox="0 0 48 49" fill="none">
                                        <path d="M24 10.9639V38.9639" stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M36 26.9639L24 38.9639" stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 26.9639L24 38.9639" stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:w-1/2 absolute">
                            <div className="py-12 lg:py-16 px-8 lg:px-16 background-color text-white lg:w-full z-30">
                                <h1 className="text-2xl lg:text-8xl leading-normal font-bold tracking-wide f-f-d-s">We Design your Future</h1>
                                <p className="text-base lg:text-2xl font-normal tracking-tight leading-7 py-8 f-f-l">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem.</p>
                                <button className="px-4 lg:px-10 py-4 btn-bg lg:text-2xl uppercase f-f-l">Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`.f-f-l {
    font-family: "Roboto", sans-serif;
}
.f-f-d-s {
    font-family: "DM Serif Display", serif;
}
.font-lato {
    font-family: "Lato", sans-serif;
}
.text-color-para {
                color: #636363;
            }
            .text-color-heading {
                color: #334048;
            }

            .background-color {
                background: #334048;
            }
            .btn-bg {
                background-color: #202b32;
            }
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
        </>
    );
}
