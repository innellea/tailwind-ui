import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-gray-100">
    
    
  <header data-todo-x-data="{ open: false }" className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <div className="relative h-16 flex justify-between">
        <div className="relative z-10 px-2 flex lg:px-0">
          <div className="flex-shrink-0 flex items-center">
            <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg" alt="Workflow">
          </div>
        </div>
        <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
          <div className="max-w-xs w-full">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
              </div>
              <input name="search" id="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="Search" type="search">
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center lg:hidden">
          {/* Mobile menu button */}
          <button data-todo-at-click="open = !open" className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900" data-todo-x-bind-aria-expanded="open" aria-expanded="false">
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
        <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <button className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
          </button>

          {/* Profile dropdown */}
          <div data-todo-at-click-away="open = false" className="flex-shrink-0 relative ml-4" data-todo-x-data="{ open: false }">
            <div>
              <button data-todo-at-click="open = !open" className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" id="user-menu" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" alt="">
              </button>
            </div>
            <div data-todo-x-show="open" data-todo-x-description="Profile dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              
                <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
              
                <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              
                <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
        
          <a href="/" className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
            Dashboard
          </a>
        
          <a href="/" className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
            Jobs
          </a>
        
          <a href="/" className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
            Applicants
          </a>
        
          <a href="/" className="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
            Company
          </a>
        
      </nav>
    </div>

    <nav data-todo-x-description="Mobile menu, toggle classes based on menu state." data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" data-todo-colon-className="{ 'block': open, 'hidden': !open }" className="hidden lg:hidden" aria-label="Global">
      <div className="pt-2 pb-3 px-2 space-y-1">
        
          <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Dashboard</a>
        
          <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Jobs</a>
        
          <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Applicants</a>
        
          <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Company</a>
        
      </div>
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="px-4 flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" alt="">
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">Lisa Marie</div>
            <div className="text-sm font-medium text-gray-500">lisamarie@example.com</div>
          </div>
          <button className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
          </button>
        </div>
        <div className="mt-3 px-2 space-y-1">
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your Profile</a>
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign out</a>
          
        </div>
      </div>
    </nav>
  </header>

  <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav className="space-y-1">
          
            
              <a href="/" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: user-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                <span className="truncate">
                  Profile
                </span>
              </a>
            
            
              <a href="/" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
                <span className="truncate">
                  Account
                </span>
              </a>
            
            
              <a href="/" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: key" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
</svg>
                <span className="truncate">
                  Password
                </span>
              </a>
            
            
              <a href="/" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
                <span className="truncate">
                  Notifications
                </span>
              </a>
            
            
              {/* Current: "bg-gray-50 text-orange-600 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" */}
              <a href="/" className="bg-gray-50 text-orange-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
                {/* Current: "text-orange-500", Default: "text-gray-400 group-hover:text-gray-500" */}
                <svg className="text-orange-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: credit-card" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
</svg>
                <span className="truncate">
                  Plan &amp; Billing
                </span>
              </a>
            
            
              <a href="/" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: view-grid-add" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
</svg>
                <span className="truncate">
                  Integrations
                </span>
              </a>
            
        </nav>
      </aside>

      {/* Payment details */}
      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <section aria-labelledby="payment_details_heading">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 sm:p-6">
                <div>
                  <h2 id="payment_details_heading" className="text-lg leading-6 font-medium text-gray-900">Payment details</h2>
                  <p className="mt-1 text-sm text-gray-500">Update your billing information. Please note that updating your location could affect your tax rates.</p>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-6">
                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                    <input type="text" name="first_name" id="first_name" autocomplete="cc-given-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" name="last_name" id="last_name" autocomplete="cc-family-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div className="col-span-4 sm:col-span-1">
                    <label htmlFor="expiration_date" className="block text-sm font-medium text-gray-700">Expration date</label>
                    <input type="text" name="expiration_date" id="expiration_date" autocomplete="cc-exp" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="MM / YY">
                  </div>

                  <div className="col-span-4 sm:col-span-1">
                    <label htmlFor="security_code" className="flex items-center text-sm font-medium text-gray-700">
                      <span>Security code</span>
                      <svg className="ml-1 flex-shrink-0 h-5 w-5 text-gray-300" data-todo-x-description="Heroicon name: question-mark-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
