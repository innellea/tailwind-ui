<template>
    <div class="flex flex-wrap items-center relative py-10 lg:py-40 2xl:px-0 xl:px-16 px-0">
        <div class="lg:w-1/3 w-full">
            <h1
                class="text-4xl xl:block hidden md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800 uppercase">
                What <br /> <span>We</span>
                <br /><span class="text-indigo-700">Do?</span>
            </h1>
            <h1 class="text-4xl xl:hidden md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800 uppercase">
                What We
                <span class="text-indigo-700">Do?</span>
            </h1>
            <ul class="mt-5 md:mt-11 flex flex-col">
                <li class="text-lg md:text-2xl tracking-wider text-gray-800">01. HOME DESIGN</li>
                <li class="text-lg md:text-2xl tracking-wider text-gray-800 mt-5 md:mt-11">02. COMMERCIAL DESIGN</li>
                <li class="text-lg md:text-2xl tracking-wider text-gray-800 mt-5 md:mt-11">03. LANDSCAPE</li>
                <li class="text-lg md:text-2xl tracking-wider text-gray-800 mt-5 md:mt-11">04. GARDEN & OUTDOOR</li>
                <li class="text-lg md:text-2xl tracking-wider text-gray-800 mt-5 md:mt-11">05. CONSULTANCY</li>
            </ul>
        </div>
        <div class="w-full lg:w-2/3 xl:flex flex-row xl:flex-col items-end mt-5 lg:mt-0">
            <div class="flex flex-col w-full xl:w-auto md:flex-row justify-center md:justify-start items-center">
                <div class="relative md:w-auto w-full">
                    <img v-bind:src="category1" alt="" class="md:w-auto w-full object-cover object-fill"/>
                    <div class="absolute bg-indigo-700 opacity-0 hover:opacity-75 top-0 w-full h-full">
                        <div class="flex flex-col justify-between">
                            <div class="absolute  text-white text-2xl p-8 leading-9 font-semibold uppercase">Books</div>
                            <div class="absolute bottom-0 right-0 pb-8 pr-8">
                                <button class="text-base font-semibold text-white  px-3 py-3 bg-gray-800">
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative md:w-auto w-full mt-5 md:mt-0 md:ml-4">
                    <img class="md:w-auto w-full object-cover object-fill" v-bind:src="category2" alt="image"/>
                    <div class="absolute bg-indigo-700 opacity-0 hover:opacity-75 top-0 w-full h-full">
                        <div class="flex flex-col justify-between">
                            <div class="absolute p-8 text-white text-2xl leading-9 font-semibold uppercase">Room</div>
                            <div class="absolute bottom-0 right-0 pb-8 pr-8">
                                <button class="text-base font-semibold text-white  px-3 py-3 bg-gray-800">
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full xl:w-auto md:flex-row justify-center md:justify-start items-center mt-5">
                <div class="relative md:w-auto w-full">
                    <img class="md:w-auto w-full object-cover object-fill" v-bind:src="category3" alt="GARDEN"/>
                    <div class="absolute bg-indigo-700 opacity-0 hover:opacity-75 top-0 w-full h-full">
                        <div class="flex flex-col justify-between">
                            <div class="text-white text-2xl leading-9 font-semibold p-8 absolute">GARDEN & <br />
                                OUTDOOR</div>
                            <div class="absolute bottom-0 right-0 pb-8 pr-8">
                                <button class="text-base font-semibold text-white  px-3 py-3 bg-gray-800">
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative md:w-auto w-full mt-5 md:mt-0 md:ml-5">
                    <img class="md:w-auto w-full object-cover object-fill" v-bind:src="category4"
                        alt="guest hall"/>
                    <div class="absolute bg-indigo-700 opacity-0 hover:opacity-75 top-0 w-full h-full">
                        <div class="flex flex-col justify-between">
                            <div class="text-white text-2xl p-8 leading-9 font-semibold absolute uppercase">Indoor Hall & <br />Guest Room</div>
                            <div class="absolute bottom-0 right-0 pb-8 pr-8">
                                <button class="text-base font-semibold text-white  px-3 py-3 bg-gray-800">
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Indicators />
    </div>
</template>

<script>
import Data from "@/mixins/index"
import Indicators from "../Indicators"

export default {
    name: "index",
    mixins: [Data],
    components: {
        Indicators
    }
}
</script>
