<template>
    <div>
        <button
            class="pl-3 pr-5 py-2 flex items-center hover:from-red-500 hover:to-red-400 bg-gradient-to-br from-red-400 to-red-500 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.99996 3.33301V12.6663" stroke="white" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M3.33337 8.00033H12.6667" stroke="white" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <p class="text-sm leading-none text-white ml-2">Add Event</p>
        </button>
    </div>
    <div class="w-full sm:flex items-center justify-between mt-8">
        <div>
            <p class="text-base leading-none text-gray-700">September 2018</p>

        </div>
        <div class="md:flex justify-center hidden">
            <div class="flex items-center">
                <router-link 
                    v-show="$route.path === '/Calendar'"
                    to="/CalendarDay">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-left" width="12" height="12"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </router-link>
                <router-link 
                    v-show="$route.path === '/CalendarWeek'"
                    to="/Calendar">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-left" width="12" height="12"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </router-link>
                <router-link 
                    v-show="$route.path === '/CalendarDay'"
                    to="/CalendarWeek">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-left" width="12" height="12"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </router-link>
                <router-link 
                        v-show="$route.path === '/Calendar'"
                        to="/CalendarWeek">
                    <svg class="cursor-pointer ml-20 icon icon-tabler icon-tabler-chevron-right" xmlns="http://www.w3.org/2000/svg"
                        width="12" height="12"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </router-link>
                <router-link 
                        v-show="$route.path === '/CalendarWeek'"
                        to="/CalendarDay">
                    <svg class="cursor-pointer ml-20 icon icon-tabler icon-tabler-chevron-right" xmlns="http://www.w3.org/2000/svg"
                        width="12" height="12"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </router-link>
                <router-link 
                        v-show="$route.path === '/CalendarDay'"
                        to="/Calendar">
                    <svg class="cursor-pointer ml-20 icon icon-tabler icon-tabler-chevron-right" xmlns="http://www.w3.org/2000/svg"
                        width="12" height="12"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </router-link>
            </div>
        </div>
        <div class="flex items-center mt-4 sm:mt-0 justify-between">
            <div>
                <router-link to="/Calendar">
                    <h4
                        v-bind:class="[{'text-yellow-400' :$route.path === '/Calendar'}]"
                        class="text-xs opacity-75 text-right hover:text-yellow-400 duration-150 ease-in text-gray-600">
                        Month view</h4>
                </router-link>
            </div>
            <div class="ml-9">
                <router-link to="/CalendarWeek">
                    <h4
                        v-bind:class="[{'text-yellow-400' :$route.path === '/CalendarWeek'}]"
                        class="opacity-75 text-xs hover:text-yellow-400 duration-150 ease-in text-right text-gray-600 text-right sm:ml-6">
                        Week view</h4>
                </router-link>
            </div>
            <div class="ml-9">
                <router-link to="/CalendarDay">
                    <h4
                        v-bind:class="[{'text-yellow-400' :$route.path === '/CalendarDay'}]"
                        class="text-xs opacity-75 text-right hover:text-yellow-400 duration-150 ease-in text-gray-600 text-right sm:ml-2">
                        Day view</h4>
                </router-link>
            </div>
        </div>
    </div>
</template>