import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div _style={{maxHeight: "800px"}} className="overflow-y-auto">
    
  <div className="min-h-screen bg-white">
    <header className="relative z-10" data-todo-x-data="Components.popover({ open: false, focus: true })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
      <div className="bg-warm-gray-50">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8" aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&amp;shade=500" alt="">
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <button type="button" className="bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" data-todo-colon-aria-expanded="open.toString()">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
                </button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:flex lg:ml-10">
              
                <a href="/" className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">Changelog</a>
              
                <a href="/" className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">About</a>
              
                <a href="/" className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">Partners</a>
              
                <a href="/" className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">News</a>
              
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <a href="/" className="py-2 px-6 bg-warm-gray-100 border border-transparent rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-200">
              Login
            </a>
          </div>
        </nav>
      </div>

      
        <div data-todo-x-show="open" data-todo-x-transition-enter="duration-150 ease-out" data-todo-x-transition-enter-start="opacity-0 scale-95" data-todo-x-transition-enter-end="opacity-100 scale-100" data-todo-x-transition-leave="duration-100 ease-in" data-todo-x-transition-leave-start="opacity-100 scale-100" data-todo-x-transition-leave-end="opacity-0 scale-95" data-todo-x-description="Mobile menu, show/hide based on menu open state." className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden" data-todo-x-ref="panel" data-todo-at-click-away="open = false">
          <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&amp;shade=500" alt="">
              </div>
              <div className="-mr-2">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500" data-todo-at-click="toggle">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                </button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                
                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">Changelog</a>
                
                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">About</a>
                
                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">Partners</a>
                
                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">News</a>
                
              </div>
              <div className="mt-6 px-5">
                <a href="/" className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-teal-500 text-white font-medium hover:bg-teal-600">Login</a>
              </div>
            </div>
          </div>
        </div>
      
    </header>

    <main>
      {/* Header */}
      <div className="bg-warm-gray-50">
        <div className="relative z-10 overflow-hidden py-24 lg:py-32">
          <div className="max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">Get in touch</h1>
            <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et fermentum amet consequat.</p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="relative bg-white" aria-labelledby="contactHeading">
        <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg className="absolute top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-warm-gray-200" fill="currentColor"></rect>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"></rect>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 id="contactHeading" className="sr-only">Contact us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12">
                <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                  <svg className="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1"></path>
                    <defs>
                      <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff"></stop>
                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                  <svg className="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1"></path>
                    <defs>
                      <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff"></stop>
                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                  <svg className="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1"></path>
                    <defs>
                      <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff"></stop>
                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Contact information</h3>
                <p className="mt-6 text-base text-teal-50 max-w-3xl">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
                <dl className="mt-8 space-y-6">
                  <dt><span className="sr-only">Phone number</span></dt>
                  <dd className="flex text-base text-teal-50">
                    <svg className="flex-shrink-0 w-6 h-6 text-teal-200" data-todo-x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
</svg>
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                  <dt><span className="sr-only">Email</span></dt>
                  <dd className="flex text-base text-teal-50">
                    <svg className="flex-shrink-0 w-6 h-6 text-teal-200" data-todo-x-description="Heroicon name: outline/mail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
</svg>
                    <span className="ml-3">support@workcation.com</span>
                  </dd>
                </dl>
                <ul className="mt-8 flex space-x-12" role="list">
                  <li>
                    <a className="text-teal-200 hover:text-teal-100" href="/">
                      <span className="sr-only">Facebook</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                        <path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="text-teal-200 hover:text-teal-100" href="/">
                      <span className="sr-only">GitHub</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                        <path d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12" fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="text-teal-200 hover:text-teal-100" href="/">
                      <span className="sr-only">Twitter</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                        <path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-warm-gray-900">First name</label>
                    <div className="mt-1">
                      <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md">
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-warm-gray-900">Last name</label>
                    <div className="mt-1">
                      <input type="text" name="last_name" id="last_name" autocomplete="family-name" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md">
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">Email</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autocomplete="email" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md">
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-warm-gray-900">Phone</label>
                      <span id="phone-optional" className="text-sm text-warm-gray-500">Optional</span>
                    </div>
                    <div className="mt-1">
                      <input type="text" name="phone" id="phone" autocomplete="tel" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" aria-describedby="phone-optional">
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-900">Subject</label>
                    <div className="mt-1">
                      <input type="text" name="subject" id="subject" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md">
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">Message</label>
                      <span id="message-max" className="text-sm text-warm-gray-500">Max. 500 characters</span>
                    </div>
                    <div className="mt-1">
                      <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" aria-describedby="message-max"></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button type="submit" className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section aria-labelledby="officesHeading">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2 id="officesHeading" className="text-3xl font-extrabold text-warm-gray-900">Our offices</h2>
          <p className="mt-6 text-lg text-warm-gray-500 max-w-3xl">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium text-warm-gray-900">Los Angeles</h3>
              <p className="mt-2 text-base text-warm-gray-500">
                <span className="block">4556 Brendan Ferry</span>
                <span className="block">Los Angeles, CA 90210</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-warm-gray-900">New York</h3>
              <p className="mt-2 text-base text-warm-gray-500">
                <span className="block">886 Walter Streets</span>
                <span className="block">New York, NY 12345</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-warm-gray-900">Toronto</h3>
              <p className="mt-2 text-base text-warm-gray-500">
                <span className="block">7363 Cynthia Pass</span>
                <span className="block">Toronto, ON N3Y 4H8</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-warm-gray-900">London</h3>
              <p className="mt-2 text-base text-warm-gray-500">
                <span className="block">114 Cobble Lane</span>
                <span className="block">London N1 2EF</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-warm-gray-900" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=warmGray&amp;shade=400" alt="Company name">
            <p className="text-warm-gray-400 text-base">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
</svg>
                </a>
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
</svg>
                </a>
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
                </a>
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
</svg>
                </a>
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-300">
                  <span className="sr-only">Dribbble</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
</svg>
                </a>
              
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Marketing
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Analytics
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Commerce
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Insights
                      </a>
                    </li>
                  
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Pricing
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Documentation
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Guides
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        API Status
                      </a>
                    </li>
                  
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        About
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Blog
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Jobs
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Press
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Partners
                      </a>
                    </li>
                  
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Claim
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Privacy
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        Terms
                      </a>
                    </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-warm-gray-700 pt-8">
          <p className="text-base text-warm-gray-400 xl:text-center">
            © 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
