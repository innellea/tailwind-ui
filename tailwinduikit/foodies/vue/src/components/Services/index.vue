<template>
    <div class="mx-auto container mt-40 xl:px-0 px-4">
        <div class="flex items-center justify-center">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-4xl font-bold text-color-black pl-7">Services<span class="text-2xl font-normal"> We Provide</span></h1>
        </div>
        <div class="items-center justify-center mt-16 xl:flex hidden">
            <div
                v-for="(service, idx) in services" v-bind:key="idx" 
                class="card-width card-shadow cursor-pointer mr-7">
                <div class="relative">
                    <img loading="lazy" v-bind:src="service.image" class="h-96 w-full" />
                    <div class="bg-white w-full">
                        <p class="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">{{service.service}}</p>
                        <p class="text-center text-2xl text-color-black py-8">{{service.title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile -->
        <div class="block items-center justify-center mt-16 xl:hidden px-4">
            <div 
                v-for="(service, idx) in services" v-bind:key="idx" 
                class="card-shadow cursor-pointer mb-8">
                <div class="relative">
                    <img loading="lazy" v-bind:src="service.image" class="xl:h-96 h-full w-full" />
                    <div class="bg-white w-full">
                        <p class="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">{{service.service}}</p>
                        <p class="text-center text-2xl text-color-black py-8">{{service.title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile -->
    </div>
</template>

<script>
export default {
    data() {
        return { 
            services: [
                {
                    service: "01",
                    image: "https://cdn.tuk.dev/assets/templates/foodies/dive-in.png",
                    title: "Dine In/ Takeaway"
                },
                {
                    service: "02",
                    image: "https://cdn.tuk.dev/assets/templates/foodies/easy-reservation.png",
                    title: "Easy Table Reservation"
                },
                {
                    service: "03",
                    image: "https://cdn.tuk.dev/assets/templates/foodies/delivery.png",
                    title: "Free Home Delivery"
                },
            ]
        }
    }
}
</script>