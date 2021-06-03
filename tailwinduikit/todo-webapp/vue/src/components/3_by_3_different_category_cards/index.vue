<template>
    <div class="mx-auto container px-6">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div
                v-for="title in titles" v-bind:key="title" 
                class="rounded">
                <div class="mb-5 flex items-center justify-between">
                    <h3 class="text-2xl font-semibold text-gray-900">{{title.title}}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-700 icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="5" cy="12" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                    </svg>
                </div>
                <div class="w-full h-full py-3 px-2 bg-gray-200 rounded-lg">
                    <div 
                        v-for="(todo, idx) in todos" v-bind:key="idx"
                        class="w-full bg-white rounded-lg shadow mb-3 py-5 px-4">
                        <div class="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                            <div class="w-2 h-2 mr-2 bg-yellow-600 rounded-full"></div>
                            <p class="text-xs text-gray-800"> {{ todo.category }} </p>
                        </div>
                        <h4 class="text-gray-800 font-semibold mb-4"> {{ todo.title }} </h4>
                        <p class="mb-3 text-gray-600 text-sm"> {{ todo.desc }}</p>
                        <div class="flex items-center justify-between text-gray-600">
                            <div class="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="13" r="7"></circle>
                                    <polyline points="12 10 12 13 14 13"></polyline>
                                    <line x1="7" y1="4" x2="4.25" y2="6"></line>
                                    <line x1="17" y1="4" x2="19.75" y2="6"></line>
                                </svg>
                                <p class="ml-2 text-xs">{{todo.date}}</p>
                            </div>
                            <p class="text-xs text-red-500 font-semibold">{{todo.due}} days ago</p>
                        </div>
                        <div class="mt-4 flex justify-between items-center text-gray-600">
                            <div class="flex items-center flex-no-wrap">
                                <div class="w-6 h-6 bg-cover bg-center rounded-md">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow">
                                </div>
                                <div class="w-6 h-6 bg-cover rounded-md -ml-2">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow">
                                </div>
                                <div class="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow">
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <circle cx="5" cy="12" r="1"></circle>
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                            </svg>
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
            todos: [
                {
                    category: "Family",
                    title: "Company Website Redisgn",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..",
                    date: "7 Sept, 23:00",
                    due: "Two"
                },
                {
                    category: "Family",
                    title: "Company Website Redisgn",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..",
                    date: "7 Sept, 23:00",
                    due: "Two"
                },
                {
                    category: "Family",
                    title: "Company Website Redisgn",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..",
                    date: "7 Sept, 23:00",
                    due: "Two"
                }
            ],
            titles: [
                {
                    title: "To Do"
                },
                {
                    title: "For Review"
                },
                {
                    title: "Completed"
                }
            ]
        }
    }
}
</script>

<style scoped>
    body {
        font-family: "Lato", sans-serif;
    }
</style>