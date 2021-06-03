<template>
    <Header />
    <SectionOne />
    <SectionTwo />
</template>

<script>
import Header from "../../components/header/index";
import SectionOne from "../../components/vertical_cards_with_gradient_head";
import SectionTwo from "../../components/right_aligned_avatars_with_gradient/index";

export default {
    components: {
        Header,
        SectionOne,
        SectionTwo,
    },
};
</script>
