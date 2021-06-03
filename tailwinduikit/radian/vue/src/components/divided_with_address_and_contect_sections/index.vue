<template>
    <div class="mt-4 lg:mt-16 xl:pb-16 relative">
        <img v-bind:src="image" class="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
        <div class="mx-auto container flex flex-wrap items-center relative 2xl:px-0 xl:px-16 px-4">
            <div class="flex flex-wrap xl:mx-auto xl:container">
                <div class="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                    <img v-bind:src="image" class="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />
                    <div class="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                        <div class="w-full 2xl:pl-48 xl:pt-1">
                        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">We’re Here</h1>
                        <div class="w-full md:w-10/12 mt-3">
                            <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                            <div class="mt-4 md:mt-8">
                                <h2 class="text-sm md:text-base text-indigo-700 font-semibold">Address</h2>
                                <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">{{address}}</h2>
                            </div>
                            <div class="mt-4 md:mt-8">
                                <h2 class="text-sm md:text-base text-indigo-700 font-semibold">Contact</h2>
                                <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">{{phone}} (Phone)</h2>
                                <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">{{cell}} (Cell)</h2>
                            </div>
                            <div class="mt-4 md:mt-8">
                                <h2 class="text-sm md:text-base text-indigo-700 font-semibold">Email</h2>
                                <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">{{email}}</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                    <div class="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700">Let’s Talk</h1>
                        <div class="w-full 2xl:w-8/12 mt-3">
                            <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                            <div class="mt-4 md:mt-8">
                                <p class="text-gray-800 text-base font-medium">Name</p>
                                <input class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Justin Timberlake" />
                            </div>
                            <div class="mt-4 md:mt-8">
                                <p class="text-gray-800 text-base font-medium">Email Address</p>
                                <input class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="example@mail.com" />
                            </div>
                            <div class="mt-4 md:mt-8">
                                <p class="text-gray-800 text-base font-medium">Message</p>
                                <textarea class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="Write us something..."></textarea>
                            </div>
                            <div class="py-5">
                                <button class="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Indicators />
        </div>
    </div>
</template>

<script>
import Indicators from "../Indicators"

export default {
  name: "index",
  data() {
    return {
      image: "https://cdn.tuk.dev/assets/templates/radian/Back_Image.png",
      address: "Office #13, NSTP, NUST University H-12 Sector, Islamabad",
      phone: "+92 051 4567890",
      cell: "+92 123 4567890",
      email: "alphasquad@example.com"
    }
  },
  components: {
      Indicators
  }
}
</script>