import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="w-full">
                <img className="w-full" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-1.png" alt="event" />
                <div className="flex items-center mt-5">
                    <p className="text-xs md:text-sm leading-none text-red-600 mr-3">7th July 2020</p>
                    <div className="pl-3 border-l-2 border-gray-200">
                        <p className="text-xs md:text-sm leading-none text-red-600">9:00pm - 11:00pm</p>
                    </div>
                </div>
                <div className="mt-3 md:flex w-full items-start justify-between">
                    <p className="text-xl md:text-3xl font-bold md:leading-10 text-gray-800 md:w-7/12">Metropolitan City Art Gallery Showcase Exhibition</p>
                    <div className="flex items-center mt-4 md:mt-0">
                        <p className="text-xs md:text-sm leading-none text-green-500 mr-3">Available</p>
                        <div className="pl-3 border-l-2 border-gray-200">
                            <p className="text-xs md:text-sm leading-none text-green-500">86/90 seats booked</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:flex justify-between w-full">
                    <div className="flex items-center">
                        <img className=" object-cover object-center w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-2.png" alt="profile" />
                        <img className=" object-cover object-center -ml-3 w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-3.png" alt="profile" />
                        <img className=" object-cover object-center -ml-3 w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-4.png" alt="profile" />
                        <img className=" object-cover object-center -ml-3 w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-5.png" alt="profile" />
                        <img className=" object-cover object-center -ml-3 w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-6.png" alt="profile" />
                        <img className=" object-cover object-center -ml-3 w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-7.png" alt="profile" />
                        <img className=" object-cover object-center -ml-3 w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-8.png" alt="profile" />
                        <img className=" object-cover object-center -ml-3 w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-9.png" alt="profile" />
                        <img className=" object-cover object-center -ml-3 w-9 h-9 " src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-10.png" alt="profile" />
                        <div className="w-9 h-9  rounded-full flex justify-center border-2 border-white bg-red-400 items-center -ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                <path d="M9.99998 4.16699V15.8337" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.16669 9.99967H15.8334" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex mt-4 md:mt-0 items-center">
                        <button className="py-2 pl-3 pr-4 bg-gray-700 hover:bg-gray-600 ease-in duration-150 rounded-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                <circle cx={3} cy={6} r="1.5" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx={9} cy={3} r="1.5" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx={9} cy={9} r="1.5" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.34998 5.3499L7.64998 3.6499" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M4.34998 6.6499L7.64998 8.3499" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="text-xs leading-3 text-white ml-2">Share Event</p>
                        </button>
                        <button className="py-2 ml-3 pl-3 pr-4 bg-gradient-to-br  from-red-400 to-red-500 hover:from-red-500 hover:to-red-400 rounded-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                <circle cx="4.5" cy="3.5" r={2} stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.5 10.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H5.5C6.60457 7.5 7.5 8.39543 7.5 9.5V10.5" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 5.125C7.79289 5.125 7.625 5.29289 7.625 5.5C7.625 5.70711 7.79289 5.875 8 5.875V5.125ZM11 5.875C11.2071 5.875 11.375 5.70711 11.375 5.5C11.375 5.29289 11.2071 5.125 11 5.125V5.875ZM9.875 4C9.875 3.79289 9.70711 3.625 9.5 3.625C9.29289 3.625 9.125 3.79289 9.125 4H9.875ZM9.125 7C9.125 7.20711 9.29289 7.375 9.5 7.375C9.70711 7.375 9.875 7.20711 9.875 7H9.125ZM8 5.875H11V5.125H8V5.875ZM9.125 4V7H9.875V4H9.125Z" fill="white" />
                            </svg>
                            <p className="text-xs leading-3 text-white ml-2">Book a Seat</p>
                        </button>
                    </div>
                </div>
                <div className="mt-4 md:mt-6">
                    <p className="text-xs md:text-sm leading-relaxed text-gray-600">???Many artists would walk miles, under any conditions, to show their work in a venue on City Art Gallery Showcase Exhibition. If that isn???t realistic, showing your work in any exhibition???major or small, a big city or suburban???can be the ultimate validation of your talent,creativity and persistence. Naturally, you want your work to connect with an audience who appreciates and understands it.???</p>
                </div>
                <div className="mt-2 cursor-pointer">
                    <p className="text-xs md:text-sm text-blue-500 hover:text-blue-400 ease-in duration-150">Read more</p>
                </div>
            </div>
        </>
    );
}
