<template>
    <div @click="openSidebarMob(false)"
        class="flex items-center justify-center rounded-r-md bg-gray-800 ml-0 cursor-pointer absolute inset-0 mt-4 md:mt-6 m-auto w-8 h-8 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3.33337 6.66667H16.6667" stroke="#A0AEC0" stroke-width="1.25" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M3.33337 13.3332H16.6667" stroke="#A0AEC0" stroke-width="1.25" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
    <div @click="openSidebar(false)"
        class="flex items-center justify-center rounded-r-md bg-gray-800 ml-0 cursor-pointer absolute inset-0 mt-4 md:mt-6 m-auto w-8 h-8 hidden lg:block">
        <svg class="m-auto mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3.33337 6.66667H16.6667" stroke="#A0AEC0" stroke-width="1.25" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M3.33337 13.3332H16.6667" stroke="#A0AEC0" stroke-width="1.25" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
    <div class="hidden lg:block">
        <div id="sidebar"
            class="overflow-y-scroll lg:overflow-y-auto fixed lg:sticky h-screen lg:min-h-screen z-40 top-0 bg-gray-800 pt-7 w-64">
            <div class="px-7">
                <div class="flex items-center justify-between">
                    <div class="w-32">
                        <img class="w-full" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/logo.png" alt="logo" />
                    </div>
                    <div @click="openSidebar(true)" class="text-gray-700 ml-8 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path d="M3.33337 6.66667H16.6667" stroke="#A0AEC0" stroke-width="1.25"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33337 13.3332H16.6667" stroke="#A0AEC0" stroke-width="1.25"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div class="mt-16">
                    <router-link to="/">
                        <div class="flex items-center cursor-pointer">
                            <div 
                                v-bind:class="[{'bg-red-400' :$route.path === '/'}, {'bg-red-400' :$route.path === '/EventInner'}]"
                                class="px-1 py-1 rounded-sm bg-transparent hover:bg-red-400 ease-in duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <rect x="3.33337" y="3.3335" width="5" height="13.3333" rx="1.66667"
                                        stroke="white" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <rect x="11.6666" y="3.3335" width="5" height="8.33333" rx="1.66667"
                                        stroke="white" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p 
                                v-show="$route.path === '/EventInner'"
                                class="ml-2 font-normal text-sm  text-red-400 hover:text-red-400 duration-150 ease-in">
                                Events</p>
                            <p 
                                v-show="$route.path !== '/EventInner'"
                                v-bind:class="[{'text-gray' :$route.path !== '/'}]"
                                class="ml-2 font-normal text-sm  text-red-400 hover:text-red-400 duration-150 ease-in">
                                Events</p>
                        </div>
                    </router-link>
                    <router-link to="/Sales">
                        <div class="flex items-center mt-5  cursor-pointer">
                            <div
                                v-bind:class="[{'bg-red-400' :$route.path === '/Sales'}]"
                                class="px-1 py-1 rounded-sm bg-transparent hover:bg-red-400 ease-in duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path d="M12.5 4.1665V5.83317" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.5 9.1665V10.8332" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.5 14.1665V15.8332" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M4.16667 4.1665H15.8333C16.7538 4.1665 17.5 4.9127 17.5 5.83317V8.33317C16.5795 8.33317 15.8333 9.07936 15.8333 9.99984C15.8333 10.9203 16.5795 11.6665 17.5 11.6665V14.1665C17.5 15.087 16.7538 15.8332 15.8333 15.8332H4.16667C3.24619 15.8332 2.5 15.087 2.5 14.1665V11.6665C3.42047 11.6665 4.16667 10.9203 4.16667 9.99984C4.16667 9.07936 3.42047 8.33317 2.5 8.33317V5.83317C2.5 4.9127 3.24619 4.1665 4.16667 4.1665"
                                        stroke="#CBD5E0" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p
                                v-bind:class="[{'text-gray' :$route.path !== '/Sales'}]"
                                class="ml-2 font-normal text-sm  text-red-400 hover:text-red-400 duration-150 ease-in">
                                Sales</p>
                        </div>
                    </router-link>
                    <router-link to="/Analytics">
                        <div class="flex items-center mt-5  cursor-pointer">
                            <div 
                                v-bind:class="[{'bg-red-400' :$route.path === '/Analytics'}]"
                                class="px-1 py-1 rounded-sm bg-transparent hover:bg-red-400 ease-in duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path d="M3.33337 15.8337H16.6667" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.33337 12.5L6.66671 7.5L10 9.16667L13.3334 5L16.6667 8.33333"
                                        stroke="#CBD5E0" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p 
                                v-bind:class="[{'text-gray' :$route.path !== '/Analytics'}]"
                                class="ml-2 font-normal text-sm text-red-400 hover:text-red-400 duration-150 ease-in  ">
                                Analytics</p>
                        </div>
                    </router-link>
                    <router-link to="/Calendar">
                        <div class="flex items-center mt-5  cursor-pointer">
                            <div
                                v-bind:class="[{'bg-red-400' :$route.path === '/Calendar'},
                                {'bg-red-400' :$route.path === '/CalendarWeek'},
                                {'bg-red-400' :$route.path === '/CalendarDay'}
                                ]"
                                class="px-1 py-1 rounded-sm bg-transparent hover:bg-red-400 ease-in duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <rect x="3.33337" y="4.16699" width="13.3333" height="13.3333" rx="1.66667"
                                        stroke="#CBD5E0" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M13.3333 2.5V5.83333" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 2.5V5.83333" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.33337 9.16667H16.6667" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <rect x="6.66663" y="12.5" width="1.66667" height="1.66667" stroke="#CBD5E0"
                                        stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p 
                                v-show="$route.path !== '/CalendarWeek' & $route.path !== '/CalendarDay'"
                                v-bind:class="[{'text-gray' :$route.path !== '/Calendar'}]"
                                class="ml-2 font-normal text-sm text-red-400 hover:text-red-400 duration-150 ease-in  ">
                                Calendar</p>
                            <p 
                                v-show="$route.path === '/CalendarWeek'"
                                class="ml-2 font-normal text-sm  text-red-400 hover:text-red-400 duration-150 ease-in">
                                Calendar</p>
                            <p 
                                v-show="$route.path === '/CalendarDay'"
                                class="ml-2 font-normal text-sm  text-red-400 hover:text-red-400 duration-150 ease-in">
                                Calendar</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:hidden">
        <div id="sidebarMob"
            class="overflow-y-scroll lg:overflow-y-auto fixed lg:sticky h-screen lg:min-h-screen z-40 top-0 bg-gray-800 pt-7 w-64 hidden">
            <div class="px-7">
                <div class="flex items-center justify-between">
                    <div class="w-32">
                        <img class="w-full" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/logo.png" alt="logo" />
                    </div>
                    <div @click="openSidebarMob(true)" class="text-gray-700 ml-8 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path d="M3.33337 6.66667H16.6667" stroke="#A0AEC0" stroke-width="1.25"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33337 13.3332H16.6667" stroke="#A0AEC0" stroke-width="1.25"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div class="mt-16">
                    <router-link to="/">
                        <div class="flex items-center cursor-pointer">
                            <div
                                v-bind:class="[{'bg-red-400' :$route.path === '/'}]"
                                class="px-1 py-1 rounded-sm hover:bg-red-400 ease-in duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <rect x="3.33337" y="3.3335" width="5" height="13.3333" rx="1.66667"
                                        stroke="white" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <rect x="11.6666" y="3.3335" width="5" height="8.33333" rx="1.66667"
                                        stroke="white" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </div>
                            <p 
                                v-bind:class="[{'text-red-400' :$route.path === '/'}]"
                                class="ml-2 text-sm font-bold text-gray hover:text-red-400 duration-150 ease-in">
                                Events</p>
                        </div>
                    </router-link>
                    <router-link to="/Sales">
                        <div class="flex items-center mt-5  cursor-pointer">
                            <div
                                v-bind:class="[{'bg-red-400' :$route.path === '/Sales'}]"
                                class="px-1 py-1 rounded-sm bg-transparent hover:bg-red-400 ease-in duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path d="M12.5 4.1665V5.83317" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.5 9.1665V10.8332" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.5 14.1665V15.8332" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M4.16667 4.1665H15.8333C16.7538 4.1665 17.5 4.9127 17.5 5.83317V8.33317C16.5795 8.33317 15.8333 9.07936 15.8333 9.99984C15.8333 10.9203 16.5795 11.6665 17.5 11.6665V14.1665C17.5 15.087 16.7538 15.8332 15.8333 15.8332H4.16667C3.24619 15.8332 2.5 15.087 2.5 14.1665V11.6665C3.42047 11.6665 4.16667 10.9203 4.16667 9.99984C4.16667 9.07936 3.42047 8.33317 2.5 8.33317V5.83317C2.5 4.9127 3.24619 4.1665 4.16667 4.1665"
                                        stroke="#CBD5E0" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p
                                v-bind:class="[{'text-gray' :$route.path !== '/Sales'}]"
                                class="ml-2 font-normal text-sm  text-red-400 hover:text-red-400 duration-150 ease-in  ">
                                Sales</p>
                        </div>
                    </router-link>
                    <router-link to="/Analytics">
                        <div class="flex items-center mt-5  cursor-pointer">
                            <div
                                v-bind:class="[{'bg-red-400' :$route.path === '/Analytics'}]"
                                class="px-1 py-1 rounded-sm bg-transparent hover:bg-red-400 ease-in duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path d="M3.33337 15.8337H16.6667" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.33337 12.5L6.66671 7.5L10 9.16667L13.3334 5L16.6667 8.33333"
                                        stroke="#CBD5E0" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p 
                                v-bind:class="[{'text-gray' :$route.path !== '/Analytics'}]"
                                class="ml-2 font-normal text-sm text-red-400 hover:text-red-400 duration-150 ease-in">
                                Analytics</p>
                        </div>
                    </router-link>
                    <router-link to="/Calendar">
                        <div class="flex items-center mt-5  cursor-pointer">
                            <div
                                v-bind:class="[{'bg-red-400' :$route.path === '/Calendar'}]"
                                class="px-1 py-1 rounded-sm bg-transparent hover:bg-red-400 ease-in duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <rect x="3.33337" y="4.16699" width="13.3333" height="13.3333" rx="1.66667"
                                        stroke="#CBD5E0" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M13.3333 2.5V5.83333" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 2.5V5.83333" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.33337 9.16667H16.6667" stroke="#CBD5E0" stroke-width="1.25"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <rect x="6.66663" y="12.5" width="1.66667" height="1.66667" stroke="#CBD5E0"
                                        stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p 
                                v-bind:class="[{'text-gray' :$route.path !== '/Calendar'}]"
                                class="ml-2 font-normal text-sm text-red-400 hover:text-red-400 duration-150 ease-in  ">
                                Calendar</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/mixins/main.js"
export default {
    name: "index",
    mixins: [Sidebar]
}
</script>