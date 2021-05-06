import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex items-center justify-center bg-white">
    <div className="w-full max-w-xs mx-auto">
      
  <div>
    <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
      Company Website
    </label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
        http://
      </span>
      <input type="text" name="company_website" id="company_website" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300" placeholder="www.example.com">
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
