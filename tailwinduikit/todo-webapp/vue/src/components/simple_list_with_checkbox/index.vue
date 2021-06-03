<template>
    <div class="mx-auto container py-20">
        <ul>
            <li 
                v-for="idx in 4" v-bind:key="idx"
                class="flex items-center mb-6">
                <div
                    class="mr-2 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full">
                    <div class="check-icon bg-yellow-400 text-white rounded-sm hidden">
                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20"
                            height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                </div>
                <p class="text-sm text-gray-800">{{todo[0].title}}</p>
            </li>
        </ul>

        <div v-for="(title,idx) in titles" v-bind:key="idx">
            <div class="mt-16 flex items-center justify-between text-gray-700">
                <h3 class="text-3xl text-gray-900 font-semibold">{{title.title}}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer icon icon-tabler icon-tabler-dots" width="20"
                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <circle cx="5" cy="12" r="1"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                </svg>
            </div>
            <hr class="mb-8 mt-6 border-t border-gray-300">
            <ul>
                <li 
                    v-for="idx in 3" v-bind:key="idx"
                    class="flex items-center mb-6">
                    <div
                        class="mr-2 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full">
                        <div class="check-icon bg-yellow-400 text-white rounded-sm hidden">
                            <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M5 12l5 5l10 -10"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-sm text-gray-800">{{todo[0].title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todo: [
                {
                    title: "Get my car washed",
                }
            ],
            titles: [
                {
                    title: "Design Research"
                },
                {
                    title: "Prototyping"
                }
            ]
        }
    },
}
</script>
<style scoped>
    .checkbox:checked+.check-icon {
        display: flex;
    }

    body {
        font-family: "Lato", sans-serif;
    }
</style>