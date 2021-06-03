import React from "react";
function IndexPage() {
    return (
        <>
            <div className="mx-auto container w-full flex justify-center items-center flex-col">
                <div className="flex flex-col w-full mx-auto container items-center justify-center pt-10 lg:pt-28 f-f-l">
                    <h1 className="text-2xl md:text-5xl xl:text-8xl text-center font-black text-color-gradient md:leading-tight xl:leading-snug">
                        Our Vision is to enable you <br /> to build the next big thing
                    </h1>
                    <h2 className="pt-4 lg:pt-16 w-9/12 f-f-r text-color text-xl lg:text-lg lg:text-3xl text-center lg:leading-10 ">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all</h2>
                    <h2 className="w-8/12 f-f-r text-color text-xl lg:text-3xl text-center lg:leading-10">approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
