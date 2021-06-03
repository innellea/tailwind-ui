import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="mx-auto container lg:mt-60 mt-10 px-4 lg:px-0">
                <div className="lg:flex justify-center">
                    <div className="lg:w-1/3">
                        <div className="border-2 border-black px-4 py-10 lg:px-10 bottom-0 my-8 block lg:hidden">
                            <div className="flex flex-col">
                                <div className="lg:text-4xl text-2xl text-color-heading leading-9 font-bold f-f-d-s pb-6 text-left">About Us</div>
                                <div className="lg:text-2xl text-base tracking-tight f-f-l text-color-para leading-8">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem.</div>
                                <button className="text-2xl leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-8">Know More</button>
                            </div>
                        </div>
                        <div className="w-full">
                            <img className="h-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(1).png" alt />
                        </div>
                        <div className="custom-width_about_us border-2 border-black px-4 py-10 lg:px-10 bottom-0 mt-8 hidden lg:block">
                            <div className="flex flex-col">
                                <div className="text-4xl custom-gray-800 leading-9 f-f-d-s pb-6 text-left">About Us</div>
                                <div className="text-2xl tracking-tight f-f-l text-color-para leading-8">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem.</div>
                                <button className="text-2xl leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-8">Know More</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="h-96 lg:mt-0 mt-8">
                            <img className="w-full h-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(2).png" alt />
                        </div>
                        <div className="h-1/3 w-full mt-8">
                            <img className="lg: lg:w-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(3).png" alt />
                        </div>
                    </div>
                </div>
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
            .Text_para {
                color: #636363;
            }
            .custom-width_about_us {
                width: 440px;
            }`}
            </style>
        </>
    );
}
