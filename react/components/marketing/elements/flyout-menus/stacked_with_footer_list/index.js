import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white" style={{minHeight: "772px"}}>
    <div className="flex items-center justify-center p-8">
      
  <div className="relative" data-todo-x-data="Components.popover({ open: true, focus: false })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
    <button type="button" data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-todo-colon-className="{ 'text-gray-900': open, 'text-gray-500': !(open) }" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()">
      <span>Resources</span>
      <svg data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" data-todo-colon-className="{ 'text-gray-600': open, 'text-gray-400': !(open) }" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
    </button>

    
      <div data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-200" data-todo-x-transition-enter-start="opacity-0 translate-y-1" data-todo-x-transition-enter-end="opacity-100 translate-y-0" data-todo-x-transition-leave="transition ease-in duration-150" data-todo-x-transition-leave-start="opacity-100 translate-y-0" data-todo-x-transition-leave-end="opacity-0 translate-y-1" data-todo-x-description="Flyout menu, show/hide based on flyout menu state." className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0" data-todo-x-ref="panel" data-todo-at-click-away="open = false">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            
              <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: outline/support" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Help Center
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Get all of your questions answered in our forums or contact support.
                  </p>
                </div>
              </a>
            
              <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: outline/bookmark-alt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Guides
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Learn how to maximize our platform to get the most out of it.
                  </p>
                </div>
              </a>
            
              <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: outline/calendar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Events
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    See what meet-ups and other events we might be planning near you.
                  </p>
                </div>
              </a>
            
              <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" data-todo-x-description="Heroicon name: outline/shield-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Security
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Understand how we take your privacy seriously.
                  </p>
                </div>
              </a>
            
          </div>
          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
            <div>
              <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                Recent Posts
              </h3>
              <ul className="mt-4 space-y-4">
                
                  <li className="text-base truncate">
                    <a href="/" className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                      Boost your conversion rate
                    </a>
                  </li>
                
                  <li className="text-base truncate">
                    <a href="/" className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                      How to use search engine optimization to drive traffic to your site
                    </a>
                  </li>
                
                  <li className="text-base truncate">
                    <a href="/" className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                      Improve your customer experience
                    </a>
                  </li>
                
              </ul>
            </div>
            <div className="mt-5 text-sm">
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"> View all posts <span aria-hidden="true">→</span></a>
            </div>
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
