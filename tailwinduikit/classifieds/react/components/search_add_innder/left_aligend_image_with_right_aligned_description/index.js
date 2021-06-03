import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
export default function IndexPage() {
    return (
        <>
            <div className="max-w-6xl border">
                <div className="lg:p-6">
                    <div className="lg:flex">
                        <div className="lg:w-2/4">
                            {/* s;ider */}
                            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} isIntrinsicHeight={true}>
                                <Slider>
                                    <Slide index={0}>
                                        <img src="https://cdn.tuk.dev/assets/templates/classified/Mask.png" className="w-full absolute h-full" />
                                    </Slide>
                                    <Slide index={1}>
                                        <img src="https://cdn.tuk.dev/assets/templates/classified/Mask.png" className="w-full absolute h-full" />
                                    </Slide>
                                </Slider>
                                <div className="relative w-full h-64">
                                    <div className="flex items-center inset-0 absolute justify-between px-2">
                                        <ButtonBack>
                                            <div className="w-6 h-6 relative bg-white rounded-full flex inset-0 items-center justify-center cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <polyline points="15 6 9 12 15 18" />
                                                </svg>
                                            </div>
                                        </ButtonBack>
                                        <ButtonNext>
                                            {" "}
                                            <div className="w-6 h-6 relative bg-white rounded-full flex inset-0 items-center justify-center cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <polyline points="9 6 15 12 9 18" />
                                                </svg>
                                            </div>
                                        </ButtonNext>
                                    </div>
                                </div>
                            </CarouselProvider>

                            {/* slider */}
                            <div className="flex items-center justify-between h-16 relative bg-dark-gray">
                                <div className="flex items-center justiy-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                </div>
                                <div className="flex">
                                    <img src="https://cdn.tuk.dev/assets/templates/classified/Rectangle.png" className="mr-1" />
                                    <img src="https://cdn.tuk.dev/assets/templates/classified/Rectangle-Copy-4.png" className="mr-1" />
                                    <img src="https://cdn.tuk.dev/assets/templates/classified/Rectangle-Copy-5.png" className="mr-1" />
                                    <img src="https://cdn.tuk.dev/assets/templates/classified/Rectangle-Copy-6.png" className="mr-1" />
                                    <img src="https://cdn.tuk.dev/assets/templates/classified/Rectangle-Copy-7.png" />
                                </div>
                                <div className="flex items-center justiy-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="9 6 15 12 9 18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="pl-6 pr-8">
                            <h1 className="text-2xl font-semibold dark-gray lg:mt-0 mt-4">Iphone 11 Pro</h1>
                            <p className="text-xs leading-snug light-gray py-3">
                                Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas.
                                <br />
                                <br />
                                Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas.
                            </p>
                            <div className="flex mt-4">
                                <div>
                                    <p className="text-xs light-gray px-2 bg-dark-gray py-1">12 months warranty</p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div>
                                    <p className="text-xs light-gray px-2 bg-dark-gray py-1">12 months warranty</p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-xs light-gray px-2 bg-dark-gray py-1">Complete box</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-4 mt-8">
                                <h2 className="purple text-sm font-semibold">Bay Area, San Francisco</h2>
                                <h3 className="purple text-3xl font-semibold">$350</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
