<template>
    <div class="flex w-full justify-between items-center mt-9">
        <p class="text-lg leading-none text-right text-gray-800">Tickets sold</p>
        <div
            class="relative bg-gray-100 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
            <select
                class="text-xs text-gray-600 w-24 h-full bg-transparent focus:outline-none">
                <option class="leading-none">Weekly</option>
                <option class="leading-none">Monthly</option>
                <option class="leading-none">Daily</option>
            </select>
        </div>
    </div>
    <div class="mt-5 w-full">
        <canvas id="check"></canvas>
    </div>
</template>

<script>
import Chart from "@/mixins/chart.js"
export default {
    name: "index",
    mixins: [Chart]
}
</script>
