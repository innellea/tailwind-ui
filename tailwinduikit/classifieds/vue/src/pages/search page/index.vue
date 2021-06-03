<template>
    <div class="mx-auto container">
        <Navigation />
        <Search />
        <div class="lg:flex lg:px-0 px-4">
            <Filters />
            <div class="w-full lg:pl-16">
                <SearchViews />
                <VerticalCards />
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "../../components/navigation/index";
import Search from "../../components/search/index";
import Filters from "../../components/filters/index";
import VerticalCards from "../../components/vertical_cards_with_right_aligned_prices/index";
import SearchViews from "../../components/search_views/index";

export default {
    components: {
        Navigation,
        Search,
        Filters,
        VerticalCards,
        SearchViews,
    },
};
</script>
