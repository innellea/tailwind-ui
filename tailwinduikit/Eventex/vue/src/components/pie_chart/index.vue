<template>
    <div
        class="xl:w-1/3 xl:ml-12 2xl:border-l border-gray-100 flex flex-col  2xl:items-center mt-10 xl:mt-0">
        <p class="text-base md:text-xl font-bold leading-tight text-gray-600 text-center">Total RSVP
            Count </p>
        <div class="mx-auto flex flex-col items-center">
            <div class="mt-8">
                <canvas id="chartjs-2"></canvas>
            </div>
            <div class="mt-8">
                <div class="flex items-center justify-between md:justify-start">
                    <div class="mr-8">
                        <p class="text-xs text-gray-400">{{chartData.data.labels[0]}}</p>
                        <p class="text-xl font-bold text-gray-700">60%</p>
                    </div>
                    <div class="pl-8 md:border-l border-gray-100">
                        <p class="text-xs text-gray-400">{{chartData.data.labels[1]}}</p>
                        <p class="text-xl font-bold text-gray-700">12%</p>
                    </div>
                </div>
                <div class="mt-3 flex items-center justify-between md:justify-start">
                    <div class="mr-8">
                        <p class="text-xs text-gray-400">{{chartData.data.labels[2]}}</p>
                        <p class="text-xl font-bold text-gray-700">12%</p>
                    </div>
                    <div class="pl-8 md:border-l border-gray-100">
                        <p class="text-xs text-gray-400">{{chartData.data.labels[3]}}</p>
                        <p class="text-xl font-bold text-gray-700">25%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from "@/mixins/chart.js"
export default {
    name: "index",
    mixins: [Chart],
    data() {
        return {
            chartId: "chartjs-2",
            chartData: {
                type: "pie",
                data: { 
                    labels: ['Accepted','Rejected','Pending','Approved'],
                    datasets: [{  
                        data: [60,12,12,25],
                        fill: false,
                        backgroundColor: ["#4880FF", "#FF5660", "#FFC400", "#24CCB8"] 
                    }] 
                },
                options: { 
                    legend: {
                        position: false,
                    },
                },
            }
        }
    },
}
</script>