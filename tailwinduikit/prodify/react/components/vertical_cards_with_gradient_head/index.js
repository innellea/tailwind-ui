import React, { useState } from "react";
function IndexPage() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="flex flex-col w-full items-center justify-center pt-10 lg:pt-28 f-f-l">
                <h1 className="text-2xl md:text-6xl xl:text-8xl font-black text-center text-color-gradient md:leading-tight">
                    You get more than what <br /> you pay for :){" "}
                </h1>
            </div>
            <div className="mx-auto container px-4 xl:px-0 pt-16 lg:pt-36">
                <div className="flex flex-col w-full items-center justify-center f-f-l">
                    <div className="bg-white w-full xl:w-11/12 px-6 py-8 xl:px-16 lg:py-16 shadow-lg rounded-lg">
                        <div className="lg:flex justify-between w-full">
                            <div>
                                <div className="flex w-full justify-between lg:justify-start items-center">
                                    <h1 className="text-color font-black text-3xl lg:text-5xl  lg:mr-8">Starter</h1>
                                    <button className="w-10 h-10 bg-button-color-about-us flex items-center justify-center rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                            <path d="M16 17.5626L22.6 10.9626L24.4853 12.848L16 21.3333L7.51465 12.848L9.39998 10.9626L16 17.5626Z" fill="#4A5568" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="pt-3">
                                    <p className="text-2xl f-f-r lg:w-10/12">For personal use that need advanced sharing &amp; reporting.</p>
                                </div>
                            </div>
                            <div className="pt-8 lg:pt-0 flex items-center flex-col">
                                <h1 className="f-f-l font-black text-color text-4xl lg:text-7xl">$29</h1>
                                <button className="py-4 px-4 xl:px-10 bg-button-color-about-us f-f-r text-xl font-bold text-color mt-7">Start Free Trial</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full xl:w-11/12 px-6 py-8 xl:px-16 lg:py-16 mt-12 shadow-lg rounded-lg">
                        <div className="lg:flex justify-between w-full">
                            <div>
                                <div className="flex w-full justify-between lg:justify-start items-center">
                                    <h1 className="text-color font-black text-3xl lg:text-5xl  lg:mr-8">Team</h1>
                                    <div data-menu className="cursor-pointer">
                                        <button className="w-10 h-10 bg-button-color-about-us  flex items-center justify-center rounded-full" onClick={() => setShow(!show)}>
                                            {show ? (
                                                <svg id="andicators1" xmlns="http://www.w3.org/2000/svg" width={18} height={12} viewBox="0 0 18 12" fill="none">
                                                    <path d="M9.00002 4.73399L2.40001 11.334L0.514683 9.44865L9.00002 0.963319L17.4854 9.44865L15.6 11.334L9.00002 4.73399Z" fill="#4A5568" />
                                                </svg>
                                            ) : (
                                                <svg id="andicators" className xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                                    <path d="M16 17.5626L22.6 10.9626L24.4853 12.848L16 21.3333L7.51465 12.848L9.39998 10.9626L16 17.5626Z" fill="#4A5568" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <p className="text-2xl f-f-r lg:w-10/12">For teams that need advanced sharing &amp; reporting.</p>
                                </div>
                                {show && (
                                    <div id="listHolder" className=" pt-12">
                                        <div className="flex items-center">
                                            <div className="pr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12L10 17L20 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl f-f-r">10 team projects</div>
                                        </div>
                                        <div className="flex items-center mt-7">
                                            <div className="pr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12L10 17L20 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl f-f-r">60-day version history</div>
                                        </div>
                                        <div className="flex items-center mt-7">
                                            <div className="pr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12L10 17L20 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl f-f-r">Up to 4 collaborators</div>
                                        </div>
                                        <div className="flex items-center mt-7">
                                            <div className="pr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12L10 17L20 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl f-f-r">Org-wide design systems</div>
                                        </div>
                                        <div className="flex items-center mt-7">
                                            <div className="pr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12L10 17L20 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl f-f-r">Plugin administration</div>
                                        </div>
                                        <div className="flex items-center mt-7">
                                            <div className="pr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12L10 17L20 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl f-f-r">Shared fonts</div>
                                        </div>
                                        <div className="flex items-center mt-7">
                                            <div className="pr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12L10 17L20 7" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl f-f-r">Analytics review for each instance</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="pt-8 lg:pt-0 flex items-center flex-col">
                                <h1 className="f-f-l font-black text-color text-4xl lg:text-7xl">$80</h1>
                                <button className="py-4 px-4 xl:px-10 bg-linear-button-about-us f-f-r text-xl font-bold text-white mt-7">Start Free Trial</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full xl:w-11/12 px-6 py-8 xl:px-16 lg:py-16 mt-12 shadow-lg rounded-lg">
                        <div className="lg:flex justify-between w-full">
                            <div>
                                <div className="flex w-full justify-between lg:justify-start items-center">
                                    <h1 className="text-color font-black text-3xl lg:text-5xl  lg:mr-8">Enterpise</h1>
                                    <button className="w-10 h-10 bg-button-color-about-us flex items-center justify-center rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                            <path d="M16 17.5626L22.6 10.9626L24.4853 12.848L16 21.3333L7.51465 12.848L9.39998 10.9626L16 17.5626Z" fill="#4A5568" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="pt-3">
                                    <p className="text-2xl f-f-r lg:w-10/12">For personal use that need advanced sharing &amp; reporting.</p>
                                </div>
                            </div>
                            <div className="pt-8 lg:pt-0 flex items-center flex-col">
                                <h1 className="f-f-l font-black text-color text-4xl lg:text-7xl">$29</h1>
                                <button className="py-4 px-4 xl:px-10 bg-button-color-about-us f-f-r text-xl font-bold text-color mt-7">Start Free Trial</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <p className="w-full md:w-1/2 xl:w-1/3 text-xl f-f-r pt-10 text-center">Aren’t completely satisfied? Get your money back, no questions asked</p>
                    </div>
                </div>
            </div>
            <style>
                {`
        .bg-linear-button-about-us {
            background: linear-gradient(91.12deg, #F56565 0%, #E55278 53.57%, #D53F8C 100%);
            border-radius: 6px;
        }

        .text-color-gradient {
            background: -webkit-linear-gradient(#F56565 100%, #E55278 100%, #D53F8C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .bg-button-color-about-us {
            background-color: #EDF2F7;
        }`}
            </style>
        </>
    );
}

export default IndexPage;
