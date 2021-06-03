<template>
    <div>
        <RightAlignedWithSearchbar />
        <SimpleCardsWithElevatedHover />
        <ThreeColCardSlider />
        <BlobStyleFourColumn />
        <ThreeColWithYellowCircles />
        <SimpleTextWithYellowBlob />
        <ThreeCardsWithYellowHover />
        <BlobStyleWithTwoButtons />
        <BlueBgWithYellowSphere />
    </div>
</template>

<script>
import RightAlignedWithSearchbar from "../components/large_section_with_blob_image/index";
import SimpleCardsWithElevatedHover from "../components/simple_cards_with_elevated_hover/index";
import ThreeColCardSlider from "../components/3_col_card_style_with_slider/index";
import BlobStyleFourColumn from "../components/blob_style_4_col/index";
import ThreeColWithYellowCircles from "../components/3_col_with_yellow_circles/index";
import SimpleTextWithYellowBlob from "../components/simple_text_with_yellow_blob/index";
import ThreeCardsWithYellowHover from "../components/3_cards_with_yellow_hover/index";
import BlobStyleWithTwoButtons from "../components/blob_style_with_2_buttons/index";
import BlueBgWithYellowSphere from "../components/blue_background_with_yellow_sphere/index";

export default {
    name: "Index",
    components: {
        RightAlignedWithSearchbar,
        SimpleCardsWithElevatedHover,
        ThreeColCardSlider,
        BlobStyleFourColumn,
        ThreeColWithYellowCircles,
        ThreeCardsWithYellowHover,
        SimpleTextWithYellowBlob,
        BlobStyleWithTwoButtons,
        BlueBgWithYellowSphere,
    },
};
</script>
