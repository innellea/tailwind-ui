<template>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
</template>

<script>
import SectionOne from "../../components/3_cards_with_elegant_typography";
import SectionTwo from "../../components/right_aligned_3_placeholders_with_slider";
import SectionThree from "../../components/3_placeholders_with_description";
import SectionFour from "../../components/simple_3_col_with_email";
import SectionFive from "../../components/simple_text_wtihin_square";
import SectionSix from "../../components/elegant_with_dark_gray_card";

export default {
    components: {
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
    },
};
</script>
