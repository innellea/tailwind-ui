<template>
    <h1 class="text-xl font-semibold dark-gray my-6" v-show="$route.path === '/search_inner' ? true : false">Similar ads</h1>
    <div v-bind:class="{ 'bg-gray-100': $route.path == '/' }" class="h-full">
        <!-- Remove py-8 -->
        <h1 v-show="$route.path === '/' ? true : false" class="text-xl font-semibold mb-6 lg:py-10 py-8">Featured Classified</h1>
        <div class="mx-auto container" v-bind:class="{ 'my-14': $route.path == '/search_alternative' }">
            <div class="flex flex-wrap items-center lg:justify-between justify-center">
                <div v-for="index in 4" v-bind:key="index" class="mx-2 w-72 lg:mb-0 pb-12">
                    <router-link to="/search_inner">
                        <div>
                            <img v-bind:src="cardImage" class="w-full h-44" />
                        </div>
                        <div class="bg-white">
                            <div class="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="#2c3e50" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                    </svg>
                                </div>
                                <div class="light-yellow py-1.5 px-6 rounded-full">
                                    <p class="text-xs dark-yellow">Featured</p>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="flex items-center">
                                    <h2 class="text-lg font-semibold">{{ item }}</h2>
                                    <p class="text-xs light-gray pl-5">4 days ago</p>
                                </div>
                                <p class="text-xs light-gray mt-2">{{ description }}</p>
                                <div class="flex mt-4">
                                    <div>
                                        <p class="text-xs light-gray px-2 bg-dark-gray py-1">12 months warranty</p>
                                    </div>
                                    <div class="pl-2">
                                        <p class="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between py-4">
                                    <h2 class="purple text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3 class="purple text-xl font-semibold">$350</h3>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="mx-auto container bg-white">
            <h1 v-show="$route.path === '/' ? true : false" class="text-xl font-semibold mt-6 lg:py-10 py-8">Classified</h1>
            <div class="flex flex-wrap items-center lg:justify-between justify-center pb-6" v-show="$route.path === '/' ? true : false">
                <div v-for="index in 8" v-bind:key="index" class="mx-2 w-72 lg:mb-0 mb-8 pb-16">
                    <div>
                        <img v-bind:src="cardImage2" class="w-full h-44" />
                    </div>
                    <div class="bg-white">
                        <div class="flex items-center justify-between px-4 pt-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                </svg>
                            </div>
                            <div class="light-yellow py-1.5 px-6 rounded-full">
                                <p class="text-xs dark-yellow">Featured</p>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="flex items-center">
                                <h2 class="text-lg font-semibold">{{ item }}</h2>
                                <p class="text-xs light-gray pl-5">4 days ago</p>
                            </div>
                            <p class="text-xs light-gray mt-2">{{ description }}</p>
                            <div class="flex mt-4">
                                <div>
                                    <p class="text-xs light-gray px-2 bg-dark-gray py-1">12 months warranty</p>
                                </div>
                                <div class="pl-2">
                                    <p class="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between py-4">
                                <h2 class="purple text-xs font-semibold">Bay Area, San Francisco</h2>
                                <h3 class="purple text-xl font-semibold">$350</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardImage: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
            cardImage2: "https://cdn.tuk.dev/assets/templates/classified/Bitmap.png",
            item: "iphone XS",
            description: "Duis congue mattis odio, a posuere urna feugiat id praesent id est tellus.",
        };
    },
};
</script>
