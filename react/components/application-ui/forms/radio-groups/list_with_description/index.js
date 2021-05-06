import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-gray-100 py-12 px-4 flex justify-center sm:px-6 lg:py-16 lg:px-8">
    
    <div className="w-full max-w-3xl mx-auto">
      
  <fieldset data-todo-x-data="radioGroup()">
    <legend className="sr-only">
      Privacy setting
    </legend>

    <div className="bg-white rounded-md -space-y-px" data-todo-x-ref="radiogroup">
      
        
          <div data-todo-colon-className="{ 'border-gray-200': !(active === 0), 'bg-indigo-50 border-indigo-200 z-10': active === 0 }" className="relative border rounded-tl-md rounded-tr-md p-4 flex">
            <div className="flex items-center h-5">
              <input id="settings-option-0" name="privacy_setting" type="radio" data-todo-at-click="select(0)" data-todo-at-keydown-space="select(0)" data-todo-at-keydown-arrow-up="onArrowUp(0)" data-todo-at-keydown-arrow-down="onArrowDown(0)" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" checked="">
            </div>
            <label htmlFor="settings-option-0" className="ml-3 flex flex-col cursor-pointer">
              <span data-todo-colon-className="{ 'text-indigo-900': active === 0, 'text-gray-900': !(active === 0) }" className="block text-sm font-medium">
                Public access
              </span>
              <span data-todo-colon-className="{ 'text-indigo-700': active === 0, 'text-gray-500': !(active === 0) }" className="block text-sm">
                This project would be available to anyone who has the link
              </span>
            </label>
          </div>
        
        
          <div data-todo-colon-className="{ 'border-gray-200': !(active === 1), 'bg-indigo-50 border-indigo-200 z-10': active === 1 }" className="relative border border-gray-200 p-4 flex">
            <div className="flex items-center h-5">
              <input id="settings-option-1" name="privacy_setting" type="radio" data-todo-at-click="select(1)" data-todo-at-keydown-space="select(1)" data-todo-at-keydown-arrow-up="onArrowUp(1)" data-todo-at-keydown-arrow-down="onArrowDown(1)" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
            </div>
            <label htmlFor="settings-option-1" className="ml-3 flex flex-col cursor-pointer">
              <span data-todo-colon-className="{ 'text-indigo-900': active === 1, 'text-gray-900': !(active === 1) }" className="block text-sm font-medium">
                Private to Project Members
              </span>
              <span data-todo-colon-className="{ 'text-indigo-700': active === 1, 'text-gray-500': !(active === 1) }" className="block text-sm">
                Only members of this project would be able to access
              </span>
            </label>
          </div>
        
        
          <div data-todo-colon-className="{ 'border-gray-200': !(active === 2), 'bg-indigo-50 border-indigo-200 z-10': active === 2 }" className="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
            <div className="flex items-center h-5">
              <input id="settings-option-2" name="privacy_setting" type="radio" data-todo-at-click="select(2)" data-todo-at-keydown-space="select(2)" data-todo-at-keydown-arrow-up="onArrowUp(2)" data-todo-at-keydown-arrow-down="onArrowDown(2)" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
            </div>
            <label htmlFor="settings-option-2" className="ml-3 flex flex-col cursor-pointer">
              <span data-todo-colon-className="{ 'text-indigo-900': active === 2, 'text-gray-900': !(active === 2) }" className="block text-sm font-medium">
                Private to you
              </span>
              <span data-todo-colon-className="{ 'text-indigo-700': active === 2, 'text-gray-500': !(active === 2) }" className="block text-sm">
                You are the only one able to access this project
              </span>
            </label>
          </div>
        
    </div>
  </fieldset>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
