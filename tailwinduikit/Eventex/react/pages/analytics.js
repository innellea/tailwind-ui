import React, { useEffect, useState } from "react";
import Head from "next/head";
export default function AnalyticsPage() {
    const [show, Setshow] = useState(true);
    useEffect(() => {
        const myBarChart2 = new Chart(document.getElementById("chartjs2"), {
            type: "pie",
            data: { labels: ["Accepted", "Rejected", "Pending", "Approved"], datasets: [{ data: [60, 12, 12, 25], fill: false, backgroundColor: ["#4880FF", "#FF5660", "#FFC400", "#24CCB8"] }] },
            options: {
                legend: {
                    position: false,
                },
            },
        });
        const chart = new Chart(document.getElementById("myChart"), {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"],
                datasets: [
                    {
                        label: "16 Mar 2018",
                        borderColor: "#4A5568",
                        data: [600, 400, 620, 300, 200, 600, 230, 300, 200, 200, 100, 1200],
                        fill: false,
                        pointBackgroundColor: "#4A5568",
                        borderWidth: "3",
                        pointBorderWidth: "4",
                        pointHoverRadius: "6",
                        pointHoverBorderWidth: "8",
                        pointHoverBorderColor: "rgb(74,85,104,0.2)",
                    },
                ],
            },
            options: {
                legend: {
                    position: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                },
            },
        });
        const myBarChart = new Chart(document.getElementById("chartjs1"), {
            type: "bar",
            data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], datasets: [{ data: [25, 55, 100, 75, 60, 60, 120, 150, 40, 0], fill: false, backgroundColor: "rgba(246,173,85,1)" }] },
            options: {
                /*  scales: { yAxes: [{ ticks: { beginAtZero: true } }] }, */
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },

                legend: {
                    position: false,
                },
            },
        });
    });
    return (
        <>
            <Head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
            </Head>
            <div className="mt-6 md:mt-14 w-full">
                <div className="w-full">
                    <div className="xl:flex justify-between w-full items-stretch">
                        <div className="xl:w-1/3 w-full pb-16 md:pb-0 px-5 py-5 pb-10 shadow-md bg-gradient-to-br from-red-400 to-red-500 rounded-sm flex flex-col justify-between">
                            <div className="py-3 pl-2 xl:py-6 xl:pl-4 w-full bg-red-400">
                                <h2 className="text-white text-xl xl:text-4xl">132</h2>
                                <h3 className="text-white text-base xl:text-xl mt-2 xl:mt-3">Total Events</h3>
                            </div>
                            <div className="w-full bg-transparent pt-6">
                                <h2 className="text-white text-xl xl:text-4xl">$431k</h2>
                                <h3 className="text-white text-base xl:text-xl mt-2 xl:mt-3">Total Revenue</h3>
                            </div>
                            <div className="w-full bg-transparent pt-6">
                                <h2 className="text-white text-xl xl:text-4xl">2349</h2>
                                <h3 className="text-white text-base xl:text-xl mt-2 xl:mt-3">Tickets Sold</h3>
                            </div>
                            <div className="w-full bg-transparent pt-6 pb-5">
                                <h2 className="text-white text-xl xl:text-4xl">7,564</h2>
                                <h3 className="text-white text-base xl:text-xl mt-2 xl:mt-3">Total Engagement</h3>
                            </div>
                        </div>
                        <div className="xl:w-2/3 pl-0 xl:pl-8 mt-10 xl:mt-0 w-full">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <div className="lg:flex w-full justify-between">
                                        <h3 className="text-gray-600 leading-5 text-base md:text-xl font-bold">Selling Overview</h3>
                                        <div className="flex items-center justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                                            <div className="flex items-center">
                                                <button className="py-2 px-4 bg-gray-100 focus:outline-none ease-in duration-150 text-xs text-gray-600 hover:bg-gray-200">Dollars</button>
                                                <button className="py-2 px-4 bg-red-500 focus:outline-none text-white ease-in duration-150 text-xs hover:bg-red-600">Tickets</button>
                                            </div>
                                            <div className="lg:ml-14">
                                                <div className="bg-gray-100 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                                                    <select className="text-xs text-gray-600 bg-transparent focus:outline-none">
                                                        <option className="leading-1">Year</option>
                                                        <option className="leading-1">2020</option>
                                                        <option className="leading-1">2019</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end mt-6">
                                        <h3 className="text-red-500 leading-5 text-lg md:text-2xl">$65,875</h3>
                                        <div className="flex items-center md:ml-4 ml-1">
                                            <p className="text-green-500 text-xs md:text-base">17%</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                <path d="M6 2.5V9.5" stroke="#48BB78" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 4.5L6 2.5" stroke="#48BB78" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4 4.5L6 2.5" stroke="#48BB78" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <canvas id="myChart" width={1025} height={386} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-14">
                    <div className="w-full">
                        <div className="xl:flex justify-between w-full">
                            <div className="xl:w-1/3 2xl:flex w-full ">
                                <div className="w-full flex flex-col justify-between">
                                    <div className="flex w-full justify-between relative md:static">
                                        <h4 className="text-gray-600 font-bold text-base md:text-xl">Registrations</h4>
                                        <div className="static sm:relative">
                                            <div onClick={() => Setshow(!show)} className="py-2 px-3 cursor-pointer flex items-center flex-no-wrap bg-gray-100 ease-in duration-150 hover:bg-gray-200 relative w-auto">
                                                <p className="text-gray-600 mr-2 text-xs">12 Aug - 19 Aug</p>
                                                <div>
                                                    <button>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <rect x="2.66666" y="3.33337" width="10.6667" height="10.6667" rx="1.33333" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10.6667 2V4.66667" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M5.33333 2V4.66667" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M2.66666 7.33333H13.3333" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.33334 9.99996H8.00001" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.99999 10V12" stroke="#F56565" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={show ? "hidden" : "w-full h-full"}>
                                                <div onClick={() => Setshow(!show)} className="fixed w-full h-full inset-0 bg-transparent z-40" />
                                                <div className="bg-white absolute -ml-44 sm:-ml-64 xl:ml-0 px-6  py-6 z-50 shadow-xl">
                                                    <p className="text-base text-gray-700">June</p>
                                                    <table className="mt-6">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div className="w-full flex justify-center">
                                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Mon</p>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="w-full flex justify-center">
                                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Tue</p>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="w-full flex justify-center">
                                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Wed</p>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="w-full flex justify-center">
                                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Thu</p>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="w-full flex justify-center">
                                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Fri</p>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="w-full flex justify-center">
                                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Sat</p>
                                                                    </div>
                                                                </th>
                                                                <th>
                                                                    <div className="w-full flex justify-center">
                                                                        <p className="opacity-50 text-xs font-bold text-center text-gray-600">Sun</p>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="pt-6">
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                                                                </td>
                                                                <td className="pt-6">
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                                                                </td>
                                                                <td className="pt-6">
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">1</p>
                                                                    </div>
                                                                </td>
                                                                <td className="pt-6">
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">2</p>
                                                                    </div>
                                                                </td>
                                                                <td className="pt-6">
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                                        <p className="text-sm text-red-600">3</p>
                                                                    </div>
                                                                </td>
                                                                <td className="pt-6">
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                                        <p className="text-sm text-red-600">4</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                                        <p className="text-sm text-gray-700">5</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                                        <p className="text-sm text-gray-700">6</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                                        <p className="text-sm text-gray-700">7</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                                                        <p className="text-sm text-gray-700">8</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="w-full h-full">
                                                                        <div className="w-12 h-12 flex w-full rounded-full justify-center items-center cursor-pointer bg-red-500">
                                                                            <p className="text-sm font-bold text-white">9</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-red-600">10</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-red-600">11</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">12</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">13</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">14</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">15</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="px-4 py-2 flex w-full  justify-center">
                                                                        <p className="text-sm text-gray-700">16</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-red-600">17</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-red-600">18</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">19</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">20</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">21</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">22</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="px-4 py-2 flex w-full  justify-center">
                                                                        <p className="text-sm text-gray-700">23</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-red-600">24</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-red-600">25</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">26</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">27</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">28</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                        <p className="text-sm text-gray-700">29</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="px-4 py-2 flex w-full  justify-center">
                                                                        <p className="text-sm text-gray-700">30</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-9">
                                        <canvas id="chartjs1" height={180} />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-2/3 w-full mt-10 xl:mt-0 xl:pl-8 2xl:pl-20">
                                <div className="xl:flex justify-between">
                                    <div class="w-full">
                                        <p class="text-base md:text-xl font-bold leading-tight text-gray-600">Upcoming events</p>
                                        <div class="flex items-center">
                                            <div class="w-full -ml-1.5 overflow-x-scroll 2xl:overflow-x-hidden overflow-y-hidden md:mt-8 mt-4">
                                                <table class="w-full relative alignTop">
                                                    <tbody>
                                                        <tr class="w-full">
                                                            <td class="xl:w-auto">
                                                                <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                    <circle cx="5" cy="5" r="5" fill="#718096"></circle>
                                                                </svg>
                                                                <div class="h-20 sm:h-16 z-0 absolute border-l border-gray-200 ml-1"></div>
                                                            </td>
                                                            <td class="xl:w-auto">
                                                                <p class="text-xs text-gray-700 pl-3">17&nbsp;Jun</p>
                                                            </td>
                                                            <td class="pl-8 w-1/4 xl:w-auto">
                                                                <div class="flex flex-col items-end">
                                                                    <p class="text-xs font-bold text-gray-700">Lake Casandra</p>
                                                                    <p class="text-xs leading-3 text-gray-400 mt-1">05:49AM</p>
                                                                </div>
                                                            </td>
                                                            <td class="pl-4 w-1/2 xl:w-auto">
                                                                <div class="flex items-center pl-4 border-l border-gray-100">
                                                                    <div>
                                                                        <p class="text-xs font-bold text-gray-700">80/200 tickets sold</p>
                                                                        <p class="text-xs leading-3 mt-1 text-gray-400">Starting at $53</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="pl-8 w-1/4 xl:w-auto">
                                                                <div class="flex items-center">
                                                                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pt-8 xl:w-auto">
                                                                <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                    <circle cx="5" cy="5" r="5" fill="#718096"></circle>
                                                                </svg>
                                                                <div class="h-20 sm:h-16 z-0 absolute border-l border-gray-200 ml-1"></div>
                                                            </td>
                                                            <td class="pt-8 xl:w-auto">
                                                                <p class="text-xs text-gray-700 pl-3">22 Jun</p>
                                                            </td>
                                                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                                                <div class="flex flex-col items-end">
                                                                    <p class="text-xs font-bold text-gray-700">Lake Casandra</p>
                                                                    <p class="text-xs leading-3 text-gray-400 mt-1">05:49AM</p>
                                                                </div>
                                                            </td>
                                                            <td class="pl-4 pt-8 w-1/2 xl:w-auto">
                                                                <div class="flex items-center pl-4 border-l border-gray-100">
                                                                    <div>
                                                                        <p class="text-xs font-bold text-gray-700">80/200 tickets sold</p>
                                                                        <p class="text-xs leading-3 mt-1 text-gray-400">Starting at $53</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                                                <div class="flex items-center">
                                                                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pt-8 xl:w-auto">
                                                                <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                    <circle cx="5" cy="5" r="5" fill="#718096"></circle>
                                                                </svg>
                                                                <div class="h-20 sm:h-16 z-0 absolute border-l border-gray-200 ml-1"></div>
                                                            </td>
                                                            <td class="pt-8 xl:w-auto">
                                                                <p class="text-xs text-gray-700 pl-3">22 Jun</p>
                                                            </td>
                                                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                                                <div class="flex flex-col items-end">
                                                                    <p class="text-xs font-bold text-gray-700">Lake Casandra</p>
                                                                    <p class="text-xs leading-3 text-gray-400 mt-1">05:49AM</p>
                                                                </div>
                                                            </td>
                                                            <td class="pl-4 pt-8 w-1/2 xl:w-auto">
                                                                <div class="flex items-center pl-4 border-l border-gray-100">
                                                                    <div>
                                                                        <p class="text-xs font-bold text-gray-700">80/200 tickets sold</p>
                                                                        <p class="text-xs leading-3 mt-1 text-gray-400">Starting at $53</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                                                <div class="flex items-center">
                                                                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pt-8 xl:w-auto">
                                                                <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                    <circle cx="5" cy="5" r="5" fill="#718096"></circle>
                                                                </svg>
                                                                <div class="h-20 sm:h-16 z-0 absolute border-l border-gray-200 ml-1"></div>
                                                            </td>
                                                            <td class="pt-8 xl:w-auto">
                                                                <p class="text-xs text-gray-700 pl-3">22 Jun</p>
                                                            </td>
                                                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                                                <div class="flex flex-col items-end">
                                                                    <p class="text-xs font-bold text-gray-700">Lake Casandra</p>
                                                                    <p class="text-xs leading-3 text-gray-400 mt-1">05:49AM</p>
                                                                </div>
                                                            </td>
                                                            <td class="pl-4 pt-8 w-1/2 xl:w-auto">
                                                                <div class="flex items-center pl-4 border-l border-gray-100">
                                                                    <div>
                                                                        <p class="text-xs font-bold text-gray-700">80/200 tickets sold</p>
                                                                        <p class="text-xs leading-3 mt-1 text-gray-400">Starting at $53</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                                                <div class="flex items-center">
                                                                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pt-8 xl:w-auto">
                                                                <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                    <circle cx="5" cy="5" r="5" fill="#718096"></circle>
                                                                </svg>
                                                            </td>
                                                            <td class="pt-8 xl:w-auto">
                                                                <p class="text-xs text-gray-700 pl-3">22 Jun</p>
                                                            </td>
                                                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                                                <div class="flex flex-col items-end">
                                                                    <p class="text-xs font-bold text-gray-700">Lake Casandra</p>
                                                                    <p class="text-xs leading-3 text-gray-400 mt-1">05:49AM</p>
                                                                </div>
                                                            </td>
                                                            <td class="pl-4 pt-8 w-1/2 xl:w-auto">
                                                                <div class="flex items-center pl-4 border-l border-gray-100">
                                                                    <div>
                                                                        <p class="text-xs font-bold text-gray-700">80/200 tickets sold</p>
                                                                        <p class="text-xs leading-3 mt-1 text-gray-400">Starting at $53</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                                                <div class="flex items-center">
                                                                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 xl:ml-12 2xl:border-l border-gray-100 flex flex-col  2xl:items-center mt-10 xl:mt-0">
                                        <p className="text-base md:text-xl font-bold leading-tight text-gray-600">Total RSVP Count </p>
                                        <div className="mx-auto flex flex-col items-center">
                                            <div className="mt-8">
                                                <canvas id="chartjs2" />
                                            </div>
                                            <div className="mt-8">
                                                <div className="flex items-center justify-between md:justify-start">
                                                    <div className="mr-8">
                                                        <p className="text-xs text-gray-400">Accepted</p>
                                                        <p className="text-xl font-bold text-gray-700">73.6%</p>
                                                    </div>
                                                    <div className="pl-8 md:border-l border-gray-100">
                                                        <p className="text-xs text-gray-400">Rejected</p>
                                                        <p className="text-xl font-bold text-gray-700">16.4%</p>
                                                    </div>
                                                </div>
                                                <div className="mt-3 flex items-center justify-between md:justify-start">
                                                    <div className="mr-8">
                                                        <p className="text-xs text-gray-400">Pending</p>
                                                        <p className="text-xl font-bold text-gray-700">73.6%</p>
                                                    </div>
                                                    <div className="pl-8 md:border-l border-gray-100">
                                                        <p className="text-xs text-gray-400">Rejected</p>
                                                        <p className="text-xl font-bold text-gray-700">16.4%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
