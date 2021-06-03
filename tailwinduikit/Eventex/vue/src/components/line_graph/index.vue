<template>
    <div class="xl:w-2/3 pl-0 xl:pl-8 mt-10 xl:mt-0 w-full">
        <div class="flex flex-col justify-between h-full">
            <div>
                <div class="lg:flex w-full justify-between">
                    <h3 class="text-gray-600 leading-5 text-base md:text-xl font-bold">Selling
                        Overview
                    </h3>
                    <div
                        class="flex items-center justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                        <div class="flex items-center">
                            <button
                                class="py-2 px-4 bg-gray-100 focus:outline-none ease-in duration-150 text-xs text-gray-600 hover:bg-gray-200">Dollars</button>
                            <button
                                class="py-2 px-4 bg-red-500 focus:outline-none text-white ease-in duration-150 text-xs hover:bg-red-600">Tickets</button>
                        </div>
                        <div class="lg:ml-14">
                            <div
                                class="bg-gray-100 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                                <select
                                    class="text-xs text-gray-600 bg-transparent focus:outline-none">
                                    <option class="leading-1">Year</option>
                                    <option class="leading-1">2020</option>
                                    <option class="leading-1">2019</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-end mt-6">
                    <h3 class="text-red-500 leading-5 text-lg md:text-2xl">$65,875</h3>
                    <div class="flex items-center md:ml-4 ml-1">
                        <p class="text-green-500 text-xs md:text-base">17%</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                            viewBox="0 0 12 12" fill="none">
                            <path d="M6 2.5V9.5" stroke="#4338CA" stroke-width="0.75"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8 4.5L6 2.5" stroke="#4338CA" stroke-width="0.75"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4 4.5L6 2.5" stroke="#4338CA" stroke-width="0.75"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <canvas id="myChart" width="1025" height="386"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from "@/mixins/chart.js"
export default {
    name: "index",
    data() {
        return {
            chartId: "myChart",
            chartData: {
                type: "line",
                height: "366px",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "16 Mar 2018",
                            borderColor: "#4A5568",
                            data: [600, 400, 620, 300, 200, 600, 230, 300, 200, 200, 100, 1200],
                            fill: false,
                            pointBackgroundColor: "#4A5568",
                            borderWidth: "3",
                            pointBorderWidth: "4",
                            pointHoverRadius: "6",
                            pointHoverBorderWidth: "8",
                            pointHoverBorderColor: "rgb(74,85,104,0.2)",
                        },
                    ],
                },
                options: {
                    legend: {
                        position: false,
                    },
                },
            }
        }
    },
    mixins: [Chart]
}
</script>