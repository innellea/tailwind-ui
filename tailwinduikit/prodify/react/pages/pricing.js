import React, { useState } from "react";
import Header_v2 from "../components/header_v2";
import Section1 from "../components/vertical_cards_with_gradient_head";
import Section2 from "../components/right_aligned_avatars_with_gradient";
import Section3 from "../components/simple_center_aligned_with_logo";
function IndexPage() {
    return (
        <>
            <Header_v2 />
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    );
}

export default IndexPage;
