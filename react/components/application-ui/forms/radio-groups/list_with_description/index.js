import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100 py-12 px-4 flex justify-center sm:px-6 lg:py-16 lg:px-8">
    <div className="w-full max-w-3xl mx-auto">
      
  <fieldset data-todo-x-data="window.Components.radioGroup({ initialCheckedIndex: 0 })" data-todo-x-init="init()">
    <legend className="sr-only">
      Privacy setting
    </legend>
    <div className="bg-white rounded-md -space-y-px">
      
        <label data-todo-x-radio-group-option="" className="border-gray-200 rounded-tl-md rounded-tr-md  relative border p-4 flex cursor-pointer " data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'bg-indigo-50 border-indigo-200 z-10': value === 'Public access', 'border-gray-200': !(value === 'Public access') }">
          <input type="radio" data-todo-x-model="value" name="privacy_setting" value="Public access" className="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
          <div className="ml-3 flex flex-col">
            <span id="privacy-setting-0-label" className="text-gray-900 block text-sm font-medium" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-900': value === 'Public access', 'text-gray-900': !(value === 'Public access') }">
              Public access
            </span>
            <span id="privacy-setting-0-description" className="text-gray-500 block text-sm" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-700': value === 'Public access', 'text-gray-500': !(value === 'Public access') }">
              This project would be available to anyone who has the link
            </span>
          </div>
        </label>
      
        <label data-todo-x-radio-group-option="" className="border-gray-200   relative border p-4 flex cursor-pointer " data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'bg-indigo-50 border-indigo-200 z-10': value === 'Private to Project Members', 'border-gray-200': !(value === 'Private to Project Members') }">
          <input type="radio" data-todo-x-model="value" name="privacy_setting" value="Private to Project Members" className="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description">
          <div className="ml-3 flex flex-col">
            <span id="privacy-setting-1-label" className="text-gray-900 block text-sm font-medium" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-900': value === 'Private to Project Members', 'text-gray-900': !(value === 'Private to Project Members') }">
              Private to Project Members
            </span>
            <span id="privacy-setting-1-description" className="text-gray-500 block text-sm" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-700': value === 'Private to Project Members', 'text-gray-500': !(value === 'Private to Project Members') }">
              Only members of this project would be able to access
            </span>
          </div>
        </label>
      
        <label data-todo-x-radio-group-option="" className="border-gray-200  rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer " data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'bg-indigo-50 border-indigo-200 z-10': value === 'Private to you', 'border-gray-200': !(value === 'Private to you') }">
          <input type="radio" data-todo-x-model="value" name="privacy_setting" value="Private to you" className="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description">
          <div className="ml-3 flex flex-col">
            <span id="privacy-setting-2-label" className="text-gray-900 block text-sm font-medium" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-900': value === 'Private to you', 'text-gray-900': !(value === 'Private to you') }">
              Private to you
            </span>
            <span id="privacy-setting-2-description" className="text-gray-500 block text-sm" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-700': value === 'Private to you', 'text-gray-500': !(value === 'Private to you') }">
              You are the only one able to access this project
            </span>
          </div>
        </label>
      
    </div>
  </fieldset>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
