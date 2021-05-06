import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div style={{minHeight: "940px"}} className="bg-gray-100">
    
  <div data-todo-x-data="{ open: false }" data-todo-at-keydown-window-escape="open = false" className="h-screen flex overflow-hidden bg-white">
    
      <div data-todo-x-show="open" className="fixed inset-0 flex z-40 lg:hidden" data-todo-x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state." data-todo-x-ref="dialog" role="dialog" aria-modal="true">
        
          <div data-todo-x-show="open" data-todo-x-transition-enter="transition-opacity ease-linear duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="transition-opacity ease-linear duration-300" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" data-todo-x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state." className="fixed inset-0 bg-gray-600 bg-opacity-75" data-todo-at-click="open = false" aria-hidden="true"></div>
        
        
          <div data-todo-x-show="open" data-todo-x-transition-enter="transition ease-in-out duration-300 transform" data-todo-x-transition-enter-start="-translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transition ease-in-out duration-300 transform" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="-translate-x-full" data-todo-x-description="Off-canvas menu, show/hide based on off-canvas menu state." className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
            
              <div data-todo-x-show="open" data-todo-x-transition-enter="ease-in-out duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="ease-in-out duration-300" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" data-todo-x-description="Close button, show/hide based on off-canvas menu state." className="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" data-todo-at-click="open = false">
                  <span className="sr-only">Close sidebar</span>
                  <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                </button>
              </div>
            
            <div className="flex-shrink-0 flex items-center px-4">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg" alt="Workflow">
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2">
                <div className="space-y-1">
                  
                    <a href="/" className="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md" data-todo-x-state-on="Current" data-todo-x-state-off="Default" aria-current="page" data-todo-x-state-description="Current: &quot;bg-gray-900 text-white&quot;, Default: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                      <svg className="text-gray-300 mr-4 h-6 w-6" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;text-gray-300&quot;, Default: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
                      All Issues
                    </a>
                  
                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/view-list" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
</svg>
                      My Issues
                    </a>
                  
                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/user-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                      Assigned
                    </a>
                  
                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/archive" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
</svg>
                      Closed
                    </a>
                  
                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                      Recent
                    </a>
                  
                </div>
                <div className="mt-10">
                  <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Projects
                  </p>
                  <div className="mt-2 space-y-1">
                    
                      <a href="/" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 text-base font-medium rounded-md">
                        <span className="truncate">GraphQL API</span>
                      </a>
                    
                      <a href="/" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 text-base font-medium rounded-md">
                        <span className="truncate">iOS App</span>
                      </a>
                    
                      <a href="/" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 text-base font-medium rounded-md">
                        <span className="truncate">Marketing Site Redesign</span>
                      </a>
                    
                      <a href="/" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 text-base font-medium rounded-md">
                        <span className="truncate">Customer Portal</span>
                      </a>
                    
                  </div>
                </div>
              </nav>
            </div>
          </div>
        
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>
    

    {/* Static sidebar for desktop */}
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg" alt="Workflow">
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <div className="space-y-1">
                
                  <a href="/" className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-on="Current" data-todo-x-state-off="Default" aria-current="page" data-todo-x-state-description="Current: &quot;bg-gray-900 text-white&quot;, Default: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                    <svg className="text-gray-300 mr-3 h-6 w-6" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;text-gray-300&quot;, Default: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
                    All Issues
                  </a>
                
                  <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                    <svg className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/view-list" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
</svg>
                    My Issues
                  </a>
                
                  <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                    <svg className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/user-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                    Assigned
                  </a>
                
                  <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                    <svg className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/archive" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
</svg>
                    Closed
                  </a>
                
                  <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">
                    <svg className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;" data-todo-x-description="Heroicon name: outline/clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                    Recent
                  </a>
                
              </div>
              <div className="mt-10">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Projects
                </p>
                <div className="mt-2 space-y-1">
                  
                    <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
                      <span className="truncate">
                        GraphQL API
                      </span>
                    </a>
                  
                    <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
                      <span className="truncate">
                        iOS App
                      </span>
                    </a>
                  
                    <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
                      <span className="truncate">
                        Marketing Site Redesign
                      </span>
                    </a>
                  
                    <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
                      <span className="truncate">
                        Customer Portal
                      </span>
                    </a>
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
        <button type="button" className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden" data-todo-at-click="open = true">
          <span className="sr-only">Open sidebar</span>
          <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/menu-alt-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
