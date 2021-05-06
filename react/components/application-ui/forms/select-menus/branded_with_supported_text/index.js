import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex justify-center bg-gray-100" style={{minHeight: "600px"}}>
    <div className="w-full max-w-xs mx-auto flex justify-end">
      
  <span className="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
    <!--
  Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
  to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
  in the near future, but in the mean time we recommend these reference guides when building your implementation:

  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
--><div data-todo-x-data="Components.listbox({ modelName: 'selected', open: true, selectedIndex: 0, activeIndex: 0, items: [{&quot;title&quot;:&quot;Published&quot;,&quot;description&quot;:&quot;This job posting can be viewed by anyone who has the link.&quot;,&quot;current&quot;:true},{&quot;title&quot;:&quot;Draft&quot;,&quot;description&quot;:&quot;This job posting will no longer be publicly accessible.&quot;,&quot;current&quot;:false}] })" data-todo-x-init="init()">
      <label id="listbox-label" className="sr-only" data-todo-at-click="$refs.button.focus()">
        Change published status
      </label>
      <div className="relative">
        <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
          <div className="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
            <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
            <p data-todo-x-text="selected.title" className="ml-2.5 text-sm font-medium">
              Published
            </p>
          </div>
          <button type="button" className="relative inline-flex items-center bg-indigo-500 p-2 rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500" data-todo-x-ref="button" data-todo-at-keydown-arrow-up-stop-prevent="onButtonClick()" data-todo-at-keydown-arrow-down-stop-prevent="onButtonClick()" data-todo-at-click="onButtonClick()" aria-haspopup="listbox" data-todo-colon-aria-expanded="open" aria-expanded="true" aria-labelledby="listbox-label">
            <span className="sr-only">Change published status</span>
            <svg className="h-5 w-5 text-white" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
          </button>
        </div>

        
          <ul data-todo-x-show="open" data-todo-x-transition-leave="transition ease-in duration-100" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none" data-todo-x-max="1" data-todo-at-click-away="open = false" data-todo-x-description="Select popover, show/hide based on select state." data-todo-at-keydown-enter-stop-prevent="onOptionSelect()" data-todo-at-keydown-space-stop-prevent="onOptionSelect()" data-todo-at-keydown-escape="onEscape()" data-todo-at-keydown-arrow-up-prevent="onArrowUp()" data-todo-at-keydown-arrow-down-prevent="onArrowDown()" data-todo-x-ref="listbox" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" data-todo-colon-aria-activedescendant="activeDescendant" aria-activedescendant="listbox-option-0">
            
              <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative p-4 text-sm" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-0" role="option" data-todo-at-click="choose(0)" data-todo-at-mouseenter="activeIndex = 0" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-500': activeIndex === 0, 'text-gray-900': !(activeIndex === 0) }">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal" data-todo-colon-className="{ 'font-semibold': selectedIndex === 0, 'font-normal': !(selectedIndex === 0) }">
                      Published
                    </p>
                    <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-500" data-todo-colon-className="{ 'text-white': activeIndex === 0, 'text-indigo-500': !(activeIndex === 0) }" data-todo-x-show="selectedIndex === 0">
                      <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
                    </span>
                  </div>
                  <p data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-500 mt-2" data-todo-colon-className="{ 'text-indigo-200': activeIndex === 0, 'text-gray-500': !(activeIndex === 0) }">
                    This job posting can be viewed by anyone who has the link.
                  </p>
                </div>
              </li>
            
              <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative p-4 text-sm" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-1" role="option" data-todo-at-click="choose(1)" data-todo-at-mouseenter="activeIndex = 1" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-500': activeIndex === 1, 'text-gray-900': !(activeIndex === 1) }">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal" data-todo-colon-className="{ 'font-semibold': selectedIndex === 1, 'font-normal': !(selectedIndex === 1) }">
                      Draft
                    </p>
                    <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-500" data-todo-colon-className="{ 'text-white': activeIndex === 1, 'text-indigo-500': !(activeIndex === 1) }" data-todo-x-show="selectedIndex === 1">
                      <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
                    </span>
                  </div>
                  <p data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-500 mt-2" data-todo-colon-className="{ 'text-indigo-200': activeIndex === 1, 'text-gray-500': !(activeIndex === 1) }">
                    This job posting will no longer be publicly accessible.
                  </p>
                </div>
              </li>
            
          </ul>
        
      </div>
    </div>
  </span>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
