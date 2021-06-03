<template>
    <div class="lg:w-1/3">
        <h4 class="text-xl font-normal pt-1.5">‘OnePlus 5T’ in Mobile phones</h4>
        <div class="h-full bg-light-gray mt-14 p-5">
            <h4 class="text-xl font-semibold dark-gray pt-1.5">Filters</h4>
            <div class="flex items-center justify-between mt-8">
                <h4 class="text-xl font-semibold dark-gray">Categories</h4>
                <div data-menu class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" class="hidden icon icon-tabler icon-tabler-chevron-up" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 15 12 9 18 15" />
                    </svg>
                    <svg data-menu xmlns="http://www.w3.org/2000/svg" aria-label="Show" class="icon icon-tabler icon-tabler-chevron-down" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
            <div>
                <ul class="hidden cursor-pointer dark-gray">
                    <li class="mt-5 mb-4 text-base">
                        <a> All categories</a>
                    </li>
                    <li class="mb-4 text-base dark-blue font-semibold">
                        <a>Mobile phones</a>
                    </li>
                    <li class="mb-4 text-base">
                        <a> Tablets</a>
                    </li>
                    <li class="mb-6 text-base">
                        <a> Accessories</a>
                    </li>
                </ul>
            </div>
            <hr />
            <div class="mt-6">
                <h4 class="hidden text-xl font-semibold dark-gray">Location</h4>
                <div>
                    <ul class="cursor-pointer dark-gray">
                        <li class="mt-5 mb-4 text-base">
                            <a>San Diego</a>
                        </li>
                        <li class="mb-4 text-base">
                            <a>Orange County</a>
                        </li>
                        <li class="mb-4 text-base">
                            <a>Washington</a>
                        </li>
                        <li class="mb-6 text-base">
                            <a>Accessories</a>
                        </li>
                    </ul>
                </div>
                <div class="flex w-3/5 items-center relative border border-light-gray bg-white">
                    <div class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                    </div>
                    <select class="w-full focus:outline-none appearance-none dark-gray">
                        <option>Select location...</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down absolute pointer-events-none right-0 mr-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                <hr class="my-6" />
                <div class="mb-24">
                    <h4 class="text-xl font-semibold dark-gray">Price range</h4>
                    <div class="mt-6">
                        <div class="flex items-center">
                            <div class="flex flex-col w-24">
                                <label for="Price" class="text-base font-normal leading-tight mb-2 dark-gray">Minimum</label>
                                <div class="relative">
                                    <div class="absolute text-gray-600 flex items-center pl-2 h-full cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                                            <path d="M12 3v3m0 12v3" />
                                        </svg>
                                    </div>
                                    <input id="min" class="focus:outline-none w-full font-normal h-8 flex items-center pl-8 text-xs border-light-gray rounded border" />
                                </div>
                            </div>
                            <div class="flex flex-col w-24 ml-8">
                                <label for="Price" class="text-base font-normal leading-tight mb-2 dark-gray">Maximum</label>
                                <div class="relative">
                                    <div class="absolute text-gray-600 flex items-center pl-2 h-full cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                                            <path d="M12 3v3m0 12v3" />
                                        </svg>
                                    </div>
                                    <input id="min" class="focus:outline-none w-full font-normal h-8 flex items-center pl-8 text-xs border-light-gray rounded border" />
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
    mounted() {
        let elements = document.querySelectorAll("[data-menu]");
        for (let i = 0; i < elements.length; i++) {
            let main = elements[i];
            main.addEventListener("click", function () {
                let element = main.parentElement.parentElement;
                let andicators = main.querySelectorAll("svg");
                let child = element.querySelector("ul");
                child.classList.toggle("hidden");
                console.log(andicators);
                if (child.classList[0] !== "hidden") {
                    andicators[0].style.display = "block";
                    andicators[1].style.display = "none";
                    console.log(child.classList[0]);
                } else {
                    andicators[0].style.display = "none";
                    andicators[1].style.display = "block";
                }
            });
        }
    }
</script>
