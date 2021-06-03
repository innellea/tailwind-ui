<template>
    <div class="mt-4 md:mt-8">
        <Tabs />
        <TimelineCards v-if="$route.path === '/EventInner'"/>
        <EventSpeakers v-if="$route.path === '/EventSpeakers'"/>
        <EventSponsors v-if="$route.path === '/EventSponsors'"/>
    </div>
</template>

<script>
import Tabs from "../tab"
import TimelineCards from "../timeline_cards"
import EventSpeakers from "../content_card"
import EventSponsors from "../sponsors"
import Dropdown from "@/mixins/main.js"

export default {
    name: "index",
    components: {
        Tabs,
        TimelineCards,
        EventSpeakers,
        EventSponsors
    },
    mixins: [Dropdown]
}
</script>