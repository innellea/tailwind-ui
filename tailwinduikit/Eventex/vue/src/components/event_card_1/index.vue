<template>
    <div class="mt-6 md:mt-14">
        <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <router-link to ="/EventInner" v-for="(event,idx) in events" v-bind:key="idx">
                <div class="bg-white pb-6 shadow-xl max-w-md">
                    <img class="w-full" v-bind:src="event.image" v-bind:alt="event.alt" />
                    <div class="mt-4 pl-4">
                        <p class="w-2/4 text-base font-bold leading-normal text-gray-800">{{event.name}}</p>
                    </div>
                    <div class="mt-4 flex items-center pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="3.33337" y="4.16699" width="13.3333" height="13.3333" rx="2" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></rect>
                            <path d="M13.3333 2.5V5.83333" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.66667 2.5V5.83333" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M3.33337 9.16667H16.6667" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9.16663 12.4997H9.99996" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10 12.5V15" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm leading-none text-gray-700 ml-2">{{event.date}}</p>
                    </div>
                    <div class="mt-4 pl-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                            <path d="M10 5.83301V9.99967L12.5 12.4997" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm leading-none text-gray-700 ml-2">{{event.time}}</p>
                    </div>
                    <div class="mt-4 pl-4">
                        <p class="text-xs leading-3 text-gray-700">Attended by</p>
                    </div>
                    <div class="mt-3 pl-4 flex w-full items-center justify-between">
                        <div class="flex items-center relative">
                            <div class="w-6 h-6 rounded-full flex justify-center items-center">
                                <img class="object-cover object-center h-full w-full" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-5.png" alt="profile" />
                            </div>
                            <div class="w-6 h-6 rounded-full flex justify-center items-center -ml-2">
                                <img class="object-cover object-center h-full w-full" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-6.png" alt="profile" />
                            </div>
                            <div class="w-6 h-6 rounded-full flex justify-center items-center -ml-2">
                                <img class="object-cover object-center h-full w-full" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-7.png" alt="profile" />
                            </div>
                            <div class="w-6 h-6 rounded-full flex justify-center border-2 border-white bg-red-400 items-center -ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <path d="M4.557 0.838V3.827H7.406V4.772H4.557V7.782H3.535V4.772H0.7V3.827H3.535V0.838H4.557Z" fill="white"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="py-2 px-5 flex justify-center items-center bg-gray-800">
                            <p class="text-sm font-bold leading-none text-white">$ {{event.price}}</p>
                        </div>
                    </div>
                    <div class="mt-5 pl-4">
                        <div class="flex items-center">
                            <p class="text-xs leading-3 text-green-500 mr-2">{{event.status}}</p>
                            <div class="pl-2 border-l-2 border-gray-100">
                                <p class="text-xs leading-3 text-green-500">{{event.seats}} seats booked</p>
                            </div>
                        </div>
                        <div class="mt-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p class="ml-2 text-xs leading-3 text-gray-600">{{event.link}}</p>
                            <svg class="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="5.33331" y="5.33301" width="8" height="8" rx="1.33333" stroke="#718096" stroke-linecap="round" stroke-linejoin="round"></rect>
                                <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="#718096" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <div class="flex items-center mt-4">
                            <button class="py-2 px-3 bg-gradient-to-br  from-red-400 to-red-500 hover:from-red-500 hover:to-red-400 rounded-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <circle cx="4.5" cy="3.5" r="2" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></circle>
                                    <path d="M1.5 10.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H5.5C6.60457 7.5 7.5 8.39543 7.5 9.5V10.5" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M8 5.125C7.79289 5.125 7.625 5.29289 7.625 5.5C7.625 5.70711 7.79289 5.875 8 5.875V5.125ZM11 5.875C11.2071 5.875 11.375 5.70711 11.375 5.5C11.375 5.29289 11.2071 5.125 11 5.125V5.875ZM9.875 4C9.875 3.79289 9.70711 3.625 9.5 3.625C9.29289 3.625 9.125 3.79289 9.125 4H9.875ZM9.125 7C9.125 7.20711 9.29289 7.375 9.5 7.375C9.70711 7.375 9.875 7.20711 9.875 7H9.125ZM8 5.875H11V5.125H8V5.875ZM9.125 4V7H9.875V4H9.125Z" fill="white"></path>
                                </svg>
                                <p class="text-xs leading-3 text-white ml-1">Book a Seat</p>
                            </button>
                            <button class="py-2 ml-3 px-3 bg-gray-700 hover:bg-gray-600 ease-in duration-150 rounded-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <circle cx="3" cy="6" r="1.5" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></circle>
                                    <circle cx="9" cy="3" r="1.5" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></circle>
                                    <circle cx="9" cy="9" r="1.5" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></circle>
                                    <path d="M4.34998 5.3499L7.64998 3.6499" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M4.34998 6.6499L7.64998 8.3499" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p class="text-xs leading-3 text-white ml-1">Share Event</p>
                            </button>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import EventData from "@/mixins/data.js"
export default {
    name: "index",
    mixins: [EventData]
}
</script>
