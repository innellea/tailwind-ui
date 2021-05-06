import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100 py-8">
    <div className="max-w-xl mx-auto px-4">
      
  <ul className="space-y-3" data-todo-x-max="1">
    
      <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
      <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
      <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
  </ul>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
