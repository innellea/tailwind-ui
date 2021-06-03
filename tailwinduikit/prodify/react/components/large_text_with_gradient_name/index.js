import React from "react";
function IndexPage() {
    return (
        <>
            <div className="mx-auto px-4 xl:px-0 container pt-10 lg:pt-56">
                <div className="text-color f-f-l">
                    <h1 className="text-xl lg:text-6xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center">
                        "Thanks guys, keep up the good work! <br /> I'd be lost without Prodify. The very <br /> best. Prodify is both attractive and <br /> highly adaptable.
                    </h1>
                    <h1 className="text-color-gradient text-xl lg:text-6xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center pt-5 lg:pt-20">- Ben P.</h1>
                </div>
            </div>
            <style>
                {`.text-color-gradient {
    background: -webkit-linear-gradient(360deg,rgba(245, 101, 101, 1), rgba(229, 82, 120, 1), rgba(213, 63, 140, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}`}
            </style>
        </>
    );
}

export default IndexPage;
