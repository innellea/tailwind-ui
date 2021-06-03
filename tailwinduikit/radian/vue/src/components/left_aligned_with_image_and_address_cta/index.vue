<template>
    <div class="2xl:mx-auto 2xl:container xl:px-0 px-4">
        <Navbar />
        <div class="md:flex-row flex flex-col flex-wrap items-center relative py-10 md:py-40 2xl:px-0 xl:px-16 px-0">
            <div class="w-full md:w-1/3">
                <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800 uppercase">INFINITY MADE<br /><span class="text-indigo-700">REAL</span></h1>
                <p class="text-gray-800 leading-8 tracking-wide mt-6 text-base md:text-lg">One of the best designers in the buisness who will make your location look good and professional with the highest quality materials available.</p>
            </div>
            <div class="w-full md:w-2/3 flex md:justify-end relative mt-10 md:mt-0 md:pl-20">
                <img class="w-full z-20" src="https://cdn.tuk.dev/assets/templates/radian/hero1.png" alt="hero" />
                <img class="absolute z-0 left-0 bottom-0 pb-64 ml-14 hidden 2xl:-mb-16 xl:block" src="https://cdn.tuk.dev/assets/templates/radian/small_circle.png" alt="small circle" />
                <img class="hidden md:block absolute z-0 xl:-mb-16 left-0 bottom-0 2xl:w-1/4 xl:w-1/3 lg:w-1/4 w-1/5 xl:ml-0 lg:ml-0 ml-10" src="https://cdn.tuk.dev/assets/templates/radian/circle.png" alt="circle" />
                <div class="">
                    <div class="absolute md:-mb-8 xl:-mb-16 bg-white border-2 border-gray-800 flex justify-between items-center w-full md:ml-10 lg:ml-0 md:w-10/12 shadow-xl z-40 bottom-0 left-0 py-4 px-4 lg:px-9 lg:py-9">
                        <p class="text-sm md:text-lg lg:text-2xl font-semibold tracking-wider leading-9 text-gray-800">308 Negra Arroyo Lane,<br />Albuquerque, New Mexico.</p>
                        <div class="w-16 h-16 cursor-pointer hover:bg-gray-300 ease-in duration-150 rounded-full border-black border-4 flex items-center justify-center">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                <path d="M2.47308 14.3386H27.0261" stroke="#1A202C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.503 26.6624L27.0257 14.3386" stroke="#1A202C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.503 2.01477L27.0257 14.3386" stroke="#1A202C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Indicators />
        </div>
    </div>
</template>

<script>
import Navbar from "../Navbar"
import Indicators from "../Indicators"
export default {
  name: "index",
  components: {
      Navbar,
      Indicators
  }
}
</script>