<template>
    <Navbar />
    <GalleryCateogry />
    <Gallery />
    <Footer />
</template>

<script>
import Navbar from '../../components/home_navbar'
import GalleryCateogry from '../../components/gallery_category'
import Gallery from '../../components/gallery'
import Footer from '../../components/left_aligned_with_social_icons'

export default {
    components: {
        Navbar,
        GalleryCateogry,
        Gallery,
        Footer
    }
}
</script>