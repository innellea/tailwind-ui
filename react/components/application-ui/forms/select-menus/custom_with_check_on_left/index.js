import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex justify-center bg-gray-100" style={{minHeight: "600px"}}>
    <div className="w-full max-w-xs mx-auto">
      
  <!--
  Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
  to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
  in the near future, but in the mean time we recommend these reference guides when building your implementation:

  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
--><div data-todo-x-data="Components.listbox({ modelName: 'selected', open: true, selectedIndex: 3, activeIndex: 3, items: [{&quot;name&quot;:&quot;Wade Cooper&quot;},{&quot;name&quot;:&quot;Arlene Mccoy&quot;},{&quot;name&quot;:&quot;Devon Webb&quot;},{&quot;name&quot;:&quot;Tom Cook&quot;},{&quot;name&quot;:&quot;Tanya Fox&quot;},{&quot;name&quot;:&quot;Hellen Schmidt&quot;},{&quot;name&quot;:&quot;Caroline Schultz&quot;},{&quot;name&quot;:&quot;Mason Heaney&quot;},{&quot;name&quot;:&quot;Claudie Smitham&quot;},{&quot;name&quot;:&quot;Emil Schaefer&quot;}] })" data-todo-x-init="init()">
    <label id="listbox-label" className="block text-sm font-medium text-gray-700" data-todo-at-click="$refs.button.focus()">
      Assigned to
    </label>
    <div className="mt-1 relative">
      <button type="button" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" data-todo-x-ref="button" data-todo-at-keydown-arrow-up-stop-prevent="onButtonClick()" data-todo-at-keydown-arrow-down-stop-prevent="onButtonClick()" data-todo-at-click="onButtonClick()" aria-haspopup="listbox" data-todo-colon-aria-expanded="open" aria-expanded="true" aria-labelledby="listbox-label">
        <span data-todo-x-text="selected.name" className="block truncate">
          Tom Cook
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/selector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
        </span>
      </button>

      
        <ul data-todo-x-show="open" data-todo-x-transition-leave="transition ease-in duration-100" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" data-todo-x-max="1" data-todo-at-click-away="open = false" data-todo-x-description="Select popover, show/hide based on select state." data-todo-at-keydown-enter-stop-prevent="onOptionSelect()" data-todo-at-keydown-space-stop-prevent="onOptionSelect()" data-todo-at-keydown-escape="onEscape()" data-todo-at-keydown-arrow-up-prevent="onArrowUp()" data-todo-at-keydown-arrow-down-prevent="onArrowDown()" data-todo-x-ref="listbox" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" data-todo-colon-aria-activedescendant="activeDescendant" aria-activedescendant="listbox-option-3">
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-0" role="option" data-todo-at-click="choose(0)" data-todo-at-mouseenter="activeIndex = 0" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 0, 'text-gray-900': !(activeIndex === 0) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 0, 'font-normal': !(selectedIndex === 0) }">
                Wade Cooper
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 0, 'text-indigo-600': !(activeIndex === 0) }" data-todo-x-show="selectedIndex === 0">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-1" role="option" data-todo-at-click="choose(1)" data-todo-at-mouseenter="activeIndex = 1" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 1, 'text-gray-900': !(activeIndex === 1) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 1, 'font-normal': !(selectedIndex === 1) }">
                Arlene Mccoy
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 1, 'text-indigo-600': !(activeIndex === 1) }" data-todo-x-show="selectedIndex === 1">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-2" role="option" data-todo-at-click="choose(2)" data-todo-at-mouseenter="activeIndex = 2" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 2, 'text-gray-900': !(activeIndex === 2) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 2, 'font-normal': !(selectedIndex === 2) }">
                Devon Webb
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 2, 'text-indigo-600': !(activeIndex === 2) }" data-todo-x-show="selectedIndex === 2">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-3" role="option" data-todo-at-click="choose(3)" data-todo-at-mouseenter="activeIndex = 3" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 3, 'text-gray-900': !(activeIndex === 3) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 3, 'font-normal': !(selectedIndex === 3) }">
                Tom Cook
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 3, 'text-indigo-600': !(activeIndex === 3) }" data-todo-x-show="selectedIndex === 3">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-4" role="option" data-todo-at-click="choose(4)" data-todo-at-mouseenter="activeIndex = 4" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 4, 'text-gray-900': !(activeIndex === 4) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 4, 'font-normal': !(selectedIndex === 4) }">
                Tanya Fox
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 4, 'text-indigo-600': !(activeIndex === 4) }" data-todo-x-show="selectedIndex === 4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-5" role="option" data-todo-at-click="choose(5)" data-todo-at-mouseenter="activeIndex = 5" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 5, 'text-gray-900': !(activeIndex === 5) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 5, 'font-normal': !(selectedIndex === 5) }">
                Hellen Schmidt
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 5, 'text-indigo-600': !(activeIndex === 5) }" data-todo-x-show="selectedIndex === 5">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-6" role="option" data-todo-at-click="choose(6)" data-todo-at-mouseenter="activeIndex = 6" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 6, 'text-gray-900': !(activeIndex === 6) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 6, 'font-normal': !(selectedIndex === 6) }">
                Caroline Schultz
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 6, 'text-indigo-600': !(activeIndex === 6) }" data-todo-x-show="selectedIndex === 6">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-7" role="option" data-todo-at-click="choose(7)" data-todo-at-mouseenter="activeIndex = 7" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 7, 'text-gray-900': !(activeIndex === 7) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 7, 'font-normal': !(selectedIndex === 7) }">
                Mason Heaney
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 7, 'text-indigo-600': !(activeIndex === 7) }" data-todo-x-show="selectedIndex === 7">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-8" role="option" data-todo-at-click="choose(8)" data-todo-at-mouseenter="activeIndex = 8" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 8, 'text-gray-900': !(activeIndex === 8) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 8, 'font-normal': !(selectedIndex === 8) }">
                Claudie Smitham
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 8, 'text-indigo-600': !(activeIndex === 8) }" data-todo-x-show="selectedIndex === 8">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-9" role="option" data-todo-at-click="choose(9)" data-todo-at-mouseenter="activeIndex = 9" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-indigo-600': activeIndex === 9, 'text-gray-900': !(activeIndex === 9) }">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal block truncate" data-todo-colon-className="{ 'font-semibold': selectedIndex === 9, 'font-normal': !(selectedIndex === 9) }">
                Emil Schaefer
              </span>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5" data-todo-colon-className="{ 'text-white': activeIndex === 9, 'text-indigo-600': !(activeIndex === 9) }" data-todo-x-show="selectedIndex === 9">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
        </ul>
      
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
