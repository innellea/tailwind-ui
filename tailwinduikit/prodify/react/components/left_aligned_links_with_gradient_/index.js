import React from "react";
function IndexPage() {
    return (
        <>
            <div className="mx-auto container">
                <div className="px-6 lg:px-12 py-6 lg:py-12 bg-linear-about-us rounded-3xl w-1/2">
                    <h1 className="text-2xl lg:text-4xl text-white font-bold f-f-l pb-12">Not what you were looking for?</h1>
                    <h2 className="text-xl font-semibold f-f-r cursor-pointer text-white pb-7 underline">1. How to setup your workspace in less than 10 minutes</h2>
                    <h2 className="text-xl font-semibold f-f-r cursor-pointer text-white pb-7 underline">2. Bringing your team upto speed with real-time collaboration</h2>
                    <h2 className="text-xl font-semibold f-f-r cursor-pointer text-white pb-7 underline">2. Bringing your team upto speed with real-time collaboration</h2>
                    <h2 className="text-xl font-semibold f-f-r cursor-pointer text-white  underline">1. How to setup your workspace in less than 10 minutes</h2>
                </div>
            </div>

            <style>
                {`
        .bg-linear-about-us {
    background: linear-gradient(180deg, #ff8584 0%, #ecaa7b 100%);
}`}
            </style>
        </>
    );
}

export default IndexPage;
