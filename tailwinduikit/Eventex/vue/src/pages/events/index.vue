<template>
    <div class="flex flex-no-wrap ">
        <Sidebar />
        <div class="px-6 md:px-10 py-6 w-full mt-8 md:mt-0">
            <Header />
            <Events />
        </div>
    </div>
</template>

<script>
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import Events from "../../components/event_card_1"

export default {
    name: "index",
    components: {
        Sidebar,
        Header,
        Events
    }
}
</script>