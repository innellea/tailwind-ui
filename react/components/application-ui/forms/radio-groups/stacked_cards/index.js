import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex justify-center bg-white" style={{minHeight: "600px"}}>
    <div className="w-full max-w-xl mx-auto">
      
  <fieldset data-todo-x-data="window.Components.radioGroup({ initialCheckedIndex: 0 })" data-todo-x-init="init()">
    <legend className="sr-only">
      Server size
    </legend>
    <div className="space-y-4">
      
        <label data-todo-x-radio-group-option="" className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between  focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500" data-todo-x-active-className="ring-1 ring-offset-2 ring-indigo-500">
<input type="radio" data-todo-x-model="value" name="server_size" value="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1">
          <div className="flex items-center">
            <div className="text-sm">
              <p id="server-size-0-label" className="font-medium text-gray-900">
                Hobby
              </p>
              <div id="server-size-0-description-0" className="text-gray-500">
                <p className="sm:inline">8GB / 4 CPUs</p>
                {/* space */}
                <span className="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                {/* space */}
                <p className="sm:inline">160 GB SSD disk</p>
              </div>
            </div>
          </div>
          <div id="server-size-0-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div className="font-medium text-gray-900">$40</div>
            <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
          </div>
          <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'border-indigo-500': value === 'Hobby', 'border-transparent': !(value === 'Hobby') }"></div>
        </label>
      
        <label data-todo-x-radio-group-option="" className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between  focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500" data-todo-x-active-className="ring-1 ring-offset-2 ring-indigo-500">
<input type="radio" data-todo-x-model="value" name="server_size" value="Startup" className="sr-only" aria-labelledby="server-size-1-label" aria-describedby="server-size-1-description-0 server-size-1-description-1">
          <div className="flex items-center">
            <div className="text-sm">
              <p id="server-size-1-label" className="font-medium text-gray-900">
                Startup
              </p>
              <div id="server-size-1-description-0" className="text-gray-500">
                <p className="sm:inline">12GB / 6 CPUs</p>
                {/* space */}
                <span className="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                {/* space */}
                <p className="sm:inline">256 GB SSD disk</p>
              </div>
            </div>
          </div>
          <div id="server-size-1-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div className="font-medium text-gray-900">$80</div>
            <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
          </div>
          <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'border-indigo-500': value === 'Startup', 'border-transparent': !(value === 'Startup') }"></div>
        </label>
      
        <label data-todo-x-radio-group-option="" className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between  focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500" data-todo-x-active-className="ring-1 ring-offset-2 ring-indigo-500">
<input type="radio" data-todo-x-model="value" name="server_size" value="Business" className="sr-only" aria-labelledby="server-size-2-label" aria-describedby="server-size-2-description-0 server-size-2-description-1">
          <div className="flex items-center">
            <div className="text-sm">
              <p id="server-size-2-label" className="font-medium text-gray-900">
                Business
              </p>
              <div id="server-size-2-description-0" className="text-gray-500">
                <p className="sm:inline">16GB / 8 CPUs</p>
                {/* space */}
                <span className="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                {/* space */}
                <p className="sm:inline">512 GB SSD disk</p>
              </div>
            </div>
          </div>
          <div id="server-size-2-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div className="font-medium text-gray-900">$160</div>
            <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
          </div>
          <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'border-indigo-500': value === 'Business', 'border-transparent': !(value === 'Business') }"></div>
        </label>
      
        <label data-todo-x-radio-group-option="" className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between  focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500" data-todo-x-active-className="ring-1 ring-offset-2 ring-indigo-500">
<input type="radio" data-todo-x-model="value" name="server_size" value="Enterprise" className="sr-only" aria-labelledby="server-size-3-label" aria-describedby="server-size-3-description-0 server-size-3-description-1">
          <div className="flex items-center">
            <div className="text-sm">
              <p id="server-size-3-label" className="font-medium text-gray-900">
                Enterprise
              </p>
              <div id="server-size-3-description-0" className="text-gray-500">
                <p className="sm:inline">32GB / 12 CPUs</p>
                {/* space */}
                <span className="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                {/* space */}
                <p className="sm:inline">1024 GB SSD disk</p>
              </div>
            </div>
          </div>
          <div id="server-size-3-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div className="font-medium text-gray-900">$240</div>
            <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
          </div>
          <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'border-indigo-500': value === 'Enterprise', 'border-transparent': !(value === 'Enterprise') }"></div>
        </label>
      
    </div>
  </fieldset>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
