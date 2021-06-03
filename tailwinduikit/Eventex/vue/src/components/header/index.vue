<template>
    <div class="flex flex-col flex-col-reverse md:flex-row w-full justify-between">
        <div class="bg-gray-50 rounded-2xl flex items-center py-2 pl-3 mt-4 md:mt-0">
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6.66667" cy="6.66667" r="4.66667" stroke="#718096" stroke-linecap="round" stroke-linejoin="round"></circle>
                <path d="M14 14L10 10" stroke="#718096" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <input placeholder="Search…" class="placeholder-gray-500 text-sm text-gray-700 w-52 pl-3 bg-transparent focus:outline-none" type="text" />
        </div>
        <div class="flex justify-between md:justify-start items-center">
            <div class="flex items-center">
                <div class="w-10 h-10 rounded-full">
                    <img v-bind:src="profileImage" alt="profile" />
                </div>
                <div class="ml-2">
                    <p class="text-sm text-gray-700">{{ profileName }}</p>
                    <p class="text-xs text-gray-600">{{ job }}</p>
                </div>
                <div class="ml-3 -mt-2 relative">
                    <div id="dropdown-content" class="mt-10 absolute right-0 shadow-md z-30 hidden w-40">
                        <ul class="bg-white shadow rounded py-1">
                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit profile</li>
                            <li class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Change Password</li>
                        </ul>
                    </div>
                    <button class="focus:outline-none">
                        <svg id="dropdownbtn" class="" @click="Interaction(true)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <svg id="dropdownbtn2" @click="Interaction(false)" xmlns="http://www.w3.org/2000/svg" class="hidden" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="6 15 12 9 18 15"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <Notifications />
        </div>
    </div>
</template>

<script>
import Notifications from "../notification_panel"
import Sidebar from "@/mixins/main.js"

export default {
    name: "index",
    mixins: [Sidebar],
    components: {
        Notifications
    }
}
</script>
