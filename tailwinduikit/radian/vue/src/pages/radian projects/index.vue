<template>
    <div class="2xl:mx-auto 2xl:container xl:px-0 px-4">
        <Navbar />
        <ProjectsBody />
    </div>
</template>

<script>
import Navbar from "../../components/Navbar/index"
import ProjectsBody from "../../components/projects_with_left_aligned_address"

export default {
    name: "index",
    components: {
        Navbar,
        ProjectsBody
    }
}
</script>