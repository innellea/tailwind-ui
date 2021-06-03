<template>
    <div class="2xl:mx-auto 2xl:container xl:px-0 px-4">
        <Navbar />
        <TeamBody />
    </div>
</template>

<script>
import Navbar from "../../components/Navbar/index"
import TeamBody from "../../components/3_by_2_square_style_with_hover_email"

export default {
    name: "index",
    components: {
        Navbar,
        TeamBody
    }
}
</script>