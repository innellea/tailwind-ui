<template>
    <div class="flex w-full justify-between items-center mb-6 md:mb-12">
        <div class="rounded relative w-8/12 md:w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 absolute ml-4 inset-0 m-auto icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
            <input class="border border-gray-100 focus:outline-none focus:border-brand rounded-full w-full text-sm bg-gray-100 text-gray-500 pl-12 sm:pl-10 md:pl-12 py-3 pr-4" type="text" placeholder="Search" />
        </div>
        <div class="flex items-center ml-6 md:ml-0">
            <div class="mr-2 md:mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M11.6667 5.83333C11.6667 4.54467 12.7113 3.5 14 3.5C15.2887 3.5 16.3333 4.54467 16.3333 5.83333C19.0635 7.12431 20.8584 9.81662 21 12.8333V16.3333C21.178 17.8043 22.044 19.1032 23.3333 19.8333H4.66666C5.95596 19.1032 6.82195 17.8043 7 16.3333V12.8333C7.14159 9.81662 8.93647 7.12431 11.6667 5.83333" stroke="#718096" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.5 19.8333V21C10.5 22.933 12.067 24.5 14 24.5C15.933 24.5 17.5 22.933 17.5 21V19.8333" stroke="#718096" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <img class="" src="https://cdn.tuk.dev/assets/components/todos/profile.png" alt="profile" srcset="" />
        </div>
    </div>
</template>
