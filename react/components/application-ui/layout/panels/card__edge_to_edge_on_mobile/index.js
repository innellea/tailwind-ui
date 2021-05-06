import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <svg className="border-2 border-dashed border-gray-300 rounded bg-white h-64 w-full text-gray-200" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true">
              <path vector-effect="non-scaling-stroke" strokeWidth="2" d="M0 0l200 200M0 200L200 0"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
