import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100" style={{minHeight: "900px"}}>
    
  <div data-todo-x-data="{ open: false }" data-todo-at-keydown-window-escape="open = false" className="h-screen bg-white overflow-hidden flex">
    
      <div data-todo-x-show="open" className="fixed inset-0 z-40 flex md:hidden" data-todo-x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state." data-todo-x-ref="dialog" role="dialog" aria-modal="true">
        
          <div data-todo-x-show="open" data-todo-x-transition-enter="transition-opacity ease-linear duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="transition-opacity ease-linear duration-300" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" data-todo-x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state." className="fixed inset-0 bg-gray-600 bg-opacity-75" data-todo-at-click="open = false" aria-hidden="true"></div>
        
        
          <div data-todo-x-show="open" data-todo-x-transition-enter="transition ease-in-out duration-300 transform" data-todo-x-transition-enter-start="-translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transition ease-in-out duration-300 transform" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="-translate-x-full" data-todo-x-description="Off-canvas menu, show/hide based on off-canvas menu state." className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
            
              <div data-todo-x-show="open" data-todo-x-transition-enter="ease-in-out duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="ease-in-out duration-300" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" data-todo-x-description="Close button, show/hide based on off-canvas menu state." className="absolute top-0 right-0 -mr-14 p-1">
                <button className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600" data-todo-at-click="open = false">
                  <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                  <span className="sr-only">Close sidebar</span>
                </button>
              </div>
            
            <div className="flex-shrink-0 px-4 flex items-center">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/easywire-logo-purple-600-mark-gray-900-text.svg" alt="Easywire">
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="h-full flex flex-col">
                <div className="space-y-1">
                  
                    <a href="/" className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group border-l-4 py-2 px-3 flex items-center text-base font-medium" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, Default: &quot;border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
                      Home
                    </a>
                  
                    <a href="/" className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group border-l-4 py-2 px-3 flex items-center text-base font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" data-todo-x-description="Heroicon name: outline/briefcase" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
</svg>
                      Jobs
                    </a>
                  
                    <a href="/" className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group border-l-4 py-2 px-3 flex items-center text-base font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" data-todo-x-description="Heroicon name: outline/document-search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path>
</svg>
                      Applications
                    </a>
                  
                    <a href="/" className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group border-l-4 py-2 px-3 flex items-center text-base font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" data-todo-x-description="Heroicon name: outline/chat" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
