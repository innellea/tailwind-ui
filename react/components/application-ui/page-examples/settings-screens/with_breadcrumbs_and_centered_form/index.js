import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white">
    
    
  <nav data-todo-x-data="{ open: false }" className="bg-light-blue-500" aria-label="Global">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center px-2 lg:px-0">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-white.svg" alt="Workflow">
          </div>
          <div className="hidden lg:ml-8 lg:flex lg:space-x-4">
            
              <a href="/" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-400">
                Dashboard
              </a>
            
              <a href="/" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-400">
                Jobs
              </a>
            
              <a href="/" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-400">
                Applicants
              </a>
            
              <a href="/" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-400">
                Company
              </a>
            
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <div className="max-w-lg w-full lg:max-w-xs">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative text-white focus-within:text-gray-400">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="flex-shrink-0 h-5 w-5" data-todo-x-description="Heroicon name: search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
              </div>
              <input id="search" name="search" className="block w-full bg-light-blue-400 border-transparent py-2 pl-10 pr-3 text-base leading-5 placeholder-white focus:outline-none focus:bg-white focus:ring-0 focus:border-white focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm rounded-md" placeholder="Search" type="search">
            </div>
          </div>
        </div>
        <div className="flex items-center lg:hidden">
          {/* Mobile menu button */}
          <button data-todo-at-click="open = !open" className="inline-flex items-center justify-center p-2 rounded-md text-light-blue-200 hover:text-white hover:bg-light-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" data-todo-x-bind-aria-expanded="open" aria-expanded="false">
            <span className="sr-only">Open menu</span>
            {/* Icon when menu is closed. */}
            <svg data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" data-todo-colon-className="{ 'hidden': open, 'block': !open }" className="block h-6 w-6" data-todo-x-description="Heroicon name: menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
            {/* Icon when menu is open. */}
            <svg data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" data-todo-colon-className="{ 'hidden': !open, 'block': open }" className="hidden h-6 w-6" data-todo-x-description="Heroicon name: x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
          </button>
        </div>
        <div className="hidden lg:ml-4 lg:flex lg:items-center">
          <button className="flex-shrink-0 bg-light-blue-500 p-1 text-light-blue-200 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-500 focus:ring-white">
            <span className="sr-only">Notificaitons</span>
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
          </button>

          {/* Profile dropdown */}
          <div data-todo-at-click-away="open = false" className="ml-4 relative flex-shrink-0" data-todo-x-data="{ open: false }">
            <div>
              <button data-todo-at-click="open = !open" className="bg-light-blue-500 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-500 focus:ring-white" id="user-menu" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" alt="">
              </button>
            </div>
            <div data-todo-x-show="open" data-todo-x-description="Profile dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
              
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div data-todo-x-description="Mobile menu, toggle classes based on menu state." data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" data-todo-colon-className="{ 'block': open, 'hidden': !open }" className="hidden lg:hidden">
      <div className="pt-2 pb-3 px-2 space-y-1">
        
          <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-400">Dashboard</a>
        
          <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-400">Jobs</a>
        
          <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-400">Applicants</a>
        
          <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-400">Company</a>
        
      </div>
      <div className="pt-4 pb-3 border-t border-light-blue-500">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" alt="">
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">Tom Cook</div>
            <div className="text-sm font-medium text-light-blue-200">tom@example.com</div>
          </div>
          <button className="ml-auto flex-shrink-0 bg-light-blue-500 rounded-full p-1 text-light-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-500 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
          </button>
        </div>
        <div className="mt-3 px-2">
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-400">Your Profile</a>
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-400">Settings</a>
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-400">Sign out</a>
          
        </div>
      </div>
    </div>
  </nav>

  {/* Breadcrumb */}
  <nav className="hidden bg-white border-b border-gray-200 lg:flex" aria-label="Breadcrumb">
    <ol className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
      <li className="flex">
        <div className="flex items-center">
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <svg className="flex-shrink-0 h-5 w-5" data-todo-x-description="Heroicon name: home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
            <span className="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li className="flex">
        <div className="flex items-center">
          <svg className="flex-shrink-0 w-6 h-full text-gray-200" preserveraspectratio="none" viewBox="0 0 24 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
          </svg>
          <a href="/" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Projects</a>
        </div>
      </li>
      <li className="flex">
        <div className="flex items-center">
          <svg className="flex-shrink-0 w-6 h-full text-gray-200" preserveraspectratio="none" viewBox="0 0 24 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
          </svg>
          <a href="/" aria-current="page" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Project Nero</a>
        </div>
      </li>
    </ol>
  </nav>

  <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
    <form>
      <div className="space-y-6">
        <div>
          <h1 className="text-lg leading-6 font-medium text-gray-900">
            Project Settings
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Let’s get started by filling in the information below to create your new project.
          </p>
        </div>

        <div>
          <label htmlFor="project_name" className="block text-sm font-medium text-gray-700">
            Project Name
          </label>
          <div className="mt-1">
            <input type="text" name="project_name" id="project_name" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" value="Project Nero">
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div className="mt-1">
            <textarea id="description" name="description" rows="3" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"></textarea>
          </div>
        </div>

        <div className="space-y-2">
          <div className="space-y-1">
            <label htmlFor="add_team_members" className="block text-sm font-medium text-gray-700">
              Add Team Members
            </label>
            <p id="add_team_members_helper" className="sr-only">Search by email address</p>
            <div className="flex">
              <div className="flex-grow">
                <input type="text" name="add_team_members" id="add_team_members" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" placeholder="Email address" aria-describedby="add_team_members_helper">
              </div>
              <span className="ml-3">
                <button type="button" className="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
                  <svg className="-ml-2 mr-1 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
