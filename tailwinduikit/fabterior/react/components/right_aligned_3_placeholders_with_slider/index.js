import Layout from "@components/layout";
import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
export default function IndexPage() {
    return (
        <>
            <div>
                {/* slider starts here     */}
                {/* Fixes    */}
                {/* Destop Slider */}
                <div className="mx-auto container  px-4 lg:px-0 lg:mt-60 mt-10 lg:block hidden">
                    <div className="lg:pt-20 relative">
                        <div className="lg:block hidden flex absolute right-0 -mt-32 z-0">
                            <div className="custom-design background-color" />
                        </div>
                        <div className="flex justify-between">
                            <div className="f-f-d-s w-1/2 text-2xl lg:text-5xl uppercase hidden lg:block leading-normal font-bold tracking-wide text-color-heading">
                                Trending <br />
                                Products
                            </div>

                            <div className=" flex items-center justify-end w-1/2">
                                <div className="f-f-d-s text-2xl lg:text-5xl uppercase block lg:hidden leading-normal font-bold tracking-wide text-color-heading">Trending Products</div>
                                <CarouselProvider naturalSlideWidth={0} naturalSlideHeight={125} totalSlides={2} infinite={true} isIntrinsicHeight={true}>
                                    <div className="absolute left-0 mt-48">
                                        <ButtonBack>
                                            <div className="py-5  px-6 border border-black-color mr-8 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} viewBox="0 0 16 10" fill="none">
                                                    <path d="M15 5H0.999998" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M5 8.96387L1 4.96387" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M5 0.963867L1 4.96387" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </ButtonBack>
                                        <ButtonNext>
                                            <div className="py-5 px-6 border border-black-color focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} viewBox="0 0 16 10" fill="none">
                                                    <path d="M1 4.96387H15" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11 8.96387L15 4.96387" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11 0.963867L15 4.96387" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </ButtonNext>
                                    </div>
                                    <Slider>
                                        <div className="  ">
                                            <Slide index={0}>
                                                {" "}
                                                <div className="flex items-center  justify-end ">
                                                    <div className="lg:ml-12 z-20 lg:w-64 w-full">
                                                        <div>
                                                            <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(1).png" alt className="w-full" />
                                                        </div>
                                                        <div className="text-color-heading text-4xl font-medium f-f-l text-center py-4">Study lamp</div>
                                                        <div className="text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                    </div>
                                                    <div className="ml-12 z-20 lg:w-64 w-full">
                                                        <div>
                                                            <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(2).png" alt className="w-full" />
                                                        </div>
                                                        <div className="text-color-heading text-4xl font-medium f-f-l text-center py-4">Study lamp</div>
                                                        <div className="text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                    </div>
                                                    <div className="ml-12 z-20 lg:w-64 w-full">
                                                        <div>
                                                            <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(3).png" alt className="w-full" />
                                                        </div>
                                                        <div className="text-color-heading text-4xl font-medium f-f-l text-center py-4">Study lamp</div>
                                                        <div className="text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                    </div>
                                                </div>
                                            </Slide>
                                            <Slide index={1}>
                                                {" "}
                                                <div className="flex items-center justify-end ">
                                                    <div className="lg:ml-12 z-20 lg:w-64 w-full">
                                                        <div>
                                                            <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(1).png" alt className="w-full" />
                                                        </div>
                                                        <div className="text-color-heading text-4xl font-medium f-f-l text-center py-4">Study lamp</div>
                                                        <div className="text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                    </div>
                                                    <div className="ml-12 z-20 lg:w-64 w-full">
                                                        <div>
                                                            <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(2).png" alt className="w-full" />
                                                        </div>
                                                        <div className="text-color-heading text-4xl font-medium f-f-l text-center py-4">Study lamp</div>
                                                        <div className="text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                    </div>
                                                    <div className="ml-12 z-20 lg:w-64 w-full">
                                                        <div>
                                                            <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(3).png" alt className="w-full" />
                                                        </div>
                                                        <div className="text-color-heading text-4xl font-medium f-f-l text-center py-4">Study lamp</div>
                                                        <div className="text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                    </div>
                                                </div>
                                            </Slide>
                                        </div>
                                    </Slider>
                                </CarouselProvider>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Desktop Slider */}
                {/* Mobile responsive */}
                <div className="mx-auto container relative px-4 lg:px-0 lg:mt-60 mt-10 block lg:hidden">
                    <div className="lg:pt-20">
                        <div className="flex lg:flex-row flex-col-reverse items-center justify-between">
                            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} infinite={true} isIntrinsicHeight={true}>
                                <div className="flex flex-col z-20">
                                    <div className="f-f-d-s text-2xl lg:text-5xl uppercase hidden lg:block leading-normal font-bold tracking-wide text-color-heading">
                                        Trending <br />
                                        Products
                                    </div>
                                </div>
                                <div className="">
                                    <div className="f-f-d-s text-2xl lg:text-5xl uppercase block lg:hidden leading-normal font-bold tracking-wide text-color-heading">Trending Products</div>
                                    <Slider>
                                        <div className="mt-20 w-full">
                                            <Slide index={0}>
                                                <div className="w-full md:w-96">
                                                    <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(1).png" alt className="w-full" />
                                                    <div className="text-color-heading lg:text-2xl text-base font-bold f-f-l flex justify-center py-4">Study lamp</div>
                                                    <div className="lg:text-sm text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                </div>
                                            </Slide>
                                            <Slide index={1}>
                                                <div className="w-full md:w-96">
                                                    <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(2).png" alt className="w-full" />
                                                    <div className="text-color-heading lg:text-2xl text-base font-bold f-f-l flex justify-center py-4">Study lamp</div>
                                                    <div className="lg:text-sm text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                </div>
                                            </Slide>
                                            <Slide index={2}>
                                                <div className="w-full md:w-96">
                                                    <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section3(3).png" alt className="w-full" />
                                                    <div className="text-color-heading lg:text-2xl text-base font-bold f-f-l flex justify-center py-4">Study lamp</div>
                                                    <div className="lg:text-sm text-base f-f-l flex text-4xl justify-center text-color-para">$ 45</div>
                                                </div>
                                            </Slide>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="flex mt-16 justify-center w-full">
                                    <ButtonBack>
                                        <div className="py-5  px-6 border border-black-color mr-8 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} viewBox="0 0 16 10" fill="none">
                                                <path d="M15 5H0.999998" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5 8.96387L1 4.96387" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5 0.963867L1 4.96387" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </ButtonBack>
                                    <ButtonNext>
                                        <div className="py-5 px-6 border border-black-color focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} viewBox="0 0 16 10" fill="none">
                                                <path d="M1 4.96387H15" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11 8.96387L15 4.96387" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11 0.963867L15 4.96387" stroke="#334048" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </ButtonNext>
                                </div>
                            </CarouselProvider>
                        </div>
                    </div>
                </div>
                {/* Mobile responsive */}
                {/* slider ends here */}
            </div>

            <style>
                {`.f-f-l {
    font-family: "Roboto", sans-serif;
}
.f-f-d-s {
    font-family: "DM Serif Display", serif;
}
.font-lato {
    font-family: "Lato", sans-serif;
}
.text-color-para {
                color: #636363;
            }
            .text-color-heading {
                color: #334048;
            }

            .background-color {
                background: #334048;
            }
            .custom-design {
                width: 30.313rem;
                height: 250px;
            }
            .background-color {
                background: #334048;
            }
           `}
            </style>
        </>
    );
}
