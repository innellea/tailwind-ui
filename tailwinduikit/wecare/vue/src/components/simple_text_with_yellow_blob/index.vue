<template>
    <section class="px-6 xl:px-0">
        <div class="my-16 lg:my-52 mx-auto container">
            <div class="flex flex-col items-center justify-center w-full py-5 lg:py-10">
                <h1 class="font-semibold custom-gray-800 text-40px">Testimonials</h1>
                <hr class="w-24 h-1 bg-gold rounded-full" />
            </div>
            <div class="flex items-center justify-center w-full mt-10 lg:mt-28">
                <div class="w-full lg:w-10/12 relative">
                    <div class="slider2">
                        <div class="slide-ana2">
                            <div>
                                <div class="flex lg:items-center justify-center w-full">
                                    <div class="flex items-start">
                                        <img class="w-8 lg:w-auto" src="https://cdn.tuk.dev/assets/templates/weCare/quotation.png" alt="quotation" />
                                        <p class="custom-gray-800 text-lg leading-8 ml-7 lg:mt-12">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac posuere nunc.</p>
                                    </div>
                                </div>
                                <div class="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                                    <div class="mt-4 lg:mt-0">
                                        <hr class="line mb-2 lg:mb-5 w-16" />
                                        <h3 class="font-semibold leading-6 custom-gray-800 leading-4 text-xl lg:text-4xl uppercase tracking-tight">Martin Reich</h3>
                                        <h4 class="mt-1 lg:mt-3 lg:text-2xl tracking-tight">Physical Therapist</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex lg:items-center justify-center w-full">
                                    <div class="flex items-start">
                                        <img class="w-8 lg:w-auto" src="https://cdn.tuk.dev/assets/templates/weCare/quotation.png" alt="quotation" />
                                        <p class="custom-gray-800 text-lg leading-8 ml-7 lg:mt-12">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac posuere nunc.</p>
                                    </div>
                                </div>
                                <div class="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                                    <div class="mt-4 lg:mt-0">
                                        <hr class="line mb-2 lg:mb-5 w-16" />
                                        <h3 class="font-semibold leading-6 custom-gray-800 leading-4 text-xl lg:text-4xl uppercase tracking-tight">Martin Reich</h3>
                                        <h4 class="mt-1 lg:mt-3 lg:text-2xl tracking-tight">Physical Therapist</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex lg:items-center justify-center w-full">
                                    <div class="flex items-start">
                                        <img class="w-8 lg:w-auto" src="https://cdn.tuk.dev/assets/templates/weCare/quotation.png" alt="quotation" />
                                        <p class="custom-gray-800 text-lg leading-8 ml-7 lg:mt-12">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac posuere nunc.</p>
                                    </div>
                                </div>
                                <div class="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                                    <div class="mt-4 lg:mt-0">
                                        <hr class="line mb-2 lg:mb-5 w-16" />
                                        <h3 class="font-semibold leading-6 custom-gray-800 leading-4 text-xl lg:text-4xl uppercase tracking-tight">Martin Reich</h3>
                                        <h4 class="mt-1 lg:mt-3 lg:text-2xl tracking-tight">Physical Therapist</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-auto justify-center lg:justify-start flex absolute items-center bottom-0">
                        <img class="hidden lg:block opacity-0" src="https://cdn.tuk.dev/assets/templates/weCare/quotation.png" alt="quotation" />
                        <img id="prev2" class="cursor-pointer ml-7 mr-10" src="https://cdn.tuk.dev/assets/templates/weCare/test-arrow-left.png" />
                        <img id="next2" class="cursor-pointer" src="https://cdn.tuk.dev/assets/templates/weCare/test-arrow-right.png" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Index",
    mounted() {
        // Testimonial carousel
        let slides2 = document.querySelectorAll(".slide-ana2>div");
        let slideSayisi2 = slides2.length;
        let prev2 = document.getElementById("prev2");
        let next2 = document.getElementById("next2");
        for (let index = 0; index < slides2.length; index++) {
            const element = slides2[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        let loop2 = 0 + 1000 * slideSayisi2;

        function goNext2() {
            loop2++;
            for (let index = 0; index < slides2.length; index++) {
                const element = slides2[index];
                element.style.transform = "translateX(" + 100 * (index - (loop2 % slideSayisi2)) + "%)";
            }
        }

        function goPrev2() {
            loop2--;
            for (let index = 0; index < slides2.length; index++) {
                const element = slides2[index];
                element.style.transform = "translateX(" + 100 * (index - (loop2 % slideSayisi2)) + "%)";
            }
        }

        next2.addEventListener("click", goNext2);
        prev2.addEventListener("click", goPrev2);
    },
};
</script>
