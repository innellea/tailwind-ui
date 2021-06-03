<template>
    <div class="mx-auto container">
        <div>
            <div class="flex pt-6 items-center">
                <div data-menu="" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide"
                        class="hidden icon icon-tabler icon-tabler-chevron-up" width="28" height="28"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <polyline points="6 15 12 9 18 15"></polyline>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show"
                        class="icon icon-tabler icon-tabler-chevron-down" width="28" height="28" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <h1 class="text-lg text-gray-900 font-semibold ml-3">Folders</h1>
            </div>
            <ul class=" mt-8">
                <div class="mt-6"
                    v-for="(folder, idx) in folders" v-bind:key="idx"
                >
                    <div class="flex items-center w-full justify-between">
                        <div class="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="38" viewBox="0 0 46 38"
                                fill="none">
                                <g filter="url(#filter0_d)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.4238 4.28135V2.15224C15.4238 0.963594 14.4565 0 13.2632 0H2.66058C1.46732 0 0.5 0.963594 0.5 2.15224V29.8477C0.5 31.0364 1.46732 32 2.66058 32H39.2282C40.4216 32 41.3889 31.0364 41.3889 29.8477V8.58601C41.3889 7.39727 40.4216 6.43368 39.2282 6.43368H17.5844C16.3912 6.43368 15.4238 5.47009 15.4238 4.28135Z"
                                        fill="#529FD9"></path>
                                </g>
                                <defs>
                                    <filter id="filter0_d" x="-3.5" y="-2" width="48.8889" height="40"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                        <feOffset dy="2"></feOffset>
                                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
                                        </feColorMatrix>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow">
                                        </feBlend>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                            result="shape"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                            <h4 class="text-xl text-light-dark pl-4">
                                {{folder.title}}
                            </h4>
                        </div>
                        <div class="relative">
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
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            folders: [
                {
                    title: "Assets",
                },
                {
                    title: "Images",
                }
            ],
        }
    },
    mounted() {
        let elements = document.querySelectorAll("[data-menu]")
        for (let i = 0; i < elements.length; i++) {
            let main = elements[i];
            main.addEventListener("click", function () {
                let element = main.parentElement.parentElement
                let andicators = main.querySelectorAll("svg")
                let child = element.querySelector("ul")
                child.classList.toggle("hidden")
                if (child.classList[1] !== "hidden") {
                    andicators[1].style.display = "block"
                    andicators[0].style.display = "none"
                } else {
                    andicators[1].style.display = "none"
                    andicators[0].style.display = "block"

                }
            });
        }
        window.onclick = function (event) {
            if (!event.target.matches(".dropbtn")) {
                var dropdowns = document.getElementsByClassName("dropdown-content")
                var i
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i]
                    openDropdown.classList.add("hidden")
                }
            }
        };
    },
    methods: {
        dropdownFunction(event) {
            var dropdowns = document.getElementsByClassName("dropdown-content")
            var i
            let list = event.currentTarget.parentElement.parentElement.getElementsByClassName("dropdown-content")[0]
            for (i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.add("hidden")
            }
            list.classList.toggle("hidden")
        }
    }
}
</script>
<style scoped>
    body {
        font-family: "Lato", sans-serif;
    }
</style>