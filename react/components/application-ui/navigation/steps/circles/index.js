import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white">
    <div className="flex justify-center mx-auto py-12">
      
  <nav aria-label="Progress">
    <ol className="flex items-center">
      
        <li className="relative pr-8 sm:pr-20">
          
            <div className="absolute inset-0 flex items-center" aria-hidden="true" data-todo-x-description="Completed Step">
              <div className="h-0.5 w-full bg-indigo-600"></div>
            </div>
            <a href="/" className="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
              <svg className="w-5 h-5 text-white" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              <span className="sr-only">Step 1</span>
            </a>
          </li>
      
        <li className="relative pr-8 sm:pr-20">
          
            <div className="absolute inset-0 flex items-center" aria-hidden="true" data-todo-x-description="Completed Step">
              <div className="h-0.5 w-full bg-indigo-600"></div>
            </div>
            <a href="/" className="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
              <svg className="w-5 h-5 text-white" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              <span className="sr-only">Step 2</span>
            </a>
          </li>
      
        <li className="relative pr-8 sm:pr-20">
          
            <div className="absolute inset-0 flex items-center" aria-hidden="true" data-todo-x-description="Current Step">
              <div className="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a href="/" className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
              <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true"></span>
              <span className="sr-only">Step 3</span>
            </a>
          </li>
      
        <li className="relative pr-8 sm:pr-20">
          
            <div className="absolute inset-0 flex items-center" aria-hidden="true" data-todo-x-description="Upcoming Step">
              <div className="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a href="/" className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
              <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"></span>
              <span className="sr-only">Step 4</span>
            </a>
          </li>
      
        <li className="relative ">
          
            <div className="absolute inset-0 flex items-center" aria-hidden="true" data-todo-x-description="Upcoming Step">
              <div className="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a href="/" className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
              <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"></span>
              <span className="sr-only">Step 5</span>
            </a>
          </li>
      
    </ol>
  </nav>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
