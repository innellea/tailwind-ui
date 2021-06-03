<template>
    <section class="pb-12">
        <div class="w-full relative px-6 xl:px-0 pb-6 lg:pb-12 bg-dark-header b-b-l-r-16">
            <nav class="lg:hidden relative z-40">
                <div class="flex py-6 justify-between items-center px-4">
                    <div>
                        <img class="w-24" src="https://i.ibb.co/ccT0XZC/white-logo-nav.png" alt="" />
                    </div>
                    <div class="flex items-center">
                        <ul id="list" class="hidden p-2 border-r bg-blue-700 absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                            <li class="flex cursor-pointer text-white text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-200 focus:text-indigo-200 focus:outline-none">
                                <a href="#">
                                    <span class="ml-2 font-bold">Products</span>
                                </a>
                            </li>
                            <li class="flex flex-col cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-200 focus:text-indigo-200 focus:outline-none flex justify-center">
                                <a href="#">
                                    <span class="ml-2 font-bold">Claims</span>
                                </a>
                            </li>
                            <li class="flex cursor-pointer text-white text-sm leading-3 tracking-normal py-2 flex items-center hover:text-indigo-200 focus:text-indigo-200 focus:outline-none">
                                <a href="#">
                                    <span class="ml-2 font-bold">Renewals</span>
                                </a>
                            </li>
                            <li class="flex flex-col cursor-pointer text-white text-sm leading-3 tracking-normal py-2 focus:text-indigo-700 hover:text-indigo-200 focus:text-indigo-200 flex justify-center">
                                <a href="#">
                                    <span class="ml-2 font-bold">Reports</span>
                                </a>
                            </li>
                        </ul>
                        <div class="xl:hidden text-white">
                            <svg id="open" @click="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="8" x2="20" y2="8"></line>
                                <line x1="4" y1="16" x2="20" y2="16"></line>
                            </svg>
                            <div id="close" class="hidden close-m-menu" @click="MenuHandler(false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="container mx-auto hidden relative z-10 w-full lg:flex justify-between items-center py-20">
                <div class="w-1/6">
                    <a href="#">
                        <img class="" src="https://i.ibb.co/ccT0XZC/white-logo-nav.png" />
                    </a>
                </div>
                <div class="w-5/6">
                    <div class="flex items-center justify-end">
                        <ul class="text-white flex items-center leading-none">
                            <li><a class="hover:text-blue-500 focus:text-blue-500" href="#">Products</a></li>
                            <li class="ml-8 hover:text-blue-500 focus:text-blue-500"><a href="#">Claims</a></li>
                            <li class="ml-8 hover:text-blue-500 focus:text-blue-500"><a href="#">Renewal</a></li>
                            <li class="ml-8 hover:text-blue-500 focus:text-blue-500"><a href="#">Support</a></li>
                        </ul>
                        <div class="pl-40">
                            <button class="font-semibold text-white hover:text-blue-600 px-6 py-2.5 rounded focus:outline-none">Live Chat</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="pb-8 lg:pb-32 pt-20 lg:flex flex-row-reverse items-center relative z-10 container mx-auto">
                <div class="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                    <img class="ml-auto" src="https://i.ibb.co/hyPpwww/right-hero-image.png" />
                </div>
                <div class="w-full lg:w-1/2 h-full mt-8 lg:mt-0">
                    <p class="text-white uppercase text-2xl mb-4">Qusique Tincidun sapien</p>
                    <h1 class="font-bold text-white text-80px mb-8">All Natural Ingredients</h1>
                    <p class="text-white text-lg font-regular mb-8">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac posuere nunc.</p>
                    <button class="leading-4 bg-white hover:bg-blue-200 py-3 lg:py-6 px-6 lg:px-12 font-semibold clr-dark-blue lg:text-2xl rounded">Learn More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MenuHandler from "@/mixins/index";
export default {
    mixins: [MenuHandler],
};
</script>
