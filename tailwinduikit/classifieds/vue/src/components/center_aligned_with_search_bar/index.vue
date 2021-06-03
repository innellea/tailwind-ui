<template>
    <div class="mx-auto container">
        <div class="flex w-full flex-col items-center justif-center py-24 lg:px-0 px-4">
            <h1 class="lg:text-6xl text-3xl dark-blue font-bold text-center">What are you looking for</h1>
            <h2 class="lg:text-2xl text-lg light-gray pt-6 text-centerlg:mb-0 mb-4">Mobile phones, laptops, automobiles, houses and much more.</h2>
            <div class="flex flex-col w-full sm:w-1/2 md:ml-4 mt-3 md:mt-10">
                <div class="relative w-full">
                    <div class="lg:absolute bg-gray-100 lg:border-r lg:border-t lg:border-b lg:mb-0 mb-4 lg:py-5 py-3 border-gray-800 cursor-pointer text-gray-700 flex items-center justify-between pr-3 right-0 h-full">
                        <span class="lg:text-2xl text-lg leading-tight tracking-normal px-4">All Categories</span>
                        <span class="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                                <path d="M1 1L9 9L17 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                    <div class="absolute inset-0 lg:mt-0 mt-8 text-black flex items-center pl-6 h-full lg:py-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#4A5568" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M24.5 24.5L17.5 17.5" stroke="#4A5568" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <input id="search" class="w-full text-light-gray focus:outline-none focus:border font-normal pl-16 pr-24 lg:py-5 py-2 flex items-center text-2xl border-black rounded border" placeholder="Search" />
                </div>
            </div>
            <div class="flex justify-center items-center pt-12">
                <button class="py-3 px-8 bg-dark-blue text-white lg:text-2xl text-lg mr-4 focus:outline-none">Search</button>
                <button class="py-3 px-8 bg-transparent border border-dark-blue dark-blue text-white lg:text-2xl text-lg focus:outline-none">Advance Search</button>
            </div>
        </div>
    </div>
</template>
