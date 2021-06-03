import React from "react";
function IndexPage() {
    return (
        <>
            <div className="mx-auto container py-20 lg:pt-44 lg:pb-52">
                <div className="px-4 xl:px-0">
                    <div className="xl:flex items-center justify-between w-full text-color">
                        <div className="flex flex-col items-center xl:block py-4 xl:py-0">
                            <h1 className="text-6xl font-black f-f-l ">40k +</h1>
                            <h2 className="f-f-r text-color-lighter text-3xl pt-5">Downloads</h2>
                        </div>
                        <div className="flex flex-col items-center xl:block py-4 xl:py-0">
                            <h1 className="text-6xl font-black f-f-l">200K</h1>
                            <h2 className="f-f-r text-color-lighter text-3xl pt-5">Users/Teams</h2>
                        </div>
                        <div className="flex flex-col items-center xl:block py-4 xl:py-0">
                            <h1 className="text-6xl font-black f-f-l">958</h1>
                            <h2 className="f-f-r text-color-lighter text-3xl pt-5">Products Developed</h2>
                        </div>
                        <div className="flex flex-col items-center xl:block py-4 xl:py-0">
                            <h1 className="text-6xl font-black f-f-l">10</h1>
                            <h2 className="f-f-r text-color-lighter text-3xl pt-5">Awards Bagged</h2>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
        .text-color-lighter {
    color: #4A5568;
}`}
            </style>
        </>
    );
}

export default IndexPage;
