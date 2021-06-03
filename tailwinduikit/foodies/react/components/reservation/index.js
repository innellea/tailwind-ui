const Index = (props) => (
    <div>
        {/* bookATable */}
        <div className="book-widht relative mx-auto container mt-10 xl:mt-44 xl:block hidden">
            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book-bg.png" className="absolute z-0 object-center object-fit h-full w-full" />
            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book1.png" className="absolute left-0 top-0 -mt-24 -ml-24" />
            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book-2.png" className="absolute right-0 bottom-0 -mb-24 -mr-28" />
            <div className="relative z-10">
                <div className="flex items-center justify-center pt-14">
                    <hr className="w-2.5 h-16 bg-color-orange" />
                    <h1 className="text-4xl font-bold text-color-black pl-7">
                        Book<span className="text-2xl font-normal"> a Table </span>
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center pt-16">
                    <div className="flex items-start flex-wrap px-8">
                        <div className="flex flex-col pr-12">
                            <label className="text-2xl text-color-black pb-4">Date</label>
                            <input className="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                            <div className="flex flex-col pr-12 py-12">
                                <label className="text-2xl text-color-black pb-4">Name</label>
                                <input className="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                            </div>
                        </div>
                        <div className="flex flex-col pr-12">
                            <label className="text-2xl text-color-black pb-4">Time</label>
                            <input className="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                            <div className="flex flex-col pr-12 py-12">
                                <label className="text-2xl text-color-black pb-4">Phone No.</label>
                                <input className="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-2xl text-color-black pb-4">Guests</label>
                            <input className="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-12">
                    <button className="py-3 px-12 border border-color-orange text-white bg-color-orange hover:opacity-90 b-r-10 focus:outline-none">Check Availability</button>
                </div>
            </div>
        </div>
        {/* mobile */}
        <div className="xl:hidden block relative mx-auto container mt-44">
            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book-bg.png" className="absolute z-0 object-center object-cover h-full" />
            {/* <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book1.png" class="absolute left-0 top-0 -mt-24 -ml-24" />
      <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book-2.png" class="absolute right-0 bottom-0 -mb-24 -mr-28" /> */}
            <div className="relative z-10 px-4 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center pt-14">
                    <hr className="w-2.5 h-16 bg-color-orange" />
                    <h1 className="text-4xl font-bold text-color-black pl-7">
                        <span className="text-2xl font-normal">Book a </span>Table
                    </h1>
                </div>
                <div className>
                    <div className="flex flex-col mt-8">
                        <label className="mt-4 text-2xl text-color-black pb-4">Date</label>
                        <input className="py-3 w-full pl-4 border rounded-lg border-color-black" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mt-4 text-2xl text-color-black pb-4">Time</label>
                        <input className="py-3 w-full pl-4 border rounded-lg border-color-black" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mt-4 text-2xl text-color-black pb-4">Guests</label>
                        <input className="py-3 w-full pl-4 border rounded-lg border-color-black" />
                    </div>
                </div>
                <div className>
                    <div className="flex flex-col">
                        <label className="mt-4 text-2xl text-color-black pb-4">Name</label>
                        <input className="py-3 w-full pl-4 border rounded-lg border-color-black" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mt-4 text-2xl text-color-black pb-4">Phone No.</label>
                        <input className="py-3 w-full pl-4 border rounded-lg border-color-black" />
                    </div>
                </div>
                <div className="flex items-center justify-center py-12">
                    <button className="py-3 px-12 border border-color-orange text-white bg-color-orange hover:opacity-90 b-r-10 focus:outline-none">Check Availability</button>
                </div>
            </div>
        </div>
        {/* mobile */}
        {/* bookATable */}
    </div>
);
export default Index;
