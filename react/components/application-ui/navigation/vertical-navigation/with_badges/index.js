import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white p-8">
    <div className="w-64 mx-auto">
      
  <nav className="space-y-1" aria-label="Sidebar">
    
      
        {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
        <a href="/" className="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
          <span className="truncate">
            Dashboard
          </span>
          
            {/* Current: "bg-white", Default: "bg-gray-100 group-hover:bg-gray-200" */}
            <span className="bg-white ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
              5
            </span>
          </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Team
          </span>
          </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Projects
          </span>
          
            <span className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full text-gray-600">
              19
            </span>
          </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Calendar
          </span>
          
            <span className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full text-gray-600">
              20+
            </span>
          </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Documents
          </span>
          </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Reports
          </span>
          </a>
      
  </nav>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
