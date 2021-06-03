import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

const Index = () => (
    <div>
        <section className="px-6 xl:px-0">
            <div className="my-16 lg:my-52 mx-auto container">
                <div className="flex flex-col items-center justify-center w-full py-5 lg:py-10">
                    <h1 className="font-semibold custom-gray-800 text-40px">Testimonials</h1>
                    <hr className="w-24 h-1 bg-gold rounded-full" />
                </div>
                <div className="flex items-center justify-center w-full mt-10 lg:mt-28">
                    <div className="w-full lg:w-10/12 relative">
                        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} isIntrinsicHeight={true}>
                            <Slider>
                                <Slide index={0}>
                                    <div>
                                        <div className="flex lg:items-center justify-center w-full">
                                            <div className="flex items-start">
                                                <img className="w-8 lg:w-auto" src="https://cdn.tuk.dev/assets/templates/weCare/quotation.png" alt="quotation" />
                                                <p className="custom-gray-800 text-lg leading-8 ml-7 lg:mt-12">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac posuere nunc.</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                                            <div className="mt-4 lg:mt-0">
                                                <hr className="line mb-2 lg:mb-5 w-16" />
                                                <h3 className="font-semibold leading-6 custom-gray-800 leading-4 text-xl lg:text-4xl uppercase tracking-tight">Martin Reich</h3>
                                                <h4 className="mt-1 lg:mt-3 lg:text-2xl tracking-tight">Physical Therapist</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div>
                                        <div className="flex lg:items-center justify-center w-full">
                                            <div className="flex items-start">
                                                <img className="w-8 lg:w-auto" src="https://cdn.tuk.dev/assets/templates/weCare/quotation.png" alt="quotation" />
                                                <p className="custom-gray-800 text-lg leading-8 ml-7 lg:mt-12">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac posuere nunc.</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                                            <div className="mt-4 lg:mt-0">
                                                <hr className="line mb-2 lg:mb-5 w-16" />
                                                <h3 className="font-semibold leading-6 custom-gray-800 leading-4 text-xl lg:text-4xl uppercase tracking-tight">Martin Reich</h3>
                                                <h4 className="mt-1 lg:mt-3 lg:text-2xl tracking-tight">Physical Therapist</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div>
                                        <div className="flex lg:items-center justify-center w-full">
                                            <div className="flex items-start">
                                                <img className="w-8 lg:w-auto" src="https://cdn.tuk.dev/assets/templates/weCare/quotation.png" alt="quotation" />
                                                <p className="custom-gray-800 text-lg leading-8 ml-7 lg:mt-12">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac posuere nunc.</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                                            <div className="mt-4 lg:mt-0">
                                                <hr className="line mb-2 lg:mb-5 w-16" />
                                                <h3 className="font-semibold leading-6 custom-gray-800 leading-4 text-xl lg:text-4xl uppercase tracking-tight">Martin Reich</h3>
                                                <h4 className="mt-1 lg:mt-3 lg:text-2xl tracking-tight">Physical Therapist</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Slider>
                            {/* </div>
                        </div> */}
                            <div className="w-full lg:w-auto justify-center lg:justify-start flex absolute items-center bottom-0">
                                <img className="hidden lg:block opacity-0" src="https://cdn.tuk.dev/assets/templates/weCare/quotation.png" alt="quotation" />
                                <ButtonBack>
                                    <img id="prev2" className="cursor-pointer ml-7 mr-10" src="https://cdn.tuk.dev/assets/templates/weCare/test-arrow-left.png" />
                                </ButtonBack>
                                <ButtonNext>
                                    <img id="next2" className="cursor-pointer" src="https://cdn.tuk.dev/assets/templates/weCare/test-arrow-right.png" />
                                </ButtonNext>
                            </div>
                        </CarouselProvider>
                    </div>
                </div>
            </div>
        </section>

        <style>
            {`.custom-gray-800 {
                color: #1b1b1b;
            }
            .bg-custom-gray-800 {
                background-color: #1b1b1b;
            }
            .custom-gray-900 {
                color: #212121;
            }
            .text-40px {
                font-size: 40px;
            }
            @media (min-width: 320px) and (max-width: 667px) {
                .text-80px {
                    font-size: 40px;
                    line-height: 40px;
                }
                .text-40px {
                    font-size: 30px;
                    line-height: 32px;
                }
            }
            .line {
                border-bottom: 1px solid #1b1b1b;
            }
            .bg-gold {
                background-color: #ffac2f;
            }`}
        </style>
    </div>
);
export default Index;
