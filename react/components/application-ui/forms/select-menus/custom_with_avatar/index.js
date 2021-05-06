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
      <button type="button" data-todo-x-ref="button" data-todo-at-keydown-arrow-up-stop-prevent="onButtonClick()" data-todo-at-keydown-arrow-down-stop-prevent="onButtonClick()" data-todo-at-click="onButtonClick()" aria-haspopup="listbox" data-todo-colon-aria-expanded="open" aria-expanded="true" aria-labelledby="listbox-label" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span className="flex items-center">
          <img data-todo-colon-src="[&quot;https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;,&quot;https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80&quot;][value]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
          <span data-todo-x-text="[&quot;Wade Cooper&quot;,&quot;Arlene Mccoy&quot;,&quot;Devon Webb&quot;,&quot;Tom Cook&quot;,&quot;Tanya Fox&quot;,&quot;Hellen Schmidt&quot;,&quot;Caroline Schultz&quot;,&quot;Mason Heaney&quot;,&quot;Claudie Smitham&quot;,&quot;Emil Schaefer&quot;][value]" className="ml-3 block truncate">
            Tom Cook
          </span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: selector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
        </span>
      </button>

      <div data-todo-x-show="open" data-todo-at-click-away="open = false" data-todo-x-description="Select popover, show/hide based on select state." data-todo-x-transition-leave="transition ease-in duration-100" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
        <ul data-todo-at-keydown-enter-stop-prevent="onOptionSelect()" data-todo-at-keydown-space-stop-prevent="onOptionSelect()" data-todo-at-keydown-escape="onEscape()" data-todo-at-keydown-arrow-up-prevent="onArrowUp()" data-todo-at-keydown-arrow-down-prevent="onArrowDown()" data-todo-x-ref="listbox" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" data-todo-colon-aria-activedescendant="activeDescendant" aria-activedescendant="listbox-item-3" className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" data-todo-x-max="1">
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-0" role="option" data-todo-at-click="choose(0)" data-todo-at-mouseenter="selected = 0" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 0, 'text-gray-900': !(selected === 0) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 0, 'font-normal': !(value === 0) }" className="ml-3 block font-normal truncate">
                  Wade Cooper
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 0" data-todo-colon-className="{ 'text-white': selected === 0, 'text-indigo-600': !(selected === 0) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-1" role="option" data-todo-at-click="choose(1)" data-todo-at-mouseenter="selected = 1" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 1, 'text-gray-900': !(selected === 1) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 1, 'font-normal': !(value === 1) }" className="ml-3 block font-normal truncate">
                  Arlene Mccoy
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 1" data-todo-colon-className="{ 'text-white': selected === 1, 'text-indigo-600': !(selected === 1) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-2" role="option" data-todo-at-click="choose(2)" data-todo-at-mouseenter="selected = 2" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 2, 'text-gray-900': !(selected === 2) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 2, 'font-normal': !(value === 2) }" className="ml-3 block font-normal truncate">
                  Devon Webb
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 2" data-todo-colon-className="{ 'text-white': selected === 2, 'text-indigo-600': !(selected === 2) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-3" role="option" data-todo-at-click="choose(3)" data-todo-at-mouseenter="selected = 3" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 3, 'text-gray-900': !(selected === 3) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 3, 'font-normal': !(value === 3) }" className="ml-3 block font-normal truncate">
                  Tom Cook
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 3" data-todo-colon-className="{ 'text-white': selected === 3, 'text-indigo-600': !(selected === 3) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-4" role="option" data-todo-at-click="choose(4)" data-todo-at-mouseenter="selected = 4" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 4, 'text-gray-900': !(selected === 4) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 4, 'font-normal': !(value === 4) }" className="ml-3 block font-normal truncate">
                  Tanya Fox
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 4" data-todo-colon-className="{ 'text-white': selected === 4, 'text-indigo-600': !(selected === 4) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-5" role="option" data-todo-at-click="choose(5)" data-todo-at-mouseenter="selected = 5" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 5, 'text-gray-900': !(selected === 5) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 5, 'font-normal': !(value === 5) }" className="ml-3 block font-normal truncate">
                  Hellen Schmidt
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 5" data-todo-colon-className="{ 'text-white': selected === 5, 'text-indigo-600': !(selected === 5) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-6" role="option" data-todo-at-click="choose(6)" data-todo-at-mouseenter="selected = 6" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 6, 'text-gray-900': !(selected === 6) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 6, 'font-normal': !(value === 6) }" className="ml-3 block font-normal truncate">
                  Caroline Schultz
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 6" data-todo-colon-className="{ 'text-white': selected === 6, 'text-indigo-600': !(selected === 6) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-7" role="option" data-todo-at-click="choose(7)" data-todo-at-mouseenter="selected = 7" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 7, 'text-gray-900': !(selected === 7) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 7, 'font-normal': !(value === 7) }" className="ml-3 block font-normal truncate">
                  Mason Heaney
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 7" data-todo-colon-className="{ 'text-white': selected === 7, 'text-indigo-600': !(selected === 7) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-8" role="option" data-todo-at-click="choose(8)" data-todo-at-mouseenter="selected = 8" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 8, 'text-gray-900': !(selected === 8) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 8, 'font-normal': !(value === 8) }" className="ml-3 block font-normal truncate">
                  Claudie Smitham
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 8" data-todo-colon-className="{ 'text-white': selected === 8, 'text-indigo-600': !(selected === 8) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
            </li>
          
            <li data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" id="listbox-item-9" role="option" data-todo-at-click="choose(9)" data-todo-at-mouseenter="selected = 9" data-todo-at-mouseleave="selected = null" data-todo-colon-className="{ 'text-white bg-indigo-600': selected === 9, 'text-gray-900': !(selected === 9) }" className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full">
                <span data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" data-todo-colon-className="{ 'font-semibold': value === 9, 'font-normal': !(value === 9) }" className="ml-3 block font-normal truncate">
                  Emil Schaefer
                </span>
              </div>

              <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" data-todo-x-show="value === 9" data-todo-colon-className="{ 'text-white': selected === 9, 'text-indigo-600': !(selected === 9) }" className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
