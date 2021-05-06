import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-gray-300" style={{height: "560px"}}>
    
  <div data-todo-x-data="{ open: true }" data-todo-x-init="
    () => document.body.classList.add('overflow-hidden');
    $watch('open', value => {
      if (value === true) { document.body.classList.add('overflow-hidden') }
      else { document.body.classList.remove('overflow-hidden') }
    });" data-todo-x-show="open" className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div data-todo-x-show="open" data-todo-x-description="Background overlay, show/hide based on modal state." data-todo-x-transition-enter="ease-out duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="ease-in duration-200" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
      <div data-todo-x-show="open" data-todo-x-description="Modal panel, show/hide based on modal state." data-todo-x-transition-enter="ease-out duration-300" data-todo-x-transition-enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" data-todo-x-transition-enter-end="opacity-100 translate-y-0 sm:scale-100" data-todo-x-transition-leave="ease-in duration-200" data-todo-x-transition-leave-start="opacity-100 translate-y-0 sm:scale-100" data-todo-x-transition-leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Payment successful
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button data-todo-at-click="open = false; setTimeout(() => open = true, 1000)" type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
            Deactivate
          </button>
          <button data-todo-at-click="open = false; setTimeout(() => open = true, 1000)" type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