</svg>
                  <span>Add</span>
                </button>
              </span>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <ul className="divide-y divide-gray-200">
              
                <li className="py-4 flex">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                  <div className="ml-3 flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Calvin Hawkins</span>
                    <span className="text-sm text-gray-500">calvin.hawkins@example.com</span>
                  </div>
                </li>
              
                <li className="py-4 flex">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                  <div className="ml-3 flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Bessie Richards</span>
                    <span className="text-sm text-gray-500">bessie.richards@example.com</span>
                  </div>
                </li>
              
                <li className="py-4 flex">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                  <div className="ml-3 flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Floyd Black</span>
                    <span className="text-sm text-gray-500">floyd.black@example.com</span>
                  </div>
                </li>
              
            </ul>
          </div>
        </div>

        <fieldset data-todo-x-data="radioGroup()">
          <legend className="text-sm font-medium text-gray-900">
            Privacy
          </legend>

          <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px" data-todo-x-ref="radiogroup">
            
              
                <div data-todo-colon-className="{ 'border-gray-200': !(active === 0), 'bg-light-blue-50 border-light-blue-200 z-10': active === 0 }" className="relative border rounded-tl-md rounded-tr-md p-4 flex">
                  <div className="flex items-center h-5">
                    <input id="settings-option-0" name="privacy_setting" type="radio" data-todo-at-click="select(0)" data-todo-at-keydown-space="select(0)" data-todo-at-keydown-arrow-up="onArrowUp(0)" data-todo-at-keydown-arrow-down="onArrowDown(0)" className="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300" checked="">
                  </div>
                  <label htmlFor="settings-option-0" className="ml-3 flex flex-col cursor-pointer">
                    <span data-todo-colon-className="{ 'text-light-blue-900': active === 0, 'text-gray-900': !(active === 0) }" className="block text-sm font-medium">
                      Public access
                    </span>
                    <span data-todo-colon-className="{ 'text-light-blue-700': active === 0, 'text-gray-500': !(active === 0) }" className="block text-sm">
                      This project would be available to anyone who has the link
                    </span>
                  </label>
                </div>
              
              
                <div data-todo-colon-className="{ 'border-gray-200': !(active === 1), 'bg-light-blue-50 border-light-blue-200 z-10': active === 1 }" className="relative border border-gray-200 p-4 flex">
                  <div className="flex items-center h-5">
                    <input id="settings-option-1" name="privacy_setting" type="radio" data-todo-at-click="select(1)" data-todo-at-keydown-space="select(1)" data-todo-at-keydown-arrow-up="onArrowUp(1)" data-todo-at-keydown-arrow-down="onArrowDown(1)" className="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
                  </div>
                  <label htmlFor="settings-option-1" className="ml-3 flex flex-col cursor-pointer">
                    <span data-todo-colon-className="{ 'text-light-blue-900': active === 1, 'text-gray-900': !(active === 1) }" className="block text-sm font-medium">
                      Private to Project Members
                    </span>
                    <span data-todo-colon-className="{ 'text-light-blue-700': active === 1, 'text-gray-500': !(active === 1) }" className="block text-sm">
                      Only members of this project would be able to access
                    </span>
                  </label>
                </div>
              
              
                <div data-todo-colon-className="{ 'border-gray-200': !(active === 2), 'bg-light-blue-50 border-light-blue-200 z-10': active === 2 }" className="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                  <div className="flex items-center h-5">
                    <input id="settings-option-2" name="privacy_setting" type="radio" data-todo-at-click="select(2)" data-todo-at-keydown-space="select(2)" data-todo-at-keydown-arrow-up="onArrowUp(2)" data-todo-at-keydown-arrow-down="onArrowDown(2)" className="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
                  </div>
                  <label htmlFor="settings-option-2" className="ml-3 flex flex-col cursor-pointer">
                    <span data-todo-colon-className="{ 'text-light-blue-900': active === 2, 'text-gray-900': !(active === 2) }" className="block text-sm font-medium">
                      Private to you
                    </span>
                    <span data-todo-colon-className="{ 'text-light-blue-700': active === 2, 'text-gray-500': !(active === 2) }" className="block text-sm">
                      You are the only one able to access this project
                    </span>
                  </label>
                </div>
              
          </div>
        </fieldset>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input type="text" name="tags" id="tags" className="mt-1 block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md">
        </div>

        <div className="flex justify-end">
          <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
            Cancel
          </button>
          <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
            Create this project
          </button>
        </div>
      </div>
    </form>
  </main>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
