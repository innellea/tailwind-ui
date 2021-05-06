import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white p-8">
    <div className="w-64 mx-auto">
      
  <nav className="space-y-1" aria-label="Sidebar">
    
      
        {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
        <a href="/" className="bg-gray-100 text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
          <span className="truncate">
            Dashboard
          </span>
        </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Team
          </span>
        </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Projects
          </span>
        </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Calendar
          </span>
        </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <span className="truncate">
            Documents
          </span>
        </a>
      
      
        <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md">
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
