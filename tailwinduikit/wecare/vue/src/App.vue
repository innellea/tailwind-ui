<template>
    <Index />
</template>

<script>
import Index from "./pages/index"
export default {
    name: "App",
    components: {
        Index,
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || "WeCare";
            },
        },
    },
};
</script>
