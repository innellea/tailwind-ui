import React from "react";
function IndexPage() {
    return (
        <>
            <div className="mx-auto container my-14 w-full">
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="px-4 xl:px-0 lg:w-8/12 ">
                        <h1 className="text-base lg:text-xl text-color-dark f-f-l">
                            <span className="font-bold">Knowledge Base &gt; How to get started with prodify &gt;</span> What are the general requirements to onboard
                        </h1>
                        <h1 className="text-2xl lg:text-5xl text-color f-f-l font-black pt-14 pb-8 ">What are the general requirements to onboard </h1>
                        <div className="sm:flex items-center">
                            <div>
                                <img className src="https://cdn.tuk.dev/assets/templates/prodify/AvtarKnowledgeBase(3).png" alt="profile" />
                            </div>
                            <h2 className="text-xl f-f-r text-color pb-4 sm:pb-0 sm:pl-4">Contributed by James Larson </h2>
                            <svg className="sm:mx-5 mb-4 sm:mb-0" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                <circle cx={6} cy={6} r={6} fill="#E2E8F0" />
                            </svg>
                            <h2 className="text-xl f-f-r text-color">Uploaded two days ago</h2>
                        </div>
                        <p className="f-f-r leading-10 text-xl text-color-dark py-16">Cards are box containers that hold pieces of information. Recently this simple UI component became an essential part of the web and mobile design — every second app or website available on the market today uses cards. Cards make both content and features more discoverable, and they look good on any screen size — from the large TV screen to the small screen of a mobile device.</p>
                        <div className="pb-20">
                            <img src="https://cdn.tuk.dev/assets/templates/prodify/Article.png" alt="coding" />
                            <p className="text-sm text-center text-gray-400 pt-4 f-f-l cursor-pointer">Source: www.pexels.com</p>
                        </div>
                        <div className="lg:w-10/12">
                            <h3 className="text-2xl f-f-l font-black pb-8">UI cards, the best thing ever?</h3>
                            <h4 className="text-xl f-f-l font-bold pb-5">Use simple typography</h4>
                            <p className="text-xl f-f-r leading-7 pb-4 pl-4">
                                <span className="italic">Efficient.</span> Avoid overloading cards with extraneous information or actions. Each card should contain only essential information and actions.
                            </p>
                            <p className="text-xl f-f-r leading-7 pb-4 pl-4">
                                <span className="italic">Efficient.</span> Avoid overloading cards with extraneous information or actions. Each card should contain only essential information and actions.
                            </p>
                            <p className="text-xl f-f-r leading-7 pb-4 pl-4">
                                <span className="italic">Efficient.</span> Avoid overloading cards with extraneous information or actions. Each card should contain only essential information and actions.
                            </p>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-10 pb-20 gap-8">
                                <div>
                                    <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/Article(1).png" alt />
                                    <p className="text-sm text-center text-gray-400 pt-4 f-f-l cursor-pointer">Source: www.pexels.com</p>
                                </div>
                                <div>
                                    <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/Article(2).png" alt />
                                    <p className="text-sm text-center text-gray-400 pt-4 f-f-l cursor-pointer">Source: www.pexels.com</p>
                                </div>
                            </div>
                            <p className="f-f-r leading-10 text-xl text-color pb-12">Cards are box containers that hold pieces of information. Recently this simple UI component became an essential part of the web and mobile design — every second app or website available on the market today uses cards. Cards make both content and features more discoverable, and they look good on any screen size — from the large TV screen to the small screen of a mobile device.</p>
                            <div className="px-6 lg:px-12 py-6 lg:py-12 bg-linear-about-us rounded-3xl">
                                <h1 className="text-2xl lg:text-4xl text-white font-bold f-f-l pb-12">Not what you were looking for?</h1>
                                <h2 className="text-xl font-semibold f-f-r cursor-pointer text-white pb-7 underline">1. How to setup your workspace in less than 10 minutes</h2>
                                <h2 className="text-xl font-semibold f-f-r cursor-pointer text-white pb-7 underline">2. Bringing your team upto speed with real-time collaboration</h2>
                                <h2 className="text-xl font-semibold f-f-r cursor-pointer text-white pb-7 underline">2. Bringing your team upto speed with real-time collaboration</h2>
                                <h2 className="text-xl font-semibold f-f-r cursor-pointer text-white  underline">1. How to setup your workspace in less than 10 minutes</h2>
                            </div>
                        </div>
                    </div>
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
