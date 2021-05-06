import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100 h-screen" style={{minHeight: "500px"}}>
    
  
    <section data-todo-x-data="{ open: true }" data-todo-at-keydown-window-escape="open = false" data-todo-x-init="$watch(&quot;open&quot;, o => !o &amp;&amp; window.setTimeout(() => (open = true), 1000))" data-todo-x-show="open" className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" data-todo-x-ref="dialog" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        <div data-todo-x-description="Background overlay, show/hide based on slide-over state." className="absolute inset-0" data-todo-at-click="open = false" aria-hidden="true"></div>

        <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          
            <div data-todo-x-show="open" data-todo-x-transition-enter="transform transition ease-in-out duration-500 sm:duration-700" data-todo-x-transition-enter-start="translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transform transition ease-in-out duration-500 sm:duration-700" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="translate-x-full" className="w-screen max-w-md" data-todo-x-description="Slide-over panel, show/hide based on slide-over state.">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-white" id="slide-over-title">
                      Panel title
                    </h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" data-todo-at-click="open = false">
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-indigo-300">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta.
                    </p>
                  </div>
                </div>
                <div className="relative flex-1 py-6 px-4 sm:px-6">
                  {/* Replace with your content */}
                  <div className="absolute inset-0 py-6 px-4 sm:px-6">
                    <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true"></div>
                  </div>
                  {/* /End replace */}
                </div>
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
