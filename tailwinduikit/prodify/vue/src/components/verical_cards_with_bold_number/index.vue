<template>
    <div class="mx-auto container mt-14 w-full">
        <div class="px-4 xl:px-0 flex flex-col justify-center items-center w-full">
            <div class="md:w-9/12 lg:w-7/12 pb-8">
                <h1 class="text-xl text-color-dark f-f-l"><span class="font-bold">Knowledge Base &gt;</span> How to get started with prodify</h1>
                <div>
                    <div class="mt-14">
                        <h1 class="text-2xl sm:text-5xl font-black f-f-l text-color pb-5">How to get started with prodify</h1>
                        <h2 class="text-2xl f-f-r text-color-dark">Introductory resources to get you started with using prodify</h2>
                    </div>
                    <div v-for="index in 5" :key="index" class="pb-8 border-b border-gray-200">
                        <a>
                            <div class="mt-24">
                                <h1 class="text-xl sm:text-4xl text-color font-bold pb-5 f-f-l">What are the general requirements to onboard</h1>
                                <h2 class="text-xl f-f-r  text-color-dark">The option to add another project can be found in the upload section, as well as on the final submit section what we dont know is that it needs proper installation of the...</h2>
                            </div>
                        </a>
                        <div class="mt-6 flex items-center">
                            <img class="-ml-2" src="https://cdn.tuk.dev/assets/templates/prodify/AvtarKnowledgeBase(3).png" alt="" />
                            <p class="text-base text-black f-f-r pl-3">Contributed by James Larson</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
