import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-200 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
  <div className="rounded-lg bg-white overflow-hidden shadow">
    <h2 className="sr-only" id="profile-overview-title">Profile Overview</h2>
    <div className="bg-white p-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:flex sm:space-x-5">
          <div className="flex-shrink-0">
            <img className="mx-auto h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
          </div>
          <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
            <p className="text-sm font-medium text-gray-600">Welcome back,</p>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">Rebecca Nicholas</p>
            <p className="text-sm font-medium text-gray-600">Product Designer</p>
          </div>
        </div>
        <div className="mt-5 flex justify-center sm:mt-0">
          <a href="/" className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            View profile
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
      
        <div className="px-6 py-5 text-sm font-medium text-center">
          <span className="text-gray-900">12</span>
          {/* space */}
          <span className="text-gray-600">Vacation days left</span>
        </div>
      
        <div className="px-6 py-5 text-sm font-medium text-center">
          <span className="text-gray-900">4</span>
          {/* space */}
          <span className="text-gray-600">Sick days left</span>
        </div>
      
        <div className="px-6 py-5 text-sm font-medium text-center">
          <span className="text-gray-900">2</span>
          {/* space */}
          <span className="text-gray-600">Personal days left</span>
        </div>
      
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
