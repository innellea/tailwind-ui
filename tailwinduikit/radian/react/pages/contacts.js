import React from "react";
export default function IndexPage() {
    return (
        <>
            <div class="mt-4 lg:mt-16 xl:pb-16 relative">
                <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" class="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 bg-cover bg-center" alt="map" />
                <div className="relative z-20 mx-auto container  2xl:px-0 xl:px-16 px-4">
                    <div class="mx-auto container flex flex-wrap items-center relative 2xl:px-0 xl:px-16 px-4">
                        <div class="flex flex-wrap mx-auto container">
                            <div class="w-full relative lg:w-1/2 my-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0">
                                <div class="w-full flex flex-col items-start 2xl:items-end xl:justify-start 2xl:justify-end">
                                    <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-dark2">We’re Here</h1>
                                    <div class="w-full md:w-8/12 mt-3">
                                        <h2 class="text-dark2 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                                        <div class="mt-4 md:mt-8">
                                            <h2 class="text-sm md:text-base text-indigo2 font-semibold">Address</h2>
                                            <h2 class="text-dark2 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, NUST University H-12 Sector, Islamabad</h2>
                                        </div>
                                        <div class="mt-4 md:mt-8">
                                            <h2 class="text-sm md:text-base text-indigo2 font-semibold">Contact</h2>
                                            <h2 class="text-dark2 text-base md:text-lg leading-8 tracking-wider mt-2">+92 051 4567890 (Phone)</h2>
                                            <h2 class="text-dark2 text-base md:text-lg leading-8 tracking-wider mt-2">+92 123 4567890 (Cell)</h2>
                                        </div>
                                        <div class="mt-4 md:mt-8">
                                            <h2 class="text-sm md:text-base text-indigo2 font-semibold">Email</h2>
                                            <h2 class="text-dark2 text-base md:text-lg leading-8 tracking-wider mt-2">alphasquad@example.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/2 pt-10 sm:pt-12 md:pt-10 lg:pl-24">
                                <div class="flex flex-col items-start xl:justify-start 2xl:justify-end">
                                    <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo2">Let’s Talk</h1>
                                    <div class="w-full 2xl:w-8/12 mt-3">
                                        <h2 class="text-dark2 text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                                        <div class="mt-4 md:mt-8">
                                            <p class="text-dark2 text-base font-medium">Name</p>
                                            <input class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-dark2" type="text" placeholder="Justin Timberlake" />
                                        </div>
                                        <div class="mt-4 md:mt-8">
                                            <p class="text-dark2 text-base font-medium">Email Address</p>
                                            <input class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-dark2" type="email" placeholder="example@mail.com" />
                                        </div>
                                        <div class="mt-4 md:mt-8">
                                            <p class="text-dark2 text-base font-medium">Message</p>
                                            <textarea class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-dark2" type="text" placeholder="Write us something..."></textarea>
                                        </div>
                                        <div class="mt-5">
                                            <button class="py-3 md:py-5 px-5 md:px-10 bg-dark text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row xl:flex-col w-full xl:w-auto items-center 2xl:-mr-20 justify-center relative xl:absolute right-0 2xl:px-0 px-8">
                            <a class="hidden xl:block" href="./team">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none">
                                    <path d="M1 18L17.5 1L34 18" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            <a class="xl:hidden" href="./team">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </a>
                            <div class="flex items-center xl:flex-col justify-center  py-16">
                                <a href="./">
                                    <div class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray"></div>
                                </a>
                                <a href="./work">
                                    <div class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10"></div>
                                </a>
                                <a href="./projects">
                                    <div class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10"></div>
                                </a>
                                <a href="./testimonials">
                                    <div class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10"></div>
                                </a>
                                <a href="./team">
                                    <div class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10"></div>
                                </a>
                                <a href="./contacts">
                                    <div class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-indigo xl:mt-10"></div>
                                </a>
                            </div>
                            <a class="hidden xl:block" href="./">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 35 18" fill="none">
                                    <path d="M34 1L17.5 17L1 1" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            <a class="ml-5 xl:hidden" href="./">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
