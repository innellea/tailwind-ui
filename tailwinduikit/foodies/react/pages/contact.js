import react, { useState } from "react";
const Index = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            {/* Navigation */}
            <div className="mx-auto container">
                {/* Desktop */}
                <nav>
                    <div className="lg:flex hidden items-center justify-between py-12">
                        <a href="/">
                            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/foodies.png" className="w-44" alt="logo" />
                        </a>
                        <ul className="flex leading-loose">
                            <a href="/">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Home</li>
                            </a>
                            <a href="/menu">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Menu</li>
                            </a>
                            <a href="#">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">About</li>
                            </a>
                            <a href="/contact">
                                <li className="text-2xl leading-8 mr-10 text-color-orange relative font-normal cursor-pointer text-hover">
                                    Contact
                                    <hr className="border-4 border-color-orange bg-color-orange w-10 absolute right-0" />
                                </li>
                            </a>
                            <a href="#">
                                <li className="text-2xl leading-8 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Reservation</li>
                            </a>
                        </ul>
                    </div>
                </nav>
                {/* Desktop */}
                {/* Mobile */}
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
                {/* Mobile */}
            </div>
            {/* Navigation */}
            {/* section1 */}
            <div className="mx-auto container lg:mt-32 lg:px-52 px-4 mt-16">
                <div className="flex items-center justify-center">
                    <hr className="w-2.5 h-16 bg-color-orange" />
                    <h1 className="text-3xl font-bold text-color-black pl-7">Locations</h1>
                </div>
                <div className="lg:mt-16 mt-8 lg:flex items-end">
                    <div className="lg:w-1/2 lg:border-r border-black lg:pr-24 lg:pb-24">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/cafe.png" className="w-full h-full" />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="lg:pb-24 lg:pl-24 lg:pt-0 pt-8">
                            <div>
                                <p className="text-2xl font-semibold">New Jersey, USA</p>
                                <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
                                <p className="text-lg pt-1">(316) 555-0116</p>
                                <p className="text-lg pt-1">New Jersey</p>
                            </div>
                            <div className="lg:pt-24 pt-8">
                                <p className="text-2xl font-semibold">New Jersey, USA</p>
                                <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
                                <p className="text-lg pt-1">(316) 555-0116</p>
                                <p className="text-lg pt-1">New Jersey</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex items-center justify-center w-full">
                    <div className="lg:w-2/5 lg:border-t lg:border-r border-black">
                        <div className="lg:pr-24 lg:pt-24 pt-8 lg:pb-24">
                            <p className="text-2xl font-semibold">SanFrancisco, USA</p>
                            <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
                            <p className="text-lg pt-1">(316) 555-0116</p>
                            <p className="text-lg pt-1">New Jersey</p>
                        </div>
                    </div>
                    <div className="lg:w-2/5 lg:border-t border-black">
                        <div className="lg:pl-24 lg:pt-24 pt-8 lg:pb-24">
                            <div>
                                <p className="text-2xl font-semibold">SanFrancisco, USA</p>
                                <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
                                <p className="text-lg pt-1">(316) 555-0116</p>
                                <p className="text-lg pt-1">New Jersey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section1 */}
        </div>
    );
};
export default Index;
