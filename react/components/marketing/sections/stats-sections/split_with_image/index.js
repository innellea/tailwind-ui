import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  
  <div className="relative bg-white">
    <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
      <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80" alt="Support team">
    </div>
    <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
      <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
        <div>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
          </div>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Deliver what your customers want every time
        </h2>
        <p className="mt-6 text-lg text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur deserunt voluptatibus.
        </p>
        <div className="mt-8 overflow-hidden">
          <dl className="-mx-8 -mt-8 flex flex-wrap">
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">
                Delivery
              </dt>
              <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                24/7
              </dd>
            </div>
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">
                Pepperoni
              </dt>
              <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                99.9%
              </dd>
            </div>
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">
                Calories
              </dt>
              <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                100k+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>

</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
