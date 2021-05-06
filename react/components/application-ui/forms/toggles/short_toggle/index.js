import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex items-center justify-center bg-white">
    
  <button type="button" className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-todo-x-data="{ on: false }" aria-pressed="false" data-todo-colon-aria-pressed="on.toString()" data-todo-at-click="on = !on">
    <span className="sr-only">Use setting</span>
    <span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md"></span>
    <span aria-hidden="true" className="bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'bg-indigo-600': on, 'bg-gray-200': !(on) }"></span>
    <span aria-hidden="true" className="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !(on) }"></span>
  </button>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