</svg>
                      Messages
                    </a>
                  
                    <a href="/" className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group border-l-4 py-2 px-3 flex items-center text-base font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                      <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6" data-todo-x-description="Heroicon name: outline/users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
                      Team
                    </a>
                  
                    <a href="/" className="bg-purple-50 border-purple-600 text-purple-600 group border-l-4 py-2 px-3 flex items-center text-base font-medium" aria-current="page" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
                      <svg className="text-purple-500 mr-4 h-6 w-6" data-todo-x-description="Heroicon name: outline/cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
                      Settings
                    </a>
                  
                </div>
                <div className="mt-auto pt-10 space-y-1">
                  
                    <a href="/" className="group border-l-4 border-transparent py-2 px-3 flex items-center text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                      <svg className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: outline/question-mark-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                      Help
                    </a>
                  
                    <a href="/" className="group border-l-4 border-transparent py-2 px-3 flex items-center text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                      <svg className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: outline/cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
                      Logout
                    </a>
                  
                </div>
              </nav>
            </div>
          </div>
        
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>
    

    {/* Static sidebar for desktop */}
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="w-64 flex flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <nav className="bg-gray-50 border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
          <div className="flex-shrink-0 px-4 flex items-center">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/easywire-logo-purple-600-mark-gray-900-text.svg" alt="Easywire">
          </div>
          <div className="flex-grow mt-5 flex flex-col">
            <div className="flex-1 space-y-1">
              
                <a href="/" className="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, Default: &quot;border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50&quot;">
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;text-purple-500&quot;, Default: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
                  Home
                </a>
              
                <a href="/" className="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50&quot;">
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-purple-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/briefcase" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
</svg>
                  Jobs
                </a>
              
                <a href="/" className="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50&quot;">
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-purple-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/document-search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path>
</svg>
                  Applications
                </a>
              
                <a href="/" className="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50&quot;">
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-purple-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/chat" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
</svg>
                  Messages
                </a>
              
                <a href="/" className="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50&quot;">
                  <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-purple-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
                  Team
                </a>
              
                <a href="/" className="bg-purple-50 border-purple-600 text-purple-600 group border-l-4 py-2 px-3 flex items-center text-sm font-medium" data-todo-x-state-description="undefined: &quot;bg-purple-50 border-purple-600 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50&quot;">
                  <svg className="text-purple-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-purple-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
                  Settings
                </a>
              
            </div>
          </div>
          <div className="flex-shrink-0 block w-full">
            
              <a href="/" className="group border-l-4 border-transparent py-2 px-3 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: outline/question-mark-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                Help
              </a>
            
              <a href="/" className="group border-l-4 border-transparent py-2 px-3 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: outline/cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
                Logout
              </a>
            
          </div>
        </nav>
      </div>
    </div>

    {/* Content area */}
    <div className="flex-1 flex flex-col">
      <div className="w-full max-w-4xl mx-auto md:px-8 xl:px-0">
        <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
          <button className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden" data-todo-at-click="open = true">
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/menu-alt-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
</svg>
          </button>
          <div className="flex-1 flex justify-between px-4 md:px-0">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search_field" className="sr-only">Search</label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
                  </div>
                  <input name="search_field" id="search_field" className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden" placeholder="Search" type="search">
                  <input name="search_field" id="search_field" className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block" placeholder="Search jobs, applicants, and more" type="search">
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
                <span className="sr-only">View notifications</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto focus:outline-none" tabIndex={0} data-todo-x-data="" data-todo-x-init="$el.focus()">
        <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
          <div className="pt-10 pb-16">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
            </div>
            <div className="px-4 sm:px-6 md:px-0">
              <div className="py-6">
                {/* Tabs */}
                <div className="lg:hidden">
                  <label htmlFor="selected-tab" className="sr-only">Select a tab</label>
                  <select id="selected-tab" name="selected-tab" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                    
                      <option>General</option>
                    
                      <option>Password</option>
                    
                      <option>Notifications</option>
                    
                      <option>Plan</option>
                    
                      <option>Billing</option>
                    
                      <option>Team Members</option>
                    
                  </select>
                </div>
                <div className="hidden lg:block">
                  <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                      
                        <a href="/" className="border-purple-500 text-purple-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;border-purple-500 text-purple-600&quot;, Default: &quot;border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700&quot;">
                          General
                        </a>
                      
                        <a href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-purple-500 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700&quot;">
                          Password
                        </a>
                      
                        <a href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-purple-500 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700&quot;">
                          Notifications
                        </a>
                      
                        <a href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-purple-500 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700&quot;">
                          Plan
                        </a>
                      
                        <a href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-purple-500 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700&quot;">
                          Billing
                        </a>
                      
                        <a href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-purple-500 text-purple-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700&quot;">
                          Team Members
                        </a>
                      
                    </nav>
                  </div>
                </div>

                {/* Description list with inline editing */}
                <div className="mt-10 divide-y divide-gray-200">
                  <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Profile
                    </h3>
                    <p className="max-w-2xl text-sm text-gray-500">
                      This information will be displayed publicly so be careful what you share.
                    </p>
                  </div>
                  <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">
                          Name
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">Chelsea Hagon</span>
                          <span className="ml-4 flex-shrink-0">
                            <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm font-medium text-gray-500">
                          Photo
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </span>
                          <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                            <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                              Update
                            </button>
                            <span className="text-gray-300" aria-hidden="true">|</span>
                            <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                              Remove
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">chelsea.hagon@example.com</span>
                          <span className="ml-4 flex-shrink-0">
                            <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                        <dt className="text-sm font-medium text-gray-500">
                          Job title
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">Human Resources Manager</span>
                          <span className="ml-4 flex-shrink-0">
                            <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="mt-10 divide-y divide-gray-200">
                  <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Account
                    </h3>
                    <p className="max-w-2xl text-sm text-gray-500">
                      Manage how information is displayed on your account.
                    </p>
                  </div>
                  <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">
                          Language
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">English</span>
                          <span className="ml-4 flex-shrink-0">
                            <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm font-medium text-gray-500">
                          Date format
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">DD-MM-YYYY</span>
                          <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                            <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                              Update
                            </button>
                            <span className="text-gray-300" aria-hidden="true">|</span>
                            <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                              Remove
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5" data-todo-x-data="{ on: true }">
                        <dt className="text-sm font-medium text-gray-500" id="timezone-option-label" data-todo-at-click="on = !on; $refs.switch.focus()">
                          Automatic timezone
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto" aria-pressed="true" data-todo-x-ref="switch" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'bg-purple-600': on, 'bg-gray-200': !(on) }" aria-labelledby="timezone-option-label" :aria-pressed="on.toString()" data-todo-at-click="on = !on">
                            <span className="sr-only">Use setting</span>
                            <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !(on) }"></span>
                          </button>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200" data-todo-x-data="{ on: false }">
                        <dt className="text-sm font-medium text-gray-500" id="auto-update-option-label" data-todo-at-click="on = !on; $refs.switch.focus()">
                          Auto-update applicant data
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto" aria-pressed="false" data-todo-x-ref="switch" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'bg-purple-600': on, 'bg-gray-200': !(on) }" aria-labelledby="auto-update-option-label" :aria-pressed="on.toString()" data-todo-at-click="on = !on">
                            <span className="sr-only">Use setting</span>
                            <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !(on) }"></span>
                          </button>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
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
