<template>
    <div class="flex pt-6 items-center">
        <div data-menu class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" class="icon icon-tabler icon-tabler-chevron-down" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" class="hidden icon icon-tabler icon-tabler-chevron-up" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 15 12 9 18 15" />
            </svg>
        </div>
        <h1 class="text-lg text-gray-900 font-semibold ml-3">This Week</h1>
    </div>
    <ul class="hidden pt-6">
        <div v-for="idx in 3" v-bind:key="idx">
            <li 
                class="md:flex justify-between items-center">
                <div class="flex items-center text-gray-400 w-full md:w-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="19" r="1" />
                        <circle cx="12" cy="5" r="1" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="19" r="1" />
                        <circle cx="12" cy="5" r="1" />
                    </svg>
                    <div class="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div class="check-icon bg-yellow-400 text-white rounded-sm hidden">
                            <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M5 12l5 5l10 -10"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-600 font-semibold">{{todo[0].title}}</p>
                </div>
                <div class="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                    <p class="text-red-500 mt-4 md:mt-0 mr-10">Due today at {{todo[0].time}}</p>
                    <div class="mt-4 md:mt-0 flex items-center">
                        <div class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                <circle cx="9" cy="9" r="2" />
                            </svg>
                        </div>
                        <div class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                        </div>
                        <div class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="4" y="5" width="16" height="16" rx="2" />
                                <line x1="16" y1="3" x2="16" y2="7" />
                                <line x1="8" y1="3" x2="8" y2="7" />
                                <line x1="4" y1="11" x2="20" y2="11" />
                                <rect x="8" y="15" width="2" height="2" />
                            </svg>
                        </div>
                        <div class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 11h6m-3 -3v6" />
                            </svg>
                        </div>
                        <div class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-archive" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="3" y="4" width="18" height="4" rx="2" />
                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                <line x1="10" y1="12" x2="14" y2="12" />
                            </svg>
                        </div>
                        <div class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="5" cy="12" r="1" />
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                            </svg>
                        </div>
                    </div>
                </div>
            </li>
            <li v-if="idx !==3"> 
                <hr class="my-5 border-t border-gray-300" />
            </li>
        </div>
    </ul>
    <hr class="divider mt-6 border-t border-gray-300" />
    <div>
        <div class="flex pt-6 items-center">
            <div data-menu class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" class="icon icon-tabler icon-tabler-chevron-down" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" class="hidden icon icon-tabler icon-tabler-chevron-up" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 15 12 9 18 15" />
                </svg>
            </div>
            <h1 class="text-lg text-gray-900 font-semibold ml-3">Unscheduled</h1>
        </div>
        <ul class="hidden pt-6">
            <div v-for="idx in 3" v-bind:key="idx">
                <li class="md:flex justify-between items-center">
                    <div class="flex items-center text-gray-400 w-full md:w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="19" r="1" />
                            <circle cx="12" cy="5" r="1" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="19" r="1" />
                            <circle cx="12" cy="5" r="1" />
                        </svg>
                        <div class="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div class="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-600 font-semibold">{{todo[0].title}}</p>
                    </div>
                    <div class="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                        <p class="text-yellow-600 mt-4 md:mt-0 mr-10">Due today at {{todo[0].time}}</p>
                        <div class="mt-4 md:mt-0 flex items-center">
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                    <circle cx="9" cy="9" r="2" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="4" y="5" width="16" height="16" rx="2" />
                                    <line x1="16" y1="3" x2="16" y2="7" />
                                    <line x1="8" y1="3" x2="8" y2="7" />
                                    <line x1="4" y1="11" x2="20" y2="11" />
                                    <rect x="8" y="15" width="2" height="2" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    <path d="M16 11h6m-3 -3v6" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-archive" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="3" y="4" width="18" height="4" rx="2" />
                                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                    <line x1="10" y1="12" x2="14" y2="12" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="5" cy="12" r="1" />
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="19" cy="12" r="1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </li>
                <li v-if="idx !==3"> 
                    <hr class="my-5 border-t border-gray-300" />
                </li>
            </div>
        </ul>
    </div>
    <hr class="divider mt-6 border-t border-gray-300" />
    <div>
        <div class="flex pt-6 items-center">
            <div data-menu class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" class="icon icon-tabler icon-tabler-chevron-down" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" class="hidden icon icon-tabler icon-tabler-chevron-up" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 15 12 9 18 15" />
                </svg>
            </div>
            <h1 class="text-lg text-gray-900 font-semibold ml-3">Completed</h1>
        </div>
        <ul class="hidden pt-6">
            <div v-for="idx in 3" v-bind:key="idx">
                <li 
                    class="md:flex justify-between items-center">
                    <div class="flex items-center text-gray-400 w-full md:w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="19" r="1" />
                            <circle cx="12" cy="5" r="1" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="19" r="1" />
                            <circle cx="12" cy="5" r="1" />
                        </svg>
                        <div class="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div class="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-600 font-semibold">{{todo[0].title}}</p>
                    </div>
                    <div class="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                        <p class="text-red-500 mt-4 md:mt-0 mr-10">Due today at {{todo[0].time}}</p>
                        <div class="mt-4 md:mt-0 flex items-center">
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                    <circle cx="9" cy="9" r="2" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="4" y="5" width="16" height="16" rx="2" />
                                    <line x1="16" y1="3" x2="16" y2="7" />
                                    <line x1="8" y1="3" x2="8" y2="7" />
                                    <line x1="4" y1="11" x2="20" y2="11" />
                                    <rect x="8" y="15" width="2" height="2" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    <path d="M16 11h6m-3 -3v6" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-archive" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="3" y="4" width="18" height="4" rx="2" />
                                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                    <line x1="10" y1="12" x2="14" y2="12" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="5" cy="12" r="1" />
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="19" cy="12" r="1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </li>
                <li v-if="idx !==3"> 
                    <hr class="my-5 border-t border-gray-300" />
                </li>
            </div>
        </ul>
    </div>
    <hr class="divider mt-6 border-t border-gray-300" />
</template>
<script>
import Handler from "@/mixins/index"
export default {
    mixins: [Handler],
    data() {
        return {
            todo: [
                {
                    title: "Welcome to Quicklist!",
                    time: "18:00"
                }
            ],
        }
    },
}
</script>
