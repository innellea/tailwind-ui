import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Update your email
      </h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          Change the email address you want associated with your account.
        </p>
      </div>
      <form className="mt-5 sm:flex sm:items-center">
        <div className="max-w-xs w-full">
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="text" name="email" id="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com">
        </div>
        <button type="submit" className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Save
        </button>
      </form>
    </div>
  </div>

      </div>
    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
