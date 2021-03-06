import React from "react";
function IndexPage() {
    return (
        <>
            <div className="mx-auto container mt-40">
                <div className="w-full flex justify-center">
                    <div className="w-10/12 bg-linear-member px-12 py-16 rounded-md">
                        <div>
                            <div className="flex flex-wrap">
                                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 f-f-l  f-f-l">
                                    <h1 className="text-2xl lg:text-5xl lg:w-9/12 text-white font-black leading-tight">Become a member and start building the next big thing</h1>
                                    <button className="mt-5 lg:mt-12 py-4 px-4 lg:px-6 bg-white  font-bold text-color-pink rounded-lg text-lg lg:text-xl hover:bg-gray-100 ease-in-out">Join the community</button>
                                </div>
                                <div className="md:w-1/3 w-full">
                                    <div className="flex  flex-col items-center justify-center">
                                        <div className="flex items-center  mt-8">
                                            <div className="w-20 h-20 rounded-full mr-3">
                                                <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt />
                                            </div>
                                            <div className="w-20 h-20 rounded-full">
                                                <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png" alt />
                                            </div>
                                        </div>
                                        <div className="flex items-center  mt-4">
                                            <div className="w-20 h-20 rounded-full mr-3">
                                                <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt />
                                            </div>
                                            <div className="w-20 h-20 rounded-full mr-3">
                                                <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png" alt />
                                            </div>
                                            <div className="w-20 h-20 rounded-full">
                                                <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png" alt />
                                            </div>
                                        </div>
                                        <div className="flex items-center  mt-4">
                                            <div className="w-20 h-20 rounded-full mr-3">
                                                <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png" alt />
                                            </div>
                                            <div className="w-20 h-20 rounded-full">
                                                <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
        .bg-linear-member {
            background: linear-gradient(90deg, #FF8584 0%, #DEF2BC 100%);
        }`}
            </style>
        </>
    );
}

export default IndexPage;
