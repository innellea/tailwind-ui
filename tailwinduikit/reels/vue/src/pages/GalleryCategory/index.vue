<template>
    <Navbar />
    <GalleryCateogry />
    <GalleryHeader />
    <Gallery />
    <Footer />
</template>

<script>
import Navbar from '../../components/home_navbar'
import GalleryCateogry from '../../components/gallery_category'
import GalleryHeader from '../../components/gallery_header'
import Gallery from '../../components/3_by_2_with_light_background'
import Footer from '../../components/left_aligned_with_social_icons'

export default {
    components: {
        Navbar,
        GalleryCateogry,
        GalleryHeader,
        Gallery,
        Footer
    }
}
</script>