<template>
    <div class="xl:w-1/3 2xl:flex w-full ">
        <div class="w-full flex flex-col justify-between">
            <Calendar />
            <div class="mt-9">
                <canvas id="chartjs-1"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from '@/mixins/chart.js'
import Calendar from "../date_picker"

export default {
    name: "index",
    components: {
        Calendar
    },
    data() {
        return {
            chartId: "chartjs-1",
            chartData: {
                type: 'bar',
                data: {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{ 
                        data: [25, 55, 100, 75, 60, 60, 120, 150, 40, 0], 
                        fill: false, 
                        backgroundColor: "rgba(246,173,85,1)" 
                    }]
                },
                options: {
                    scales: [{ yAxes: [{ ticks: { beginAtZero: true } }] }],
                    legend: {
                        position: false,
                    },
                },
            }
        }
    },
    mixins: [Chart],

}
</script>
