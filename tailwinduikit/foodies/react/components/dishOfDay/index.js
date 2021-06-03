const Index = (props) => (
    <div>
        <div className="mx-auto container relative z-40 xl:px-0 px-4">
            <div className="flex items-center justify-center">
                <hr className="w-2.5 h-16 bg-color-orange" />
                <h1 className="text-4xl font-bold text-color-black pl-7">
                    Dish<span className="text-2xl font-normal"> of the Day</span>
                </h1>
            </div>
            <div className="flex items-center justify-center pt-12">
                <div className="relative">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/dishofday.png" className="relative" />
                    <div className="flex items-center relative justify-center w-full lg:hidden block">
                        <div className="absolute flex items-center justify-center -mt-40 -ml-48 md:-mt-64 md:-ml-64">
                            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/text-text.png" alt className="absolute md:w-48 w-40" />
                            <p className="lg:text-2xl text-xs font-bold text-white ml-8 mr-2 relative">EGG FENEL SALAD</p>
                        </div>
                    </div>
                    <div className="absolute lg:block hidden bg-strip bottom-40 xl:left-20 left-10 xl:ml-8 xl:pt-0 pt-16">
                        <div className="flex items-center justify-center">
                            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/text-text.png" alt className="absolute" />
                            <div className="text-2xl font-bold text-white relative">EGG FENEL SALAD</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Index;
