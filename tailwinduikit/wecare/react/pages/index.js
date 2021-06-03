import SimpleCardsWithElevatedHover from "../components/simple_cards_with_elevated_hover";
import ThreeColCardSlider from "../components/3_col_card_style_with_slider";
import BobStyleFourColumn from "../components/blob_style_4_col";
import ThreeColWithYellowCircles from "../components/3_col_with_yellow_circles";
import ThreeCardsWithYellowHover from "../components/3_cards_with_yellow_hover";
import BlobStyleWithTwoButtons from "../components/blob_style_with_2_buttons";
import SimpleTextWithYellowBlob from "../components/simple_text_with_yellow_blob";

export default function IndexPage() {
    return (
        <div>
            <SimpleCardsWithElevatedHover />
            <ThreeColCardSlider />
            <BobStyleFourColumn />
            <ThreeColWithYellowCircles />
            <SimpleTextWithYellowBlob />
            <ThreeCardsWithYellowHover />
            <BlobStyleWithTwoButtons />
        </div>
    );
}
