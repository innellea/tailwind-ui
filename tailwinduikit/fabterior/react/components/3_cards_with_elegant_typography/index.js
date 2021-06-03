import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="mx-auto container pb-16 lg:px-0 px-4">
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-2xl lg:text-6xl uppercase leading-normal font-bold tracking-wide text-color-heading text-center">What Happens here?</h1>
                    <p className="lg:text-2xl text-xl font-normal tracking-tight leading-9 py-3 lg:w-1/2 text-color-para text-center">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem.</p>
                </div>
                <div className="flex lg:flex-row flex-col items-center flex-wrap lg:justify-between items-center lg:mt-20">
                    <div className="md:p-8 p-4 lg:w-3/12 w-full hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
                        <h3 className="md:text-5xl text-3xl leading-3rem">Sleak</h3>
                        <p className="md:text-2xl text-base leading-9 text-color-para pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat.</p>
                    </div>
                    <div className="md:p-8 p-4 lg:w-3/12 w-full hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
                        <h3 className="md:text-5xl text-3xl leading-3rem">Modern</h3>
                        <p className="md:text-2xl text-base leading-9 text-color-para pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat.</p>
                    </div>
                    <div className="md:p-8 p-4 lg:w-3/12 w-full hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
                        <h3 className="md:text-5xl text-3xl leading-3rem">Elegant</h3>
                        <p className="md:text-2xl text-base leading-9 text-color-para pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat.</p>
                    </div>
                </div>
            </div>

            <style>
                {` .text-color-para {
                color: #636363;
            }
            .text-color-heading {
                color: #334048;
            }
            .f-f-l {
                font-family: "Roboto", sans-serif;
            }
            .f-f-d-s {
                font-family: "DM Serif Display", serif;
            }
            .font-lato {
                font-family: "Lato", sans-serif;
            }`}
            </style>
        </>
    );
}
