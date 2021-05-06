import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex items-center justify-center bg-white">
    <div className="w-full max-w-xs mx-auto">
      
  <div>
    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 flex items-center">
        <label htmlFor="country" className="sr-only">Country</label>
        <select id="country" name="country" className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </select>
      </div>
      <input type="text" name="phone_number" id="phone_number" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md" placeholder="+1 (555) 987-6543">
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
