import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100 h-screen" style={{minHeight: "768px"}}>
    
  
    <section data-todo-x-data="{ open: true }" data-todo-at-keydown-window-escape="open = false" data-todo-x-init="$watch(&quot;open&quot;, o => !o &amp;&amp; window.setTimeout(() => (open = true), 1000))" data-todo-x-show="open" className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" data-todo-x-ref="dialog" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        <div data-todo-x-description="Background overlay, show/hide based on slide-over state." className="absolute inset-0" data-todo-at-click="open = false" aria-hidden="true"></div>

        <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          
            <div data-todo-x-show="open" data-todo-x-transition-enter="transform transition ease-in-out duration-500 sm:duration-700" data-todo-x-transition-enter-start="translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transform transition ease-in-out duration-500 sm:duration-700" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="translate-x-full" className="w-screen max-w-md" data-todo-x-description="Slide-over panel, show/hide based on slide-over state.">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                      Team
                    </h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500" data-todo-at-click="open = false">
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200">
                  <div className="px-6">
                    <nav className="-mb-px flex space-x-6" data-todo-x-descriptions="Tab component">
                      
                        <a href="/" className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;border-indigo-500 text-indigo-600&quot;, Default: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">All</a>
                      
                        <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-indigo-500 text-indigo-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">Online</a>
                      
                        <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-indigo-500 text-indigo-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">Offline</a>
                      
                    </nav>
                  </div>
                </div>
                <ul className="divide-y divide-gray-200 overflow-y-auto" data-todo-x-max="1">
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Leslie Alexander</p>
                              <p className="text-sm text-gray-500 truncate">@lesliealexander</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-0" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Michael Foster</p>
                              <p className="text-sm text-gray-500 truncate">@michaelfoster</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-1" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-1">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Dries Vincent</p>
                              <p className="text-sm text-gray-500 truncate">@driesvincent</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-2" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-2">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Lindsay Walton</p>
                              <p className="text-sm text-gray-500 truncate">@lindsaywalton</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-3" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-3">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Courtney Henry</p>
                              <p className="text-sm text-gray-500 truncate">@courtneyhenry</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-4" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-4">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Tom Cook</p>
                              <p className="text-sm text-gray-500 truncate">@tomcook</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-5" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-5">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Whitney Francis</p>
                              <p className="text-sm text-gray-500 truncate">@whitneyfrancis</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-6" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-6">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Leonard Krasner</p>
                              <p className="text-sm text-gray-500 truncate">@leonardkrasner</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-7" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-7">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Floyd Miles</p>
                              <p className="text-sm text-gray-500 truncate">@floydmiles</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-8" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-8">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Emily Selman</p>
                              <p className="text-sm text-gray-500 truncate">@emilyselman</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-9" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-9">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Kristin Watson</p>
                              <p className="text-sm text-gray-500 truncate">@kristinwatson</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-10" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-10">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Emma Dorsey</p>
                              <p className="text-sm text-gray-500 truncate">@emmadorsey</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-11" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-11">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Alicia Bell</p>
                              <p className="text-sm text-gray-500 truncate">@aliciabell</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-12" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-12">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Jenny Wilson</p>
                              <p className="text-sm text-gray-500 truncate">@jennywilson</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-13" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-13">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Anna Roberts</p>
                              <p className="text-sm text-gray-500 truncate">@annaroberts</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-14" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-14">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Benjamin Russel</p>
                              <p className="text-sm text-gray-500 truncate">@benjaminrussel</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-15" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-15">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Jeffrey Webb</p>
                              <p className="text-sm text-gray-500 truncate">@jeffreywebb</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-16" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-16">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                    <li className="px-6 py-5 relative">
                      <div className="group flex justify-between items-center">
                        <a href="/" className="-m-1 p-1 block">
                          <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                          <div className="flex-1 flex items-center min-w-0 relative">
                            <span className="flex-shrink-0 inline-block relative">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                              <span className="bg-gray-300 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white" data-todo-x-state-on="Online" data-todo-x-state-off="Offline" aria-hidden="true" data-todo-x-state-description="Online: &quot;bg-green-400&quot;, Offline: &quot;bg-gray-300&quot;"></span>
                            </span>
                            <div className="ml-4 truncate">
                              <p className="text-sm font-medium text-gray-900 truncate">Kathryn Murphy</p>
                              <p className="text-sm text-gray-500 truncate">@kathrynmurphy</p>
                            </div>
                          </div>
                        </a>
                        <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-2 relative inline-block text-left">
                          <button type="button" className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-17" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                            <span className="sr-only">Open options menu</span>
                            <span className="flex items-center justify-center h-full w-full rounded-full">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                            </span>
                          </button>
                          
                            <div data-todo-x-show="open" data-todo-x-description="Dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-17">
                              <div className="py-1" role="none">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </li>
                  
                </ul>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
