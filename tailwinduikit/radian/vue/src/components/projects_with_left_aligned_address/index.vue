<template>
  <div class="mx-auto container ">
      <div class="xl:flex flex-wrap items-center justify-between relative py-10 lg:py-28 2xl:px-0 xl:px-20 px-4">
          <div class="xl:w-1/2 w-full md:w-auto flex flex-col sm:items-center lg:items-start">
              <div class="md:w-10/12 relative md:flex items-center justify-between">
                  <div class="md:flex items-center justify-between w-full">
                      <div class="transform mb-4 md:mb-0 lg:-ml-10 md:-rotate-90">
                          <p class="text-2xl font-semibold tracking-wider leading-normal text-gray-900">Projects</p>
                      </div>
                      <div class="md:pl-20">
                          <h1 class="hidden xl:block text-5xl font-bold tracking-wider text-gray-800 uppercase">OUR<span class="text-indigo-800"> WORK</span></h1>
                          <h1 class="xl:hidden text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800 uppercase">OUR<span class="text-indigo-800"> WORK</span></h1>
                          <p class="text-gray-800 leading-8 tracking-wide mt-6 text-base md:text-lg">We bring our A-team to every engagement, starting with the Alpha Way, our step-by-step formula .</p>
                      </div>
                  </div>
              </div>
              <div
                v-for="(address, idx) in addressesLeft" v-bind:key="idx"  
                class="flex flex-col w-full md:flex-row items-center justify-start lg:justify-start md:justify-center mt-5 md:mt-24">
                  <img v-bind:src="address.image" alt="building project" class="md:w-auto w-full md:h-auto h-full object-center object-full" />
                  <div class="border border-black py-6 2xl:px-6 text-gray-800 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">{{address.address}}</div>
              </div>
              <div class="mt-5 xl:mt-24 mt-5 xl:mt-24 xl:block flex items-center md:justify-end justify-center w-full xl:block hidden">
                  <button class="py-4 px-6 shadow-xl text-lg tracking-wider text-white hover:opacity-90 ease-in duration-150 flex border border-black items-center bg-gray-900">
                      View All Projects
                      <div class="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-5 md:ml-10 bg-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                              <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </button>
              </div>
          </div>
          <div class="xl:w-1/2 w-full md:w-auto flex flex-col mt-5 md:mt-10 xl:mt-0">
              <div class="flex flex-col md:flex-row flex-col-reverse items-center justify-center lg:justify-end relative">
                  <div class="border border-black py-6 2xl:px-6 text-gray-800 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">308 Negra Arroyo Lane, ABQ, New Mexico.</div>
                  <img src="https://cdn.tuk.dev/assets/templates/radian/projects(2).png" alt="building project" class="md:w-auto w-full md:h-auto h-full object-center object-full" />
                  <div class="absolute z-10 right-0 bottom-0 pb-36 sm:pb-28 sm:pr-10 lg:pr-0 xl:-mr-8 md:pb-8">
                      <button class="py-4 px-6 shadow-xl text-lg tracking-wider text-gray-800 hover:bg-gray-200 ease-in duration-150 flex border border-black items-center bg-white">
                          View Project
                          <div class="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                  <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                          </div>
                      </button>
                  </div>
              </div>
              <div
                v-for="(address, idx) in addressesRight" v-bind:key="idx"  
                class="flex flex-col flex-col-reverse md:flex-row items-center justify-center lg:justify-end mt-5 md:mt-20">
                  <div class="border border-black py-6 2xl:px-6 text-gray-800 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">{{address.address}}</div>
                  <img v-bind:src="address.image" alt="building project" class="md:w-auto w-full md:h-auto h-full object-center object-full" />
              </div>
              <div class="mt-5 xl:mt-24 mt-5 xl:mt-24 xl:block flex items-center  justify-center md:justify-end md:pr-14 w-full xl:hidden block">
                  <button class="py-2 px-3 shadow-xl text-base tracking-wider text-white hover:bg-gray-200 ease-in duration-150 flex border border-black items-center bg-gray-900">
                      View All Projects
                      <div class="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-5 md:ml-10 bg-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                              <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </button>
              </div>
          </div>
          <Indicators />
      </div>
  </div>
</template>

<script>
import Indicators from "../Indicators"
import Data from "@/mixins"

export default {
  name: "index",
  components: {
    Indicators
  },
  mixins: [Data]
}
</script>
