import react, { useState } from "react";
const Index = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            {/* Navigation */}
            <div className="mx-auto container xl:px-0 px-4">
                {/* Desktop */}
                <nav>
                    <div className="xl:flex hidden items-center justify-between py-12">
                        <a href="/">
                            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/foodies.png" className="w-44" alt="logo" />
                        </a>
                        <ul className="flex leading-loose">
                            <a href="/">
                                <li className="xl:text-2xl text-xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Home</li>
                            </a>
                            <a href="/menu">
                                <li className="xl:text-2xl text-xl leading-8 mr-10 text-color-orange relative font-normal cursor-pointer text-hover">
                                    Menu
                                    <hr className="border-4 border-color-orange bg-color-orange w-10 absolute right-0" />
                                </li>
                            </a>
                            <a href="#">
                                <li className="xl:text-2xl text-xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">About</li>
                            </a>
                            <a href="/contact">
                                <li className="xl:text-2xl text-xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Contact</li>
                            </a>
                            <a href="#">
                                <li className="xl:text-2xl text-xl leading-8 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">Reservation</li>
                            </a>
                        </ul>
                    </div>
                </nav>
                {/* Desktop */}
                {/* Mobile */}
                <nav className="xl:hidden z-40 relative">
                    <div className="flex py-4 justify-between items-center px-4">
                        <div>
                            <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/foodies.png" alt="logo" className="w-24" />
                        </div>
                        <div className="visible flex items-center">
                            <ul id="list" className={menu ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16" : "hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16"}>
                                <li className="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2">
                                    <a href="/">
                                        <span className="ml-2 font-bold">Home</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="/menu">
                                        <span className="ml-2 font-bold">Menu</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="#">
                                        <span className="ml-2 font-bold">About</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="/contact">
                                        <span className="ml-2 font-bold">Contact</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="#">
                                        <span className="ml-2 font-bold">Reservation</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="xl:hidden">
                                {!menu ? (
                                    <svg id="open" onClick={() => setMenu(true)} aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                ) : (
                                    <div id="close" className="close-m-menu" onClick={() => setMenu(false)}>
                                        <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Mobile */}
            </div>
            {/* Navigation */}
            {/* Hero */}
            <div>
                <div className="w-full relative bg-img-height items-center justify-center xl:flex hidden">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/menu-hero.png" className="w-full h-full absolute" />
                    <button className="text-5xl text-white rounded-lg bg-color-orange px-14 py-2 relative hover:opacity-90">MENU CARD</button>
                </div>
            </div>
            <div className="w-full relative flex items-center justify-center xl:hidden md:h-64 h-32 xl:pt-16 pt-0">
                <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/menu-hero.png" className="w-full h-full absolute" />
                <button className="text-base text-white rounded-lg bg-color-orange px-6 py-2 relative hover:opacity-90">MENU CARD</button>
            </div>
            {/* Hero */}
            {/* section1 */}
            <div className="mx-auto container xl:px-0 px-4 mt-20">
                <div className="flex items-center justify-center 2xl:-ml-0 -ml-4">
                    <hr className="w-2.5 h-16 bg-color-orange" />
                    <h1 className="text-3xl font-bold text-color-black pl-7">Salads</h1>
                </div>
                {/* Prices  */}
                <div className="mt-16">
                    {/* row1 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Salad Thai</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Salad Thai</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                            </div>
                        </div>
                    </div>
                    {/* row1 */}
                    {/* row2 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Salad Thai</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Salad Thai</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                            </div>
                        </div>
                    </div>
                    {/* row2 */}
                    {/* row3 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Salad Thai</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Salad Thai</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                            </div>
                        </div>
                    </div>
                    {/* row3 */}
                    {/* row4 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Salad Thai</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Salad Thai</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">----------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">----------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soybeans, Marinated chicken, Fresh mint, Cilanto, Peanuts</p>
                            </div>
                        </div>
                    </div>
                    {/* row4 */}
                </div>
                {/* Prices  */}
            </div>
            {/* section1 */}
            {/* section2 */}
            <div className="mx-auto container xl:px-0 px-4 mt-36">
                <div className="flex items-center justify-center">
                    <hr className="w-2.5 h-16 bg-color-orange" />
                    <h1 className="text-3xl font-bold text-color-black pl-7">Toasted Items</h1>
                </div>
                {/* Prices  */}
                <div className="mt-16">
                    {/* row1 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Quiche Lorraine</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Quiche Lorraine</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                            </div>
                        </div>
                    </div>
                    {/* row1 */}
                    {/* row2 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Quiche Lorraine</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Quiche Lorraine</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                            </div>
                        </div>
                    </div>
                    {/* row2 */}
                    {/* row3 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Quiche Lorraine</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Quiche Lorraine</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                            </div>
                        </div>
                    </div>
                    {/* row3 */}
                    {/* row4 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Quiche Lorraine</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            {/* <div class="w-full flex items-center justify-between">
                      <h1 class="xl:text-2xl text-xl font-semibold">Quiche Lorraine</h1>
                      <p class="px-5 text-color-orange xl:block hidden">----------------------------------------------</p>
                      <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">--------</p>
                      <p class="xl:text-2xl text-xl font-semibold">$31</p>
                  </div>
                  <div>
                      <p class="xl:text-lg text-sm xl:pr-16 pt-4">White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise</p>
                  </div> */}
                        </div>
                    </div>
                    {/* row4 */}
                </div>
                {/* Prices  */}
            </div>
            {/* section2 */}
            {/* section3 */}
            <div className="mx-auto container xl:px-0 px-4 mt-36">
                <div className="flex items-center justify-center">
                    <hr className="w-2.5 h-16 bg-color-orange" />
                    <h1 className="text-3xl font-bold text-color-black pl-7">Main Course</h1>
                </div>
                {/* Prices  */}
                <div className="mt-16">
                    {/* row1 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                    </div>
                    {/* row1 */}
                    {/* row2 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                    </div>
                    {/* row2 */}
                    {/* row3 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                    </div>
                    {/* row3 */}
                    {/* row4 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                    </div>
                    {/* row4 */}
                    {/* row5 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                    </div>
                    {/* row5 */}
                    {/* row6 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Burger Vegetarian</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">--------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn, Potatoes, Cucumber, Cheddar cheese</p>
                            </div>
                        </div>
                    </div>
                    {/* row6 */}
                </div>
                {/* Prices  */}
            </div>
            {/* section3 */}
            {/* section4 */}
            <div className="mx-auto container xl:px-0 px-4 mt-36">
                <div className="flex items-center justify-center">
                    <hr className="w-2.5 h-16 bg-color-orange" />
                    <h1 className="text-3xl font-bold text-color-black pl-7">Sweet Corn</h1>
                </div>
                {/* Prices  */}
                <div className="mt-16">
                    {/* row1 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Le Paris-st Raphel</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Crunchy puff pastry, Light hazelnut cream filling, Almond, Molten heart, Grilled hazelnuts</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Le Paris-st Raphel</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Crunchy puff pastry, Light hazelnut cream filling, Almond, Molten heart, Grilled hazelnuts</p>
                            </div>
                        </div>
                    </div>
                    {/* row1 */}
                    {/* row2 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Le Paris-st Raphel</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Crunchy puff pastry, Light hazelnut cream filling, Almond, Molten heart, Grilled hazelnuts</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Le Paris-st Raphel</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Crunchy puff pastry, Light hazelnut cream filling, Almond, Molten heart, Grilled hazelnuts</p>
                            </div>
                        </div>
                    </div>
                    {/* row2 */}
                    {/* row3 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Le Paris-st Raphel</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Crunchy puff pastry, Light hazelnut cream filling, Almond, Molten heart, Grilled hazelnuts</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">Le Paris-st Raphel</h1>
                                <p className="px-5 text-color-orange xl:block hidden">--------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">-----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Crunchy puff pastry, Light hazelnut cream filling, Almond, Molten heart, Grilled hazelnuts</p>
                            </div>
                        </div>
                    </div>
                    {/* row3 */}
                </div>
                {/* Prices  */}
            </div>
            {/* section4 */}
            {/* section5 */}
            <div className="mx-auto container xl:px-0 px-4 mt-36">
                <div className="flex items-center justify-center">
                    <hr className="w-2.5 h-16 bg-color-orange" />
                    <h1 className="text-3xl font-bold text-color-black pl-7">Tea Time</h1>
                </div>
                {/* Prices  */}
                <div className="mt-16">
                    {/* row1 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">MANDARIAN JASMIN</h1>
                                <p className="px-5 text-color-orange xl:block hidden">-------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">---------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Jasmine green tea, Subtil and Fragnant</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">MANDARIAN JASMIN</h1>
                                <p className="px-5 text-color-orange xl:block hidden">-------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">---------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Jasmine green tea, Subtil and Fragnant</p>
                            </div>
                        </div>
                    </div>
                    {/* row1 */}
                    {/* row2 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">MANDARIAN JASMIN</h1>
                                <p className="px-5 text-color-orange xl:block hidden">-------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">---------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Jasmine green tea, Subtil and Fragnant</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">MANDARIAN JASMIN</h1>
                                <p className="px-5 text-color-orange xl:block hidden">-------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">---------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-----------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Jasmine green tea, Subtil and Fragnant</p>
                            </div>
                        </div>
                    </div>
                    {/* row2 */}
                    {/* row3 */}
                    <div className="xl:flex items-center justify-center w-full xl:pb-9">
                        <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="xl:text-2xl text-xl font-semibold">MANDARIAN JASMIN</h1>
                                <p className="px-5 text-color-orange xl:block hidden">----------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">---------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">-------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">-----------------------------------------------------------------------------------------</p>
                                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <p className="xl:text-2xl text-xl font-semibold">$31</p>
                            </div>
                            <div>
                                <p className="xl:text-lg text-sm xl:pr-16 pt-4">Jasmine green tea, Subtil and Fragnant</p>
                            </div>
                        </div>
                        <div className="xl:w-2/5 xl:py-0 py-4">
                            {/* <div class="w-full flex items-center justify-between">
                      <h1 class="xl:text-2xl text-xl font-semibold">MANDARIAN JASMIN</h1>
                      <p class="px-5 text-color-orange xl:block hidden">------------------------------------</p>
                      <p class="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">p>
                      <p class="xl:text-2xl text-xl font-semibold">$31</p>
                  </div>
                  <div>
                      <p class="xl:text-lg text-sm xl:pr-16 pt-4">Jasmine green tea, Subtil and Fragnant</p>
                  </div> */}
                        </div>
                    </div>
                    {/* row3 */}
                </div>
                {/* Prices  */}
            </div>
            {/* section5 */}
        </div>
    );
};
export default Index;
