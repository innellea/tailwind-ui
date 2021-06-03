import React from "react";
export default function CalenderMonthViewPage() {
    return (
        <>
            <div className="w-full overflow-x-scroll xl:overflow-x-hidden mt-2">
                <table className="w-full bg-white">
                    <thead className="items-center">
                        <tr className="h-14">
                            <th className="pr-6 sm:pr-0">
                                <p className="text-xs tracking-widest text-left text-gray-800 uppercase cursor-pointer">Monday</p>
                            </th>
                            <th className="pr-6 sm:pr-0">
                                <p className="text-xs tracking-widest text-left text-gray-800 uppercase cursor-pointer">Tuesday</p>
                            </th>
                            <th className="pr-6 sm:pr-0">
                                <p className="text-xs tracking-widest text-left text-gray-800 uppercase cursor-pointer">Wednesday</p>
                            </th>
                            <th className="pr-6 sm:pr-0">
                                <p className="text-xs tracking-widest text-left text-gray-800 uppercase cursor-pointer">Thursday</p>
                            </th>
                            <th className="pr-6 sm:pr-0">
                                <p className="text-xs tracking-widest text-left text-gray-800 uppercase cursor-pointer">Friday</p>
                            </th>
                            <th className="pr-6 sm:pr-0">
                                <p className="text-xs tracking-widest text-left text-gray-800 uppercase cursor-pointer">Saturday</p>
                            </th>
                            <th className="pr-6 sm:pr-0">
                                <p className="text-xs tracking-widest text-left text-gray-800 uppercase cursor-pointer">Sunday</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className>
                        <tr className="border-b border-gray-300">
                            <td className="border-r border-gray-300 ">
                                <p className="text-xs text-gray-400 pt-2 pl-2 pb-16">27</p>
                            </td>
                            <td className="border-r border-gray-300 ">
                                <p className="text-xs text-gray-400 pt-2 pl-2 pb-16">28</p>
                            </td>
                            <td className="border-r border-gray-300 ">
                                <p className="text-xs text-gray-400 pt-2 pl-2 pb-16">29</p>
                            </td>
                            <td className="border-r border-gray-300 ">
                                <p className="text-xs text-gray-400 pt-2 pl-2 pb-16">30</p>
                            </td>
                            <td className="border-r border-gray-300 ">
                                <p className="text-xs text-gray-400 pt-2 pl-2 pb-16">31</p>
                            </td>
                            <td className="border-r border-gray-300   bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">1</p>
                            </td>
                            <td className="border-r border-gray-300   bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">2</p>
                            </td>
                        </tr>
                        <tr className="border-b relative w-full border-gray-300">
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">3</p>
                            </td>
                            <td className="border-r relative bg-pink-100  border-gray-300">
                                <div className="pl-2">
                                    <p className="text-xs text-gray-800 pt-2">4</p>
                                    <p className="text-xs pl-2 leading-3 text-pink-500 pt-10 pb-2 ">Vacation</p>
                                </div>
                            </td>
                            <td className="border-r border-gray-300 bg-pink-100 ">
                                <div className="pl-2">
                                    <p className="text-xs text-gray-800 pt-2">5</p>
                                    <p className="text-xs pl-2 leading-3 text-pink-500 pt-10 pb-2 ">Vacation</p>
                                </div>
                            </td>
                            <td className="border-r relative bg-blue-200  border-gray-300">
                                <div className="pl-2">
                                    <p className="text-xs text-gray-800 pt-2 pb-4">6</p>
                                    <div className="flex pl-2 flex-col  items-start pb-2 justify-end ">
                                        <p className="text-xs text-gray-800">13:00 - 14:40</p>
                                        <p className="text-xs leading-6 text-blue-500">Doctor’s</p>
                                    </div>
                                </div>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">7</p>
                            </td>
                            <td className="border-r border-gray-300  bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">8</p>
                            </td>
                            <td className="border-r border-gray-300  bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">9</p>
                            </td>
                        </tr>
                        <tr className="border-b relative border-gray-300">
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">10</p>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">11</p>
                            </td>
                            <td className="border-r relative xl:static border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">12</p>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">13</p>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">14</p>
                            </td>
                            <td className="border-r border-gray-300  bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">15</p>
                            </td>
                            <td className="border-r border-gray-300  bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">16</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">17</p>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">18</p>
                            </td>
                            <td className="border-r border-gray-300 bg-green-200 ">
                                <div className="pl-2">
                                    <p className="text-xs text-gray-800 pt-2  pb-2">19</p>
                                    <div className="inline-flex flex-col pb-4">
                                        <p className="text-xs leading-3 text-gray-800">12 Sept – 15 Sept</p>
                                        <p className="text-xs leading-6 text-green-600">Tokyo - Business Trip</p>
                                    </div>
                                </div>
                            </td>
                            <td className="border-r border-gray-300 bg-green-200 ">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">20</p>
                            </td>
                            <td className="border-r border-gray-300 bg-green-200 ">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">21</p>
                            </td>
                            <td className="border-r border-gray-300  bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">22</p>
                            </td>
                            <td className="border-r border-gray-300  bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">23</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">24</p>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">25</p>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">26</p>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">27</p>
                            </td>
                            <td className="border-r border-gray-300">
                                <p className="text-xs text-gray-800 pt-2 pl-2 pb-16">28</p>
                            </td>
                            <td className="border-r border-gray-300  bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">29</p>
                            </td>
                            <td className="border-r border-gray-300  bg-gray-100 ">
                                <p className="text-xs text-gray-600 pt-2 pl-2 pb-16">30</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
