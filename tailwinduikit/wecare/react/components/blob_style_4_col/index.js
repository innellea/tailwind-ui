const Index = () => (
    <div>
        <section className="px-6 xl:px-0">
            <div className="mx-auto container mt-20 lg:mt-52">
                <div className="flex flex-col items-center justify-center w-full py-10">
                    <h1 className="font-semibold custom-gray-800 text-40px">Our Talented Team</h1>
                    <hr className="w-24 h-1 bg-gold rounded-full" />
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="w-10/12">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center justify-center">
                                <img className="-ml-4" src="https://cdn.tuk.dev/assets/templates/weCare/team_1.png" alt="team 1" />
                                <h2 className="text-2xl font-medium mt-6">Richard Bell</h2>
                                <h3 className="text-lg">Richard.bell@gmail.com</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img className="-ml-4" src="https://cdn.tuk.dev/assets/templates/weCare/team_2.png" alt="team 1" />
                                <h2 className="text-2xl font-medium mt-6">Richard Bell</h2>
                                <h3 className="text-lg">Richard.bell@gmail.com</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img className="-ml-4" src="https://cdn.tuk.dev/assets/templates/weCare/team_3.png" alt="team 1" />
                                <h2 className="text-2xl font-medium mt-6">Richard Bell</h2>
                                <h3 className="text-lg">Richard.bell@gmail.com</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img className="-ml-4" src="https://cdn.tuk.dev/assets/templates/weCare/team_4.png" alt="team 1" />
                                <h2 className="text-2xl font-medium mt-6">Richard Bell</h2>
                                <h3 className="text-lg">Richard.bell@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24 w-full flex items-center justify-center">
                    <button className="text-white lg:text-2xl font-semibold bg-gold px-6 lg:px-12 py-3 lg:py-6 rounded">View All</button>
                </div>
            </div>
        </section>

        <style>
            {` .clr-gold {
                color: #ffac2f;
            }
            .bg-gold {
                background-color: #ffac2f;
            }
            .custom-gray-800 {
                color: #1b1b1b;
            }
            .text-40px {
                font-size: 40px;
            }

            @media (min-width: 320px) and (max-width: 667px) {
                .text-80px {
                    font-size: 40px;
                    line-height: 40px;
                }
                .text-40px {
                    font-size: 30px;
                    line-height: 32px;
                }
            }`}
        </style>
    </div>
);
export default Index;
