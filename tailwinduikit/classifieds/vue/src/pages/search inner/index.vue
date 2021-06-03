<template>
    <div class="mx-auto container">
        <Navigation />
        <Search />
        <div class="lg:flex lg:px-0 px-4">
            <VeticalCardInner />
            <div class="w-full lg:pl-16 pt-6">
                <LeftAlignedImageWithPrice />
                <UserInformationWithRightAlignedMap />
                <div class="my-4 w-full">
                    <ProductGrid />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "../../components/navigation/index";
import Search from "../../components/search/index";
import VeticalCardInner from "../../components/vertical_card_inner/index";
import LeftAlignedImageWithPrice from "../../components/left_aligned_image_with_right_aligned_description/index";
import UserInformationWithRightAlignedMap from "../../components/user_information_with_right_aligned_map/index";
import ProductGrid from "../../components/4_by_2_col_grid/index";

export default {
    components: {
        Navigation,
        Search,
        VeticalCardInner,
        LeftAlignedImageWithPrice,
        UserInformationWithRightAlignedMap,
        ProductGrid,
    },
};
</script>
