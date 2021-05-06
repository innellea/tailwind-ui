import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white">
    <div className="px-4 py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
      
  <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
      Job Postings
    </h3>
    <div className="mt-3 sm:mt-0 sm:ml-4">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Create new job
      </button>
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
