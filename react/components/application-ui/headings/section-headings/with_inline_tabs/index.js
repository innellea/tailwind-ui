import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white">
    <div className="px-4 py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
      
  <div className="border-b border-gray-200">
    <div className="sm:flex sm:items-baseline">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Issues
      </h3>
      <div className="mt-4 sm:mt-0 sm:ml-10">
        <nav className="-mb-px flex space-x-8">
          
            
              {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
              <a href="/" className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                Open
              </a>
            
            
              <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                Closed
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
