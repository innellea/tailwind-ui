import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div style={{maxHeight: "800px"}} _className="overflow-y-auto">
    
  <div className="min-h-screen bg-gray-100">
    {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
    <header className="bg-white shadow-sm lg:static lg:overflow-y-visible" data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" data-todo-colon-className="{ 'fixed inset-0 z-40 overflow-y-auto': open }" data-todo-x-data="Components.popover({ open: false, focus: false })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
          <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&amp;shade=500" alt="Workflow">
              </a>
            </div>
          </div>
          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
                  </div>
                  <input id="search" name="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="Search" type="search">
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
            {/* Mobile menu button */}
            <button type="button" className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" data-todo-colon-aria-expanded="open.toString()">
              <span className="sr-only">Open menu</span>
              <svg data-todo-x-description="Icon when menu is closed.

Heroicon name: outline/menu" data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" className="block h-6 w-6" data-todo-colon-className="{ 'hidden': open, 'block': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
              <svg data-todo-x-description="Icon when menu is open.

Heroicon name: outline/x" data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" className="hidden h-6 w-6" data-todo-colon-className="{ 'block': open, 'hidden': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <a href="/" className="text-sm font-medium text-gray-900 hover:underline">
              Go Premium
            </a>
            <a href="/" className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
            </a>

            {/* Profile dropdown */}
            <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="flex-shrink-0 relative ml-5">
              <div>
                <button type="button" className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" id="user-menu" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                </button>
              </div>
              
                <div data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  
                    <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                  
                    <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                  
                    <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                  
                </div>
              
            </div>

            <a href="/" className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
              New Post
            </a>
          </div>
        </div>
      </div>

      <nav data-todo-x-description="Mobile menu, show/hide based on menu state." className="lg:hidden" aria-label="Global" data-todo-x-ref="panel" data-todo-x-show="open" data-todo-at-click-away="open = false">
        <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
          
            <a href="/" aria-current="page" className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium text-gray-900">Home</a>
          
            <a href="/" aria-current="false" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">Popular</a>
          
            <a href="/" aria-current="false" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">Communities</a>
          
            <a href="/" aria-current="false" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">Trending</a>
          
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Chelsea Hagon</div>
              <div className="text-sm font-medium text-gray-500">chelseahagon@example.com</div>
            </div>
            <button type="button" className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
            </button>
          </div>
          <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
            
              <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your Profile</a>
            
              <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>
            
              <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign out</a>
            
          </div>
        </div>
      </nav>
    </header>

    <div className="py-10">
      <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
          <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
            <div className="pb-8 space-y-1">
              
                <a href="/" className="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
                  <svg className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
                  <span className="truncate">
                    Home
                  </span>
                </a>
              
                <a href="/" className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="false">
                  <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: outline/fire" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
</svg>
                  <span className="truncate">
                    Popular
                  </span>
                </a>
              
                <a href="/" className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="false">
                  <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: outline/user-group" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
</svg>
                  <span className="truncate">
                    Communities
                  </span>
                </a>
              
                <a href="/" className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="false">
                  <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: outline/trending-up" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
</svg>
                  <span className="truncate">
                    Trending
                  </span>
                </a>
              
            </div>
            <div className="pt-10">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="communities-headline">
                My communities
              </p>
              <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
                
                  <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span className="truncate">
                      Movies
                    </span>
                  </a>
                
                  <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span className="truncate">
                      Food
                    </span>
                  </a>
                
                  <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span className="truncate">
                      Sports
                    </span>
                  </a>
                
                  <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span className="truncate">
                      Animals
                    </span>
                  </a>
                
                  <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span className="truncate">
                      Science
                    </span>
                  </a>
                
                  <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span className="truncate">
                      Dinosaurs
                    </span>
                  </a>
                
                  <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span className="truncate">
                      Talents
                    </span>
                  </a>
                
                  <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span className="truncate">
                      Gaming
                    </span>
                  </a>
                
              </div>
            </div>
          </nav>
        </div>
        <main className="lg:col-span-9 xl:col-span-6">
          <div className="px-4 sm:px-0">
            <div className="sm:hidden">
              <label htmlFor="question-tabs" className="sr-only">Select a tab</label>
              <select id="question-tabs" className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500">
                <option value="#/recent">Recent</option>
                <option value="#/most-liked">Most Liked</option>
                <option value="#/most-answers">Most Answers</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                
                  <a href="/" aria-current="page" className="text-gray-900 rounded-l-lg  group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                    <span>Recent</span>
                    <span aria-hidden="true" className="bg-rose-500 absolute inset-x-0 bottom-0 h-0.5"></span>
                  </a>
                
                  <a href="/" aria-current="false" className="text-gray-500 hover:text-gray-700   group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                    <span>Most Liked</span>
                    <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                  </a>
                
                  <a href="/" aria-current="false" className="text-gray-500 hover:text-gray-700  rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                    <span>Most Answers</span>
                    <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                  </a>
                
              </nav>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="sr-only">Recent questions</h1>
            <ul className="space-y-4">
              
                <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                  <article aria-labelledby="question-title-81614">
                    <div>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="/" className="hover:underline">Dries Vincent</a>
                          </p>
                          <p className="text-sm text-gray-500">
                            <a href="/" className="hover:underline">December 9 at 11:43 AM</a>
                          </p>
                        </div>
                        <div className="flex-shrink-0 self-center flex">
                          <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="relative inline-block text-left">
                            <div>
                              <button type="button" className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="options-menu-0" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                                <span className="sr-only">Open options</span>
                                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                              </button>
                            </div>

                            
                              <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0">
                                <div className="py-1" role="none">
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
                                      <span>Add to favorites</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/code" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                                      <span>Embed</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
</svg>
                                      <span>Report content</span>
                                    </a>
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                      <h2 id="question-title-81614" className="mt-4 text-base font-medium text-gray-900">
                        What would you have done differently if you ran Jurassic Park?
                      </h2>
                    </div>
                    <div className="mt-2 text-sm text-gray-700 space-y-4">
                      
          <p>
            Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.
          </p>
          <p>
            Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be…
          </p>
        
                    </div>
                    <div className="mt-6 flex justify-between space-x-8">
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
</svg>
                            <span className="font-medium text-gray-900">29</span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">11</span>
                            <span className="sr-only">replies</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">2.7k</span>
                            <span className="sr-only">views</span>
                          </button>
                        </span>
                      </div>
                      <div className="flex text-sm">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
</svg>
                            <span className="font-medium text-gray-900">Share</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </article>
                </li>
              
                <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                  <article aria-labelledby="question-title-89019">
                    <div>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="/" className="hover:underline">Lindsay Walton</a>
                          </p>
                          <p className="text-sm text-gray-500">
                            <a href="/" className="hover:underline">December 8 at 10:45 PM</a>
                          </p>
                        </div>
                        <div className="flex-shrink-0 self-center flex">
                          <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="relative inline-block text-left">
                            <div>
                              <button type="button" className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="options-menu-1" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                                <span className="sr-only">Open options</span>
                                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                              </button>
                            </div>

                            
                              <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-1">
                                <div className="py-1" role="none">
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
                                      <span>Add to favorites</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/code" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                                      <span>Embed</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
</svg>
                                      <span>Report content</span>
                                    </a>
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                      <h2 id="question-title-89019" className="mt-4 text-base font-medium text-gray-900">
                        What's it like to be a golden retriever?
                      </h2>
                    </div>
                    <div className="mt-2 text-sm text-gray-700 space-y-4">
                      
          <p>
            Man I am glad you asked this question. I'm a 6 year old golden retriever and while I still have a few years left to experience, I think I've been around long enough to tell you what it's really like.
          </p>
          <p>
            Most people think being a dog is awesome. You sleep as much as you want, all of your meals are prepared for you, and someone literally picks up your poop you. And yeah, you know what, those parts <em>are</em> pretty awesome. But there's a dark side to being a golden retriever that they don't tell you about…
          </p>
        
                    </div>
                    <div className="mt-6 flex justify-between space-x-8">
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
</svg>
                            <span className="font-medium text-gray-900">316</span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">41</span>
                            <span className="sr-only">replies</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">11.7k</span>
                            <span className="sr-only">views</span>
                          </button>
                        </span>
                      </div>
                      <div className="flex text-sm">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
</svg>
                            <span className="font-medium text-gray-900">Share</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </article>
                </li>
              
                <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                  <article aria-labelledby="question-title-92742">
                    <div>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="/" className="hover:underline">Blake Reid</a>
                          </p>
                          <p className="text-sm text-gray-500">
                            <a href="/" className="hover:underline">December 8 at 10:11 PM</a>
                          </p>
                        </div>
                        <div className="flex-shrink-0 self-center flex">
                          <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="relative inline-block text-left">
                            <div>
                              <button type="button" className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="options-menu-2" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                                <span className="sr-only">Open options</span>
                                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                              </button>
                            </div>

                            
                              <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-2">
                                <div className="py-1" role="none">
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
                                      <span>Add to favorites</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/code" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                                      <span>Embed</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
</svg>
                                      <span>Report content</span>
                                    </a>
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                      <h2 id="question-title-92742" className="mt-4 text-base font-medium text-gray-900">
                        Am I actually dead like the guy from the Sixth Sense?
                      </h2>
                    </div>
                    <div className="mt-2 text-sm text-gray-700 space-y-4">
                      
          <p>
            This is something most people wonder about themselves at least 4 or 5 times throughout their life. Everyone ignores you for weeks on end (including your immediate family) and the only person who will talk to you is a little boy you are treating because he thinks he sees dead people.
          </p>
          <p>
            The fact is, you can't <em>really</em> know if you're just a weird dead ghost thing until the rest of the world finally decides to acknowledge you again. But there are a few things you can test that are generally <em>correlated</em> with not being a weird dead ghost thing, namely…
          </p>
        
                    </div>
                    <div className="mt-6 flex justify-between space-x-8">
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
</svg>
                            <span className="font-medium text-gray-900">114</span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">19</span>
                            <span className="sr-only">replies</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">987</span>
                            <span className="sr-only">views</span>
                          </button>
                        </span>
                      </div>
                      <div className="flex text-sm">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
</svg>
                            <span className="font-medium text-gray-900">Share</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </article>
                </li>
              
                <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                  <article aria-labelledby="question-title-41150">
                    <div>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="/" className="hover:underline">Kristin Watson</a>
                          </p>
                          <p className="text-sm text-gray-500">
                            <a href="/" className="hover:underline">December 8 at 7:11 PM</a>
                          </p>
                        </div>
                        <div className="flex-shrink-0 self-center flex">
                          <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="relative inline-block text-left">
                            <div>
                              <button type="button" className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="options-menu-3" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                                <span className="sr-only">Open options</span>
                                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                              </button>
                            </div>

                            
                              <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-3">
                                <div className="py-1" role="none">
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
                                      <span>Add to favorites</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/code" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                                      <span>Embed</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
</svg>
                                      <span>Report content</span>
                                    </a>
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                      <h2 id="question-title-41150" className="mt-4 text-base font-medium text-gray-900">
                        What's the most unforgettable meal you've ever had?
                      </h2>
                    </div>
                    <div className="mt-2 text-sm text-gray-700 space-y-4">
                      
          <p>
            One time we ordered a pizza from this local place downtown we'd always wanted to try. Everyone told us it was the best pizza they'd ever had in their entire lives and we couldn't wait to see what it was all about.
          </p>
          <p>
            We placed the order at 5:45pm and it showed up at around 6:30pm. We opened the box excited to take in the aroma of this incredible pie, but we were not prepared for what we saw. Instead of the pepperoni pizza we ordered, they had delivered us a…
          </p>
        
                    </div>
                    <div className="mt-6 flex justify-between space-x-8">
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
</svg>
                            <span className="font-medium text-gray-900">121</span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">8</span>
                            <span className="sr-only">replies</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">2.1k</span>
                            <span className="sr-only">views</span>
                          </button>
                        </span>
                      </div>
                      <div className="flex text-sm">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
</svg>
                            <span className="font-medium text-gray-900">Share</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </article>
                </li>
              
                <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                  <article aria-labelledby="question-title-62760">
                    <div>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="/" className="hover:underline">Hector Gibbons</a>
                          </p>
                          <p className="text-sm text-gray-500">
                            <a href="/" className="hover:underline">December 8 at 6:02 PM</a>
                          </p>
                        </div>
                        <div className="flex-shrink-0 self-center flex">
                          <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="relative inline-block text-left">
                            <div>
                              <button type="button" className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="options-menu-4" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                                <span className="sr-only">Open options</span>
                                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                              </button>
                            </div>

                            
                              <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-4">
                                <div className="py-1" role="none">
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
                                      <span>Add to favorites</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/code" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                                      <span>Embed</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
</svg>
                                      <span>Report content</span>
                                    </a>
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                      <h2 id="question-title-62760" className="mt-4 text-base font-medium text-gray-900">
                        What would your pro wrestling finishing move be?
                      </h2>
                    </div>
                    <div className="mt-2 text-sm text-gray-700 space-y-4">
                      
          <p>
            Great question. The first thing you need to decide is should your finishing move be something you do to hurt your opponent enough to then get the pin, or a submission move that causes your opponent to give up.
          </p>
          <p>
            Personally, I've always found submission moves to be a lot less exciting than a powerbomb or a moonsault off the top rope. Sure there's a few classics that the crowd goes nuts for like the Sharpshooter, but most of them just don't get the same pop as a Tombstone or a Stone Cold Stunner. If I had to choose, my first choice would be…
          </p>
        
                    </div>
                    <div className="mt-6 flex justify-between space-x-8">
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
</svg>
                            <span className="font-medium text-gray-900">1.5k</span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">117</span>
                            <span className="sr-only">replies</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">21.5k</span>
                            <span className="sr-only">views</span>
                          </button>
                        </span>
                      </div>
                      <div className="flex text-sm">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
</svg>
                            <span className="font-medium text-gray-900">Share</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </article>
                </li>
              
                <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                  <article aria-labelledby="question-title-41387">
                    <div>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="/" className="hover:underline">Jillian Steward</a>
                          </p>
                          <p className="text-sm text-gray-500">
                            <a href="/" className="hover:underline">December 8 at 5:34 PM</a>
                          </p>
                        </div>
                        <div className="flex-shrink-0 self-center flex">
                          <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="relative inline-block text-left">
                            <div>
                              <button type="button" className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="options-menu-5" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                                <span className="sr-only">Open options</span>
                                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
                              </button>
                            </div>

                            
                              <div data-todo-x-show="open" data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-5">
                                <div className="py-1" role="none">
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
                                      <span>Add to favorites</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/code" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                                      <span>Embed</span>
                                    </a>
                                  <a href="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                      <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
</svg>
                                      <span>Report content</span>
                                    </a>
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                      <h2 id="question-title-41387" className="mt-4 text-base font-medium text-gray-900">
                        How on earth do magnets work though seriously?
                      </h2>
                    </div>
                    <div className="mt-2 text-sm text-gray-700 space-y-4">
                      
          <p>
            Magnets are an incredibly interesting natural phenomenon, with their discovery dating back at least 2500 years.
          </p>
          <p>
            Scientists will tell you a bunch of stuff about how in magnetic materials, most of the electrons spin in the same direction. Somehow that apparently magically makes random bits of metal stick together. Sure, okay scientists. Here's the truth, what they don't want you to know…
          </p>
        
                    </div>
                    <div className="mt-6 flex justify-between space-x-8">
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
</svg>
                            <span className="font-medium text-gray-900">776</span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">27</span>
                            <span className="sr-only">replies</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
</svg>
                            <span className="font-medium text-gray-900">6.2k</span>
                            <span className="sr-only">views</span>
                          </button>
                        </span>
                      </div>
                      <div className="flex text-sm">
                        <span className="inline-flex items-center text-sm">
                          <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
</svg>
                            <span className="font-medium text-gray-900">Share</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </article>
                </li>
              
            </ul>
          </div>
        </main>
        <aside className="hidden xl:block xl:col-span-4">
          <div className="sticky top-4 space-y-4">
            <section aria-labelledby="who-to-follow-heading">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                    Who to follow
                  </h2>
                  <div className="mt-6 flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      
                        <li className="flex items-center py-4 space-x-3">
                          <div className="flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              <a href="/">Leonard Krasner</a>
                            </p>
                            <p className="text-sm text-gray-500">
                              <a href="/">@leonardkrasner</a>
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <button type="button" className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100">
                              <svg className="-ml-1 mr-0.5 h-5 w-5 text-rose-400" data-todo-x-description="Heroicon name: solid/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
</svg>
                              <span>
                                Follow
                              </span>
                            </button>
                          </div>
                        </li>
                      
                        <li className="flex items-center py-4 space-x-3">
                          <div className="flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              <a href="/">Floyd Miles</a>
                            </p>
                            <p className="text-sm text-gray-500">
                              <a href="/">@floydmiles</a>
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <button type="button" className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100">
                              <svg className="-ml-1 mr-0.5 h-5 w-5 text-rose-400" data-todo-x-description="Heroicon name: solid/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
</svg>
                              <span>
                                Follow
                              </span>
                            </button>
                          </div>
                        </li>
                      
                        <li className="flex items-center py-4 space-x-3">
                          <div className="flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              <a href="/">Emily Selman</a>
                            </p>
                            <p className="text-sm text-gray-500">
                              <a href="/">@emilyselman</a>
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <button type="button" className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100">
                              <svg className="-ml-1 mr-0.5 h-5 w-5 text-rose-400" data-todo-x-description="Heroicon name: solid/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
</svg>
                              <span>
                                Follow
                              </span>
                            </button>
                          </div>
                        </li>
                      
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a href="/" className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section aria-labelledby="trending-heading">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h2 id="trending-heading" className="text-base font-medium text-gray-900">
                    Trending
                  </h2>
                  <div className="mt-6 flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      
                        <li className="flex py-4 space-x-3">
                          <div className="flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-gray-800">What books do you have on your bookshelf just to look smarter than you actually are?</p>
                            <div className="mt-2 flex">
                              <span className="inline-flex items-center text-sm">
                                <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                  <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                                  <span className="font-medium text-gray-900">291</span>
                                </button>
                              </span>
                            </div>
                          </div>
                        </li>
                      
                        <li className="flex py-4 space-x-3">
                          <div className="flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-gray-800">Have you ever lied about your age to buy a kid's meal at a restaurant?</p>
                            <div className="mt-2 flex">
                              <span className="inline-flex items-center text-sm">
                                <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                  <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                                  <span className="font-medium text-gray-900">164</span>
                                </button>
                              </span>
                            </div>
                          </div>
                        </li>
                      
                        <li className="flex py-4 space-x-3">
                          <div className="flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-gray-800">Does Santa Claus pay property taxes for his workshop at the North Pole?</p>
                            <div className="mt-2 flex">
                              <span className="inline-flex items-center text-sm">
                                <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                  <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
</svg>
                                  <span className="font-medium text-gray-900">133</span>
                                </button>
                              </span>
                            </div>
                          </div>
                        </li>
                      
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a href="/" className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  </div>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
