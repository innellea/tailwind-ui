import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white">
    <div className="p-6 mx-auto max-w-7xl">
      
  <nav aria-label="Progress">
    <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
      
        <li className="md:flex-1">
          
            <a href="/" className="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" data-todo-x-description="Completed Step">
              <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">Step 1</span>
              <span className="text-sm font-medium">Job details</span>
            </a>
          </li>
      
        <li className="md:flex-1">
          
            <a href="/" className="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" aria-current="step" data-todo-x-description="Current Step">
              <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase">Step 2</span>
              <span className="text-sm font-medium">Application form</span>
            </a>
          </li>
      
        <li className="md:flex-1">
          
            <a href="/" className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" data-todo-x-description="Upcoming Step">
              <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">Step 3</span>
              <span className="text-sm font-medium">Preview</span>
            </a>
          </li>
      
    </ol>
  </nav>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
