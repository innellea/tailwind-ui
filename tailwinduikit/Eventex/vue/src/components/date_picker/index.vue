<template>
    <div v-bind:class="[{'mt-6 md:mt-14' :$route.path === '/Sales'}, {'w-full flex flex-col justify-between' :$route.path === '/Analytics'}]">
        <div v-bind:class="[{'flex w-full justify-between' :$route.path === '/Sales'}, {'flex w-full justify-between relative md:static' :$route.path === '/Analytics'}]">
            <p  v-if="$route.path === '/Sales'"
                class="text-base md:text-xl font-bold leading-tight text-gray-700">Event Sale Tickets</p>
            <h4 v-if="$route.path === '/Analytics'" 
                class="text-gray-600 font-bold text-base md:text-xl">Registrations</h4>
            <div class="static sm:relative">
                <div @click="popup_calender(true)"
                    class="py-2 px-3 cursor-pointer flex items-center flex-no-wrap bg-gray-100 ease-in duration-150 hover:bg-gray-200  w-auto">
                    <p class="text-gray-700 mr-2 text-xs">12 Aug - 19 Aug</p>
                    <div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <rect x="2.66666" y="3.33337" width="10.6667" height="10.6667" rx="1.33333"
                                    stroke="#F56565" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.6667 2V4.66667" stroke="#F56565" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M5.33333 2V4.66667" stroke="#F56565" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M2.66666 7.33333H13.3333" stroke="#F56565" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M7.33334 9.99996H8.00001" stroke="#F56565" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M7.99999 10V12" stroke="#F56565" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="popup_calender" class="w-full h-full hidden">
                    <div @click="popup_calender(false)"
                        class="fixed w-full h-full inset-0 bg-transparent z-40"></div>
                    <div class="bg-white absolute -ml-44 sm:-ml-64 px-6  py-6 z-50 shadow-xl">
                        <p class="text-base text-gray-700">June</p>
                        <table class="mt-6">
                            <thead>
                                <tr>
                                    <th v-for="(day, idx) in days" v-bind:key="idx">
                                        <div class="w-full flex justify-center">
                                            <p class="opacity-50 text-xs font-bold text-center text-gray-600"> {{ day }} </p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="pt-6">
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">1</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">2</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                            <p class="text-sm text-red-600">3</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                            <p class="text-sm text-red-600">4</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                            <p class="text-sm text-gray-700">5</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                            <p class="text-sm text-gray-700">6</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                            <p class="text-sm text-gray-700">7</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-red-300">
                                            <p class="text-sm text-gray-700">8</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="w-full h-full">
                                            <div
                                                class="w-12 h-12 flex w-full rounded-full justify-center items-center cursor-pointer bg-red-500">
                                                <p class="text-sm font-bold text-white">9</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-red-600">10</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-red-600">11</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">12</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">13</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">14</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">15</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-4 py-2 flex w-full  justify-center">
                                            <p class="text-sm text-gray-700">16</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-red-600">17</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-red-600">18</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">19</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">20</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">21</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">22</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-4 py-2 flex w-full  justify-center">
                                            <p class="text-sm text-gray-700">23</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-red-600">24</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-red-600">25</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">26</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">27</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">28</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                            <p class="text-sm text-gray-700">29</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-4 py-2 flex w-full  justify-center">
                                            <p class="text-sm text-gray-700">30</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Popup from "@/mixins/main.js"
export default {
    name: "index",
    data() {
        return {
            days: [
                "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
            ]
        }
    },
    mixins: [Popup]
}
</script>
