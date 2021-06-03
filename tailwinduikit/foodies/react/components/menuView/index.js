const Index = (props) => (
    <>
        <div className="mx-auto container z-40 lg:mt-40 mt-20 lg:px-0 px-4">
            <div className="flex items-center justify-center">
                <hr className="w-2.5 h-16 bg-color-orange" />
                <h1 className="text-4xl font-bold text-color-black pl-7">
                    <span className="text-2xl font-normal">Take a look at </span>Menu
                </h1>
            </div>
            <div className="lg:flex items-center justify-center mt-24 h-full">
                <div className="lg:w-1/4 relative">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-menu.png" className="absolute left-0 top-0 z-0 -mt-7 lg:block hidden" />
                    <img loading="lazy" src="https://i.ibb.co/283p6kN/Rectangle-52-1.png" className="w-full h-full relative z-10 lg:pl-7 lg:my-0 my-4" />
                    <img loading="lazy" src="https://i.ibb.co/bz2MTXB/Rectangle-45-auto-x1.png" className="w-full h-full lg:pt-7 lg:my-0 my-4" />
                </div>
                <div className="lg:w-1/3 lg:mx-8">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/menu3.png" className="w-full h-full lg:-pt-4 lg:my-0 my-4" />
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/menu4.png" className="w-full h-full lg:pt-3 lg:my-0 my-4" />
                </div>
                <div className="lg:w-1/4">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/menu5.png" className="w-full h-full lg:my-0 my-4 xl:block hidden" />
                    <img loading="lazy" src="https://i.ibb.co/283p6kN/Rectangle-52-1.png" className="w-full h-full lg:my-0 my-4 xl:hidden block" />
                    <div className="relative">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/menu6.png" className="w-full h-full lg:pt-7 relative z-10 lg:pr-7 lg:pb-7 lg:my-0 my-4" />
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-menu.png" className="lg:block hidden absolute right-0 bottom-0 z-0 2xl:h-72 h-48 lg:my-0 my-4" />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center xl:mt-36 mt-12">
            <a href="/menu">
                <button className="py-2.5 lg:px-11 px-6 lg:text-3xl text-base font-semibold leading-loose text-color-orange focus:outline-none button-transparent border-2 border-color-orange b-r-10 lg:mr-10">Browse Menu</button>
            </a>
        </div>
    </>
);
export default Index;
