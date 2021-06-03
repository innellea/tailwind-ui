<template>
    <div class="2xl:mx-auto 2xl:container xl:px-0 px-4">
        <Navbar />
        <ContactsBody />
    </div>
</template>

<script>
import Navbar from "../../components/Navbar/index"
import ContactsBody from "../../components/divided_with_address_and_contect_sections"

export default {
    name: "index",
    components: {
        Navbar,
        ContactsBody
    }
}
</script>