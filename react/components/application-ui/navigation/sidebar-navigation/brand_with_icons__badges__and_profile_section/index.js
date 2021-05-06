import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="h-screen flex bg-gray-100" style={{minHeight: "640px"}}>
    <div className="flex flex-col w-64">
      
  <div className="flex flex-col h-0 flex-1 bg-indigo-700">
    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg" alt="Workflow">
      </div>
      <nav className="mt-5 flex-1 px-2 space-y-1" aria-label="Sidebar">
        
          <a href="/" className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;bg-indigo-800 text-white&quot;, Default: &quot;text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75&quot;">
            <svg className="mr-3 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
            Dashboard
            </a>
        
          <a href="/" className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-indigo-800 text-white&quot;, undefined: &quot;text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75&quot;">
            <svg className="mr-3 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
            Team
            
              <span className="bg-indigo-800 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;bg-indigo-600&quot;, Default: &quot;bg-indigo-800&quot;">
                3
              </span>
            </a>
        
          <a href="/" className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-indigo-800 text-white&quot;, undefined: &quot;text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75&quot;">
            <svg className="mr-3 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/folder" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
</svg>
            Projects
            
              <span className="bg-indigo-800 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full" data-todo-x-state-description="undefined: &quot;bg-indigo-600&quot;, undefined: &quot;bg-indigo-800&quot;">
                4
              </span>
            </a>
        
          <a href="/" className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-indigo-800 text-white&quot;, undefined: &quot;text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75&quot;">
            <svg className="mr-3 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/calendar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
            Calendar
            </a>
        
          <a href="/" className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-indigo-800 text-white&quot;, undefined: &quot;text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75&quot;">
            <svg className="mr-3 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/inbox" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
</svg>
            Documents
            
              <span className="bg-indigo-800 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full" data-todo-x-state-description="undefined: &quot;bg-indigo-600&quot;, undefined: &quot;bg-indigo-800&quot;">
                12
              </span>
            </a>
        
          <a href="/" className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-indigo-800 text-white&quot;, undefined: &quot;text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75&quot;">
            <svg className="mr-3 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
            Reports
            </a>
        
      </nav>
    </div>
    <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
      <a href="/" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">
              Tom Cook
            </p>
            <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
              View profile
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
