<template>
    <div class="mx-auto container py-20">
        <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table class=" min-w-full  bg-white">
                <tbody>
                    <tr 
                        v-for="idx in 6" v-bind:key="idx"
                        class="h-20">
                        <td class="w-6 pr-2">
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
                        <td class="text-left whitespace-no-wrap text-gray-800 tracking-normal leading-4 pr-6 w-6">
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
                        <td class="pl-6 pr-20">
                            <div class="flex items-center">
                                <img src="https://cdn.tuk.dev/assets/components/todos/Bitmap.png" alt="logo" srcset="">
                                <div class="ml-4">
                                    <h3 class="text-lg text-gray-dark">{{item.title}}</h3>
                                    <h4 class="text-sm text-gray-light mt-1">
                                        {{item.link}}</h4>
                                </div>
                            </div>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M14.4697 12.4697C14.1768 12.7626 14.1768 13.2374 14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303L14.4697 12.4697ZM19 9L19.5303 9.53033C19.8232 9.23744 19.8232 8.76256 19.5303 8.46967L19 9ZM15.5303 4.46967C15.2374 4.17678 14.7626 4.17678 14.4697 4.46967C14.1768 4.76256 14.1768 5.23744 14.4697 5.53033L15.5303 4.46967ZM19 9.75C19.4142 9.75 19.75 9.41421 19.75 9C19.75 8.58579 19.4142 8.25 19 8.25V9.75ZM9 17.75C9.41421 17.75 9.75 17.4142 9.75 17C9.75 16.5858 9.41421 16.25 9 16.25V17.75ZM15.5303 13.5303L19.5303 9.53033L18.4697 8.46967L14.4697 12.4697L15.5303 13.5303ZM19.5303 8.46967L15.5303 4.46967L14.4697 5.53033L18.4697 9.53033L19.5303 8.46967ZM19 8.25H8V9.75H19V8.25ZM8 8.25C5.37665 8.25 3.25 10.3766 3.25 13H4.75C4.75 11.2051 6.20507 9.75 8 9.75V8.25ZM3.25 13C3.25 15.6234 5.37665 17.75 8 17.75V16.25C6.20507 16.25 4.75 14.7949 4.75 13H3.25ZM8 17.75H9V16.25H8V17.75Z"
                                    fill="#718096"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path d="M4 7H20" stroke="#718096" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M10 11V17" stroke="#718096" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M14 11V17" stroke="#718096" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7"
                                    stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7"
                                    stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </td>
                        <td class="relative w-5">
                            <div class="dropdown-content mt-8 absolute left-0 -ml-20 shadow-md z-10 hidden w-32">
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
            item: {
                title: "How to design a wireframe in Figma",
                link: "https://www.figma.com/community?tab=files"
            }
        }
    },
    mounted() {
        window.onclick = function (event) {
            if (!event.target.matches(".dropbtn")) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    openDropdown.classList.add("hidden");
                }
            }
        };
    },
    methods: {
        dropdownFunction(event) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            let list = event.currentTarget.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
            for (i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.add("hidden");
            }
            list.classList.toggle("hidden");
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