import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="p-8 flex justify-center bg-gray-100" style={{minHeight: "600px"}}>
    <div className="w-full max-w-xs mx-auto">
      
  <!--
  Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
  to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
  in the near future, but in the mean time we recommend these reference guides when building your implementation:

  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
-->
  <div data-todo-x-data="Components.customSelect({ open: true, value: 3, selected: 3 })" data-todo-x-init="init()">
    <label id="listbox-label" className="block text-sm font-medium text-gray-700">
      Assigned to
    </label>
    <div className="mt-1 relative">
      <button type="button" data-todo-x-ref="button" data-todo-at-keydown-arrow-up-stop-prevent="onButtonClick()" data-todo-at-keydown-arrow-down-stop-prevent="onButtonClick()" data-todo-at-click="onButtonClick()" aria-haspopup="listbox" data-todo-colon-aria-expanded="open" aria-expanded="true" aria-labelledby="listbox-label" className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span data-todo-x-text="[&quot;Wade Cooper&quot;,&quot;Arlene Mccoy&quot;,&quot;Devon Webb&quot;,&quot;Tom Cook&quot;,&quot;Tanya Fox&quot;,&quot;Hellen Schmidt&quot;,&quot;Caroline Schultz&quot;,&quot;Mason Heaney&quot;,&quot;Claudie Smitham&quot;,&quot;Emil Schaefer&quot;][value]" className="block truncate">
          Tom Cook
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/selector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
        </span>
      </button>

      <div data-todo-x-show="open" data-todo-at-click-away="open = false" data-todo-x-description="Select popover, show/hide based on select state." data-todo-x-transition-leave="transition ease-in duration-100" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
        <ul data-todo-at-keydown-enter-stop-prevent="onOptionSelect()" data-todo-at-keydown-space-stop-prevent="onOptionSelect()" data-todo-at-keydown-escape="onEscape()" data-todo-at-keydown-arrow-up-prevent="onArrowUp()" data-todo-at-keydown-arrow-down-prevent="onArrowDown()" data-todo-x-ref="listbox" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" data-todo-colon-aria-activedescendant="activeDescendant" aria-activedescendant="listbox-item-3" className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" data-todo-x-max="1">
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-0" role="option" data-todo-at-click="choose(0)" data-todo-at-mouseenter="selected = 0" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 0, 'text-gray-900': !(selected === 0) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 0, 'font-normal': !(value === 0) }" className="font-normal block truncate">
                Wade Cooper
              </span>

              <span data-todo-x-show="value === 0" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 0, 'text-indigo-600': !(selected === 0) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-1" role="option" data-todo-at-click="choose(1)" data-todo-at-mouseenter="selected = 1" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 1, 'text-gray-900': !(selected === 1) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 1, 'font-normal': !(value === 1) }" className="font-normal block truncate">
                Arlene Mccoy
              </span>

              <span data-todo-x-show="value === 1" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 1, 'text-indigo-600': !(selected === 1) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-2" role="option" data-todo-at-click="choose(2)" data-todo-at-mouseenter="selected = 2" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 2, 'text-gray-900': !(selected === 2) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 2, 'font-normal': !(value === 2) }" className="font-normal block truncate">
                Devon Webb
              </span>

              <span data-todo-x-show="value === 2" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 2, 'text-indigo-600': !(selected === 2) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-3" role="option" data-todo-at-click="choose(3)" data-todo-at-mouseenter="selected = 3" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 3, 'text-gray-900': !(selected === 3) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 3, 'font-normal': !(value === 3) }" className="font-normal block truncate">
                Tom Cook
              </span>

              <span data-todo-x-show="value === 3" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 3, 'text-indigo-600': !(selected === 3) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-4" role="option" data-todo-at-click="choose(4)" data-todo-at-mouseenter="selected = 4" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 4, 'text-gray-900': !(selected === 4) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 4, 'font-normal': !(value === 4) }" className="font-normal block truncate">
                Tanya Fox
              </span>

              <span data-todo-x-show="value === 4" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 4, 'text-indigo-600': !(selected === 4) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-5" role="option" data-todo-at-click="choose(5)" data-todo-at-mouseenter="selected = 5" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 5, 'text-gray-900': !(selected === 5) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 5, 'font-normal': !(value === 5) }" className="font-normal block truncate">
                Hellen Schmidt
              </span>

              <span data-todo-x-show="value === 5" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 5, 'text-indigo-600': !(selected === 5) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-6" role="option" data-todo-at-click="choose(6)" data-todo-at-mouseenter="selected = 6" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 6, 'text-gray-900': !(selected === 6) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 6, 'font-normal': !(value === 6) }" className="font-normal block truncate">
                Caroline Schultz
              </span>

              <span data-todo-x-show="value === 6" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 6, 'text-indigo-600': !(selected === 6) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-7" role="option" data-todo-at-click="choose(7)" data-todo-at-mouseenter="selected = 7" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 7, 'text-gray-900': !(selected === 7) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 7, 'font-normal': !(value === 7) }" className="font-normal block truncate">
                Mason Heaney
              </span>

              <span data-todo-x-show="value === 7" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 7, 'text-indigo-600': !(selected === 7) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-8" role="option" data-todo-at-click="choose(8)" data-todo-at-mouseenter="selected = 8" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 8, 'text-gray-900': !(selected === 8) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 8, 'font-normal': !(value === 8) }" className="font-normal block truncate">
                Claudie Smitham
              </span>

              <span data-todo-x-show="value === 8" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 8, 'text-indigo-600': !(selected === 8) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-option-9" role="option" data-todo-at-click="choose(9)" data-todo-at-mouseenter="selected = 9" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 9, 'text-gray-900': !(selected === 9) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 9, 'font-normal': !(value === 9) }" className="font-normal block truncate">
                Emil Schaefer
              </span>

              <span data-todo-x-show="value === 9" data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-colon-className="{ 'text-white': selected === 9, 'text-indigo-600': !(selected === 9) }" className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
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
