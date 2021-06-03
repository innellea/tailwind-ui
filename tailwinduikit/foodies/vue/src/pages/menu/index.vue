<template>
    <Navbar />
    <MenuHero />
    <MenuCards />
    <Footer />
</template>

<script>
import Navbar from '../../components/Navbar'
import MenuHero from "../../components/MenuHero"
import MenuCards from "../../components/MenuCards"
import Footer from '../../components/Footer'

export default {
    components: {
        Navbar,
        MenuHero,
        MenuCards,
        Footer
    }
}
</script>