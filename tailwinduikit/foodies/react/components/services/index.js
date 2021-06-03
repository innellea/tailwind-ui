const Index = (props) => (
    <div>
        <div className="mx-auto container mt-40 xl:px-0 px-4">
            <div className="flex items-center justify-center">
                <hr className="w-2.5 h-16 bg-color-orange" />
                <h1 className="text-4xl font-bold text-color-black pl-7">
                    Services<span className="text-2xl font-normal"> We Provide</span>
                </h1>
            </div>
            <div className="items-center justify-center mt-16 xl:flex hidden">
                <div className="card-width card-shadow cursor-pointer mr-7">
                    <div className="relative">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/dive-in.png" className="h-96 w-full" />
                        <div className="bg-white w-full">
                            <p className="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">01.</p>
                            <p className="text-center text-2xl text-color-black py-8">Dine In/ Takeaway</p>
                        </div>
                    </div>
                </div>
                <div className="card-width card-shadow cursor-pointer mr-7">
                    <div className="relative">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/easy-reservation.png" className="h-96 w-full" />
                        <div className="bg-white w-full">
                            <p className="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">02.</p>
                            <p className="text-center text-2xl text-color-black py-8">Easy Table Reservation</p>
                        </div>
                    </div>
                </div>
                <div className="card-width card-shadow cursor-pointer">
                    <div className="relative">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/delivery.png" className="h-96 w-full" />
                        <div className="bg-white w-full">
                            <p className="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">03.</p>
                            <p className="text-center text-2xl text-color-black py-8">Free Home Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="block items-center justify-center mt-16 xl:hidden px-4">
                <div className="card-shadow cursor-pointer mb-8">
                    <div className="relative">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/dive-in.png" className="xl:h-96 h-full w-full" />
                        <div className="bg-white w-full">
                            <p className="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">01.</p>
                            <p className="text-center text-2xl text-color-black py-8">Dine In/ Takeaway</p>
                        </div>
                    </div>
                </div>
                <div className="card-shadow cursor-pointer mb-8">
                    <div className="relative">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/easy-reservation.png" className="xl:h-96 h-full w-full" />
                        <div className="bg-white w-full">
                            <p className="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">02.</p>
                            <p className="text-center text-2xl text-color-black py-8">Easy Table Reservation</p>
                        </div>
                    </div>
                </div>
                <div className="card-shadow cursor-pointer mb-8">
                    <div className="relative">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/delivery.png" className="xl:h-96 h-full w-full" />
                        <div className="bg-white w-full">
                            <p className="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">03.</p>
                            <p className="text-center text-2xl text-color-black py-8">Free Home Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
        </div>
    </div>
);
export default Index;
