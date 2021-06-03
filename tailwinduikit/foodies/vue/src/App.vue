<template>
    <router-view />
</template>

<script>
export default {
    name: "App",
    watch: {
        $route: {
            immediate: true,
            handler() {
                document.title = "Foodies Restuarant Website"
            },
        },
    },
};
</script>
