import Layout from "@components/layout";
import React from "react";
import Hero from "../components/left_aligned_with_image_and_floating_card";
import Features from "../components/3_cards_with_elegant_typography/index";
import Slider from "../components/right_aligned_3_placeholders_with_slider";
import CTA from "../components/3_placeholders_with_description";
import Team from "../components/simple_3_col_with_email/index";
export default function IndexPage() {
    return (
        <>
            <Hero />
            <Features />
            <Slider />
            <CTA />
            <Team />
        </>
    );
}
