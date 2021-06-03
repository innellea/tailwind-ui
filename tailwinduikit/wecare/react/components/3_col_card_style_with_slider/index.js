import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
const Index = () => {
    return (
        <div>
            <section>
                <div className="lg:hidden px-6 xl:px-0">
                    <div className="container mx-auto pt-16 lg:pt-40">
                        <div className="flex flex-col lg:items-center justify-center w-full py-10">
                            <h1 className="font-semibold custom-gray-800 text-40px">Health Tips and Tricks</h1>
                            <p className="mt-2.5 text-2xl">A Collection of guides, tips, suggestions and tricks to improve your Health</p>
                        </div>
                        <div className="relative">
                            <div className="w-full flex flex-col items-end justify-center pb-12">
                                <p className="text-lg clr-gold">
                                    <span id="current">01</span>
                                    <span className="custom-gray-800">/3</span>
                                </p>
                            </div>
                            <div>
                                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} isIntrinsicHeight={true}>
                                    <Slider>
                                        <Slide index={0}>
                                            <div className="">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue text-center px-6">Qualitative research in nursing and healthcare</h2>
                                                    <div className="w-8/12 flex mt-3 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">05 min read</p>
                                                        <p className="cursor-pointer">Healthcare</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Journal of the healthcare management</h2>
                                                    <div className="w-8/12 flex mt-3 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">03 min read</p>
                                                        <p className="cursor-pointer">Management</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Solving covid pandemic’s health crisis</h2>
                                                    <div className="w-8/12 flex mt-3 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">02 min read</p>
                                                        <p className="cursor-pointer">Corona Virus</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </Slider>
                                    <div className="my-4 flex items-center absolute top-0 right-0 pt-4">
                                        <ButtonBack>
                                            <div id="prev" className="cursor-pointer mr-4 border border-gray-300 p-2 flex items-center justify-center rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={5} y1={12} x2={9} y2={16} />
                                                    <line x1={5} y1={12} x2={9} y2={8} />
                                                </svg>
                                            </div>
                                        </ButtonBack>
                                        <ButtonNext>
                                            <div id="next" className="cursor-pointer border p-2 flex border-gold clr-gold items-center justify-center rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </ButtonNext>
                                    </div>
                                </CarouselProvider>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 w-full flex items-center justify-center">
                        <button className="text-white lg:text-2xl font-semibold bg-gold px-6 lg:px-12 py-3 lg:py-6 rounded">Read More</button>
                    </div>
                </div>
                <div className="hidden lg:block px-6 xl:px-0">
                    <div className="container mx-auto pt-16 lg:pt-40">
                        <div className="flex flex-col items-center justify-center w-full py-10">
                            <h1 className="font-semibold custom-gray-800 text-40px">Health Tips and Tricks</h1>
                            <p className="mt-2.5 lg:w-2/5 text-center text-2xl">A Collection of guides, tips, suggestions and tricks to improve your Health</p>
                        </div>
                        <div className="relative">
                            <div className="w-full flex flex-col items-end justify-end pr-24 pb-16">
                                <p className="text-lg clr-gold">
                                    <span id="current3">01</span>
                                    <span className="custom-gray-800">/03</span>
                                </p>
                            </div>
                            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} isIntrinsicHeight={true}>
                                <Slider>
                                    <Slide index={0}>
                                        <div className="flex justify-between -mx-5">
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">05 min read</p>
                                                        <p className="cursor-pointer">Healthcare</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Journal of the healthcare management</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">03 min read</p>
                                                        <p className="cursor-pointer">Management</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">02 min read</p>
                                                        <p className="cursor-pointer">Corona Virus</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex justify-between -mx-5">
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">05 min read</p>
                                                        <p className="cursor-pointer">Healthcare</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Journal of the healthcare management</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">03 min read</p>
                                                        <p className="cursor-pointer">Management</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">02 min read</p>
                                                        <p className="cursor-pointer">Corona Virus</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex justify-between -mx-5">
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">05 min read</p>
                                                        <p className="cursor-pointer">Healthcare</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Journal of the healthcare management</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">03 min read</p>
                                                        <p className="cursor-pointer">Management</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/3 px-5">
                                                <div className="bg-white w-full flex justify-center items-center flex-col border-gray rounded-md pb-5">
                                                    <div className="w-full h-64 relative">
                                                        <img className="h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                                    </div>
                                                    <h2 className="text-2xl mt-4 font-semibold mb-6 clr-dark-blue w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base custom-gray-800">
                                                        <p className="cursor-pointer">02 min read</p>
                                                        <p className="cursor-pointer">Corona Virus</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </Slider>
                                <div className="my-4 flex items-center absolute top-0 right-0 pt-4 pr-24">
                                    <ButtonBack>
                                        <div id="prev" className="cursor-pointer mr-4 border border-gray-300 p-2 flex items-center justify-center rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                <line x1={5} y1={12} x2={9} y2={16} />
                                                <line x1={5} y1={12} x2={9} y2={8} />
                                            </svg>
                                        </div>
                                    </ButtonBack>
                                    <ButtonNext>
                                        <div id="next" className="cursor-pointer border p-2 flex border-gold clr-gold items-center justify-center rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                <line x1={15} y1={16} x2={19} y2={12} />
                                                <line x1={15} y1={8} x2={19} y2={12} />
                                            </svg>
                                        </div>
                                    </ButtonNext>
                                </div>
                            </CarouselProvider>
                        </div>
                    </div>
                    <div className="mt-24 w-full flex items-center justify-center">
                        <button className="text-white lg:text-2xl font-semibold bg-gold px-6 lg:px-12 py-3 lg:py-6 rounded">Read More</button>
                    </div>
                </div>
            </section>

            <style>
                {`
            .text-40px {
                font-size: 40px;
            }
            .clr-gold {
                color: #ffac2f;
            }
            .bg-gold {
                background-color: #ffac2f;
            }
            .clr-dark-blue {
                color: #0036b4;
            }
            .border-gray {
                border: 1px solid #ebebeb;
            }
            .custom-gray-800 {
                color: #1b1b1b;
            }
            .bg-custom-gray-800 {
                background-color: #1b1b1b;
            }
            .custom-gray-900 {
                color: #212121;
            }
            .text-80px {
                font-size: 80px;
                line-height: 80px;
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
            }`}
            </style>
        </div>
    );
};
export default Index;
