<template>
    <Navigation />
    <AppHeader />
    <AppBody />
</template>

<script>
import Navigation from "../../components/navigation/index";
import AppHeader from "../../components/center_aligned_with_search_bar/index";
import AppBody from "../../components/4_by_2_col_grid/index";

export default {
    name: "Home",
    components: {
        Navigation,
        AppHeader,
        AppBody,
    },
};
</script>
