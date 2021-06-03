<template>
    <div class="2xl:mx-auto 2xl:container xl:px-0 px-4">
        <Navbar />
        <AboutBody />
    </div>
</template>

<script>
import Navbar from "../../components/Navbar/index"
import AboutBody from "../../components/projects_with_indigo_overlay_and_button/index"

export default {
    name: "index",
    components: {
        Navbar,
        AboutBody
    }
}
</script>