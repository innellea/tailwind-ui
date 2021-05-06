<template>
    <div class="bg-gray-100 h-screen" style="min-height: 768px;">
    
    <div @keydown.window.escape="open = false; setTimeout(() => open = true, 1000);" class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <section @click.away="open = false; setTimeout(() => open = true, 1000);" class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16" aria-labelledby="slide-over-heading">
          <transition enter-active-class="transform transition ease-in-out duration-500 sm:duration-700" enter-class="translate-x-full" enter-to-class="translate-x-0" leave-active-class="transform transition ease-in-out duration-500 sm:duration-700" leave-class="translate-x-0" leave-to-class="translate-x-full"><div class="w-screen max-w-md" x-description="Slide-over panel, show/hide based on slide-over state." v-if="open">
            <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div class="p-6">
                <div class="flex items-start justify-between">
                  <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900">
                    Team
                  </h2>
                  <div class="ml-3 h-7 flex items-center">
                    <button @click="open = false; setTimeout(() => open = true, 1000);" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                      <span class="sr-only">Close panel</span>
                      <svg class="h-6 w-6" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-200">
                <div class="px-6">
                  <nav class="-mb-px flex space-x-6" x-descriptions="Tab component">
                  
                    
                        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                        <a href="#" class="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" aria-current="page">All</a>
                    
                    
                        <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Online</a>
                    
                    
                        <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Offline</a>
                    
                  </nav>
                </div>
              </div>
              <ul class="divide-y divide-gray-200 overflow-y-auto">
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Jenny Wilson</p>
                            <p class="text-sm text-gray-500 truncate">@jennyw91</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-0" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Bob Schwartz</p>
                            <p class="text-sm text-gray-500 truncate">@bobschwartz</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-1" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-1">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Jane Cooper</p>
                            <p class="text-sm text-gray-500 truncate">@janecoops</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-2" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-2">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Brooklyn Simmons</p>
                            <p class="text-sm text-gray-500 truncate">@brook_simmons</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-3" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-3">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Billy Cooper</p>
                            <p class="text-sm text-gray-500 truncate">@bcooper</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-4" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-4">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Diane Russell</p>
                            <p class="text-sm text-gray-500 truncate">@dee_russ</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-5" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-5">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Bob Schwartz</p>
                            <p class="text-sm text-gray-500 truncate">@bobschwartz</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-6" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-6">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Jane Cooper</p>
                            <p class="text-sm text-gray-500 truncate">@janecoops</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-7" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-7">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Brooklyn Simmons</p>
                            <p class="text-sm text-gray-500 truncate">@brook_simmons</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-8" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-8">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Jenny Wilson</p>
                            <p class="text-sm text-gray-500 truncate">@jennyw91</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-9" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-9">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Billy Cooper</p>
                            <p class="text-sm text-gray-500 truncate">@bcooper</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-10" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-10">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Diane Russell</p>
                            <p class="text-sm text-gray-500 truncate">@dee_russ</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-11" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-11">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Bob Schwartz</p>
                            <p class="text-sm text-gray-500 truncate">@bobschwartz</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-12" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-12">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Jane Cooper</p>
                            <p class="text-sm text-gray-500 truncate">@janecoops</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-13" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-13">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Brooklyn Simmons</p>
                            <p class="text-sm text-gray-500 truncate">@brook_simmons</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-14" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-14">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Jenny Wilson</p>
                            <p class="text-sm text-gray-500 truncate">@jennyw91</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-15" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-15">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Billy Cooper</p>
                            <p class="text-sm text-gray-500 truncate">@bcooper</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-16" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-16">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
                  <li class="px-6 py-5 relative">
                    <div class="group flex justify-between items-center">
                      <a href="#" class="-m-1 p-1 block">
                        <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                        <div class="flex-1 flex items-center min-w-0 relative">
                          <span class="flex-shrink-0 inline-block relative">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300" aria-hidden="true"></span>
                          </span>
                          <div class="ml-4 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">Diane Russell</p>
                            <p class="text-sm text-gray-500 truncate">@dee_russ</p>
                          </div>
                        </div>
                      </a>
                      <div @keydown.window.escape="open = false" @click.away="open = false" class="ml-2 relative inline-block text-left">
                        <button @click="open = !open" class="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-17" aria-haspopup="true" aria-expanded="false" x-bind:aria-expanded="open">
                          <span class="sr-only">Open options menu</span>
                          <span class="flex items-center justify-center h-full w-full rounded-full">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/dots-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
  </svg>
                          </span>
                        </button>

                        <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"><div v-if="open" x-description="Dropdown panel, show/hide based on dropdown state." class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-label="options-menu">
                          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-17">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Send message</a>
                          </div>
                        </div></transition>
                      </div>
                    </div>
                  </li>
              
              </ul>
            </div>
          </div></transition>
        </section>
      </div>
    </div>

    </div>
</template>

<script>
export default {
  data: () => ({
	open: true,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
    open: false,
  })
}
</script>
