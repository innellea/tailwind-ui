<template>
    <router-view />
</template>

<script>
export default {
    name: "App",
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || "Virtual Event Management";
            },
        },
    },
};
</script>
