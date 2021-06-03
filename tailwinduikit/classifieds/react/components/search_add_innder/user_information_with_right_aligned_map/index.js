import React from "react";
import Cards from "components/search_result_components/cards/index";
export default function IndexPage() {
    return (
        <>
            <div>
                <div className="my-4 w-full bg-light-gray">
                    <div className="lg:flex justify-between">
                        <div className="pl-5 py-5">
                            <h1 className="text-xl font-semibold dark-gray">Seller information</h1>
                            <div className="flex items-center py-5">
                                <img src="https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=127&q=80" className="w-12 h-12 rounded-full" />
                                <div className="ml-4">
                                    <h3 className="text-sm dark-gray">Thomas Geller</h3>
                                    <p className="text-xs light-gray">Joined on 12 September 2020</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center lg:mt-0 mt-4">
                                <a href="/chats">
                                    {" "}
                                    <button className="py-2 px-6 bg-light-blue text-white text-sm mr-4 focus:outline-none hover:opacity-75">Chat With Thomas</button>
                                </a>
                                <a href="/chats">
                                    {" "}
                                    <button className="py-2 px-6 bg-transparent border border-light-blue light-blue text-sm hover:opacity-75 focus:outline-none">Call Thomas</button>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-60 lg:mt-0 mt-4">
                            <img src="https://cdn.tuk.dev/assets/templates/classified/map.png" className="h-full w-full" />
                        </div>
                    </div>
                </div>
                <div className="my-4 w-full border-inner border p-5">
                    <h1 className="text-xl font-semibold dark-gray">Additional details</h1>
                    <div className="lg:flex justify-between items-center mt-5">
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm light-gray">
                                    <h4 className="light-gray mr-2">Brand:</h4>
                                    <h4>Iphone</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm light-gray my-4">
                                        <h4 className="light-gray mr-2">Color:</h4>
                                        <h4>Black</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm light-gray">
                                    <h4 className="light-gray mr-2">Condition:</h4>
                                    <h4>Mint Condition</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm light-gray my-4">
                                        <h4 className="light-gray mr-2">Additional Items:</h4>
                                        <h4>Phone Cover and Pouch</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm light-gray">
                                    <h4 className="light-gray mr-2">Owner:</h4>
                                    <h4>First owner</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm light-gray my-4">
                                        <h4 className="light-gray mr-2">Used For:</h4>
                                        <h4>8 months</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 w-full border-inner border p-5">
                    <h1 className="text-xl font-semibold dark-gray">Sellers Comments</h1>
                    <p className="text-xs line-height-18 light-gray py-3 lg:pr-32">
                        Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas.
                        <br />
                        <br />
                        Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas.
                    </p>
                </div>
            </div>
        </>
    );
}
