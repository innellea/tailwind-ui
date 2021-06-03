<template>
    <div v-bind:class="[{'relative pb-24 lg:pb-96' :$route.path === '/' }]">
        <img v-if="this.$route.path === '/'"
            loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-strip.png" class="absolute right-0 z-0 h-full hero-img-yellow-width lg:block hidden" />
        <img v-if="this.$route.path === '/'"
            loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-strip.png" class="absolute right-0 z-0 lg:h-96 lg:hidden block" />
        <div class="">
            <!-- Desktop -->
            <nav class="mx-auto container relative z-10">
                <div class="lg:flex hidden items-center justify-between py-12 xl:px-0 px-4">
                    <router-link to="/">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/foodies.png" class="w-44" alt="logo" />
                    </router-link>
                    <ul class="flex leading-loose">
                        <router-link to="/">
                            <li 
                                v-bind:class="[{'text-color-orange' :$route.path === '/'}, {'text-color-black' :$route.path !== '/'}]"
                                class="text-2xl leading-8 mr-10 relative font-normal cursor-pointer text-hover">
                                Home
                                <hr v-if="this.$route.path ==='/'"
                                    class="border-4 border-color-orange bg-color-orange w-10 absolute right-0" />
                            </li>
                        </router-link>
                        <router-link to="/FoodiesMenu">
                            <li 
                                v-bind:class="[{'text-color-orange' :$route.path === '/FoodiesMenu'}, {'text-color-black' :$route.path !== '/FoodiesMenu'}]"
                                class="xl:text-2xl text-xl leading-8 mr-10 text-color-orange relative font-normal cursor-pointer text-hover">
                                    Menu
                                    <hr v-if="this.$route.path ==='/FoodiesMenu'"
                                        class="border-4 border-color-orange bg-color-orange w-10 absolute right-0" />
                                </li>
                        </router-link>
                        <a href="#">
                            <li class="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">About</li>
                        </a>
                        <router-link to="/Contact">
                            <li 
                                v-bind:class="[{'text-color-orange' :$route.path === '/Contact'}, {'text-color-black' :$route.path !== '/Contact'}]"
                                class="xl:text-2xl text-xl leading-8 mr-10 text-color-orange relative font-normal cursor-pointer text-hover">
                                Contact
                                <hr v-if="this.$route.path ==='/Contact'"
                                        class="border-4 border-color-orange bg-color-orange w-10 absolute right-0" />
                            </li>
                        </router-link>
                        <a href="#">
                            <li class="text-2xl leading-8 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Reservation</li>
                        </a>
                    </ul>
                </div>
            </nav>
            <!-- Desktop -->
            <!-- Mobile -->
            <nav class="lg:hidden z-40 relative">
                <div class="flex py-4 justify-between items-center px-4">
                    <div>
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/foodies.png" alt="logo" class="w-24" />
                    </div>
                    <div class="visible flex items-center">
                        <ul id="list" class="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16">
                            <li class="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2">
                                <router-link to="/">
                                    <span class="ml-2 font-bold">Home</span>
                                </router-link>
                            </li>
                            <li class="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center">
                                <router-link to="/FoodiesMenu">
                                    <span class="ml-2 font-bold">Menu</span>
                                </router-link>
                            </li>
                            <li class="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <a href="#">
                                    <span class="ml-2 font-bold">About</span>
                                </a>
                            </li>
                            <li class="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center">
                                <router-link to="/Contact">
                                    <span class="ml-2 font-bold">Contact</span>
                                </router-link>
                            </li>
                            <li class="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 flex justify-center">
                                <a href="#">
                                    <span class="ml-2 font-bold">Reservation</span>
                                </a>
                            </li>
                        </ul>
                        <div class="xl:hidden">
                            <svg id="open" @click="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="8" x2="20" y2="8"></line>
                                <line x1="4" y1="16" x2="20" y2="16"></line>
                            </svg>
                            <div id="close" class="hidden close-m-menu" @click="MenuHandler(false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Mobile -->
            <!-- Navigation -->
            <Hero v-if="this.$route.path === '/'" />
        </div>
    </div>
</template>

<script>
import Hero from "../Hero"
import MenuHandler from "@/mixins/index.js"

export default {
    components: {
        Hero
    },
    mixins: [MenuHandler]
}
</script>