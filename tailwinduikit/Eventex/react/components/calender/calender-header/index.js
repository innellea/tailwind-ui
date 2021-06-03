import React, { useState, useEffect } from "react";
import Router from "next/router";
export default function IndexPage() {
    const [query, setQuery] = useState("");
    useEffect(() => {
        if (Router.router.asPath) {
            const item = Router.router.asPath;
            setQuery(item);
        }
    }, [Router]);
    const checkActive = () => {
        if (query.indexOf("calender-month-view") !== -1) {
            return "calender-month-view";
        } else if (query.indexOf("calender-week-view") !== -1) {
            return "calender-week-view";
        } else if (query.indexOf("calender-day-view") !== -1) {
            return "calender-day-view";
        }
        return "calender-month-view";
    };
    return (
        <div className="mt-6 md:mt-14">
            <div>
                <button className="pl-3 pr-5 py-2 flex items-center hover:from-red-500 hover:to-red-400 bg-gradient-to-br from-red-400 to-red-500 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M7.99996 3.33301V12.6663" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.33337 8.00033H12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm leading-none text-white ml-2">Add Event</p>
                </button>
            </div>
            <div className="w-full sm:flex items-center justify-between mt-8">
                <div>
                    <p className="text-base leading-none text-gray-700">September 2018</p>
                </div>
                <div className="md:flex justify-center hidden">
                    <div className="flex items-center">
                        <a href="./calender">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#353F47" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </a>
                        <a href="./calender-week-view">
                            <svg className="cursor-pointer ml-20" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#353F47" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex items-center mt-4 sm:mt-0 justify-between">
                    <div>
                        <a href="/calender-month-view">
                            <h4 className={checkActive() === "calender-month-view" ? "text-xs text-right duration-150 ease-in text-yellow-400" : "text-xs text-right duration-150 ease-in text-gray-600 hover:text-yellow-400"}>Month view</h4>
                        </a>
                    </div>
                    <div className="ml-9">
                        <a href="/calender-week-view">
                            <h4 className={checkActive() === "calender-week-view" ? "text-xs text-right duration-150 ease-in text-yellow-400" : "text-xs text-right duration-150 ease-in text-gray-600 hover:text-yellow-400"}>Week view</h4>
                        </a>
                    </div>
                    <div className="ml-9">
                        <a href="/calender-day-view">
                            <h4 className={checkActive() === "calender-day-view" ? "text-xs text-right duration-150 ease-in text-yellow-400" : "text-xs text-right duration-150 ease-in text-gray-600 hover:text-yellow-400"}>Day view</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
