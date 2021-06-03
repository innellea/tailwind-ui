import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="w-full background-radient rounded-lg">
                <div className="inline-flex flex-col items-start justify-end px-10 py-6 w-full ">
                    <div className="xl:block hidden text-xl leading-loose text-white">
                        <p>Total Invitations</p>
                        <p>Sent</p>
                    </div>
                    <div className="xl:hidden block text-xl leading-loose text-white">
                        <p>Total Invitations Sent</p>
                    </div>
                    <p className="text-2xl md:text-4xl  text-center mt-2 md:mt-4 text-white">12.6 K</p>
                    <div className="flex mt-4 md:mt-8 justify-between w-full items-center">
                        <p className="text-sm 2xl:text-base font-bold leading-normal text-blue-400">Invitations Pending</p>
                        <p className="text-xl md:text-2xl font-black leading-normal text-right text-white">6.3 K</p>
                    </div>
                    <div className="flex mt-2 md:mt-4 justify-between w-full items-center">
                        <p className="text-sm 2xl:text-base font-bold leading-normal text-blue-400">Invitations Accepted</p>
                        <p className="text-xl md:text-2xl font-black leading-normal text-right text-white">4.3 K</p>
                    </div>
                </div>
            </div>
        </>
    );
}
