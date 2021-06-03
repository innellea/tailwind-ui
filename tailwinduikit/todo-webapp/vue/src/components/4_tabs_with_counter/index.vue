<template>
    <div class="mx-auto container py-20 px-6">
        <div class="mb-20  px-4 xl:px-0">
            <ul class="hidden text-lg md:flex items-center">
                <li class="border-b-4 border-yellow-600 pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                    <div
                        class="w-6 h-6 rounded-full bg-yellow-200 text-yellow-400 text-xs mr-2 flex items-center justify-center">
                        05</div>
                    <p class="text-gray-700"><a href="#">Todos</a></p>
                </li>
                <li class="cursor-pointer pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                    <div
                        class="w-6 h-6 rounded-full bg-yellow-200 text-yellow-400 text-xs mr-2 flex items-center justify-center">
                        05</div>
                    <p class="text-gray-700"><a href="#">Notes</a></p>
                </li>
                <li class="cursor-pointer pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                    <p class="text-gray-700"><a href="#">Links</a></p>
                </li>
                <li class="cursor-pointer pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                    <p class="text-gray-700"><a href="#">Files</a></p>
                </li>
            </ul>
            <hr class="hidden md:block border-t-4 border-gray-200 -mt-1" />
        </div>
        <div class="flex w-full justify-between md:hidden my-10 items-center border-b border-gray-500">
            <p class="text-yellow-600 border-b-2 border-yellow-600  text-xs"><a href="#">Todos</a></p>
            <p class="text-gray-700 text-xs"><a href="#">Notes</a></p>
            <p class="text-gray-700 text-xs"><a href="#">Links</a></p>
            <p class="text-gray-700 text-xs"><a href="#">Files</a></p>
        </div>
    </div>
</template>

<style scoped>
    .border-custom-orange {
        border: 1px solid #F6AD55;
        border-radius: 4px;
    }

    .text-orange {
        color: #F6AD55;
    }

    body {
        font-family: "Lato", sans-serif;
    }
</style>