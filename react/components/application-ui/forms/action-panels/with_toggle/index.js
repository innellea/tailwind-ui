import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6" data-todo-x-data="{ on: false }">
      <h3 className="text-lg leading-6 font-medium text-gray-900" id="renew-subscription-label" data-todo-at-click="on = !on; $refs.switch.focus()">
        Renew subscription automatically
      </h3>
      <div className="mt-2 sm:flex sm:items-start sm:justify-between">
        <div className="max-w-xl text-sm text-gray-500">
          <p id="renew-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum.
          </p>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-pressed="false" data-todo-x-ref="switch" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'bg-indigo-600': on, 'bg-gray-200': !(on) }" aria-labelledby="renew-subscription-label" :aria-pressed="on.toString()" data-todo-at-click="on = !on">
            <span className="sr-only">Use setting</span>
            <span aria-hidden="true" className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" data-todo-x-state-on="Enabled" data-todo-x-state-off="Not Enabled" data-todo-colon-className="{ 'translate-x-5': on, 'translate-x-0': !(on) }"></span>
          </button>
        </div>
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
