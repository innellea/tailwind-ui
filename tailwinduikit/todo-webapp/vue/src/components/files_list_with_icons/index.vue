<template>
    <div class="mx-auto container">
        <div>
            <div class="mt-16">
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
                            stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <h1 class="text-lg text-gray-900 font-semibold ml-3">Files</h1>
                </div>
                <ul class=" mt-8">
                    <div class="flex items-center w-full justify-between mt-8">
                        <div class="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                fill="none">
                                <rect width="40" height="40" rx="4" fill="#EDF2F7"></rect>
                                <path
                                    d="M20.0002 10.3335L9.3335 15.6668L20.0002 21.0002L30.6668 15.6668L20.0002 10.3335"
                                    stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M9.3335 21L20.0002 26.3333L30.6668 21" stroke="#718096" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.3335 26.3335L20.0002 31.6668L30.6668 26.3335" stroke="#718096"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <h4 class="text-xl text-light-dark pl-4">
                                Fonts.zip
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
                    <div class="flex items-center w-full justify-between mt-6">
                        <div class="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                fill="none">
                                <rect width="40" height="40" rx="4" fill="#FEEBC8"></rect>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.34929 18.5042L19.004 30.2229C19.5373 30.8095 20.4586 30.8095 20.992 30.2229L31.6493 18.5029C32.0666 18.0442 32.1146 17.3575 31.7653 16.8455L27.0493 9.9202C26.8016 9.55752 26.3912 9.34009 25.952 9.33887H14.0506C13.6114 9.34009 13.201 9.55752 12.9533 9.9202L8.23329 16.8429C7.88262 17.3562 7.93062 18.0442 8.34929 18.5042Z"
                                    stroke="#ED8936" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                            <h4 class="text-xl text-light-dark pl-4">
                                Tasks list web app.sketch
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
                    <div class="flex items-center w-full justify-between mt-6">
                        <div class="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                fill="none">
                                <rect width="40" height="40" rx="4" fill="#C3DAFE"></rect>
                                <path d="M22.6665 8V13.3333C22.6665 14.0697 23.2635 14.6667 23.9998 14.6667H29.3332"
                                    stroke="#667EEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M26.6665 32H13.3332C11.8604 32 10.6665 30.8061 10.6665 29.3333V10.6667C10.6665 9.19391 11.8604 8 13.3332 8H22.6665L29.3332 14.6667V29.3333C29.3332 30.8061 28.1393 32 26.6665 32Z"
                                    stroke="#667EEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M16 16.0002H17.3333" stroke="#667EEA" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M16 21.3332H24" stroke="#667EEA" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M16 26.6667H24" stroke="#667EEA" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                            <h4 class="text-xl text-light-dark pl-4">
                                Tasks list web app.sketch
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
                    <div class="flex items-center w-full justify-between mt-6">
                        <div class="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                fill="none">
                                <rect width="40" height="40" rx="4" fill="#BEE3F8"></rect>
                                <path
                                    d="M12.5254 21.4336V27H10.6504V12.7812H15.8945C17.4505 12.7812 18.668 13.1784 19.5469 13.9727C20.4323 14.7669 20.875 15.8184 20.875 17.127C20.875 18.5072 20.4421 19.5716 19.5762 20.3203C18.7168 21.0625 17.4831 21.4336 15.875 21.4336H12.5254ZM12.5254 19.9004H15.8945C16.8971 19.9004 17.6654 19.666 18.1992 19.1973C18.7331 18.722 19 18.0384 19 17.1465C19 16.3001 18.7331 15.623 18.1992 15.1152C17.6654 14.6074 16.9329 14.3438 16.002 14.3242H12.5254V19.9004ZM29.1367 24.1973C29.1367 23.709 28.9512 23.3314 28.5801 23.0645C28.2155 22.791 27.5742 22.5566 26.6562 22.3613C25.7448 22.166 25.0189 21.9316 24.4785 21.6582C23.9447 21.3848 23.5475 21.0592 23.2871 20.6816C23.0332 20.304 22.9062 19.8548 22.9062 19.334C22.9062 18.4681 23.2708 17.7357 24 17.1367C24.7357 16.5378 25.6732 16.2383 26.8125 16.2383C28.0104 16.2383 28.9805 16.5475 29.7227 17.166C30.4714 17.7845 30.8457 18.5755 30.8457 19.5391H29.0293C29.0293 19.0443 28.8177 18.6178 28.3945 18.2598C27.9779 17.9017 27.4505 17.7227 26.8125 17.7227C26.1549 17.7227 25.6406 17.8659 25.2695 18.1523C24.8984 18.4388 24.7129 18.8132 24.7129 19.2754C24.7129 19.7116 24.8854 20.0404 25.2305 20.2617C25.5755 20.4831 26.1973 20.6947 27.0957 20.8965C28.0007 21.0983 28.7331 21.3392 29.293 21.6191C29.8529 21.8991 30.2663 22.2376 30.5332 22.6348C30.8066 23.0254 30.9434 23.5039 30.9434 24.0703C30.9434 25.0143 30.5658 25.7728 29.8105 26.3457C29.0553 26.9121 28.0755 27.1953 26.8711 27.1953C26.0247 27.1953 25.276 27.0456 24.625 26.7461C23.974 26.4466 23.4629 26.0299 23.0918 25.4961C22.7272 24.9557 22.5449 24.373 22.5449 23.748H24.3516C24.3841 24.3535 24.625 24.8353 25.0742 25.1934C25.5299 25.5449 26.1289 25.7207 26.8711 25.7207C27.5547 25.7207 28.1016 25.584 28.5117 25.3105C28.9284 25.0306 29.1367 24.6595 29.1367 24.1973Z"
                                    fill="#4299E1"></path>
                            </svg>
                            <h4 class="text-xl text-light-dark pl-4">
                                Project file.psd
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
                    <div class="flex items-center w-full justify-between mt-6">
                        <div class="flex items-center pb-6 border-b border-gray-300 cursor-pointer w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                fill="none">
                                <rect width="40" height="40" rx="4" fill="#FEEBC8"></rect>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.34929 18.5042L19.004 30.2229C19.5373 30.8095 20.4586 30.8095 20.992 30.2229L31.6493 18.5029C32.0666 18.0442 32.1146 17.3575 31.7653 16.8455L27.0493 9.9202C26.8016 9.55752 26.3912 9.34009 25.952 9.33887H14.0506C13.6114 9.34009 13.201 9.55752 12.9533 9.9202L8.23329 16.8429C7.88262 17.3562 7.93062 18.0442 8.34929 18.5042Z"
                                    stroke="#ED8936" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                            <h4 class="text-xl text-light-dark pl-4">
                                Symbols.sketch
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
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            overdue: [
                {
                    title: "Welcome to Quicklist!",
                    time: "18:00"
                }
            ],
            urgent: [
                {
                    title: "Welcome to Quicklist!",
                    time: "18:00"
                }
            ]
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