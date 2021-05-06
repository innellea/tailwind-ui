import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100 py-12 px-4 flex justify-center sm:px-6 lg:py-16 lg:px-8">
    <div className="w-full max-w-3xl mx-auto">
      
  <fieldset data-todo-x-data="window.Components.radioGroup({ initialCheckedIndex: 0 })" data-todo-x-init="init()">
    <legend className="sr-only">
      Pricing plans
    </legend>
    <div className="relative bg-white rounded-md -space-y-px">
      
        <label data-todo-x-radio-group-option="" className="border-gray-200 rounded-tl-md rounded-tr-md  relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 " data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'bg-indigo-50 border-indigo-200 z-10': value === 'Startup', 'border-gray-200': !(value === 'Startup') }">
          <div className="flex items-center text-sm">
            <input type="radio" data-todo-x-model="value" name="pricing_plan" value="Startup" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-0-label" aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1">
            <span id="pricing-plans-0-label" className="ml-3 font-medium text-gray-900">Startup</span>
          </div>
          <p id="pricing-plans-0-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
            <span className="text-gray-900 font-medium" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-900': value === 'Startup', 'text-gray-900': !(value === 'Startup') }">$29 / mo</span>
            {/* space */}
            <span data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" className="text-gray-500" data-todo-colon-className="{ 'text-indigo-700': value === 'Startup', 'text-gray-500': !(value === 'Startup') }">($290 / yr)</span>
          </p>
          <p id="pricing-plans-0-description-1" className="text-gray-500 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-700': value === 'Startup', 'text-gray-500': !(value === 'Startup') }">Up to 5 active job postings</p>
        </label>
      
        <label data-todo-x-radio-group-option="" className="border-gray-200   relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 " data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'bg-indigo-50 border-indigo-200 z-10': value === 'Business', 'border-gray-200': !(value === 'Business') }">
          <div className="flex items-center text-sm">
            <input type="radio" data-todo-x-model="value" name="pricing_plan" value="Business" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-1-label" aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1">
            <span id="pricing-plans-1-label" className="ml-3 font-medium text-gray-900">Business</span>
          </div>
          <p id="pricing-plans-1-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
            <span className="text-gray-900 font-medium" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-900': value === 'Business', 'text-gray-900': !(value === 'Business') }">$99 / mo</span>
            {/* space */}
            <span data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" className="text-gray-500" data-todo-colon-className="{ 'text-indigo-700': value === 'Business', 'text-gray-500': !(value === 'Business') }">($990 / yr)</span>
          </p>
          <p id="pricing-plans-1-description-1" className="text-gray-500 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-700': value === 'Business', 'text-gray-500': !(value === 'Business') }">Up to 25 active job postings</p>
        </label>
      
        <label data-todo-x-radio-group-option="" className="border-gray-200  rounded-bl-md rounded-br-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 " data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'bg-indigo-50 border-indigo-200 z-10': value === 'Enterprise', 'border-gray-200': !(value === 'Enterprise') }">
          <div className="flex items-center text-sm">
            <input type="radio" data-todo-x-model="value" name="pricing_plan" value="Enterprise" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-2-label" aria-describedby="pricing-plans-2-description-0 pricing-plans-2-description-1">
            <span id="pricing-plans-2-label" className="ml-3 font-medium text-gray-900">Enterprise</span>
          </div>
          <p id="pricing-plans-2-description-0" className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
            <span className="text-gray-900 font-medium" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-900': value === 'Enterprise', 'text-gray-900': !(value === 'Enterprise') }">$249 / mo</span>
            {/* space */}
            <span data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" className="text-gray-500" data-todo-colon-className="{ 'text-indigo-700': value === 'Enterprise', 'text-gray-500': !(value === 'Enterprise') }">($2490 / yr)</span>
          </p>
          <p id="pricing-plans-2-description-1" className="text-gray-500 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right" data-todo-x-state-on="Checked" data-todo-x-state-off="Not Checked" data-todo-colon-className="{ 'text-indigo-700': value === 'Enterprise', 'text-gray-500': !(value === 'Enterprise') }">Unlimited active job postings</p>
        </label>
      
    </div>
  </fieldset>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
