<template>
    <div class="flex flex-no-wrap">
        <SideBar />
        <div class="py-8 px-10 md:px-12 w-full">
            <SearchBar />
            <PageTitle />
            <Tasks />
        </div>
    </div>
</template>

<script>
import SideBar from "../../components/dark_theme_with_light_icons"
import SearchBar from "../../components/simple_with_right_aligned_avatar&notifications"
import PageTitle from "../../components/compose_task_card"
import Tasks from "../../components/3_by_3_different_category_cards"
export default {
    components: {
        SideBar,
        SearchBar,
        PageTitle,
        Tasks
    }
}
</script>