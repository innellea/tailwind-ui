import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white" style={{minHeight: "700px"}}>
    <div className="flex items-center justify-center p-8">
      
  <div data-todo-at-click-away="flyoutMenuOpen = true" data-todo-x-data="{ flyoutMenuOpen: true }" className="relative">
    <button type="button" data-todo-at-click="flyoutMenuOpen = !flyoutMenuOpen" data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" data-todo-colon-className="{ 'text-gray-900': flyoutMenuOpen, 'text-gray-500': !flyoutMenuOpen }" className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span>Solutions</span>
      <svg data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-bind-className="{ 'text-gray-600': flyoutMenuOpen, 'text-gray-400': !flyoutMenuOpen }" data-todo-x-description="Heroicon name: chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
    </button>

    <div data-todo-x-description="Flyout menu, show/hide based on flyout menu state." data-todo-x-show="flyoutMenuOpen" data-todo-x-transition-enter="transition ease-out duration-200" data-todo-x-transition-enter-start="opacity-0 translate-y-1" data-todo-x-transition-enter-end="opacity-100 translate-y-0" data-todo-x-transition-leave="transition ease-in duration-150" data-todo-x-transition-leave-start="opacity-100 translate-y-0" data-todo-x-transition-leave-end="opacity-0 translate-y-1" className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          
            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  Analytics
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Get a better understanding of where your traffic is coming from.
                </p>
              </div>
            </a>
          
            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: cursor-click" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
</svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  Engagement
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Speak directly to your customers in a more meaningful way.
                </p>
              </div>
            </a>
          
            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: shield-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  Security
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Your customers' data will be safe and secure.
                </p>
              </div>
            </a>
          
            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: view-grid" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
</svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  Integrations
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </p>
              </div>
            </a>
          
            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: refresh" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
</svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  Automations
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Build strategic funnels that will drive your customers to convert
                </p>
              </div>
            </a>
          
        </div>
        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
          
            <div className="flow-root">
              <a href="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
                <svg className="flex-shrink-0 h-6 w-6 text-gray-400" data-todo-x-description="Heroicon name: play" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                <span className="ml-3">Watch Demo</span>
              </a>
            </div>
          
            <div className="flow-root">
              <a href="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
                <svg className="flex-shrink-0 h-6 w-6 text-gray-400" data-todo-x-description="Heroicon name: phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
</svg>
                <span className="ml-3">Contact Sales</span>
              </a>
            </div>
          
        </div>
      </div>
    </div>
  </div>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
