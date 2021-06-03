<template>
    <div class="mx-auto container">
        <Navigation />
        <Search />
        <Chat />
    </div>
</template>

<script>
import Navigation from "../../components/navigation/index";
import Search from "../../components/search/index";
import Chat from "../../components/expanded_chat/index";

export default {
    components: {
        Navigation,
        Search,
        Chat,
    },
};
</script>
