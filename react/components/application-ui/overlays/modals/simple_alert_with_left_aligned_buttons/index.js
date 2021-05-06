import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-300" style={{height: "560px"}}>
    
  
    <div data-todo-x-data="{ open: true }" data-todo-at-keydown-window-escape="open = false" data-todo-x-init="$watch(&quot;open&quot;, o => !o &amp;&amp; window.setTimeout(() => (open = true), 1000))" data-todo-x-show="open" className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" data-todo-x-ref="dialog" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
          <div data-todo-x-show="open" data-todo-x-transition-enter="ease-out duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="ease-in duration-200" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" data-todo-x-description="Background overlay, show/hide based on modal state." className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-todo-at-click="open = false" aria-hidden="true"></div>
        

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
        
          <div data-todo-x-show="open" data-todo-x-transition-enter="ease-out duration-300" data-todo-x-transition-enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" data-todo-x-transition-enter-end="opacity-100 translate-y-0 sm:scale-100" data-todo-x-transition-leave="ease-in duration-200" data-todo-x-transition-leave-start="opacity-100 translate-y-0 sm:scale-100" data-todo-x-transition-leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" data-todo-x-description="Modal panel, show/hide based on modal state." className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-red-600" data-todo-x-description="Heroicon name: outline/exclamation" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
</svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Deactivate account
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex">
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm" data-todo-at-click="open = false">
                Deactivate
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" data-todo-at-click="open = false">
                Cancel
              </button>
            </div>
          </div>
        
      </div>
    </div>
  

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
