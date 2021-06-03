<template>
    <Navbar />
    <ContactUs />
    <Footer />
</template>

<script>
import Navbar from '../../components/home_navbar'
import ContactUs from '../../components/contact_us_form_simple'
import Footer from '../../components/left_aligned_with_social_icons'

export default {
    components: {
        Navbar,
        ContactUs,
        Footer
    }
}
</script>