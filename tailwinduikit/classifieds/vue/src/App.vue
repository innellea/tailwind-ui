<template>
    <router-view />
</template>

<script>

export default {
  name: 'App',

  watch: {
    $route: {
        immediate: true,
        handler() {
            document.title = 'Classified'
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                document.title = "Classified";
            },
        },
    },
};
</script>
