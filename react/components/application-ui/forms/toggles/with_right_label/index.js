import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="p-8 flex items-center justify-center bg-white">
    
  <div className="flex items-center">
    <button type="button" data-todo-at-click="on = !on" data-todo-colon-aria-pressed="on.toString()" aria-pressed="false" aria-labelledby="toggleLabel" data-todo-x-data="{ on: false }" :className="{ 'bg-gray-200': !on, 'bg-indigo-600': on }" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !on }" className="pointer-events-none translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
    </button>
    <span className="ml-3" id="toggleLabel">
      <span className="text-sm font-medium text-gray-900">Annual billing </span>
      <span className="text-sm text-gray-500">(Save 10%)</span>
    </span>
  </div>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
