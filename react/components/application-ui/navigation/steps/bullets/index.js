import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white">
    <div className="mx-auto py-12">
      
  <nav className="flex items-center justify-center" aria-label="Progress">
    <p className="text-sm font-medium">Step 2 of 4</p>
    <ol className="ml-8 flex items-center space-x-5">
      
        <li>
          
            {/* Completed Step */}
            <a href="/" className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
              <span className="sr-only">Step 1</span>
            </a>
          </li>
      
        <li>
          
            {/* Current Step */}
            <a href="/" className="relative flex items-center justify-center" aria-current="step">
              <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
                <span className="w-full h-full rounded-full bg-indigo-200"></span>
              </span>
              <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true"></span>
              <span className="sr-only">Step 2</span>
            </a>
          </li>
      
        <li>
          
            {/* Upcoming Step */}
            <a href="/" className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
              <span className="sr-only">Step 3</span>
            </a>
          </li>
      
        <li>
          
            {/* Upcoming Step */}
            <a href="/" className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
              <span className="sr-only">Step 4</span>
            </a>
          </li>
      
    </ol>
  </nav>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
