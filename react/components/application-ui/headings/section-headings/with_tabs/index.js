import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white">
    <div className="px-4 py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
      
  <div className="pb-5 border-b border-gray-200 sm:pb-0">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
      Candidates
    </h3>
    <div className="mt-3 sm:mt-4">
      <div className="sm:hidden" data-todo-x-description="Dropdown menu on small screens">
        <label htmlFor="current-tab" className="sr-only">Select a tab</label>
        <select id="current-tab" name="current-tab" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          
            <option>Applied</option>
          
            <option>Phone Screening</option>
          
            <option selected="">Interview</option>
          
            <option>Offer</option>
          
            <option>Hired</option>
          
        </select>
      </div>
      <div className="hidden sm:block" data-todo-x-description="Tabs at small breakpoint and up">
        <nav className="-mb-px flex space-x-8">
          
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;border-indigo-500 text-indigo-600&quot;, Default: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">
              Applied
            </a>
          
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-indigo-500 text-indigo-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">
              Phone Screening
            </a>
          
            <a href="/" className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" aria-current="page" data-todo-x-state-description="undefined: &quot;border-indigo-500 text-indigo-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">
              Interview
            </a>
          
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-indigo-500 text-indigo-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">
              Offer
            </a>
          
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" data-todo-x-state-description="undefined: &quot;border-indigo-500 text-indigo-600&quot;, undefined: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">
              Hired
            </a>
          
        </nav>
      </div>
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
