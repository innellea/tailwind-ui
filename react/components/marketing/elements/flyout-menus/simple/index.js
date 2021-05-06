import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white" style={{minHeight: "648px"}}>
    <div className="flex items-center justify-center p-8">
      
  <div className="relative" data-todo-x-data="Components.popover({ open: true, focus: false })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
    <button type="button" data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-todo-colon-className="{ 'text-gray-900': open, 'text-gray-500': !(open) }" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()">
      <span>Solutions</span>
      <svg data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" data-todo-colon-className="{ 'text-gray-600': open, 'text-gray-400': !(open) }" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
    </button>

    
      <div data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-200" data-todo-x-transition-enter-start="opacity-0 translate-y-1" data-todo-x-transition-enter-end="opacity-100 translate-y-0" data-todo-x-transition-leave="transition ease-in duration-150" data-todo-x-transition-leave-start="opacity-100 translate-y-0" data-todo-x-transition-leave-end="opacity-0 translate-y-1" data-todo-x-description="Flyout menu, show/hide based on flyout menu state." className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0" data-todo-x-ref="panel" data-todo-at-click-away="open = false">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            
              <a href="/" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <p className="text-base font-medium text-gray-900">
                  Blog
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Learn about tips, product updates and company culture.
                </p>
              </a>
            
              <a href="/" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <p className="text-base font-medium text-gray-900">
                  Help Center
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Get all of your questions answered in our forums of contact support.
                </p>
              </a>
            
              <a href="/" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <p className="text-base font-medium text-gray-900">
                  Guides
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Learn how to maximize our platform to get the most out of it.
                </p>
              </a>
            
              <a href="/" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <p className="text-base font-medium text-gray-900">
                  Events
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Check out webinars with experts and learn about our annual conference.
                </p>
              </a>
            
              <a href="/" className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <p className="text-base font-medium text-gray-900">
                  Security
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Understand how we take your privacy seriously.
                </p>
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
