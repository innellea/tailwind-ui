import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex items-center justify-center bg-white">
    
  <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-todo-x-data="{ on: false }" aria-pressed="false" data-todo-colon-aria-pressed="on.toString()" data-todo-at-click="on = !on" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" :className="{ 'bg-indigo-600': on, 'bg-gray-200': !(on) }">
    <span className="sr-only">Use setting</span>
    <span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !(on) }"></span>
  </button>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
