<template>
    <div class="flex flex-no-wrap ">
        <Sidebar />
        <div class="px-6 md:px-10 py-6 w-full mt-8 md:mt-0">
            <Header />
            <div class="mt-6 md:mt-14">
                <div class="w-full">
                    <div class="flex flex-wrap">
                        <EventInner />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import EventInner from "../../components/event-inner-card"

export default {
    name: "index",
    components: {
        Sidebar,
        Header,
        EventInner,
    }
}
</script>