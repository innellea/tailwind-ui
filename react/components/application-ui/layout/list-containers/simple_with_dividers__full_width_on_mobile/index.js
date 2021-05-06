import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white py-8">
    <div className="max-w-2xl mx-auto sm:px-6">
      
  <ul className="divide-y divide-gray-200" data-todo-x-max="1">
    
      <li className="px-4 py-4 sm:px-0">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
      <li className="px-4 py-4 sm:px-0">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
      <li className="px-4 py-4 sm:px-0">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
  </ul>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
