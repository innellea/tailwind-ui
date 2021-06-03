<template>
    <SectionOne />
    <SectionTwo />
    <Footer />
</template>

<script>
import Sectionone from "../../components/gradient_with_large_title_and_se";
import SectionTwo from "../../components/verical_cards_with_bold_numbering_2";
import Footer from "../../components/simple_center_aligned_with_logo/index";

export default {
    components: {
        SectionOne,
        SectionTwo,
        Footer,
    },
};
</script>
