import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100" style={{minHeight: "320px"}}>
    
  
    <div data-todo-x-show="show" data-todo-x-data="{ show: true }" className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
      
        <div data-todo-x-show="show" data-todo-x-transition-enter="transform ease-out duration-300 transition" data-todo-x-transition-enter-start="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" data-todo-x-transition-enter-end="translate-y-0 opacity-100 sm:translate-x-0" data-todo-x-transition-leave="transition ease-in duration-100" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" data-todo-x-description="Notification panel, show/hide based on alert state." className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="p-4">
            <div className="flex items-center">
              <div className="w-0 flex-1 flex justify-between">
                <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                  Discussion archived
                </p>
                <button className="ml-3 flex-shrink-0 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Undo
                </button>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button data-todo-at-click="show = false; setTimeout(() => show = true, 1000)" className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
