<template>
    <div class="lg:overflow-y-scroll h-screen my-8" id="search">
        <div class="mx-auto my-4 container lg:px-0 px-8" v-for="(product, idx) in products" v-bind:key="idx">
            <!-- card -->
            <router-link to="/search_inner">
                <div class="w-full border md:flex my-4">
                    <div class="md:h-40 h-96 md:w-48">
                        <img src="https://cdn.tuk.dev/assets/templates/classified/search.png" class="h-full w-full" />
                    </div>
                    <div class="px-4 py-2 w-full">
                        <div class="lg:flex items-center justify-between">
                            <div class="flex items-center lg:justify-left justify-between lg:mt-0 mt-4">
                                <h2 class="text-lg font-semibold">{{ product.name }}</h2>
                                <p class="text-xs light-gray pl-5">4 days ago</p>
                            </div>
                            <div class="flex items-center lg:justify-left justify-between lg:mt-0 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-xs light-gray mt-2">{{ product.desc }}</p>
                        <div class="mt-4 md:flex hidden">
                            <div>
                                <p class="text-xs light-gray px-2 bg-dark-gray py-1">12 months warranty</p>
                            </div>
                            <div class="pl-2">
                                <p class="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                            </div>
                            <div class="pl-2">
                                <p class="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                            </div>
                            <div class="pl-2">
                                <p class="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="mt-4 md:hidden">
                            <div class="flex">
                                <div class="mx-2">
                                    <p class="text-xs light-gray px-2 bg-dark-gray py-1">12 months warranty</p>
                                </div>
                                <div class="mx-2">
                                    <p class="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                </div>
                            </div>
                            <div class="flex mt-4">
                                <div class="mx-2">
                                    <p class="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                </div>
                                <div class="mx-2">
                                    <p class="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-4">
                            <h2 class="purple text-xs font-semibold">Bay Area, San Francisco</h2>
                            <h3 class="purple text-xl font-semibold">$350</h3>
                        </div>
                    </div>
                </div>
            </router-link>
            <!-- card end -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            products: [
                {
                    name: "iphone XS",
                    desc: "Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas",
                },
                {
                    name: "iphone XS",
                    desc: "Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas",
                },
                {
                    name: "iphone XS",
                    desc: "Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas",
                },
            ],
        };
    },
};
</script>
