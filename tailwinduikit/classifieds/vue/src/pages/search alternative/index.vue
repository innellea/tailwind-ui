<template>
    <div class="mx-auto container">
        <Navigation />
        <Search />
        <div class="lg:flex lg:px-0 px-4">
            <Filters />
            <div class="w-full lg:pl-16">
                <SearchViews />
                <ProductGrid />
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "../../components/navigation/index";
import Search from "../../components/search/index";
import Filters from "../../components/filters/index";
import SearchViews from "../../components/search_views/index";
import ProductGrid from "../../components/4_by_2_col_grid/index";

export default {
    components: {
        Navigation,
        Search,
        Filters,
        ProductGrid,
        SearchViews,
    },
};
</script>
