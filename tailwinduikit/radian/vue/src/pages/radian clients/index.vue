<template>
    <div class="2xl:mx-auto 2xl:container xl:px-0 px-4">
        <Navbar />
        <ClientsBody />
    </div>
</template>

<script>
import Navbar from "../../components/Navbar/index"
import ClientsBody from "../../components/alternating_bubble_style_with_square_container"

export default {
    name: "index",
    components: {
        Navbar,
        ClientsBody
    }
}
</script>