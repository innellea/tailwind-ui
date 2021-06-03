<template>
    <!-- <div class="my-14"> -->
    <div class="mx-auto container py-10 lg:pt-52 lg:pb-20">
        <h1 class="text-color font-black f-f-l text-center text-3xl lg:text-7xl">2000+ products built</h1>
    </div>
    <div class="bg-linear-about-us py-16">
        <div class="mx-auto container px-4 xl:px-0">
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div v-for="index in 16" :key="index">
                    <div class="w-full h-full">
                        <img class="w-full h-full shadow-xl rounded-xl" src="https://cdn.tuk.dev/assets/templates/prodify/About-us_card.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>
