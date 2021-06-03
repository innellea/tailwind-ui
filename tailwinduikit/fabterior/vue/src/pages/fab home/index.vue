<template>
    <AppHeader />
    <AppBody />
    <AppFooter />
</template>

<script>
import AppHeader from "../../components/header";
import AppBody from "../../components/layout";
import AppFooter from "../../components/footer";
export default {
    components: {
        AppHeader,
        AppBody,
        AppFooter,
    },
};
</script>
