import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="relative bg-white">
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-indigo-700"></div>
    </div>
    <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
      <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Full-featured
          </h2>
          <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Everything you need to talk with your customers</p>
          <dl className="mt-12 space-y-10">
            
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                  <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: view-list" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
</svg>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    List view
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.
                  </dd>
                </div>
              </div>
            
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                  <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: view-boards" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
</svg>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Boards
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.
                  </dd>
                </div>
              </div>
            
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                  <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: calendar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Calendar
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.
                  </dd>
                </div>
              </div>
            
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                  <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Teams
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.
                  </dd>
                </div>
              </div>
            
          </dl>
        </div>
      </div>
      <div className="bg-indigo-700 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
        <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
          <div>
            <h2 className="sr-only">Price</h2>
            <p className="relative grid grid-cols-2">
              <span className="flex flex-col text-center">
                <span className="text-5xl font-extrabold text-white tracking-tight">$99</span>
                <span className="mt-2 text-base font-medium text-indigo-200">Setup fee</span>
                <span className="sr-only">plus</span>
              </span>
              <span className="pointer-events-none absolute h-12 w-full flex items-center justify-center" aria-hidden="true">
                <svg className="h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: plus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
</svg>
              </span>
              <span>
                <span className="flex flex-col text-center">
                  <span className="text-5xl font-extrabold text-white tracking-tight">$4</span>
                  <span className="mt-2 text-base font-medium text-indigo-200">Per month</span>
                </span>
              </span>
            </p>
          </div>
          <ul className="bg-indigo-800 bg-opacity-50 rounded sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col">
            <li className="py-4 px-4 flex items-center space-x-3 text-base text-white">
              <svg className="h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
              <span>Unlimited Projects</span>
            </li>
            <li className="border-t border-indigo-400 border-opacity-25 py-4 px-4 flex items-center space-x-3 text-base text-white">
              <svg className="h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
              <span>Unlimited storage</span>
            </li>
            <li className="border-t border-indigo-400 border-opacity-25 py-4 px-4 flex items-center space-x-3 text-base text-white">
              <svg className="h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
              <span>Cancel anytime</span>
            </li>
            <li className="border-t border-indigo-400 border-opacity-25 py-4 px-4 flex items-center space-x-3 text-base text-white sm:border-t-0 sm:border-l">
              <svg className="h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
              <span>No per user fees</span>
            </li>
            <li className="border-t border-indigo-400 border-opacity-25 py-4 px-4 flex items-center space-x-3 text-base text-white sm:border-l">
              <svg className="h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
              <span>24/7 support</span>
            </li>
            <li className="border-t border-indigo-400 border-opacity-25 py-4 px-4 flex items-center space-x-3 text-base text-white sm:border-l">
              <svg className="h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
              <span>Cancel anytime</span>
            </li>
          </ul>
          <a href="/" className="bg-white border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-indigo-600 hover:bg-indigo-50 md:px-10">
            Get started today
          </a>
          <a href="/" className="block text-center text-base font-medium text-indigo-200 hover:text-white">
            Try Workflow Lite for free
          </a>
        </div>
      </div>
    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
