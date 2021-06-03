import React,{useEffect,useState} from "react";
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
        if (query.indexOf("events-inner") !== -1) {
            return "events-inner";
        } else if (query.indexOf("virtual-events-speakers") !== -1) {
            return "virtual-events-speakers";
        } else if (query.indexOf("virtual-events-sponsers") !== -1) {
            return "virtual-events-sponsers";
        }
        return "events-inner";
    };
    return (
        <>
            <div className="w-full mt-4 md:mt-8">
                <div className="w-full hidden md:flex items-center pb-2 border-b border-gray-200">
                    <a href="/events-inner">
                        <div className={checkActive() === "events-inner" ? "py-2 px-4  bg-red-100 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-center text-red-700":"py-2 px-4 bg-transparent hover:bg-red-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                           Timeline
                        </div>
                    </a>
                    <a href="/virtual-events-speakers">
                        <div className={checkActive() === "virtual-events-speakers" ? "py-2 px-4 ml-24 bg-transparent bg-red-100 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-red-700":"py-2 px-4 ml-24 bg-transparent hover:bg-red-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                            Speakers
                        </div>
                    </a>
                    <a href="/virtual-events-sponsers">
                        <div className={checkActive() === "virtual-events-sponsers" ? "py-2 px-4 ml-24 bg-transparent bg-red-100 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-red-700":"py-2 px-4 ml-24 bg-transparent hover:bg-red-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                            Sponsors
                        </div>
                    </a>
                    <a href="#">
                        <div className="py-2 px-4 ml-24 bg-transparent hover:bg-red-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600">
                            Additional Information
                        </div>
                    </a>
                </div>
                <div className="flex w-full text-xs justify-between md:hidden my-10 items-center border-b border-gray-200">
                    <p className={checkActive() === "events-inner" ? "text-red-700 border-b-2 border-red-700 text-xs":"text-gray-600 text-xs"}>
                        <a href="/events-inner">Timeline</a>
                    </p>
                    <p className={checkActive() === "virtual-events-speakers" ? "text-red-700 border-b-2 border-red-700 text-xs":"text-gray-600 text-xs"}>
                        <a href="/virtual-events-speakers">Speakers</a>
                    </p>
                    <p className={checkActive() === "virtual-events-sponsers" ? "text-red-700 border-b-2 border-red-700 text-xs":"text-gray-600 text-xs"}>
                        <a href="/virtual-events-sponsers">Sponsors</a>
                    </p>
                    <p className="text-gray-600 text-xs">
                        <a href="#">Additional Information</a>
                    </p>
                </div>
            </div>
        </>
    );
}
