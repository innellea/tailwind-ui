<template>
    <Navbar />
    <DishOfTheDay />
    <HomeMenu />
    <Services />
    <AboutUs />
    <Testimonials />
    <BookATable />
    <Footer />
</template>

<script>
import Navbar from '../../components/Navbar'
import DishOfTheDay from '../../components/DishOfTheDay'
import HomeMenu from "../../components/HomeMenu"
import Services from "../../components/Services"
import AboutUs from "../../components/AboutUs"
import Testimonials from "../../components/Testimonials"
import BookATable from "../../components/BookATable"
import Footer from "../../components/Footer"

export default {
    name: 'FoodiesHome',
    components: {
        Navbar,
        DishOfTheDay,
        HomeMenu,
        Services,
        AboutUs,
        Testimonials,
        BookATable,
        Footer
    }
}
</script>