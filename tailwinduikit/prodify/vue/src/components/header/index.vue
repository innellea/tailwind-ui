<template>
    <div class="bg-linear-pink lg:pb-28">
        <div class="mx-auto container">
            <nav class="lg:hidden relative z-50">
                <div class="flex py-2 justify-between items-center px-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="79" height="92" viewBox="0 0 79 92" fill="none">
                            <rect width="79" height="92" fill="#1A202C" />
                            <path
                                d="M18.284 34.952L15.584 34.484V32.252H21.02C21.524 32.252 22.304 32.228 23.36 32.18C24.752 32.084 26.012 32.036 27.14 32.036C29.636 32.036 31.604 32.348 33.044 32.972C34.508 33.572 35.54 34.448 36.14 35.6C36.764 36.728 37.076 38.168 37.076 39.92C37.076 42.944 36.128 45.296 34.232 46.976C32.36 48.656 29.756 49.496 26.42 49.496C25.1 49.496 24.152 49.46 23.576 49.388V56.48L28.4 56.84V59H15.44V56.84L18.284 56.48V34.952ZM23.54 47.084C24.092 47.204 25.028 47.264 26.348 47.264C27.956 47.264 29.24 46.712 30.2 45.608C31.184 44.48 31.676 42.62 31.676 40.028C31.676 38.012 31.232 36.548 30.344 35.636C29.48 34.7 28.148 34.232 26.348 34.232C25.676 34.232 24.98 34.28 24.26 34.376C23.924 34.424 23.684 34.448 23.54 34.448V47.084ZM39.5648 56.84L42.4088 56.48V34.952L39.7088 34.448V32.252H44.9288C45.3848 32.252 45.8888 32.24 46.4408 32.216C46.9928 32.192 47.4128 32.168 47.7008 32.144C48.9488 32.048 49.9808 32 50.7968 32C53.2688 32 55.2488 32.252 56.7368 32.756C58.2248 33.26 59.3048 34.028 59.9768 35.06C60.6488 36.092 60.9848 37.448 60.9848 39.128C60.9848 40.784 60.5408 42.32 59.6528 43.736C58.7648 45.152 57.4808 46.124 55.8008 46.652C56.7608 47.06 57.6128 47.804 58.3568 48.884C59.1008 49.964 59.8928 51.368 60.7328 53.096C61.3328 54.272 61.7888 55.124 62.1008 55.652C62.4368 56.156 62.7608 56.444 63.0728 56.516L64.2608 56.876V59H58.1408C57.7568 59 57.3488 58.616 56.9168 57.848C56.5088 57.056 55.9688 55.82 55.2968 54.14C54.5048 52.172 53.8208 50.636 53.2448 49.532C52.6688 48.428 52.0568 47.744 51.4088 47.48H47.7008V56.48L51.0128 56.84V59H39.5648V56.84ZM51.0128 45.284C52.3808 45.284 53.4488 44.792 54.2168 43.808C54.9848 42.824 55.3688 41.348 55.3688 39.38C55.3688 37.628 54.9848 36.332 54.2168 35.492C53.4728 34.652 52.1768 34.232 50.3288 34.232C49.6568 34.232 49.0808 34.268 48.6008 34.34C48.1448 34.388 47.8448 34.412 47.7008 34.412V45.212C47.9888 45.26 48.6848 45.284 49.7888 45.284H51.0128Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div class="visible flex items-center">
                        <ul id="list" class="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24">
                            <router-link to="/">
                                <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <span class="ml-2 font-bold">Home</span>
                                </li>
                            </router-link>
                            <router-link to="/AboutUs">
                                <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center">
                                    <span class="ml-2 font-bold">About Us</span>
                                </li>
                            </router-link>
                            <router-link to="Pricing">
                                <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                                    <span class="ml-2 font-bold">Pricing</span>
                                </li>
                            </router-link>
                            <router-link to="Resources">
                                <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center">
                                    <span class="ml-2 font-bold">Resources</span>
                                </li>
                            </router-link>
                            <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center">
                                <span class="ml-2 font-bold">Sign In</span>
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
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="f-f-l relative z-10">
                <div class="relative z-10 mx-auto hidden container w-full lg:px-4 xl:px-0 lg:flex justify-between items-center py-11">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="79" height="92" viewBox="0 0 79 92" fill="none">
                            <rect width="79" height="92" fill="#1A202C" />
                            <path
                                d="M18.284 34.952L15.584 34.484V32.252H21.02C21.524 32.252 22.304 32.228 23.36 32.18C24.752 32.084 26.012 32.036 27.14 32.036C29.636 32.036 31.604 32.348 33.044 32.972C34.508 33.572 35.54 34.448 36.14 35.6C36.764 36.728 37.076 38.168 37.076 39.92C37.076 42.944 36.128 45.296 34.232 46.976C32.36 48.656 29.756 49.496 26.42 49.496C25.1 49.496 24.152 49.46 23.576 49.388V56.48L28.4 56.84V59H15.44V56.84L18.284 56.48V34.952ZM23.54 47.084C24.092 47.204 25.028 47.264 26.348 47.264C27.956 47.264 29.24 46.712 30.2 45.608C31.184 44.48 31.676 42.62 31.676 40.028C31.676 38.012 31.232 36.548 30.344 35.636C29.48 34.7 28.148 34.232 26.348 34.232C25.676 34.232 24.98 34.28 24.26 34.376C23.924 34.424 23.684 34.448 23.54 34.448V47.084ZM39.5648 56.84L42.4088 56.48V34.952L39.7088 34.448V32.252H44.9288C45.3848 32.252 45.8888 32.24 46.4408 32.216C46.9928 32.192 47.4128 32.168 47.7008 32.144C48.9488 32.048 49.9808 32 50.7968 32C53.2688 32 55.2488 32.252 56.7368 32.756C58.2248 33.26 59.3048 34.028 59.9768 35.06C60.6488 36.092 60.9848 37.448 60.9848 39.128C60.9848 40.784 60.5408 42.32 59.6528 43.736C58.7648 45.152 57.4808 46.124 55.8008 46.652C56.7608 47.06 57.6128 47.804 58.3568 48.884C59.1008 49.964 59.8928 51.368 60.7328 53.096C61.3328 54.272 61.7888 55.124 62.1008 55.652C62.4368 56.156 62.7608 56.444 63.0728 56.516L64.2608 56.876V59H58.1408C57.7568 59 57.3488 58.616 56.9168 57.848C56.5088 57.056 55.9688 55.82 55.2968 54.14C54.5048 52.172 53.8208 50.636 53.2448 49.532C52.6688 48.428 52.0568 47.744 51.4088 47.48H47.7008V56.48L51.0128 56.84V59H39.5648V56.84ZM51.0128 45.284C52.3808 45.284 53.4488 44.792 54.2168 43.808C54.9848 42.824 55.3688 41.348 55.3688 39.38C55.3688 37.628 54.9848 36.332 54.2168 35.492C53.4728 34.652 52.1768 34.232 50.3288 34.232C49.6568 34.232 49.0808 34.268 48.6008 34.34C48.1448 34.388 47.8448 34.412 47.7008 34.412V45.212C47.9888 45.26 48.6848 45.284 49.7888 45.284H51.0128Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div class="flex items-center text-color text-lg font-bold">
                        <ul class="flex items-center pr-12">
                            <router-link to="/">
                                <li class="cursor-pointer">Home</li>
                            </router-link>
                            <router-link to="/AboutUs">
                                <li class="xl:pl-8 lg:pl-5 cursor-pointer text-color-1">About Us</li>
                            </router-link>
                            <router-link to="/Pricing">
                                <li class="xl:pl-8 lg:pl-5 cursor-pointer text-color-1">Pricing</li>
                            </router-link>
                            <router-link to="/Resources">
                                <li class="xl:pl-8 lg:pl-5 cursor-pointer text-color-1">Resources</li>
                            </router-link>
                        </ul>
                        <button class="py-3 px-6 bg-white bg-linear-button-about-us text-white text-lg font-bold flex items-center justify-center">
                            Sign In
                            <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M9.129 5.24952L5.106 1.22652L6.1665 0.166016L12 5.99952L6.1665 11.833L5.106 10.7725L9.129 6.74952H0V5.24952H9.129Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <AboutHeading v-show="$route.path === '/AboutUs' ? true : false" />
            <PricingHeading v-show="$route.path === '/Pricing' ? true : false" />
        </div>
    </div>
</template>

<script>
import AboutHeading from "../about_us_heading/index";
import PricingHeading from "../pricing_heading/index";
export default {
    components: {
        AboutHeading,
        PricingHeading,
    },
    methods: {
        MenuHandler(flag) {
            if (flag) {
                document.getElementById("list").classList.add("top-100");
                document.getElementById("list").classList.remove("hidden");
                document.getElementById("close").classList.remove("hidden");
                document.getElementById("open").classList.add("hidden");
            } else {
                document.getElementById("list").classList.remove("top-100");
                document.getElementById("list").classList.add("hidden");
                document.getElementById("close").classList.add("hidden");
                document.getElementById("open").classList.remove("hidden");
            }
        },
    },
};
</script>
