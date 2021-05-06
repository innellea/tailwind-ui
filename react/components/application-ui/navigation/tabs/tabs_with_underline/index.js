import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="px-4 sm:px-6 lg:px-8 py-6 bg-white">
    <div className="max-w-7xl mx-auto">
      
  <div>
    <div className="sm:hidden">
      <label htmlFor="tabs" className="sr-only">Select a tab</label>
      <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option>My Account</option>
        <option>Company</option>
        <option selected="">Team Members</option>
        <option>Billing</option>
      </select>
    </div>
    <div className="hidden sm:block">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            My Account
          </a>
          <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            Company
          </a>
          {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
          <a href="/" className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
            Team Members
          </a>
          <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            Billing
          </a>
        </nav>
      </div>
    </div>
  </div>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
