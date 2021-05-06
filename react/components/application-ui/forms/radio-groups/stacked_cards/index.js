import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="p-8 flex justify-center bg-white" style={{minHeight: "600px"}}>
    
    <div className="w-full max-w-xl mx-auto">
      
  <fieldset data-todo-x-data="radioGroup()">
    <legend id="radiogroup-label" className="sr-only">
      Server size
    </legend>
    <ul className="space-y-4" role="radiogroup" aria-labelledby="radiogroup-label" data-todo-x-ref="radiogroup">
      
        <li id="radiogroup-option-0" data-todo-colon-tabIndex={active === 0 || active === null ? '0' : '-1'} tabIndex={0} data-todo-at-click="select(0)" data-todo-at-keydown-space-stop-prevent="select(0)" role="radio" aria-checked="true" :aria-checked="active === 0" data-todo-at-keydown-arrow-up-stop-prevent="onArrowUp(0)" data-todo-at-keydown-arrow-down-stop-prevent="onArrowDown(0)" className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
          <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  Hobby
                </p>
                <div className="text-gray-500">
                  <p className="sm:inline">8GB / 4 CPUs</p>
                  <span className="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                  <p className="sm:inline">160 GB SSD disk</p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
              <div className="font-medium text-gray-900">$40</div>
              <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
            </div>
          </div>
          <div data-todo-colon-className="{ 'border-indigo-500': active === 0, 'border-transparent': !(active === 0) }" className="border-indigo-500 absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
        </li>
      
        <li id="radiogroup-option-1" data-todo-colon-tabIndex={active === 1 || active === null ? '0' : '-1'} tabIndex={-1} data-todo-at-click="select(1)" data-todo-at-keydown-space-stop-prevent="select(1)" role="radio" aria-checked="false" :aria-checked="active === 1" data-todo-at-keydown-arrow-up-stop-prevent="onArrowUp(1)" data-todo-at-keydown-arrow-down-stop-prevent="onArrowDown(1)" className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
          <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  Startup
                </p>
                <div className="text-gray-500">
                  <p className="sm:inline">12GB / 6 CPUs</p>
                  <span className="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                  <p className="sm:inline">256 GB SSD disk</p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
              <div className="font-medium text-gray-900">$80</div>
              <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
            </div>
          </div>
          <div data-todo-colon-className="{ 'border-indigo-500': active === 1, 'border-transparent': !(active === 1) }" className="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
        </li>
      
        <li id="radiogroup-option-2" data-todo-colon-tabIndex={active === 2 || active === null ? '0' : '-1'} tabIndex={-1} data-todo-at-click="select(2)" data-todo-at-keydown-space-stop-prevent="select(2)" role="radio" aria-checked="false" :aria-checked="active === 2" data-todo-at-keydown-arrow-up-stop-prevent="onArrowUp(2)" data-todo-at-keydown-arrow-down-stop-prevent="onArrowDown(2)" className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
          <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  Business
                </p>
                <div className="text-gray-500">
                  <p className="sm:inline">16GB / 8 CPUs</p>
                  <span className="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                  <p className="sm:inline">512 GB SSD disk</p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
              <div className="font-medium text-gray-900">$160</div>
              <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
            </div>
          </div>
          <div data-todo-colon-className="{ 'border-indigo-500': active === 2, 'border-transparent': !(active === 2) }" className="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
        </li>
      
        <li id="radiogroup-option-3" data-todo-colon-tabIndex={active === 3 || active === null ? '0' : '-1'} tabIndex={-1} data-todo-at-click="select(3)" data-todo-at-keydown-space-stop-prevent="select(3)" role="radio" aria-checked="false" :aria-checked="active === 3" data-todo-at-keydown-arrow-up-stop-prevent="onArrowUp(3)" data-todo-at-keydown-arrow-down-stop-prevent="onArrowDown(3)" className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
          <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  Enterprise
                </p>
                <div className="text-gray-500">
                  <p className="sm:inline">32GB / 12 CPUs</p>
                  <span className="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                  <p className="sm:inline">1024 GB SSD disk</p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
              <div className="font-medium text-gray-900">$240</div>
              <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
            </div>
          </div>
          <div data-todo-colon-className="{ 'border-indigo-500': active === 3, 'border-transparent': !(active === 3) }" className="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
        </li>
      
    </ul>
  </fieldset>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
