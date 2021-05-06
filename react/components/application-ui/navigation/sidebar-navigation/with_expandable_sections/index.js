import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="h-screen flex bg-gray-100" style={{minHeight: "640px"}}>
    <div className="flex flex-col w-64">
      
  <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
    <div className="flex items-center flex-shrink-0 px-4">
      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
    </div>
    <div className="mt-5 flex-grow flex flex-col">
      <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
        
          
            <div>
              <a href="/" className="bg-gray-100 text-gray-900 group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                Dashboard
              </a>
            </div>
          
          
            <div data-todo-x-data="{ open: false }" className="space-y-1">
              <button type="button" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-x-state-on="Current" data-todo-x-state-off="Default" aria-controls="sub-menu-1" data-todo-at-click="open = !open" aria-expanded="false" data-todo-x-bind-aria-expanded="open.toString()" data-todo-x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                <svg className="text-gray-300 mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" aria-hidden="true" data-todo-colon-className="{ 'text-gray-400 rotate-90': open, 'text-gray-300': !(open) }">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Team
              </button>
              <div data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1" id="sub-menu-1" data-todo-x-show="open">
                
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
          
          
            <div data-todo-x-data="{ open: false }" className="space-y-1">
              <button type="button" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-x-state-on="Current" data-todo-x-state-off="Default" aria-controls="sub-menu-2" data-todo-at-click="open = !open" aria-expanded="false" data-todo-x-bind-aria-expanded="open.toString()" data-todo-x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                <svg className="text-gray-300 mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" aria-hidden="true" data-todo-colon-className="{ 'text-gray-400 rotate-90': open, 'text-gray-300': !(open) }">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Projects
              </button>
              <div data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1" id="sub-menu-2" data-todo-x-show="open">
                
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
          
          
            <div data-todo-x-data="{ open: false }" className="space-y-1">
              <button type="button" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-x-state-on="Current" data-todo-x-state-off="Default" aria-controls="sub-menu-3" data-todo-at-click="open = !open" aria-expanded="false" data-todo-x-bind-aria-expanded="open.toString()" data-todo-x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                <svg className="text-gray-300 mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" aria-hidden="true" data-todo-colon-className="{ 'text-gray-400 rotate-90': open, 'text-gray-300': !(open) }">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Calendar
              </button>
              <div data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1" id="sub-menu-3" data-todo-x-show="open">
                
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
          
          
            <div data-todo-x-data="{ open: false }" className="space-y-1">
              <button type="button" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-x-state-on="Current" data-todo-x-state-off="Default" aria-controls="sub-menu-4" data-todo-at-click="open = !open" aria-expanded="false" data-todo-x-bind-aria-expanded="open.toString()" data-todo-x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                <svg className="text-gray-300 mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" aria-hidden="true" data-todo-colon-className="{ 'text-gray-400 rotate-90': open, 'text-gray-300': !(open) }">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Documents
              </button>
              <div data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1" id="sub-menu-4" data-todo-x-show="open">
                
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
          
          
            <div data-todo-x-data="{ open: false }" className="space-y-1">
              <button type="button" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-todo-x-state-on="Current" data-todo-x-state-off="Default" aria-controls="sub-menu-5" data-todo-at-click="open = !open" aria-expanded="false" data-todo-x-bind-aria-expanded="open.toString()" data-todo-x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                <svg className="text-gray-300 mr-2 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" data-todo-x-state-on="Expanded" data-todo-x-state-off="Collapsed" aria-hidden="true" data-todo-colon-className="{ 'text-gray-400 rotate-90': open, 'text-gray-300': !(open) }">
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor"></path>
                </svg>
                Reports
              </button>
              <div data-todo-x-description="Expandable link section, show/hide based on state." className="space-y-1" id="sub-menu-5" data-todo-x-show="open">
                
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
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
