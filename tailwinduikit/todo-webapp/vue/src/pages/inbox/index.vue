<template>
    <div class="flex flex-no-wrap">
        <SideBar />
        <div class="py-8 px-10 md:px-12 w-full">
            <SearchBar />
            <PageTitle />
            <ExpandedList />
            <SimpleList />
        </div>
    </div>
</template>

<script>
import SideBar from "../../components/dark_theme_with_light_icons"
import SearchBar from "../../components/simple_with_right_aligned_avatar&notifications"
import PageTitle from "../../components/compose_task_card"
import ExpandedList from "../../components/expanded_list_with_colored_reminder"
import SimpleList from "../../components/simple_dropdown_list"
export default {
    components: {
        SideBar,
        SearchBar,
        PageTitle,
        ExpandedList,
        SimpleList,
    },
    methods: {
        addModal() {
        this.$refs.modal.Popup()
        }
    }
}
</script>