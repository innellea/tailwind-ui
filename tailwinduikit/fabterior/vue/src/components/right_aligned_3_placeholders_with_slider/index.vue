<template>
    <!-- slider starts here     -->
    <!-- Fixes    -->
    <!-- Destop Slider -->
    <div class="mx-auto container relative px-4 lg:px-0 lg:mt-20 mt-10 md:block hidden">
        <div class="lg:block hidden flex absolute right-0 z-0">
            <div class="custom-design background-color"></div>
        </div>
        <div class="lg:pt-20">
            <div class="flex lg:flex-row flex-col-reverse items-center justify-between">
                <div class="flex flex-col z-20 lg:w-1/2">
                    <div class="f-f-d-s text-2xl lg:text-5xl uppercase hidden lg:block leading-normal font-bold tracking-wide text-color-heading">
                        Trending <br />
                        Products
                    </div>
                    <div class="flex w-full justify-start">
                        <div class="flex lg:pt-20 lg:pt-10 lg:justify-start justify-between w-full">
                            <button class="lg:py-5 py-3 px-6 border border-black-color mr-8 focus:outline-none" id="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M15 5H0.999998" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 8.96387L1 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 0.963867L1 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="py-5 px-6 border border-black-color focus:outline-none" id="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M1 4.96387H15" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 8.96387L15 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 0.963867L15 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="slider lg:relative lg:w-1/3">
                    <div class="f-f-d-s text-2xl lg:text-5xl uppercase block lg:hidden leading-normal font-bold tracking-wide text-color-heading">Trending Products</div>

                    <div class="slide-ana lg:relative">
                        <div class="flex items-center justify-end lg:w-3/5 relative">
                            <div v-for="(product, idx) in products" v-bind:key="idx" class="lg:ml-12 z-20 lg:w-64 w-full">
                                <div>
                                    <img v-bind:src="product.image" alt="" class="w-full" />
                                </div>
                                <div class="text-color-heading text-4xl font-medium f-f-l text-center py-4">{{ product.name }}</div>
                                <div class="text-base f-f-l flex text-4xl justify-center text-color-para">$ {{ product.price }}</div>
                            </div>
                        </div>
                        <div class="flex items-center justify-end lg:w-3/5 relative">
                            <div v-for="(product, idx) in products" v-bind:key="idx" class="lg:ml-12 z-20 lg:w-64 w-full">
                                <div>
                                    <img v-bind:src="product.image" alt="" class="w-full" />
                                </div>
                                <div class="text-color-heading text-4xl font-medium f-f-l text-center py-4">{{ product.name }}</div>
                                <div class="text-base f-f-l flex text-4xl justify-center text-color-para">$ {{ product.price }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Desktop Slider -->
    <!-- Mobile responsive -->
    <div class="mx-auto container relative px-4 lg:px-0 lg:mt-60 mt-10 block md:hidden">
        <div class="lg:block hidden flex absolute right-0 z-0">
            <div class="custom-design background-color"></div>
        </div>
        <div class="lg:pt-20">
            <div class="flex lg:flex-row flex-col-reverse items-center justify-between">
                <div class="flex flex-col z-20">
                    <div class="f-f-d-s text-2xl lg:text-5xl uppercase hidden lg:block leading-normal font-bold tracking-wide text-color-heading">
                        Trending <br />
                        Products
                    </div>
                    <br />
                    <div class="flex w-full justify-start">
                        <div class="flex lg:pt-20 lg:pt-10 lg:justify-start justify-between w-full">
                            <button class="lg:py-5 py-3 px-6 border border-black-color mr-8 focus:outline-none" id="prev2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M15 5H0.999998" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 8.96387L1 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 0.963867L1 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="py-5 px-6 border border-black-color focus:outline-none" id="next2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M1 4.96387H15" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 8.96387L15 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 0.963867L15 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="slider2">
                    <div class="f-f-d-s text-2xl lg:text-5xl uppercase block lg:hidden leading-normal font-bold tracking-wide text-color-heading">Trending Products</div>
                    <div class="slide-ana2 mt-20">
                        <div v-for="(product, idx) in products" v-bind:key="idx" class="w-full">
                            <div>
                                <img v-bind:src="product.image" alt="" class="w-full" />
                            </div>
                            <div class="text-color-heading lg:text-2xl text-base font-bold f-f-l flex justify-center py-4">{{ product.name }}</div>
                            <div class="lg:text-sm text-base f-f-l flex text-4xl justify-center text-color-para">$ {{ product.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile responsive -->
    <!-- slider ends here -->
</template>

<script>
import Slider from "@/mixins/slider";
export default {
    mixins: [Slider],
    data() {
        return {
            products: [
                {
                    name: "Study Lamp",
                    image: "https://cdn.tuk.dev/assets/templates/Fabterior/section3(1).png",
                    price: "45",
                },
                {
                    name: "Flower Pot",
                    image: "https://cdn.tuk.dev/assets/templates/Fabterior/section3(2).png",
                    price: "45",
                },
                {
                    name: "Grey Chair",
                    image: "https://cdn.tuk.dev/assets/templates/Fabterior/section3(3).png",
                    price: "45",
                },
            ],
        };
    },
};
</script>

<style scoped>
.slider {
    width: 100%;
    height: 428px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
</style>
