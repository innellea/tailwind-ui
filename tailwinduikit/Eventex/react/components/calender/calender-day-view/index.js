import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="w-full overflow-x-scroll xl:overflow-x-hidden mt-6">
                <table className="min-w-full bg-white">
                    <thead className="items-center">
                        <tr className="h-20">
                            <th className="border-r-2 border-gray-200 px-10">
                                <p className="text-gray-800 font-light text-xs">12:00</p>
                            </th>
                            <th className="border-r-2 border-gray-200 px-10">
                                <p className="text-gray-800 font-light text-xs">13:00</p>
                            </th>
                            <th className="border-r-2 border-gray-200 px-10">
                                <p className="text-gray-800 font-light text-xs">14:00</p>
                            </th>
                            <th className="border-r-2 border-gray-200 px-10">
                                <p className="text-gray-800 font-light text-xs">15:00</p>
                            </th>
                            <th className="border-r-2 border-gray-200 px-10">
                                <p className="text-gray-800 font-light text-xs">16:00</p>
                            </th>
                            <th className="border-r-2 border-gray-200 px-10">
                                <p className="text-gray-800 font-light text-xs">17:00</p>
                            </th>
                            <th className="border-r-2 border-gray-200 px-10">
                                <p className="text-gray-800 font-light text-xs">18:00</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="relative">
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20"></td>
                            <td className="border-r-2 border-gray-200 h-20 relative">
                                <div className="w-4 h-2 flex justify-center bg-yellow-400 absolute inset-0 mx-auto -mt-3">
                                    <div className="vl border-l border-yellow-400 mt-2" />
                                </div>
                            </td>
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                        </tr>
                        <tr className="relative">
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 relative xl:static border-gray-200 h-20">
                                <div className="absolute border-t-2 border-indigo-500 -ml-0.5 bg-indigo-100">
                                    <div className="flex">
                                        <div className="flex-shrink-0 w-72 2xl:w-96 py-4 pl-3 h-24 ">
                                            <div className="text-indigo-700">
                                                <p className="text-sm leading-5 ">
                                                    Barcelona Design
                                                    <br />
                                                    Conference
                                                </p>
                                                <p className="mt-3 text-xs leading-3 ">2:00pm - 4:00pm</p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 w-11 xl:w-40  2xl:w-64 ml-2 xl:ml-3 2xl:ml-8"></div>
                                    </div>
                                </div>
                            </td>
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                        </tr>
                        <tr>
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 relative border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                        </tr>
                        <tr>
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                        </tr>
                        <tr>
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                        </tr>
                        <tr>
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                            <td className="border-r-2 border-gray-200 h-20" />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
