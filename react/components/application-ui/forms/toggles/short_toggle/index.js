import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="p-8 flex items-center justify-center bg-white">
    
  <button type="button" data-todo-x-data="{ on: false }" data-todo-at-click="on = !on" data-todo-colon-aria-pressed="on.toString()" aria-pressed="false" className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <span className="sr-only">Use setting</span>
    <span aria-hidden="true" data-todo-colon-className="{ 'bg-indigo-600': on, 'bg-gray-200': !on }" className="pointer-events-none bg-gray-200 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"></span>
    <span aria-hidden="true" data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !on }" className="pointer-events-none translate-x-0 absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"></span>
  </button>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
