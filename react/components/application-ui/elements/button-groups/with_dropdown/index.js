import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="p-8 bg-white flex items-start justify-center" style={{minHeight: "256px"}}>
    
  <span className="relative z-0 inline-flex shadow-sm rounded-md">
    <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
      Save changes
    </button>
    <span data-todo-x-data="{ open: true }" className="-ml-px relative block">
      <button data-todo-at-click="open = !open" data-todo-at-click-away="open = false" id="option-menu" type="button" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <span className="sr-only">Open options</span>
        <svg className="h-5 w-5" data-todo-x-description="Heroicon name: chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
      </button>
      <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="option-menu">
          
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Save and schedule
            </a>
          
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Save and publish
            </a>
          
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Export PDF
            </a>
          
        </div>
      </div>
    </span>
  </span>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
