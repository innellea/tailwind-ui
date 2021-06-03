<template>
    <div class="xl:w-2/3 w-full ">
        <SectionOne />
        <SectionTwo />
    </div>
    <div class="xl:w-1/3 mt-6 md:mt-10 xl:mt-0 xl:pl-12 2xl:pl-24  w-full">
        <div>
            <Stats />
            <LineGraph />
            <Host />
        </div>
    </div>
</template>

<script>
import SectionOne from "../event_card_2"
import SectionTwo from "../event_timeline"
import Stats from "../stats_2"
import LineGraph from "../chart_card"
import Host from "../host"

export default {
    name: "index",
    components: {
        SectionOne,
        SectionTwo,
        Stats,
        LineGraph,
        Host
    }
}
</script>