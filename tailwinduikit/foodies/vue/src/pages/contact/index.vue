<template>
    <Navbar />
    <Locations />
    <Footer />
</template>

<script>
import Navbar from '../../components/Navbar'
import Locations from '../../components/ContactLocations'
import Footer from '../../components/Footer'

export default {
    components: {
        Navbar,
        Locations,
        Footer
    }
}
</script>