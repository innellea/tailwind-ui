<template>
    <!-- gallery -->
    <div class="height md:block hidden mt-16 mx-auto container">
        <div class="grid"
            data-isotope='{ "itemSelector": ".grid-item", "percentPosition": "true", "masonry": { "columnWidth": ".grid-sizer", "horizontalOrder": "true" } }'
        >
            <div class="grid-sizer"></div>
            <div class="grid-item grid-item--img1">
                <img src="https://cdn.tuk.dev/assets/templates/reels/gallery1.png" class="h-full w-full object-cover object-center" />
            </div>
            <div class="grid-item--img2">
                <img src="https://cdn.tuk.dev/assets/templates/reels/gallery2.png" class="h-full w-full object-cover object-center" />
            </div>
            <div class="grid-item--img3">
                <img src="https://cdn.tuk.dev/assets/templates/reels/gallery3.png" class="h-full w-full object-cover object-center" />
            </div>
            <div class="grid-item--img4">
                <img src="https://cdn.tuk.dev/assets/templates/reels/gallery4.png" class="h-full w-full object-cover object-center" />
            </div>
            <div class="grid-item--img5">
                <img src="https://cdn.tuk.dev/assets/templates/reels/gallery5.png" class="h-full w-full object-cover object-center" />
            </div>
            <div class="grid-item--img6">
                <img src="https://cdn.tuk.dev/assets/templates/reels/gallery6.png" class="h-full w-full object-cover object-center" />
            </div>
            <div class="grid-item--img7">
                <img src="https://cdn.tuk.dev/assets/templates/reels/gallery7.png" class="h-full w-full object-cover object-center" />
            </div>
        </div>
    </div>
    
    <div class="img-10 mt-6 xl:block hidden 2xl:px-0 px-4 mx-auto container">
        <img src="https://cdn.tuk.dev/assets/templates/reels/gallery8.png" />
    </div>

    <div class="mt-16 md:hidden block">
        <div>
            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery1.png" class="w-full h-full my-2" />
            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery2.png" class="w-full h-full my-2" />
            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery3.png" class="w-full h-full my-2" />
            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery4.png" class="w-full h-full my-2" />
            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery6.png" class="w-full h-full my-2" />
            <img src="https://cdn.tuk.dev/assets/templates/reels/gallery7.png" class="w-full h-full my-2" />
        </div>
    </div>
    <div class="xl:hidden block mb-10 xl:px-0 lg:px-4 md:px-4 sm:px-0 px-0 h-full mx-auto container">
        <img src="https://cdn.tuk.dev/assets/templates/reels/gallery8.png" class="h-full md:my-0 my-2 w-full" />
    </div>
    <div class="my-24 flex items-center justify-center">
        <button class="lg:text-2xl text-base text-gold-color border-gold-color hover-gold border-2 focus:outline-none lg:py-5 py-2 lg:px-32 px-16 rounded-full">See More</button>
    </div>
</template>

<script>
export default {
    mounted() {
        var scripts = [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js",
        "https://npmcdn.com/isotope-layout@3/dist/isotope.pkgd.js"
        ];
        scripts.forEach(script => {
        let tag = document.createElement("script");
        tag.setAttribute("src", script);
        document.head.appendChild(tag);
        });
    },
}
</script>

