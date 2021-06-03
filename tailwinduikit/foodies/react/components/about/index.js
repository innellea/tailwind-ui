const Index = (props) => (
    <div>
        <div className="mt-40">
            <div className="items-center justify-center xl:flex hidden">
                <div className="relative">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-menu.png" className="absolute left-0 top-0 z-0 h-52 w-56" />
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-1.png" className="mt-8 ml-8 relative z-10 abt-us-img" />
                    <div className="flex items-center transform -rotate-90 absolute left-0 bottom-0 -ml-20 mb-36">
                        <p className="text-lg font-semibold leading-snug text-justify text-color-orange mr-2">Restaurant</p>
                        <hr className="w-12 bg-color-orange h-1 border-color-orange mr-8" />
                    </div>
                </div>
                <div className="about-us-card py-14 px-7 border border-color-black mx-10">
                    <p className="text-2xl font-bold text-black text-center">About Us</p>
                    <p className="text-base leading-7 text-justify text-color-gray pt-4">Here is what you always need. View our food collection and order yummy and healthy food within minutes. Here is what you always need. View our food collection and order yummy and healthy food within minutes ....</p>
                </div>
                <div className="relative">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-2.png" className="abt-us-img -mt-8 mr-8 relative z-10" />
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-menu.png" className="absolute bottom-0 right-0 -mb-8 z-0 h-64" />
                    <div className="flex items-center transform -rotate-90 absolute right-0 top-0 -mr-14">
                        <hr className="w-12 bg-color-orange h-1 border-color-orange mr-2" />
                        <p className="text-lg font-semibold leading-snug text-justify text-color-orange mr-8">Owner</p>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="items-center justify-center xl:hidden flex flex-col px-4">
                <div className>
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-1.png" />
                    <div className="flex items-center justify-end my-2">
                        <hr className="w-12 bg-color-orange h-1 border-color-orange mr-8" />
                        <p className="text-lg font-semibold leading-snug text-justify text-color-orange mr-2">Restaurant</p>
                    </div>
                </div>
                <div className="py-14 px-7 border border-color-black my-4">
                    <p className="text-2xl font-bold text-black text-center">About Us</p>
                    <p className="text-base leading-7 text-justify text-color-gray pt-4">Here is what you always need. View our food collection and order yummy and healthy food within minutes. Here is what you always need. View our food collection and order yummy and healthy food within minutes ....</p>
                </div>
                <div className>
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-2.png" />
                    <div className="flex items-center justify-end right-0 top-0 my-2">
                        <hr className="w-12 bg-color-orange h-1 border-color-orange mr-8" />
                        <p className="text-lg font-semibold leading-snug text-justify text-color-orange">Owner</p>
                    </div>
                </div>
            </div>
            {/* mobile */}
        </div>
    </div>
);
export default Index;
