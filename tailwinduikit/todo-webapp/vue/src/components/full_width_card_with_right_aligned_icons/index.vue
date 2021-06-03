<template>
    <div class="flex justify-center w-full">
        <div id="check" class="md:flex w-10/12 bg-white shadow-lg items-center justify-between mt-20 py-7 px-4 visible">
            <div class="flex items-center">
                <svg @click="selection(false)" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="21"
                    height="20" viewBox="0 0 21 20" fill="none">
                    <circle cx="10" cy="10" r="10" stroke="#CBD5E0"></circle>
                    <path d="M6 10.5H14" stroke="#CBD5E0" stroke-linecap="square"></path>
                </svg>
                <p class="text-dark text-base ml-3">1 notebook selected</p>
            </div>
            <div class="flex items-center mt-4 md:mt-0">
                <div class="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4"></path>
                        <circle cx="9" cy="9" r="2"></circle>
                    </svg>
                </div>
                <div class="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6">
                        </path>
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                </div>
                <div class="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                        <line x1="16" y1="3" x2="16" y2="7"></line>
                        <line x1="8" y1="3" x2="8" y2="7"></line>
                        <line x1="4" y1="11" x2="20" y2="11"></line>
                        <rect x="8" y="15" width="2" height="2"></rect>
                    </svg>
                </div>
                <div class="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        <path d="M16 11h6m-3 -3v6"></path>
                    </svg>
                </div>
                <div class="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-archive" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                        <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                        <line x1="10" y1="12" x2="14" y2="12"></line>
                    </svg>
                </div>
                <div class="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="5" cy="12" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        selection(flag){
            if(flag){
                document.getElementById("check").classList.add("md:flex");
                document.getElementById("check").classList.remove("hidden");
            }
            else{
                document.getElementById("check").classList.remove("md:flex");
                document.getElementById("check").classList.add("hidden");
            }
        }
    }
}
</script>
<style scoped>
    body {
        font-family: "Lato", sans-serif;
    }
    .text-dark {
        color: #1A202C;
    }
</style>