<template>
    <AppHeader />
    <SectionOne />
    <SectionTwo />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
</template>

<script>
import AppHeader from "../../components/large_typography_with_gradient_and_glass_effect/index";
import SectionOne from "../../components/video_with_message_from_a_person/index";
import SectionTwo from "../../components/SectionTwo/index";
import SectionFive from "../../components/large_text_with_gradient_name/index";
import SectionSix from "../../components/simple_bold_text/index";
import SectionSeven from "../../components/right_aligned_avatars_with_gradient/index";

export default {
    name: "ProdifyHome",
    components: {
        AppHeader,
        SectionOne,
        SectionTwo,
        SectionFive,
        SectionSix,
        SectionSeven,
    },
};
</script>
