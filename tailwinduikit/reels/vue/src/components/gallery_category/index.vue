<template>
    <h1 class="text-4xl font-bold text-color-black xl:px-0 px-4">Gallery</h1>
    <!-- categories -->
    <div class="lg:flex items-center mt-16 hidden">
        <router-link to="/ReelsGallery" class="cursor-pointer">
            <div class="text-base relative font-light text-color-black border-color-gray leading-4 border-r pl-5 pr-11">
                All
                <hr v-if="$route.path === '/ReelsGallery'"
                    class="border-2 border-gold-color bg-gold-color w-14 right-0 mr-5 mt-1 rounded-full absolute" />
            </div>
        </router-link>
        <a href="#" class="cursor-pointer">
            <div class="text-hr px-11 text-base relative font-light text-color-black leading-4 border-r border-color-gray">Nature</div>
        </a>
        <a href="#" class="cursor-pointer">
            <div class="px-11 text-hr text-base relative font-light text-color-black leading-4 border-r border-color-gray">Wedding</div>
        </a>
        <a href="#" class="cursor-pointer">
            <div class="px-11 text-hr text-base relative font-light text-color-black leading-4 border-r border-color-gray">Street</div>
        </a>
        <a href="#" class="cursor-pointer">
            <div class="px-11 text-hr text-base relative font-light text-color-black leading-4 border-r border-color-gray">People</div>
        </a>
        <router-link to="/GalleryCategory" class="cursor-pointer">
            <div class="px-11 text-hr text-base relative font-light text-color-black leading-4">
                Architecture
                <hr 
                    v-if="$route.path === '/GalleryCategory'"
                    class="border-2 border-gold-color bg-gold-color w-14 right-0 mr-14 mt-1 rounded-full absolute" />
            </div>
        </router-link>
    </div>
    <!-- mobile -->
    <div class="lg:hidden block xl:px-0 px-4">
        <div class="relative">
            <div class="bg-gold-color flex items-center justify-between rounded w-full border border-gold-color cursor-pointer mt-8" @click="MenuHandler3()">
                <p class="pl-3 py-3 text-white text-sm leading-3 tracking-normal font-normal">categories</p>
                <div class="cursor-pointer text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="close2" class="icon icon-tabler hidden icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 15 12 9 18 15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" id="open2" class="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>
            <ul class="transition duration-300 opacity-100 hidden ease-out bg-color-black shadow rounded mt-2 py-1 w-full absolute z-40" id="list2">
                <router-link to="/ReelsGallery"> <li class="cursor-pointer text-white text-sm leading-3 tracking-normal py-3 hover-gold px-3 font-bold">All</li> </router-link>
                <a href="#"> <li class="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">Nature</li> </a>
                <a href="#"> <li class="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">Wedding</li> </a>
                <a href="#"> <li class="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">Street</li> </a>
                <a href="#"> <li class="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">People</li> </a>
                <router-link to="/GalleryCategory"> <li class="cursor-pointer text-white font-bold text-sm leading-3 tracking-normal py-3 hover-gold px-3">Architecture</li> </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import MenuHandler3 from '@/mixins'
export default {
    mixins: [MenuHandler3]
}
</script>