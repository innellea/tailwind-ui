<template>
    <div class="flex flex-no-wrap ">
        <Sidebar />
        <div class="px-6 md:px-10 py-6 w-full mt-8 md:mt-0">
            <Header />
            <div class="mt-6 md:mt-14">
                <CalendarTab />
                <CalendarMonth v-if="$route.path === '/Calendar'" />
                <CalendarWeek v-if="$route.path === '/CalendarWeek'" />
                <CalendarDay v-if="$route.path === '/CalendarDay'" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import CalendarTab from "../../components/calendar_tab"
import CalendarMonth from "../../components/calendar_month"
import CalendarWeek from "../../components/calendar_week"
import CalendarDay from "../../components/calendar_day"

export default {
    name: "index",
    components: {
        Sidebar,
        Header,
        CalendarTab,
        CalendarMonth,
        CalendarWeek,
        CalendarDay
    }
}
</script>