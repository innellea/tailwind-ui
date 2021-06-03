import react, { useState } from "react";
const Index = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="relative pb-24 lg:pb-96">
            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-strip.png" className="absolute right-0 z-0 h-full hero-img-yellow-width lg:block hidden" />
            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-strip.png" className="absolute right-0 z-0 lg:h-96 lg:hidden block" />
            <div className="">
                <nav className="mx-auto container relative z-10">
                    <div className="lg:flex hidden items-center justify-between py-12 xl:px-0 px-4">
                        <a href="/">
                            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/foodies.png" className="w-44" alt="logo" />
                        </a>
                        <ul className="flex leading-loose">
                            <a href="/">
                                <li className="text-2xl leading-8 mr-10 text-color-orange relative font-normal cursor-pointer text-hover">
                                    Home
                                    <hr className="border-4 border-color-orange bg-color-orange w-10 absolute right-0" />
                                </li>
                            </a>
                            <a href="/menu">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Menu</li>
                            </a>
                            <a href="#">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">About</li>
                            </a>
                            <a href="/contact">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Contact</li>
                            </a>
                            <a href="#">
                                <li className="text-2xl leading-8 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Reservation</li>
                            </a>
                        </ul>
                    </div>
                </nav>
                <nav className="lg:hidden z-40 relative">
                    <div className="flex py-4 justify-between items-center px-4">
                        <div>
                            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/foodies.png" alt="logo" className="w-24" />
                        </div>
                        <div className="visible flex items-center">
                            <ul id="list" className={menu ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16" : "hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16"}>
                                <li className="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2">
                                    <a href="/">
                                        <span className="ml-2 font-bold">Home</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="/menu">
                                        <span className="ml-2 font-bold">Menu</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="#">
                                        <span className="ml-2 font-bold">About</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="/contact">
                                        <span className="ml-2 font-bold">Contact</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="#">
                                        <span className="ml-2 font-bold">Reservation</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="xl:hidden">
                                {!menu ? (
                                    <svg id="open" onClick={() => setMenu(true)} aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                ) : (
                                    <div id="close" className="close-m-menu" onClick={() => setMenu(false)}>
                                        <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="mx-auto container relative z-20 lg:px-0 px-4">
                    <div className="flex lg:flex-row flex-col-reverse items-center justify-between lg:mt-24">
                        <div className="lg:w-1/2">
                            <h1 className="text-6xl lg:block hidden leading-115 border-l-8 border-color-orange pl-12">
                                Craving for
                                <br />
                                <span className="2xl:text-8xl text-7xl font-bold"> Healthy Food? </span>
                            </h1>
                            <h1 className="text-3xl lg:hidden block leading-8 border-l-8 border-color-orange pl-2 xl:mt-0 mt-8">
                                Craving for
                                <br />
                                <span className="text-4xl font-bold"> Healthy Food? </span>
                            </h1>
                            <h1 className="lg:text-2xl text-lg text-color-gray lg:leading-8 leading-6 mt-6 border-l-8 border-color-orange lg:pl-12 pl-2 py-2">Here is what you always need. View our food collection and order yummy and healthy food within minutes.</h1>
                            <div className="flex items-center justify-center mt-12">
                                <a href="/menu">
                                    {" "}
                                    <button className="xl:py-5 py-2 xl:px-16 px-6 bg-color-orange 2xl:text-3xl lg:text-xl text-base font-semibold leading-loose text-white focus:outline-none hover:opacity-90 border-2 border-color-orange b-r-10 mr-10">View Menu</button>
                                </a>
                                <button className="xl:py-5 py-2 xl:px-16 px-6 border-color-orange 2xl:text-3xl lg:text-xl text-base font-semibold leading-loose text-color-orange focus:outline-none button-transparent border-2 border-color-orange b-r-10">Book A Table</button>
                            </div>
                            <div className="2xl:mt-24 mt-12 items-center 2xl:pl-16 xl:pl-16 lg:pl-12 md:pl-0 sm:pl-0 pl-16 md:flex hidden">
                                <a href="#" className="cursor-pointer">
                                    <div className="w-12 h-12 bg-white fb-hover flex items-center justify-center shadow-xl rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={32} viewBox="0 0 20 32" fill="white">
                                            <path d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z" stroke="#0F0F0F" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" className="cursor-pointer">
                                    <div className="w-12 h-12 bg-white mx-6 twitter-hover flex items-center justify-center shadow-xl rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={28} viewBox="0 0 36 28" fill="white">
                                            <path
                                                d="M34.6667 0.683417C33 1.50008 31.3667 1.83175 29.6667 2.33342C27.7983 0.225083 25.0283 0.108417 22.3667 1.10508C19.705 2.10175 17.9617 4.53842 18 7.33342V9.00008C12.5917 9.13842 7.775 6.67508 4.66667 2.33342C4.66667 2.33342 -2.30333 14.7218 11.3333 20.6668C8.21333 22.7451 5.10167 24.1468 1.33333 24.0001C6.84667 27.0051 12.855 28.0384 18.0567 26.5284C24.0233 24.7951 28.9267 20.3234 30.8083 13.6251C31.3697 11.5879 31.6484 9.48318 31.6367 7.37008C31.6333 6.95508 34.1533 2.75008 34.6667 0.68175V0.683417Z"
                                                stroke="#0F0F0F"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a className="cursor-pointer" href="#">
                                    <div className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center insta-hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={38} height={38} viewBox="0 0 24 24" strokeWidth="0.75" stroke="#0F0F0F" fill="white" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={4} y={4} width={16} height={16} rx={4} />
                                            <circle cx={12} cy={12} r={3} />
                                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div className="flex mt-12 items-center justify-center md:hidden">
                                <a href="#" className="cursor-pointer">
                                    <div className="w-12 h-12 bg-white fb-hover flex items-center justify-center shadow-xl rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={32} viewBox="0 0 20 32" fill="white">
                                            <path d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z" stroke="#0F0F0F" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" className="cursor-pointer">
                                    <div className="w-12 h-12 bg-white mx-6 twitter-hover flex items-center justify-center shadow-xl rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={28} viewBox="0 0 36 28" fill="white">
                                            <path
                                                d="M34.6667 0.683417C33 1.50008 31.3667 1.83175 29.6667 2.33342C27.7983 0.225083 25.0283 0.108417 22.3667 1.10508C19.705 2.10175 17.9617 4.53842 18 7.33342V9.00008C12.5917 9.13842 7.775 6.67508 4.66667 2.33342C4.66667 2.33342 -2.30333 14.7218 11.3333 20.6668C8.21333 22.7451 5.10167 24.1468 1.33333 24.0001C6.84667 27.0051 12.855 28.0384 18.0567 26.5284C24.0233 24.7951 28.9267 20.3234 30.8083 13.6251C31.3697 11.5879 31.6484 9.48318 31.6367 7.37008C31.6333 6.95508 34.1533 2.75008 34.6667 0.68175V0.683417Z"
                                                stroke="#0F0F0F"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a className="cursor-pointer" href="#">
                                    <div className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center insta-hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={38} height={38} viewBox="0 0 24 24" strokeWidth="0.75" stroke="#0F0F0F" fill="white" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={4} y={4} width={16} height={16} rx={4} />
                                            <circle cx={12} cy={12} r={3} />
                                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 height-main-hero xl:block hidden">
                            <img loading="lazy" src="https://i.ibb.co/qRq3XKm/hero1.png" className="w-full" />
                        </div>
                        <div className="xl:w-1/2 xl:hidden block">
                            <img loading="lazy" src="https://i.ibb.co/qRq3XKm/hero1.png" className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index;
