<template>
    <section class="px-6 xl:px-0">
        <div class="mt-16 lg:mt-32 mx-auto container">
            <div class="flex flex-col lg:items-center justify-center w-full py-10">
                <h1 class="font-semibold custom-gray-800 text-40px">User Reviews</h1>
                <p class="mt-2.5 lg:w-2/5 lg:text-center text-2xl custom-gray-800">More than 1000 users are satisfied with our services and want to share their experience with you</p>
            </div>
            <div class="mt-24 flex items-center justify-center w-full">
                <div class="w-10/12">
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        <div v-for="(review, idx) in reviews" v-bind:key="idx" class="flex flex-col items-center justify-center">
                            <img v-bind:src="review.image" alt="" />
                            <p class="text-base custom-gray-800 leading-7 mt-5 text-center w-8/12">{{ review.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            reviews: [
                {
                    image: "https://cdn.tuk.dev/assets/templates/weCare/review_1.png",
                    desc: "We have reached more than 1.1 million users around the globe",
                },
                {
                    image: "https://cdn.tuk.dev/assets/templates/weCare/review_2.png",
                    desc: "We have reached more than 1.1 million users around the globe",
                },
                {
                    image: "https://cdn.tuk.dev/assets/templates/weCare/review_3.png",
                    desc: "We have reached more than 1.1 million users around the globe",
                },
            ],
        };
    },
};
</script>
