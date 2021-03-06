const Index = () => (
    <div>
        <section>
            <div className="mt-24 max-w-4xl mx-auto relative px-10 py-10 cus-border bg-shape shadow-lg">
                <img className="absolute inset-0 m-auto ml-12 z-10 -mt-4" src="https://cdn.tuk.dev/assets/templates/weCare/ball-small.png" />
                <div className="lg:flex items-center z-10">
                    <div className="lg:w-1/2 mr-12">
                        <h2 className="text-2xl xl:text-3xl text-white font-bold mb-4">Still undecided?</h2>
                        <p className="text-lg xl:text-2xl text-white font-normal leading-7">Get access to one month free membership on our platform</p>
                    </div>
                    <div className="lg:w-1/2 lg:flex justify-end pr-10 lg:pr-0 mt-6 xl:mt-0">
                        <button className="bg-dark-blue p-2 xl:p-4 focus:outline-none text-white rounded-md mr-2.5">Get access</button>
                        <button className="border border-white p-2 xl:p-4 focus:outline-none text-white rounded-md mr-2.5">Get access</button>
                    </div>
                </div>
            </div>
        </section>

        <style>
            {` .cus-border {
                border-top-left-radius: 75px;
                border-top-right-radius: 75px;
                border-bottom-right-radius: 75px;
            }
            .bg-shape {
                background-color: #0097fe;
            }
            .bg-dark-blue {
                background-color: #0036b4;
            }`}
        </style>
    </div>
);
export default Index;
