import React from "react";
import FirstComponent from "../art-gallery/index"
import SecondComponent from "../tab/index"
import ThirdComponent from "../sponsors/index"
import FourthComponent from "../stats/index"
import FifthComponent from "../chart-card/index"
import SixthComponent from "../host/index"
export default function IndexPage() {
    return (
        <div className="flex flex-wrap w-full mt-6 md:mt-14">
            <div className="xl:w-2/3 w-full">
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
            </div>
            <div className="xl:w-1/3 mt-6 md:mt-10 xl:mt-0 xl:pl-12 2xl:pl-24 w-full">
                <FourthComponent/>
                <FifthComponent/>
                <SixthComponent/>
            </div>
        </div>
    );
}

