import React from "react";
function IndexPage() {
    return (
        <>
            <div className="mx-auto container px-4 xl:px-0 py-10 xl:py-40">
                <div className>
                    <div className="flex flex-wrap items-center">
                        <div className="lg:w-2/5 w-full ">
                            <img className="w-full" src="https://cdn.tuk.dev/assets/templates/prodify/solution.png" alt srcSet />
                        </div>
                        <div className="lg:w-3/5 w-full">
                            <div className="lg:pl-8 py-2 text-color">
                                <h1 className="text-3xl xl:text-6xl leading-snug f-f-l font-black">Gather data to offer a bespoke solution</h1>
                                <h2 className="text-xl lg:text-3xl leading-7 lg:leading-10 f-f-r py-4 lg:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center rounded-full w-16 h-16">
                                        <img src="https://cdn.tuk.dev/assets/templates/prodify/profile.png" alt />
                                    </div>
                                    <div className="pl-3">
                                        <h3 className="f-f-l text-xl lg:text-3xl">Rachel Dawson</h3>
                                        <h4 className="f-f-r text-lg pt-2">CEO, Globex Workspaces</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
