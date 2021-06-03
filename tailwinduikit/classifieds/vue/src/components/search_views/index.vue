<template>
    <div class="lg:flex items-center justify-between">
        <div>
            <h4 class="text-xl font-normal lg:pt-0 pt-8">Search results (234)</h4>
        </div>
        <div class="flex items-center">
            <div class="flex items-center lg:border-l lg:border-r border-gray-300 lg:py-0 lg:px-6 mr-6">
                <p class="text-base text-gray-600" id="page-view">Viewing 1 - 20 of 60</p>
                <a class="text-gray-600 ml-2 border-transparent border cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </a>
                <a class="text-gray-600 border-transparent border rounded focus:outline-none cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </a>
            </div>
            <div class="flex items-center border-gray-200 border rounded mt-3 md:mt-0 cursor-pointer">
                <router-link to="/search_alternative">
                    <div v-bind:class="{ 'bg-gray-200 text-indigo-700': $route.path == '/search_alternative' }" class="text-gray-600 p-2 border-transparent border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x="4" y="4" width="6" height="6" rx="1" />
                            <rect x="14" y="4" width="6" height="6" rx="1" />
                            <rect x="4" y="14" width="6" height="6" rx="1" />
                            <rect x="14" y="14" width="6" height="6" rx="1" />
                        </svg>
                    </div>
                </router-link>
                <div v-bind:class="{ 'bg-gray-200 text-indigo-700': $route.path == '/search_results' }" class="text-gray-600 p-2 border border-transparent rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                    <router-link to="/search_results">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="12" y1="4" x2="12" y2="20" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
