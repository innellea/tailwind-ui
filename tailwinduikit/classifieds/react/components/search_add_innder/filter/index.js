import React from "react";
import Cards from "components/search_result_components/cards/index";
export default function IndexPage() {
    return (
        <>
            <div className="lg:w-1/3">
                <h4 className="text-xl font-semibold dark-gray pt-1.5">‘OnePlus 5T’ in Mobile phones</h4>
                <div className="bg-light-gray mt-6 p-5">
                    <h4 className="text-xl font-semibold dark-gray pt-1.5">Jump to</h4>
                    <div>
                        <ul className="cursor-pointer dark-gray">
                            <li className="mt-5 mb-4 text-base dark-blue font-semibold">
                                <a> Product description</a>
                            </li>
                            <li className="mb-4 text-base">
                                <a>Seller information</a>
                            </li>
                            <li className="mb-4 text-base">
                                <a>Additional details</a>
                            </li>
                            <li className="mb-6 text-base">
                                <a> Sellers comments</a>
                            </li>
                            <li className="mb-6 text-base">
                                <a> Similar ads</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
