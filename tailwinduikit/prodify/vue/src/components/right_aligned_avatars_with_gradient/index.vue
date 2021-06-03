<template>
    <div class="mx-auto container">
        <div class="w-full flex justify-center">
            <div class="w-10/12 bg-linear-member px-12 py-16 rounded-md">
                <div>
                    <div class="flex flex-wrap">
                        <div class="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 f-f-l  f-f-l">
                            <h1 class="text-2xl lg:text-5xl lg:w-9/12 text-white font-black leading-tight">Become a member and start building the next big thing</h1>
                            <button class="mt-5 lg:mt-12 py-4 px-4 lg:px-6 bg-white  font-bold text-color-pink rounded-lg text-lg lg:text-xl hover:bg-gray-100 ease-in-out">Join the community</button>
                        </div>
                        <div class="md:w-1/3 w-full">
                            <div class="flex flex-col items-center justify-center">
                                <div class="flex items-center mt-8">
                                    <div class="w-20 h-20 rounded-full mr-3">
                                        <img class="w-full h-full" v-bind:src="avatarOne" alt="" />
                                    </div>
                                    <div class="w-20 h-20 rounded-full">
                                        <img class="w-full h-full" v-bind:src="avatarTwo" alt="" />
                                    </div>
                                </div>
                                <div class="flex items-center mt-4">
                                    <div class="w-20 h-20 rounded-full mr-3">
                                        <img class="w-full h-full" v-bind:src="avatarOne" alt="" />
                                    </div>
                                    <div class="w-20 h-20 rounded-full mr-3">
                                        <img class="w-full h-full" v-bind:src="avatarTwo" alt="" />
                                    </div>
                                    <div class="w-20 h-20 rounded-full">
                                        <img class="w-full h-full" v-bind:src="avatarThree" alt="" />
                                    </div>
                                </div>
                                <div class="flex items-center mt-4">
                                    <div class="w-20 h-20 rounded-full mr-3">
                                        <img class="w-full h-full" v-bind:src="avatarOne" alt="" />
                                    </div>
                                    <div class="w-20 h-20 rounded-full">
                                        <img class="w-full h-full" v-bind:src="avatarThree" alt="" />
                                    </div>
                                </div>
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
            avatarOne: "https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png",
            avatarTwo: "https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png",
            avatarThree: "https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png",
        };
    },
};
</script>
