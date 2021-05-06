import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div _style={{maxHeight: "800px"}}>
    
  <div className="min-h-screen bg-white">
    <header className="relative pb-24 bg-light-blue-800 sm:pb-32">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=60&amp;&amp;sat=-100" alt="">
        <div className="absolute inset-0 bg-gradient-to-l from-light-blue-800 to-cyan-700" style={{mixBlendMode: "multiply"}} aria-hidden="true"></div>
      </div>
      <div className="relative z-10" data-todo-x-data="Components.popover({ open: false, focus: true })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&amp;shade=300" alt="">
            </a>
            <div className="-mr-2 flex items-center lg:hidden">
              <button type="button" className="bg-light-blue-800 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-cyan-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" data-todo-colon-aria-expanded="open.toString()">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
              </button>
            </div>
          </div>
          <div className="hidden space-x-10 lg:flex lg:ml-10">
            
              <a href="/" className="text-base font-medium text-white hover:text-cyan-100">Changelog</a>
            
              <a href="/" className="text-base font-medium text-white hover:text-cyan-100">About</a>
            
              <a href="/" className="text-base font-medium text-white hover:text-cyan-100">Partners</a>
            
              <a href="/" className="text-base font-medium text-white hover:text-cyan-100">News</a>
            
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <a href="/" className="py-2 px-6 bg-white bg-opacity-10 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-20">
              Login
            </a>
          </div>
        </nav>

        
          <div data-todo-x-show="open" data-todo-x-transition-enter="duration-150 ease-out" data-todo-x-transition-enter-start="opacity-0 scale-95" data-todo-x-transition-enter-end="opacity-100 scale-100" data-todo-x-transition-leave="duration-100 ease-in" data-todo-x-transition-leave-start="opacity-100 scale-100" data-todo-x-transition-leave-end="opacity-0 scale-95" data-todo-x-description="Mobile menu, show/hide based on menu open state." className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden" data-todo-x-ref="panel" data-todo-at-click-away="open = false">
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&amp;shade=400" alt="">
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" data-todo-at-click="toggle">
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
                  <a href="/" className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-green-400 text-white font-medium hover:bg-green-500">Login</a>
                </div>
              </div>
            </div>
          </div>
        
      </div>

      <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
        <p className="mt-6 text-xl text-cyan-100 max-w-3xl">Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.</p>
      </div>
    </header>

    <main>
      {/* Side-by-side grid */}
      <div className="bg-white">
        <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="divide-y divide-warm-gray-200">
            <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contactHeading">
              <h2 id="contactHeading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Collaborate
                    </h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">
                          Email
                        </dt>
                        <dd>
                          support@example.com
                        </dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">
                          Phone number
                        </dt>
                        <dd>
                          +1 (555) 123-4567
                        </dd>
                      </div>
                    </dl>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Press
                    </h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">
                          Email
                        </dt>
                        <dd>
                          support@example.com
                        </dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">
                          Phone number
                        </dt>
                        <dd>
                          +1 (555) 123-4567
                        </dd>
                      </div>
                    </dl>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Join our team
                    </h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">
                          Email
                        </dt>
                        <dd>
                          support@example.com
                        </dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">
                          Phone number
                        </dt>
                        <dd>
                          +1 (555) 123-4567
                        </dd>
                      </div>
                    </dl>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Say hello
                    </h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">
                          Email
                        </dt>
                        <dd>
                          support@example.com
                        </dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">
                          Phone number
                        </dt>
                        <dd>
                          +1 (555) 123-4567
                        </dd>
                      </div>
                    </dl>
                  </div>
                
              </div>
            </section>
            <section className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="locationHeading">
              <h2 id="locationHeading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
                Locations
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Los Angeles
                    </h3>
                    <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                      
                        <p>
                          4556 Brendan Ferry
                        </p>
                      
                        <p>
                          Los Angeles, CA 90210
                        </p>
                      
                    </div>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      New York
                    </h3>
                    <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                      
                        <p>
                          886 Walter Streets
                        </p>
                      
                        <p>
                          New York, NY 12345
                        </p>
                      
                    </div>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Toronto
                    </h3>
                    <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                      
                        <p>
                          7363 Cynthia Pass
                        </p>
                      
                        <p>
                          Toronto, ON N3Y 4H8
                        </p>
                      
                    </div>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Chicago
                    </h3>
                    <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                      
                        <p>
                          726 Mavis Island
                        </p>
                      
                        <p>
                          Chicago, IL 60601
                        </p>
                      
                    </div>
                  </div>
                
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-warm-gray-50">
        <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-warm-gray-900">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-warm-gray-500">Can’t find the answer you’re looking for? Reach out to our <a href="/" className="font-medium text-cyan-700 hover:text-cyan-600">customer support</a> team.</p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                
                  <div>
                    <dt className="text-lg font-medium text-warm-gray-900">
                      How do you make holy water?
                    </dt>
                    <dd className="mt-2 text-base text-warm-gray-500">
                      You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </dd>
                  </div>
                
                  <div>
                    <dt className="text-lg font-medium text-warm-gray-900">
                      What's the best thing about Switzerland?
                    </dt>
                    <dd className="mt-2 text-base text-warm-gray-500">
                      I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </dd>
                  </div>
                
                  <div>
                    <dt className="text-lg font-medium text-warm-gray-900">
                      What do you call someone with no body and no nose?
                    </dt>
                    <dd className="mt-2 text-base text-warm-gray-500">
                      Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </dd>
                  </div>
                
                  <div>
                    <dt className="text-lg font-medium text-warm-gray-900">
                      Why do you never see elephants hiding in trees?
                    </dt>
                    <dd className="mt-2 text-base text-warm-gray-500">
                      Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </dd>
                  </div>
                
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative">
        <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true"></div>
        <div className="relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-10 px-6 bg-gradient-to-l from-light-blue-800 to-cyan-700 rounded-3xl sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label htmlFor="emailAddress" className="sr-only">Email address</label>
                <input id="emailAddress" name="emailAddress" type="email" autocomplete="email" required="" className="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white rounded-md" placeholder="Enter your email">
                <button type="submit" className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-green-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-cyan-100">
                We care about the protection of your data. Read our
                {/* space */}
                <a href="/" className="text-white font-medium underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">Footer</h2>
      <div className="max-w-md mx-auto py-12 px-4 sm:max-w-3xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&amp;shade=400" alt="Company name">
            <p className="text-warm-gray-500 text-base">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
</svg>
                </a>
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
</svg>
                </a>
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
                </a>
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
</svg>
                </a>
              
                <a href="/" className="text-warm-gray-400 hover:text-warm-gray-500">
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
                <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Marketing
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Analytics
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Commerce
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Insights
                      </a>
                    </li>
                  
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Pricing
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Documentation
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Guides
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        API Status
                      </a>
                    </li>
                  
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        About
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Blog
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Jobs
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Press
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Partners
                      </a>
                    </li>
                  
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Claim
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Privacy
                      </a>
                    </li>
                  
                    <li>
                      <a href="/" className="text-base text-warm-gray-500 hover:text-warm-gray-900">
                        Terms
                      </a>
                    </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-warm-gray-200 pt-8">
          <p className="text-base text-warm-gray-400 xl:text-center">
            © 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
