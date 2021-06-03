import React from "react";
import Header_v2 from "../components/header_v2";
import Section1 from "../components/about-us-text";
import Section2 from "../components/simple-colored-logos";
import Section3 from "../components/4_by_4_grid_with_gradient_backgro";
import Section4 from "../components/video_with_message_from_a_person";
import Section5 from "../components/right_aligned_avatars_with_gradient";
import Section6 from "../components/simple_center_aligned_with_logo";

function IndexPage() {
    return (
        <>
            <Header_v2 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </>
    );
}

export default IndexPage;
