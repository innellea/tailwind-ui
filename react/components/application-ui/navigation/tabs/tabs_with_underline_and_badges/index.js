import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="px-4 sm:px-6 lg:px-8 py-6 bg-white">
    <div className="max-w-7xl mx-auto">
      
  <div>
    <div className="sm:hidden">
      <label htmlFor="tabs" className="sr-only">Select a tab</label>
      <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        
          
            <option>Applied</option>
          
          
            <option>Phone Screening</option>
          
          
            <option selected="">Interview</option>
          
          
            <option>Offer</option>
          
          
            <option>Disqualified</option>
          
      </select>
    </div>
    <div className="hidden sm:block">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
          
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Applied
              
                {/* Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" */}
                <span className="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">52</span>
              </a>
          
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Phone Screening
              
                {/* Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" */}
                <span className="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">6</span>
              </a>
          
            <a href="/" className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Interview
              
                {/* Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" */}
                <span className="bg-indigo-100 text-indigo-600 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">4</span>
              </a>
          
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Offer
              </a>
          
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Disqualified
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
