import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white">
    
  <div className="py-12 px-4 sm:px-6 lg:px-8">
    <nav className="flex justify-center" aria-label="Progress">
      <ol className="space-y-6">
        
          <li>
            
              <a href="/" className="group" data-todo-x-description="Complete Step">
                <span className="flex items-start">
                  <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                    <svg className="h-full w-full text-indigo-600 group-hover:text-indigo-800" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                  </span>
                  <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">Create account</span>
                </span>
              </a>
            </li>
        
          <li>
            
              <a href="/" className="flex items-start" aria-current="step" data-todo-x-description="Current Step">
                <span className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
                  <span className="absolute h-4 w-4 rounded-full bg-indigo-200"></span>
                  <span className="relative block w-2 h-2 bg-indigo-600 rounded-full"></span>
                </span>
                <span className="ml-3 text-sm font-medium text-indigo-600">Profile information</span>
              </a>
            </li>
        
          <li>
            
              <a href="/" className="group" data-todo-x-description="Upcoming Step">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
                    <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                  </div>
                  <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">Theme</p>
                </div>
              </a>
            </li>
        
          <li>
            
              <a href="/" className="group" data-todo-x-description="Upcoming Step">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
                    <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                  </div>
                  <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">Preview</p>
                </div>
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
