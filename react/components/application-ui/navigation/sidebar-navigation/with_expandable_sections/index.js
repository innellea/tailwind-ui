import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="h-screen flex bg-gray-100" style={{minHeight: "640px"}}>
    <div className="flex flex-col w-64">
      
  <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
    <div className="flex items-center flex-shrink-0 px-4">
      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
    </div>
    <div className="mt-5 flex-grow flex flex-col">
      <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
        
          
            <div>
              {/* Current: "bg-gray-100 text-gray-900", Default: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
              <a href="/" className="bg-gray-100 text-gray-900 group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md">
                Dashboard
              </a>
            </div>
          
          
            <div data-todo-x-data="{ isExpanded: false }" className="space-y-1">
              <button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-at-click-prevent="isExpanded = !isExpanded" data-todo-x-bind-aria-expanded="isExpanded">
                <svg data-todo-colon-className="{ 'text-gray-400 rotate-90': isExpanded, 'text-gray-300': !isExpanded }" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" className="mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Team
              </button>
              <div data-todo-x-show="isExpanded" data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1">
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Overview
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Members
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Calendar
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Settings
                  </a>
                
              </div>
            </div>
          
          
            <div data-todo-x-data="{ isExpanded: false }" className="space-y-1">
              <button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-at-click-prevent="isExpanded = !isExpanded" data-todo-x-bind-aria-expanded="isExpanded">
                <svg data-todo-colon-className="{ 'text-gray-400 rotate-90': isExpanded, 'text-gray-300': !isExpanded }" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" className="mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Projects
              </button>
              <div data-todo-x-show="isExpanded" data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1">
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Overview
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Members
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Calendar
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Settings
                  </a>
                
              </div>
            </div>
          
          
            <div data-todo-x-data="{ isExpanded: false }" className="space-y-1">
              <button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-at-click-prevent="isExpanded = !isExpanded" data-todo-x-bind-aria-expanded="isExpanded">
                <svg data-todo-colon-className="{ 'text-gray-400 rotate-90': isExpanded, 'text-gray-300': !isExpanded }" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" className="mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Calendar
              </button>
              <div data-todo-x-show="isExpanded" data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1">
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Overview
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Members
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Calendar
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Settings
                  </a>
                
              </div>
            </div>
          
          
            <div data-todo-x-data="{ isExpanded: false }" className="space-y-1">
              <button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-at-click-prevent="isExpanded = !isExpanded" data-todo-x-bind-aria-expanded="isExpanded">
                <svg data-todo-colon-className="{ 'text-gray-400 rotate-90': isExpanded, 'text-gray-300': !isExpanded }" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" className="mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Documents
              </button>
              <div data-todo-x-show="isExpanded" data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1">
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Overview
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Members
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Calendar
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Settings
                  </a>
                
              </div>
            </div>
          
          
            <div data-todo-x-data="{ isExpanded: false }" className="space-y-1">
              <button className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-at-click-prevent="isExpanded = !isExpanded" data-todo-x-bind-aria-expanded="isExpanded">
                <svg data-todo-colon-className="{ 'text-gray-400 rotate-90': isExpanded, 'text-gray-300': !isExpanded }" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" className="mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Reports
              </button>
              <div data-todo-x-show="isExpanded" data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1">
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Overview
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Members
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Calendar
                  </a>
                
                  <a href="/" className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    Settings
                  </a>
                
              </div>
            </div>
          
      </nav>
    </div>
  </div>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
