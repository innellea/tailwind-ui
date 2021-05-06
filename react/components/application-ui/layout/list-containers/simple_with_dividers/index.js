import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-white p-8">
    <div className="max-w-md mx-auto">
      
  <ul className="divide-y divide-gray-200" data-todo-x-max="1">
    
      <li className="py-4">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
      <li className="py-4">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
      <li className="py-4">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
  </ul>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
