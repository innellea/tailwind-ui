<template>
    <div class="mx-auto container px-4 lg:px-0 my-12">
        <div class="w-full flex justify-center flex-col items-center">
            <div v-for="(idx, article) in articles" v-bind:key="idx" class="bg-white lg:w-11/12 px-6 lg:px-16 py-16 my-8 shadow-lg">
                <div class="lg:flex justify-between w-full">
                    <div>
                        <div class="pb-6 lg:pb-12">
                            <h1 class="f-f-l text-xl lg:text-4xl font-black">How to get started with prodify</h1>
                            <h2 class="f-f-r pt-5 text-base lg:text-2xl">Introductory resources to get you started with using prodify</h2>
                        </div>
                        <div class="pb-6 lg:pb-12">
                            <h1 class="f-f-r lg:text-2xl underline cursor-pointer text-color-knowledge-base-links pb-5">1. How to setup your workspace in less than 10 minutes</h1>
                            <h1 class="f-f-r lg:text-2xl underline cursor-pointer text-color-knowledge-base-links pb-5">2. Bringing your team upto speed with real-time collaboration</h1>
                        </div>
                        <div class="xl:flex items-center">
                            <div class="flex items-center mr-4">
                                <img v-bind:src="imageOne" alt="" />
                                <img class="-ml-8" v-bind:src="imageTwo" alt="" />
                                <img class="-ml-8" v-bind:src="imageThree" alt="" />
                            </div>
                            <p class="text-base py-2 lg:py-0 lg:text-xl text-black f-f-r">Contributed by Adam. J, Jackson Cyrus &amp; James Clark</p>
                        </div>
                    </div>
                    <div class="flex pt-10 lg:pt-0 lg:flex-col items-center justify-between">
                        <router-link to="/Resources_Inner">
                            <button class="w-16 h-16 rounded-full bg-button-color-about-us flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M21.5627 14.6667L14.4107 7.51473L16.296 5.62939L26.6667 16.0001L16.296 26.3707L14.4107 24.4854L21.5627 17.3334H5.33337V14.6667H21.5627Z" fill="#4A5568"></path>
                                </svg>
                            </button>
                        </router-link>
                        <div class="flex flex-col items-center">
                            <h1 class="f-f-l text-color text-4xl lg:text-7xl font-black">{{ article.count }}</h1>
                            <h2 class="f-f-r text-base lg:text-2xl text-color-dark pt-2">Articles</h2>
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
            imageOne: "https://cdn.tuk.dev/assets/templates/prodify/AvtarKnowledgeBase(1).png",
            imageTwo: "https://cdn.tuk.dev/assets/templates/prodify/AvtarKnowledgeBase(2).png",
            imageThree: "https://cdn.tuk.dev/assets/templates/prodify/AvtarKnowledgeBase(3).png",
            articles: [
                {
                    count: "06",
                },
                {
                    count: "08",
                },
                {
                    count: "12",
                },
            ],
        };
    },
};
</script>