</svg>
                    </label>
                    <input type="text" name="security_code" id="security_code" autocomplete="cc-csc" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                    <select id="country" name="country" autocomplete="country" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                    <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Plan */}
        <section aria-labelledby="plan_heading">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h2 id="plan_heading" className="text-lg leading-6 font-medium text-gray-900">Plan</h2>
                </div>

                <fieldset data-todo-x-data="radioGroup()">
                  <legend className="sr-only">
                    Pricing plans
                  </legend>
                  <ul className="relative bg-white rounded-md -space-y-px" data-todo-x-ref="radiogroup">
                    
                      
                        <li>
                          <div data-todo-colon-className="{ 'border-gray-200': !(active === 0), 'bg-orange-50 border-orange-200 z-10': active === 0 }" className="relative border rounded-tl-md rounded-tr-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                            <label className="flex items-center text-sm cursor-pointer">
                              <input name="pricing_plan" type="radio" data-todo-at-click="select(0)" data-todo-at-keydown-space="select(0)" data-todo-at-keydown-arrow-up="onArrowUp(0)" data-todo-at-keydown-arrow-down="onArrowDown(0)" className="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300" aria-describedby="plan-option-pricing-0 plan-option-limit-0">
                              <span className="ml-3 font-medium text-gray-900">Startup</span>
                            </label>
                            <p id="plan-option-pricing-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                              <span data-todo-colon-className="{ 'text-orange-900': active === 0, 'text-gray-900': !(active === 0) }" className="font-medium">$29 / mo</span>
                              <span data-todo-colon-className="{ 'text-orange-700': active === 0, 'text-gray-500': !(active === 0) }">($290 / yr)</span>
                            </p>
                            <p id="plan-option-limit-0" data-todo-colon-className="{ 'text-orange-700': active === 0, 'text-gray-500': !(active === 0) }" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">Up to 5 active job postings</p>
                          </div>
                        </li>
                      
                      
                        <li>
                          <div data-todo-colon-className="{ 'border-gray-200': !(active === 1), 'bg-orange-50 border-orange-200 z-10': active === 1 }" className="relative border border-gray-200 p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                            <label className="flex items-center text-sm cursor-pointer">
                              <input name="pricing_plan" type="radio" data-todo-at-click="select(1)" data-todo-at-keydown-space="select(1)" data-todo-at-keydown-arrow-up="onArrowUp(1)" data-todo-at-keydown-arrow-down="onArrowDown(1)" className="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300" aria-describedby="plan-option-pricing-1 plan-option-limit-1" checked="">
                              <span className="ml-3 font-medium text-gray-900">Business</span>
                            </label>
                            <p id="plan-option-pricing-1" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                              <span data-todo-colon-className="{ 'text-orange-900': active === 1, 'text-gray-900': !(active === 1) }" className="font-medium">$99 / mo</span>
                              <span data-todo-colon-className="{ 'text-orange-700': active === 1, 'text-gray-500': !(active === 1) }">($990 / yr)</span>
                            </p>
                            <p id="plan-option-limit-1" data-todo-colon-className="{ 'text-orange-700': active === 1, 'text-gray-500': !(active === 1) }" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">Up to 25 active job postings</p>
                          </div>
                        </li>
                      
                      
                        <li>
                          <div data-todo-colon-className="{ 'border-gray-200': !(active === 2), 'bg-orange-50 border-orange-200 z-10': active === 2 }" className="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                            <label className="flex items-center text-sm cursor-pointer">
                              <input name="pricing_plan" type="radio" data-todo-at-click="select(2)" data-todo-at-keydown-space="select(2)" data-todo-at-keydown-arrow-up="onArrowUp(2)" data-todo-at-keydown-arrow-down="onArrowDown(2)" className="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300" aria-describedby="plan-option-pricing-2 plan-option-limit-2">
                              <span className="ml-3 font-medium text-gray-900">Enterprise</span>
                            </label>
                            <p id="plan-option-pricing-2" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                              <span data-todo-colon-className="{ 'text-orange-900': active === 2, 'text-gray-900': !(active === 2) }" className="font-medium">$249 / mo</span>
                              <span data-todo-colon-className="{ 'text-orange-700': active === 2, 'text-gray-500': !(active === 2) }">($2490 / yr)</span>
                            </p>
                            <p id="plan-option-limit-2" data-todo-colon-className="{ 'text-orange-700': active === 2, 'text-gray-500': !(active === 2) }" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">Unlimited active job postings</p>
                          </div>
                        </li>
                      
                  </ul>
                </fieldset>

                <div className="flex items-center">
                  <button type="button" data-todo-at-click="on = !on" data-todo-colon-aria-pressed="on.toString()" aria-pressed="true" aria-labelledby="toggleLabel" data-todo-x-data="{ on: true }" :className="{ 'bg-gray-200': !on, 'bg-orange-500': on }" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200">
                    <span className="sr-only">Use setting</span>
                    <span aria-hidden="true" data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !on }" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                  </button>
                  <span id="toggleLabel" className="ml-3">
                    <span className="text-sm font-medium text-gray-900">Annual billing </span>
                    <span className="text-sm text-gray-500">(Save 10%)</span>
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Billing history */}
        <section aria-labelledby="billing_history_heading">
          <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 sm:px-6">
              <h2 id="billing_history_heading" className="text-lg leading-6 font-medium text-gray-900">Billing history</h2>
            </div>
            <div className="mt-6 flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-t border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <!--
                            `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                          -->
                          <th scope="col" className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <span className="sr-only">View receipt</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200" data-todo-x-max="1">
                        
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              1/1/2020
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Business Plan - Annual Billing
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              CA$109.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/" className="text-orange-600 hover:text-orange-900">View receipt</a>
                            </td>
                          </tr>
                        
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              1/1/2019
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Business Plan - Annual Billing
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              CA$109.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/" className="text-orange-600 hover:text-orange-900">View receipt</a>
                            </td>
                          </tr>
                        
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              1/1/2018
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Business Plan - Annual Billing
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              CA$109.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/" className="text-orange-600 hover:text-orange-900">View receipt</a>
                            </td>
                          </tr>
                        
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              1/1/2017
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Business Plan - Annual Billing
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              CA$109.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/" className="text-orange-600 hover:text-orange-900">View receipt</a>
                            </td>
                          </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
