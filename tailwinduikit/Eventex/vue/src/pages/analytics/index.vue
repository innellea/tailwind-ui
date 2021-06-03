<template>
    <div class="flex flex-no-wrap ">
        <Sidebar />
        <div class="px-6 md:px-10 py-6 w-full mt-8 md:mt-0">
            <Header />
            <div class="mt-6 md:mt-14 w-full">
                <div class="w-full">
                    <div class="xl:flex justify-between w-full items-stretch">
                        <Stats />
                        <LineChart />
                    </div>
                </div>
                <div class="mt-6 md:mt-14">
                    <div class="w-full">
                        <div class="xl:flex justify-between w-full">
                            <BarChart />
                            <div class="xl:w-2/3 w-full mt-10 xl:mt-0 xl:pl-8 2xl:pl-20">
                                <div class="xl:flex justify-between">
                                    <List />
                                    <PieChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import Stats from "../../components/stats_1"
import LineChart from "../../components/line_graph"
import BarChart from "../../components/bar_charts"
import List from "../../components/list"
import PieChart from "../../components/pie_chart"

export default {
    name: "index",
    components: {
        Sidebar,
        Header,
        Stats,
        LineChart,
        BarChart,
        List,
        PieChart
    }
}
</script>