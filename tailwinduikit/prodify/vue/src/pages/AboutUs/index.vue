<template>
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
</template>

<script>
import Header from "../../components/header/index";
import SectionOne from "../../components/simple-colored-logos/index";
import SectionTwo from "../../components/4_by_4_grid_with_gradient_backgro/index";
import SectionThree from "../../components/video_with_message_from_a_person/index";
import SectionFour from "../../components/right_aligned_avatars_with_gradient/index";

export default {
    components: {
        Header,
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
    },
};
</script>