</svg>
        </button>
        <div className="flex-1 px-4 flex justify-between">
          <div className="flex-1 flex">
            <form className="w-full flex lg:ml-0" action="#" method="GET">
              <label htmlFor="search_field" className="sr-only">Search</label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
                </div>
                <input id="search_field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search">
              </div>
            </form>
          </div>
          <div className="ml-4 flex items-center lg:ml-6">
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Create
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 relative overflow-y-auto focus:outline-none" tabIndex={-1} data-todo-x-data="" data-todo-x-init="$el.focus()">
        <div className="py-8 xl:py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
            <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
              <div>
                <div>
                  <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">ARIA attribute misspelled</h1>
                      <p className="mt-2 text-sm text-gray-500">
                        #400 opened by
                        {/* space */}
                        <a href="/" className="font-medium text-gray-900">Hilary Mahy</a>
                        {/* space */}
                        in
                        {/* space */}
                        <a href="/" className="font-medium text-gray-900">Customer Portal</a>
                      </p>
                    </div>
                    <div className="mt-4 flex space-x-3 md:mt-0">
                      <button type="button" className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
</svg>
                        <span>Edit</span>
                      </button>
                      <button type="button" className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/bell" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
</svg>
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </div>
                  <aside className="mt-8 xl:hidden">
                    <h2 className="sr-only">Details</h2>
                    <div className="space-y-5">
                      <div className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-green-500" data-todo-x-description="Heroicon name: solid/lock-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
</svg>
                        <span className="text-green-700 text-sm font-medium">Open Issue</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                        <span className="text-gray-900 text-sm font-medium">4 comments</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
