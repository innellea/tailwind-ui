import react, { useState } from "react";
const Index = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <section>
                <div className="w-full relative px-6 xl:px-0">
                    <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" />
                    <nav className="lg:hidden relative z-40">
                        <div className="flex py-6 justify-between items-center px-4">
                            <div>
                                <img className="w-24" src="https://cdn.tuk.dev/assets/templates/weCare/logo-blue.png" />
                            </div>
                            <div className="flex items-center">
                                <ul className={menu ? "top-100 top-0 p-2 border-r bg-menu absolute rounded left-0 right-0 shadow mt-16 md:mt-16" : "hidden p-2 border-r bg-menu absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16"}>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <a href="#">
                                            <span className="ml-2 font-bold">Products</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                        <a href="#">
                                            <span className="ml-2 font-bold">Claims</span>
                                        </a>
                                    </li>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <a href="#">
                                            <span className="ml-2 font-bold">Renewals</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                        <a href="#">
                                            <span className="ml-2 font-bold">Reports</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="xl:hidden">
                                    <svg id="open" onClick={() => setMenu(true)} aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                    <div id="close" className="hidden close-m-menu" onClick={() => setMenu(false)}>
                                        <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav className="hidden relative z-10 w-full lg:flex justify-between items-center p-20">
                        <div className="w-1/6">
                            <a href="#">
                                <img src="https://cdn.tuk.dev/assets/templates/weCare/logo-blue.png" />
                            </a>
                        </div>
                        <div className="w-5/6">
                            <div className="flex items-center justify-end">
                                <ul className="custom-gray-800 flex items-center leading-none">
                                    <li>
                                        <a href="#">Products</a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#">Claims</a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#">Renewal</a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#">Support</a>
                                    </li>
                                </ul>
                                <div className="pl-40">
                                    <button className="bg-blue-500 text-white px-6 py-2.5 font-semibold rounded focus:outline-none">Live Chat</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                            <img className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png" />
                        </div>
                        <div className="w-full lg:w-1/2 h-full">
                            <p className="text-blue-500 uppercase text-2xl mb-4">Qusique Tincidun sapien</p>
                            <h1 className="custom-gray-900 text-80px mb-8">All natural ingredients</h1>
                            <p className="custom-gray-800 font-regular mb-8">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac posuere nunc.</p>
                            <div className="bg-white py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                                <div className="sm:flex items-center py-2">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 icon icon-tabler icon-tabler-user" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx={12} cy={7} r={4} />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                        <p className="leading-none tracking-normal custom-gray-800 ml-2.5">Doctor Name</p>
                                    </div>
                                    <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 icon icon-tabler icon-tabler-layout-bottombar" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={4} y={4} width={16} height={16} rx={2} />
                                            <line x1={4} y1={15} x2={20} y2={15} />
                                        </svg>
                                        <p className="leading-none tracking-normal custom-gray-800 ml-2.5">Zip code</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 icon icon-tabler icon-tabler-flag" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1={5} y1={5} x2={5} y2={21} />
                                            <line x1={19} y1={5} x2={19} y2={14} />
                                            <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                                            <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                                        </svg>
                                        <p className="leading-none tracking-normal custom-gray-800 ml-2.5">Insurance</p>
                                    </div>
                                </div>
                                <div className="text-white bg-blue-600 mt-4 sm:mt-0 p-3 rounded w-full sm:w-auto relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                    <input className="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                {`.custom-gray-800 {
                color: #1b1b1b;
            }
            .bg-custom-gray-800 {
                background-color: #1b1b1b;
            }
            .custom-gray-900 {
                color: #212121;
            }
            .text-80px {
                font-size: 80px;
                line-height: 80px;
            }
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            .bg-menu {
                background: #f2faff;
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
            }
            @media (min-width: 320px) and (max-width: 667px) {
                .text-80px {
                    font-size: 40px;
                    line-height: 40px;
                }
                .text-40px {
                    font-size: 30px;
                    line-height: 32px;
                }
            }`}
            </style>
        </div>
    );
};
export default Index;
