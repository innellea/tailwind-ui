<template>
    <router-view />
    <Footer />
</template>

<script>
import Footer from "./components/simple_center_aligned_with_logo/index";
export default {
    name: "App",
    components: {
        Footer,
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || "Prodify";
            },
        },
    },
};
</script>
