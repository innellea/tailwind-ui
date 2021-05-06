import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div _style={{maxHeight: "800px"}} className="overflow-y-auto">
    
  <div className="relative bg-gray-900">
    <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
      <div className="h-full w-full xl:grid xl:grid-cols-2">
        <div className="h-full xl:relative xl:col-start-2">
          <img className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2830&amp;q=80&amp;sat=-100" alt="People working on laptops">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
        </div>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">
          Valuable Metrics
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-white">Get actionable data that will help grow your business</p>
        <p className="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p>
        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          
            <p>
              <span className="block text-2xl font-bold text-white">8K+</span>
              <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Companies</span> use laoreet amet lacus nibh integer quis.</span>
            </p>
          
            <p>
              <span className="block text-2xl font-bold text-white">25K+</span>
              <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Countries around the globe</span> lacus nibh integer quis.</span>
            </p>
          
            <p>
              <span className="block text-2xl font-bold text-white">98%</span>
              <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Customer satisfaction</span> laoreet amet lacus nibh integer quis.</span>
            </p>
          
            <p>
              <span className="block text-2xl font-bold text-white">12M+</span>
              <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Issues resolved</span> lacus nibh integer quis.</span>
            </p>
          
        </div>
      </div>
    </div>
  </div>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
