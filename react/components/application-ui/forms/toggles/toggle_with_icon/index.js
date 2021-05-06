import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="p-8 flex items-center justify-center bg-white">
    
  <button type="button" data-todo-x-data="{ on: false }" data-todo-at-click="on = !on" data-todo-colon-aria-pressed="on.toString()" aria-pressed="false" :className="{ 'bg-gray-200': !on, 'bg-indigo-600': on }" className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <span className="sr-only">Use setting</span>
    <span data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !on }" className="pointer-events-none translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
      <span data-todo-colon-className="{ 'opacity-0 ease-out duration-100': on, 'opacity-100 ease-in duration-200': !on }" className="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
        <svg className="bg-white h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
          <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </span>
      <span data-todo-colon-className="{ 'opacity-100 ease-in duration-200': on, 'opacity-0 ease-out duration-100': !on }" className="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
        <svg className="bg-white h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
          <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
        </svg>
      </span>
    </span>
  </button>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
