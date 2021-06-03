<template>
    <div class="mx-auto container py-20">
        <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table class="min-w-full bg-white">
                <thead>
                    <tr class="w-full h-16 bg-gray-800 py-8">
                        <th
                            class="rounded-l-lg pl-3 w-12 text-gray-300 font-normal text-left tracking-normal leading-4 opacity-0">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-dots-vertical" width="20" height="20"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width="20" height="20"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                </svg>
                            </div>
                        </th>
                        <th class="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">
                            <div class="bg-gray-800 border rounded-sm border-gray-300 w-5 h-5 flex flex-shrink-0 justify-center items-center relative"
                                @click="checkAll()">
                                <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full">
                                <div class="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                    <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                </div>
                            </div>
                        </th>
                        <th class="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Title</th>
                        <th class="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Total notes</th>
                        <th class="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Created by</th>
                        <th class="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Collaborators
                        </th>
                        <th class="rounded-r-lg text-gray-300 font-normal pr-8 text-left tracking-normal leading-4">More
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    v-for="(row, idx) in tableData" v-bind:key="idx"
                    class="cursor-pointer h-20 border-gray-300 border-b">
                        <td class="pl-3 text-gray-600 font-normal text-left tracking-normal leading-4">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-dots-vertical" width="20" height="20"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width="20" height="20"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                </svg>
                            </div>
                        </td>
                        <td class="pr-6 text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                            <div
                                class="bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full">
                                <div class="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                    <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                </div>
                            </div>
                        </td>
                        <td
                            class="text-sm pr-10 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{{row.title}}</td>
                        <td
                            class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 font-semibold">
                            {{row.notes}}</td>
                        <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{{row.createdBy}}</td>
                        <td 
                        v-show="row.collabs === 'None'"
                        class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{{row.collabs}}</td>
                        <td 
                            v-if="row.collabs === 'True' || row.collabs === 'More'"
                            class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                            <div class="flex items-center flex-no-wrap">
                                <div class="w-8 h-8 bg-cover bg-center rounded-md">
                                    <img 
                                        v-bind:src="imageOne"
                                        alt=""
                                        class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow">
                                </div>
                                <div class="w-8 h-8 bg-cover rounded-md -ml-2">
                                    <img 
                                        v-bind:src="imageTwo"
                                        alt=""
                                        class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow">
                                </div>
                                <div class="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                    <img 
                                        v-bind:src="imageThree"
                                        alt=""
                                        class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow">
                                </div>
                                <div
                                    v-show="row.collabs === 'More'"
                                    class="w-8 h-8 bg-yellow-400 rounded-full text-white border-2 border-white flex items-center justify-center -ml-2">
                                3</div>
                            </div>
                        </td>
                        <td class="pr-8 relative">
                            <div class="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                                <ul class="bg-white shadow rounded py-1">
                                    <li
                                        class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                        Edit</li>
                                    <li
                                        class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                        Delete</li>
                                    <li
                                        class="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                        Duplicate</li>
                                </ul>
                            </div>
                            <button
                                class="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                <svg @click="dropdownFunction($event)" xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-dots dropbtn" width="28" height="28"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="5" cy="12" r="1"></circle>
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                </svg>
                            </button>
                        </td>
                    </tr>                        
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: true,
            imageOne: "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png",
            imageTwo: "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png",
            imageThree: "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png",
            tableData: [
                {
                    title: "Rachel's Notebook",
                    todos: "24",
                    createdBy: "Rachel Anthony",
                    collabs: "None",
                },
                {
                    title: "Rachel's Notebook",
                    todos: "24",
                    createdBy: "Rachel Anthony",
                    collabs: "True",
                },
                {
                    title: "Rachel's Notebook",
                    todos: "24",
                    createdBy: "Rachel Anthony",
                    collabs: "None",
                },
                {
                    title: "Rachel's Notebook",
                    todos: "24",
                    createdBy: "Rachel Anthony",
                    collabs: "None",
                },
                {
                    title: "Rachel's Notebook",
                    todos: "24",
                    createdBy: "Rachel Anthony",
                    collabs: "True",
                },
                {
                    title: "Rachel's Notebook",
                    todos: "24",
                    createdBy: "Rachel Anthony",
                    collabs: "More",
                },
            ]
        }
    },
    methods: {
        checkAll() {
            if (this.$data.flag) {
                document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                    el.nextElementSibling.classList.remove("hidden")
                })
                this.$data.flag = false
                console.log(this.$data.flag)
            } else {
                document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                    el.nextElementSibling.classList.add("hidden")
                })
                this.$data.flag = true
            }
        },
        dropdownFunction(event) {
            var dropdowns = document.getElementsByClassName("dropdown-content")
            var i
            let list = event.currentTarget.parentElement.parentElement.getElementsByClassName("dropdown-content")[0]
            for (i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.add("hidden")
            }
            list.classList.toggle("hidden")
        },
    },
    mounted() {
        window.onclick = function (event) {
            if (!event.target.matches(".dropbtn")) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    openDropdown.classList.add("hidden")
                }
            }
        }
    }
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