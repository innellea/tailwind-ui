<template>
    <div class="w-full overflow-x-scroll xl:overflow-x-hidden mt-6">
        <table class="min-w-full bg-white">
            <thead class="items-center">
                <tr class="h-20">
                    <th class="border-r-2 border-gray-200 px-10">
                        <div class="flex flex-col items-center">
                            <p
                                class="text-lg text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                3</p>
                            <p
                                class="text-xs text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                Monday</p>
                        </div>
                    </th>
                    <th class="border-r-2 border-gray-200 px-10">
                        <div class="flex flex-col items-center">
                            <p
                                class="text-lg text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                4</p>
                            <p
                                class="text-xs text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                Tuesday</p>
                        </div>
                    </th>
                    <th class="border-r-2 border-gray-200 px-10">
                        <div class="flex flex-col items-center">
                            <p
                                class="text-lg text-yellow-400 uppercase opacity-60 tracking-widest cursor-pointer">
                                5</p>
                            <p
                                class="text-xs text-yellow-400 uppercase opacity-60 tracking-widest cursor-pointer">
                                Wednesday</p>
                        </div>
                    </th>
                    <th class="border-r-2 border-gray-200 px-10">
                        <div class="flex flex-col items-center">
                            <p
                                class="text-lg text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                6</p>
                            <p
                                class="text-xs text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                Thursday</p>
                        </div>
                    </th>
                    <th class="border-r-2 border-gray-200 px-10">
                        <div class="flex flex-col items-center">
                            <p
                                class="text-lg text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                7</p>
                            <p
                                class="text-xs text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                Friday</p>
                        </div>
                    </th>
                    <th class="border-r-2 border-gray-200 px-10">
                        <div class="flex flex-col items-center">
                            <p
                                class="text-lg text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                8</p>
                            <p
                                class="text-xs text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                Saturday</p>
                        </div>
                    </th>
                    <th class="border-r-2 border-gray-200 px-10">
                        <div class="flex flex-col items-center">
                            <p
                                class="text-lg text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                9</p>
                            <p
                                class="text-xs text-gray-800 uppercase opacity-60 tracking-widest cursor-pointer">
                                Sunday</p>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="relative">
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20">
                    </td>
                    <td class="border-r-2 border-gray-200 relative h-20">
                        <div @click="calender_ticket(true)"
                            class="absolute border-t-2 border-indigo-500 -ml-0.5 bg-indigo-100">
                            <div class="flex">
                                <div class="flex-shrink-0 2xl:w-48 py-4 pl-3 h-24 ">
                                    <div class="text-indigo-700">
                                        <p class="text-sm leading-5 ">Barcelona Design
                                            <br>Conference
                                        </p>
                                        <p class="mt-3 text-xs leading-3 ">2:00pm - 4:00pm</p>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 w-12 ml-2 2xl:ml-4"></div>
                            </div>
                        </div>
                    </td>
                    <td class="border-r-2 relative border-gray-200 h-20">
                        <div id="calender_ticket" class="hidden">
                            <div @click="calender_ticket(false)"
                                class="fixed w-full h-full inset-0 bg-transparent"></div>
                            <div class="absolute bg-white shadow-xl z-40 -ml-4 left-0 w-64">

                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/popupimage.png" />
                                        <div @click="calender_ticket(false)"
                                            class="absolute top-0 right-0 mt-3 mr-3 cursor-pointer w-4 h-4 flex items-center justify-center text-gray-100 bg-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <path d="M12 4L4 12" stroke="currentColor"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4 4L12 12" stroke="currentColor"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="py-5 px-3.5">
                                        <p class="text-sm font-bold leading-normal text-gray-700">Barcelona
                                            Design
                                            Conference</p>
                                        <div class="flex items-center mt-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <rect x="2.6665" y="3.33301" width="10.6667"
                                                    height="10.6667" rx="2" stroke="#718096"
                                                    stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M10.6668 2V4.66667" stroke="#718096"
                                                    stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M5.33333 2V4.66667" stroke="#718096"
                                                    stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M2.6665 7.33333H13.3332" stroke="#718096"
                                                    stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M7.3335 10.0003H8.00016" stroke="#718096"
                                                    stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M7.99984 10V12" stroke="#718096"
                                                    stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p class="text-xs leading-3 text-gray-700 ml-2">14th September
                                                2020
                                            </p>
                                        </div>
                                        <div class="flex items-center mt-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <circle cx="8" cy="8" r="6" stroke="#718096"
                                                    stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M8 4.66699V8.00033L10 10.0003" stroke="#718096"
                                                    stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p class="text-xs leading-3 text-gray-700 ml-2">Tuesday, 9:00 pm
                                                -
                                                11:00
                                                pm</p>
                                        </div>
                                        <div class="mt-5">
                                            <p class="text-xs leading-3 text-gray-700">Attended by</p>
                                            <div class="flex items-center relative mt-3">
                                                <div
                                                    class="w-6 h-6 rounded-full flex justify-center items-center">
                                                    <img class="object-cover object-center h-full w-full"
                                                        src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-5.png" alt="profile">
                                                </div>
                                                <div
                                                    class="w-6 h-6  rounded-full flex justify-center items-center -ml-2">
                                                    <img class="object-cover object-center h-full w-full"
                                                        src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-6.png" alt="profile">
                                                </div>
                                                <div
                                                    class="w-6 h-6  rounded-full flex justify-center items-center -ml-2">
                                                    <img class="object-cover object-center h-full w-full"
                                                        src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-7.png" alt="profile">
                                                </div>
                                                <div
                                                    class="w-6 h-6  rounded-full flex justify-center border-2 border-white bg-red-400 items-center -ml-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="8"
                                                        height="8" viewBox="0 0 8 8" fill="none">
                                                        <path
                                                            d="M4.557 0.838V3.827H7.406V4.772H4.557V7.782H3.535V4.772H0.7V3.827H3.535V0.838H4.557Z"
                                                            fill="white"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center mt-4">
                                            <p class="text-xs leading-3 text-green-500 mr-2">Available</p>
                                            <div class="pl-2 border-l-2 border-gray-100">
                                                <p class="text-xs leading-3 text-green-500">86/90 seats
                                                    booked
                                                </p>
                                            </div>
                                        </div>
                                        <div class="mt-5 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676"
                                                    stroke="#718096" stroke-width="1.25"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path
                                                    d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333"
                                                    stroke="#718096" stroke-width="1.25"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <p class="ml-2 text-xs leading-3 text-gray-600">
                                                Veevents.com/cosutmeparty
                                            </p>
                                            <svg class="ml-3.5 cursor-pointer"
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <rect x="5.33331" y="5.33301" width="8" height="8"
                                                    rx="1.33333" stroke="#718096" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                </rect>
                                                <path
                                                    d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335"
                                                    stroke="#718096" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="mt-5">
                                            <button
                                                class="py-2  w-11/12 bg-gray-700 hover:bg-gray-600 ease-in duration-150 rounded-sm flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12"
                                                    height="12" viewBox="0 0 12 12" fill="none">
                                                    <circle cx="3" cy="6" r="1.5" stroke="white"
                                                        stroke-width="0.75" stroke-linecap="round"
                                                        stroke-linejoin="round"></circle>
                                                    <circle cx="9" cy="3" r="1.5" stroke="white"
                                                        stroke-width="0.75" stroke-linecap="round"
                                                        stroke-linejoin="round"></circle>
                                                    <circle cx="9" cy="9" r="1.5" stroke="white"
                                                        stroke-width="0.75" stroke-linecap="round"
                                                        stroke-linejoin="round"></circle>
                                                    <path d="M4.34998 5.3499L7.64998 3.6499" stroke="white"
                                                        stroke-width="0.75" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M4.34998 6.6499L7.64998 8.3499" stroke="white"
                                                        stroke-width="0.75" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>
                                                <p class="text-xs leading-3 text-white ml-1.5">Share Event
                                                </p>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2  border-gray-200 h-20">

                    </td>
                    <td class="border-r-2 relative border-gray-200 h-20">
                        <div class="absolute border-t-2 border-pink-500 -ml-0.5 bg-pink-100">
                            <div class="flex">
                                <div class="flex-shrink-0 2xl:w-44 py-4 pl-3 h-24 ">
                                    <div class="text-pink-700">
                                        <p class="text-sm leading-5 w-24 2xl:w-full ">Motivation and
                                            Resources
                                        </p>
                                        <p class="mt-3 text-xs leading-3 ">2:00pm - 4:00pm</p>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 w-6 xl:w-7 2xl:w-3 2xl:ml-4"></div>
                            </div>
                        </div>
                    </td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 relative border-gray-200 h-20">
                        <div class="absolute right-0  text-white p-1 bg-yellow-400 text-xs">
                            <p>14:34</p>
                        </div>
                    </td>
                    <td class="border-r-2 border-gray-200 h-20">
                        <div class="w-full mt-5">
                            <hr class="border-yellow-400">
                        </div>
                    </td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2  border-gray-200 h-20">
                    </td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CalendarTicket from "@/mixins/main.js"
export default {
    name: "index",
    mixins: [CalendarTicket],
}
</script>