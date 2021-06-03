<template>
    <div class="lg:flex w-full items-center py-2 lg:pt-16 lg:px-0 px-4">
        <div class="w-full lg:w-1/4">
            <div class="relative w-full">
                <div class="absolute bg-gray-100 border-r border-t border-b border-gray-800 cursor-pointer text-gray-700 flex items-center right-0 h-full">
                    <span class="lg:p-4 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                            <path d="M1 1L9 9L17 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
                <div class="absolute text-black flex items-center pl-6 h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                        <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#4A5568" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.5 24.5L17.5 17.5" stroke="#4A5568" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <input id="search" class="w-full text-light-gray focus:outline-none focus:border font-normal pl-16 pr-16 lg:py-4 py-3 flex items-center text-sm border-black rounded border placeholder-black" placeholder="Search" />
            </div>
        </div>
        <div class="flex justify-center items-center lg:ml-8 lg:mt-0 mt-4">
            <button class="py-3 px-8 bg-dark-blue text-white text-sm mr-4 focus:outline-none">Search</button>
            <button class="py-3 px-8 bg-transparent border border-dark-blue dark-blue text-white text-sm focus:outline-none">Advance Search</button>
        </div>
    </div>
    <h4 class="light-gray text-xs font-normal lg:pt-24 pt-8 lg:px-0 px-4" v-show="$route.path === '/search_inner' || '/chats' ? false : true">Home</h4>
    <h4 class="light-gray text-xs font-normal lg:pt-24 pt-8 lg:px-0 px-4" v-show="$route.path === '/search_inner' ? true : false">Home/Mobiles/Mobile Phones/Mobile Phones in Islamabad Capital Territory/Mobile Phones in IslamabadMobile Phones in I-14/</h4>
</template>
