import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="overflow-y-auto" style={{minHeight: "768px"}}>
    
  {/* Background color split screen for large screens */}
  <div className="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"></div>
  <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"></div>
  <div className="relative min-h-screen flex flex-col">
    {/* Navbar */}
    <nav data-todo-x-data="{ open: false }" className="flex-shrink-0 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex items-center px-2 lg:px-0 xl:w-64">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow">
            </div>
          </div>

          {/* Search section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full px-2 lg:px-6">
              <label htmlFor="search" className="sr-only">Search projects</label>
              <div className="relative text-indigo-200 focus-within:text-gray-400">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
                </div>
                <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm" placeholder="Search projects" type="search">
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <button type="button" className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" data-todo-at-click="open = !open" aria-expanded="false" data-todo-x-bind-aria-expanded="open.toString()">
              <span className="sr-only">Open main menu</span>
              <svg data-todo-x-description="Icon when menu is closed.

Heroicon name: outline/menu-alt-1" data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" className="block h-6 w-6" data-todo-colon-className="{ 'hidden': open, 'block': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
</svg>
              <svg data-todo-x-description="Icon when menu is open.

Heroicon name: outline/x" data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" className="hidden h-6 w-6" data-todo-colon-className="{ 'block': open, 'hidden': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
            </button>
          </div>
          {/* Links section */}
          <div className="hidden lg:block lg:w-80">
            <div className="flex items-center justify-end">
              <div className="flex">
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white">Documentation</a>
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white">Support</a>
              </div>
              {/* Profile dropdown */}
              <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-4 relative flex-shrink-0">
                <div>
                  <button type="button" className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white" id="user-menu" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80" alt="">
                  </button>
                </div>
                
                  <div data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View Profile</a>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-todo-x-description="Mobile menu, show/hide based on menu state." className="lg:hidden" id="mobile-menu" data-todo-x-show="open">
        <div className="px-2 pt-2 pb-3">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800">Dashboard</a>
          <a href="/" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Support</a>
        </div>
        <div className="pt-4 pb-3 border-t border-indigo-800">
          <div className="px-2">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Your Profile</a>
            <a href="/" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Settings</a>
            <a href="/" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign out</a>
          </div>
        </div>
      </div>
    </nav>

    {/* 3 column wrapper */}
    <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
      {/* Left sidebar & main wrapper */}
      <div className="flex-1 min-w-0 bg-white xl:flex">
        <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
          <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
            {/* Start left column area */}
            <div className="h-full relative" style={{minHeight: "12rem"}}>
              <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"></div>
            </div>
            {/* End left column area */}
          </div>
        </div>

        <div className="bg-white lg:min-w-0 lg:flex-1">
          <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
            <!-- Start main area-->
            <div className="relative h-full" style={{minHeight: "36rem"}}>
              <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"></div>
            </div>
            {/* End main area */}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
        <div className="h-full pl-6 py-6 lg:w-80">
          {/* Start right column area */}
          <div className="h-full relative" style={{minHeight: "16rem"}}>
            <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"></div>
          </div>
          {/* End right column area */}
        </div>
      </div>
    </div>
  </div>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
