<template>
    <div class="mx-auto container xl:px-0 px-4 mt-36">
        <div class="flex items-center justify-center">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-3xl font-bold text-color-black pl-7">Salads</h1>
        </div>
        <div class="mt-16">
            <div
                v-for="idx in Math.ceil(salads.length/2)" v-bind:key="idx" 
                class="xl:flex items-center justify-center w-full xl:pb-9">
                <div
                    v-for="col in 2" v-bind:key="col" 
                    class="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                    <div class="w-full flex items-center justify-between">
                        <h1 class="xl:text-2xl text-xl font-semibold">{{salads[idx].name}}</h1>
                        <p class="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                        <p class="xl:text-2xl text-xl font-semibold">{{salads[idx].price}}$</p>
                    </div>
                    <div>
                        <p class="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
        <div class="flex items-center justify-center">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-3xl font-bold text-color-black pl-7">Toasted Items</h1>
        </div>
        <div class="mt-16">
            <div
                v-for="idx in Math.ceil(toastedItems.length/2)" v-bind:key="idx" 
                class="xl:flex items-center justify-center w-full xl:pb-9">
                <div
                    v-for="col in 2" v-bind:key="col" 
                    class="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                    <div class="w-full flex items-center justify-between">
                        <h1 class="xl:text-2xl text-xl font-semibold">{{toastedItems[idx].name}}</h1>
                        <p class="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                        <p class="xl:text-2xl text-xl font-semibold">{{toastedItems[idx].price}}$</p>
                    </div>
                    <div>
                        <p class="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
        <div class="flex items-center justify-center">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-3xl font-bold text-color-black pl-7">Main Course</h1>
        </div>
        <div class="mt-16">
            <div
                v-for="idx in Math.ceil(mains.length/2)" v-bind:key="idx" 
                class="xl:flex items-center justify-center w-full xl:pb-9">
                <div
                    v-for="col in 2" v-bind:key="col" 
                    class="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                    <div class="w-full flex items-center justify-between">
                        <h1 class="xl:text-2xl text-xl font-semibold">{{mains[idx].name}}</h1>
                        <p class="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                        <p class="xl:text-2xl text-xl font-semibold">{{mains[idx].price}}$</p>
                    </div>
                    <div>
                        <p class="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
        <div class="flex items-center justify-center">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-3xl font-bold text-color-black pl-7">Sweet Corn</h1>
        </div>
        <div class="mt-16">
            <div
                v-for="idx in Math.ceil(corns.length/2)" v-bind:key="idx" 
                class="xl:flex items-center justify-center w-full xl:pb-9">
                <div
                    v-for="col in 2" v-bind:key="col" 
                    class="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                    <div class="w-full flex items-center justify-between">
                        <h1 class="xl:text-2xl text-xl font-semibold">{{corns[idx].name}}</h1>
                        <p class="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                        <p class="xl:text-2xl text-xl font-semibold">{{corns[idx].price}}$</p>
                    </div>
                    <div>
                        <p class="xl:text-lg text-sm xl:pr-16 pt-4">Crunchy puff pastry, Light hazelnut cream filling, Almond, Molten heart, Grilled hazelnuts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
        <div class="flex items-center justify-center">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-3xl font-bold text-color-black pl-7">Tea Time</h1>
        </div>
        <div class="mt-16">
            <div
                v-for="idx in Math.ceil(teas.length/2)" v-bind:key="idx" 
                class="xl:flex items-center justify-center w-full xl:pb-9">
                <div
                    v-for="col in 2" v-bind:key="col" 
                    class="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                    <div class="w-full flex items-center justify-between">
                        <h1 class="xl:text-2xl text-xl font-semibold">{{teas[idx].name}}</h1>
                        <p class="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                        <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                        <p class="xl:text-2xl text-xl font-semibold">{{teas[idx].price}}$</p>
                    </div>
                    <div>
                        <p class="xl:text-lg text-sm xl:pr-16 pt-4">Jasmine green tea, Subtil and Fragnant</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "@/mixins/menu.js"
export default {
    mixins: [Menu],
}
</script>