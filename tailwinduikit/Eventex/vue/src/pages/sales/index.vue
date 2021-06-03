<template>
    <div class="flex flex-no-wrap ">
        <Sidebar />
        <div class="px-6 md:px-10 py-6 w-full mt-8 md:mt-0">
            <Header />
            <Stats />
            <Calendar />
            <Tickets />
        </div>
    </div>
</template>

<script>
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import Stats from "../../components/stats_card_1"
import Calendar from "../../components/date_picker"
import Tickets from "../../components/ticket_with_barcode"

export default {
    name: "index",
    components: {
        Sidebar,
        Header,
        Stats,
        Calendar,
        Tickets
    }
}
</script>