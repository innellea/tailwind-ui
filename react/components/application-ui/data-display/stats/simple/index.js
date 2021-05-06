import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
  <div>
    <h3 className="text-lg leading-6 font-medium text-gray-900">
      Last 30 days
    </h3>
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Total Subscribers
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              71,897
            </dd>
          </div>
        </div>
      
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Avg. Open Rate
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              58.16%
            </dd>
          </div>
        </div>
      
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Avg. Click Rate
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              24.57%
            </dd>
          </div>
        </div>
      
    </dl>
  </div>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
