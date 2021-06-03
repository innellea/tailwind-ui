<template>
    <div class="flex flex-wrap items-center justify-between relative py-10 lg:py-28 2xl:px-0 xl:px-16 px-0">
      <div>
        <div class="flex flex-col flex-col-reverse md:flex-row w-full justify-between flex-wrap">
            <div class="md:w-1/4 w-full mt-10 md:mt-0 pb-6 md:pb-0">
              <div v-for="(client, idx) in clients" v-bind:key="idx">
                <div
                  v-if="(idx%2) === 0" 
                  class="flex w-full justify-end mt-12">
                    <div
                        class="w-28 h-28 rounded-full border-transparent border-4 hover:border-indigo-700 flex justify-center items-center bg-transparent cursor-pointer">
                        <img v-bind:src="client.image" v-bind:alt="client.alt">
                    </div>
                </div>
                <div
                  v-else
                  class="w-28 h-28 rounded-full border-transparent border-4 hover:border-indigo-700 flex justify-center items-center bg-transparent cursor-pointer">
                  <img v-bind:src="client.image" v-bind:alt="client.alt">
                </div>
              </div>
            </div>
            <div class="md:w-3/4 w-full md:pl-24 ">
                <h1 class=" hidden xl:block text-7xl font-bold tracking-wider text-dark2 uppercase">WHAT OUR <br />
                    <span class="text-indigo-700">clients</span> SAY
                </h1>
                <h1 class="  xl:hidden text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-dark2 uppercase">WHAT OUR 
                    <span class="text-indigo-700">clients</span> SAY
                </h1>
                <div class="mt-12 flex pl-6 mr-4 py-6 border border-gray-700">
                    <svg class="mr-7" xmlns="http://www.w3.org/2000/svg" width="44" height="37" viewBox="0 0 44 37"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M35.5677 37C37.9069 37 39.897 36.179 41.5382 34.537C43.1794 32.895 44 30.9063 44 28.571C44 26.2357 43.1794 24.247 41.5382 22.605C39.897 20.963 37.9069 20.142 35.5677 20.142C33.4549 20.142 32.1816 19.3028 31.7477 17.6243C31.3139 15.9457 31.5308 14.0848 32.3986 12.0414C33.2663 9.99801 34.7188 8.13709 36.7562 6.45858C38.7935 4.78007 41.2081 3.94083 44 3.94083L44 -3.8147e-06C38.9821 -4.25337e-06 34.8038 1.92478 31.4648 5.7744C28.1258 9.62403 25.947 13.8567 24.9284 18.4726C23.9097 23.0885 24.2021 27.3304 25.8055 31.1982C27.409 35.0661 30.663 37 35.5677 37ZM11.233 37C13.5722 37 15.5623 36.179 17.2035 34.537C18.8447 32.895 19.6653 30.9063 19.6653 28.571C19.6653 26.2357 18.8447 24.247 17.2035 22.605C15.5623 20.963 13.5722 20.142 11.233 20.142C9.12023 20.142 7.83748 19.3028 7.38473 17.6243C6.93199 15.9457 7.14893 14.0848 8.03555 12.0414C8.92217 9.99802 10.3747 8.13709 12.3932 6.45858C14.4116 4.78007 16.8357 3.94083 19.6653 3.94083L19.6653 -2.12741e-06C14.6474 -2.56609e-06 10.469 1.92478 7.13007 5.77441C3.7911 9.62403 1.61231 13.8567 0.593645 18.4726C-0.425021 23.0885 -0.132629 27.3304 1.47083 31.1982C3.07429 35.0661 6.32832 37 11.233 37Z"
                            fill="#4338CA" />
                    </svg>
                    <p class="text-base md:text-lg leading-8 tracking-wider mt-4 pr-4 lg:pr-0  w-full lg:w-1/2">
                        In my history of working with companies, I can honestly say that there is not one company that I've ever worked with that has better service than them.
                    </p>
                </div>
                <div class="w-full flex justify-end mt-5 pr-4">
                    <div >
                        <h3 class="text-xl md:text-2xl font-bold tracking-wider text-indigo-700 text-right">Billy Butcher</h3>
                        <h4 class="text-base md:text-lg tracking-wider mt-1 text-right text-dark2">VP Operations, InertiaCo.</h4>
                        <h4 class="text-base md:text-lg tracking-wider mt-1 text-right text-dark2">October, 2020</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Indicators />
    </div>
</template>

<script>
import Data from "@/mixins"
import Indicators from "../Indicators"

export default {
  name: "index",  
  mixins: [Data],
  components: {
    Indicators
  }
}
</script>