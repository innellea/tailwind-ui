import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white" style={{minHeight: "875px"}}>
    <div className="flex items-center justify-center p-8">
      
  <div className="relative" data-todo-x-data="Components.popover({ open: true, focus: false })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
    <button type="button" data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-todo-colon-className="{ 'text-gray-900': open, 'text-gray-500': !(open) }" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()">
      <span>Solutions</span>
      <svg data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 transition ease-in-out duration-150" data-todo-colon-className="{ 'text-gray-600': open, 'text-gray-400': !(open) }" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
    </button>

    
      <div data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-200" data-todo-x-transition-enter-start="opacity-0 translate-y-1" data-todo-x-transition-enter-end="opacity-100 translate-y-0" data-todo-x-transition-leave="transition ease-in duration-150" data-todo-x-transition-leave-start="opacity-100 translate-y-0" data-todo-x-transition-leave-end="opacity-0 translate-y-1" data-todo-x-description="Flyout menu, show/hide based on flyout menu state." className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl" data-todo-x-ref="panel" data-todo-at-click-away="open = false">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
            
              <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
                </div>
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
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/cursor-click" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
</svg>
                </div>
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
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/shield-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
                </div>
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
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/view-grid" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
</svg>
                </div>
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
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/refresh" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
</svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Automations
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Build strategic funnels that will drive your customers to convert
                  </p>
                </div>
              </a>
            
              <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/document-report" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
</svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Reports
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Get detailed reports that will help you make more informed decisions 
                  </p>
                </div>
              </a>
            
          </div>
          <div className="p-5 bg-gray-50 sm:p-8">
            <a href="/" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
              <span className="flex items-center">
                <span className="text-base font-medium text-gray-900">
                  Enterprise
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                  New
                </span>
              </span>
              <span className="mt-1 block text-sm text-gray-500">
                Empower your entire team with even more advanced tools.
              </span>
            </a>
          </div>
        </div>
      </div>
    
  </div>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
