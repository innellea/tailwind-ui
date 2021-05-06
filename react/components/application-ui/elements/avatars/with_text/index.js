import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex items-center justify-center bg-white">
    
  <a href="/" className="flex-shrink-0 group block">
    <div className="flex items-center">
      <div>
        <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
          Tom Cook
        </p>
        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
          View profile
        </p>
      </div>
    </div>
  </a>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
