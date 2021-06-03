const Index = () => (
    <div>
        <section className="px-6 xl:px-0">
            <div className="mt-16 lg:mt-44 mx-auto container">
                <div className="flex flex-col lg:items-center justify-center w-full py-10">
                    <h1 className="font-semibold custom-gray-800 text-40px">User Reviews</h1>
                    <p className="mt-2.5 lg:w-2/5 lg:text-center text-2xl custom-gray-800">More than 1000 users are satisfied with our services and want to share their experience with you</p>
                </div>
                <div className="mt-24 flex items-center justify-center w-full">
                    <div className="w-10/12">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center justify-center">
                                <img src="https://cdn.tuk.dev/assets/templates/weCare/review_1.png" />
                                <p className="text-base custom-gray-800 leading-7 mt-5 text-center w-8/12">We have reached more than 1.1 million users around the globe</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="https://cdn.tuk.dev/assets/templates/weCare/review_2.png" />
                                <p className="text-base custom-gray-800 leading-7 mt-5 text-center w-8/12">We have reached more than 1.1 million users around the globe</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="https://cdn.tuk.dev/assets/templates/weCare/review_3.png" />
                                <p className="text-base custom-gray-800 leading-7 mt-5 text-center w-8/12">We have reached more than 1.1 million users around the globe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            {` .text-40px {
                font-size: 40px;
            }
            .custom-gray-800 {
                color: #1b1b1b;
            }
            @media (min-width: 320px) and (max-width: 667px) {
                .text-40px {
                    font-size: 30px;
                    line-height: 32px;
                }
            }`}
        </style>
    </div>
);
export default Index;