</svg>
                        <span className="text-gray-900 text-sm font-medium">Created on <time dateTime="2020-12-02">Dec 2, 2020</time></span>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                      <div>
                        <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                        <ul className="mt-3 space-y-3">
                          <li className="flex justify-start">
                            <a href="/" className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <img className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80" alt="">
                              </div>
                              <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                        <ul className="mt-2 leading-8">
                          <li className="inline">
                            <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                              <div className="absolute flex-shrink-0 flex items-center justify-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span>
                              </div>
                              <div className="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                            </a>
                            {/* space */}
                          </li>
                          <li className="inline">
                            <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                              <div className="absolute flex-shrink-0 flex items-center justify-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true"></span>
                              </div>
                              <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                            </a>
                            {/* space */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  <div className="py-3 xl:pt-6 xl:pb-0">
                    <h2 className="sr-only">Description</h2>
                    <div className="prose max-w-none">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque similique id tempora molestiae deserunt at suscipit, dolor voluptatem, numquam, harum consequatur laboriosam voluptas tempore aut voluptatum alias?
                      </p>
                      <ul>
                        <li>
                          Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate fermentum id facilisis nam pharetra. Aliquet leo tellus.
                        </li>
                        <li>
                          Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.
                        </li>
                        <li>
                          Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut tellus in sed dignissim.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className="pb-4">
                      <h2 id="activity-title" className="text-lg font-medium text-gray-900">Activity</h2>
                    </div>
                    <div className="pt-6">
                      <!-- Activity feed-->
                      <div className="flow-root">
                        <ul className="-mb-8">
                          
                            <li>
                              <div className="relative pb-8">
                                
                                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                <div className="relative flex items-start space-x-3">
                                  
                                    <div className="relative">
                                      <img className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80" alt="">

                                      <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                                        <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                                      </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div>
                                        <div className="text-sm">
                                          <a href="/" className="font-medium text-gray-900">Eduardo Benz</a>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">
                                          Commented 6d ago
                                        </p>
                                      </div>
                                      <div className="mt-2 text-sm text-gray-700">
                                        <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. 
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </li>
                          
                            <li>
                              <div className="relative pb-8">
                                
                                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                <div className="relative flex items-start space-x-3">
                                  
                                    <div>
                                      <div className="relative px-1">
                                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                          <svg className="h-5 w-5 text-gray-500" data-todo-x-description="Heroicon name: solid/user-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
</svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-1.5">
                                      <div className="text-sm text-gray-500">
                                        <a href="/" className="font-medium text-gray-900">Hilary Mahy</a>
                                        {/* space */}
                                        assigned
                                        {/* space */}
                                        <a href="/" className="font-medium text-gray-900">Kristin Watson</a>
                                        {/* space */}
                                        <span className="whitespace-nowrap">2d ago</span>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </li>
                          
                            <li>
                              <div className="relative pb-8">
                                
                                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                <div className="relative flex items-start space-x-3">
                                  
                                    <div>
                                      <div className="relative px-1">
                                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                          <svg className="h-5 w-5 text-gray-500" data-todo-x-description="Heroicon name: solid/tag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
</svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-0">
                                      <div className="text-sm leading-8 text-gray-500">
                                        <span className="mr-0.5">
                                          <a href="/" className="font-medium text-gray-900">Hilary Mahy</a>
                                          {/* space */}
                                          added tags
                                        </span>
                                        {/* space */}
                                        <span className="mr-0.5">
                                          
                                            <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                              <span className="absolute flex-shrink-0 flex items-center justify-center">
                                                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span>
                                              </span>
                                              <span className="ml-3.5 font-medium text-gray-900">Bug</span>
                                            </a>
                                            {/* space */}
                                          
                                            <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                              <span className="absolute flex-shrink-0 flex items-center justify-center">
                                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true"></span>
                                              </span>
                                              <span className="ml-3.5 font-medium text-gray-900">Accessibility</span>
                                            </a>
                                            {/* space */}
                                          
                                        </span>
                                        <span className="whitespace-nowrap">6h ago</span>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </li>
                          
                            <li>
                              <div className="relative pb-8">
                                <div className="relative flex items-start space-x-3">
                                  
                                    <div className="relative">
                                      <img className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80" alt="">

                                      <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                                        <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                                      </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div>
                                        <div className="text-sm">
                                          <a href="/" className="font-medium text-gray-900">Jason Meyers</a>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">
                                          Commented 2h ago
                                        </p>
                                      </div>
                                      <div className="mt-2 text-sm text-gray-700">
                                        <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </li>
                          
                        </ul>
                      </div>
                      <div className="mt-6">
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <img className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80" alt="">

                              <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                                <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                              </span>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <form action="#">
                              <div>
                                <label htmlFor="comment" className="sr-only">Comment</label>
                                <textarea id="comment" name="comment" rows="3" className="shadow-sm block w-full focus:ring-gray-900 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md" placeholder="Leave a comment"></textarea>
                              </div>
                              <div className="mt-6 flex items-center justify-end space-x-4">
                                <button type="button" className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                  <svg className="-ml-1 mr-2 h-5 w-5 text-green-500" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                                  <span>Close issue</span>
                                </button>
                                <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                  Comment
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <aside className="hidden xl:block xl:pl-8">
              <h2 className="sr-only">Details</h2>
              <div className="space-y-5">
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-green-500" data-todo-x-description="Heroicon name: solid/lock-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
</svg>
                  <span className="text-green-700 text-sm font-medium">Open Issue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                  <span className="text-gray-900 text-sm font-medium">4 comments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
</svg>
                  <span className="text-gray-900 text-sm font-medium">Created on <time dateTime="2020-12-02">Dec 2, 2020</time></span>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                  <ul className="mt-3 space-y-3">
                    <li className="flex justify-start">
                      <a href="/" className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80" alt="">
                        </div>
                        <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                  <ul className="mt-2 leading-8">
                    <li className="inline">
                      <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                        <div className="absolute flex-shrink-0 flex items-center justify-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span>
                        </div>
                        <div className="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                      </a>
                      {/* space */}
                    </li>
                    <li className="inline">
                      <a href="/" className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                        <div className="absolute flex-shrink-0 flex items-center justify-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true"></span>
                        </div>
                        <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                      </a>
                      {/* space */}
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  </div>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
