import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-gray-50" data-todo-x-data="{ openPanel: 0 }">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          
            <div className="pt-6">
              <dt className="text-lg">
                <button data-todo-x-description="Expand/collapse question button" data-todo-at-click="openPanel = (openPanel === 0 ? null data-todo-colon- 0)" className="text-left w-full flex justify-between items-start text-gray-400" data-todo-x-bind-aria-expanded="openPanel === 0">
                  <span className="font-medium text-gray-900">
                    What's the best thing about Switzerland?
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg className="-rotate-180 h-6 w-6 transform" data-todo-x-description="Heroicon name: chevron-down" data-todo-x-state-on="Open" data-todo-x-state-off="Closed" data-todo-x-bind-className="{ '-rotate-180': openPanel === 0, 'rotate-0': !(openPanel === 0) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
</svg>
                  </span>
                </button>
              </dt>
              <dd className="mt-2 pr-12" data-todo-x-show="openPanel === 0">
                <p className="text-base text-gray-500">
                  I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </p>
              </dd>
            </div>
          
            <div className="pt-6">
              <dt className="text-lg">
                <button data-todo-x-description="Expand/collapse question button" data-todo-at-click="openPanel = (openPanel === 1 ? null data-todo-colon- 1)" className="text-left w-full flex justify-between items-start text-gray-400" data-todo-x-bind-aria-expanded="openPanel === 1">
                  <span className="font-medium text-gray-900">
                    How do you make holy water?
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg className="-rotate-180 h-6 w-6 transform" data-todo-x-description="Heroicon name: chevron-down" data-todo-x-state-on="Open" data-todo-x-state-off="Closed" data-todo-x-bind-className="{ '-rotate-180': openPanel === 1, 'rotate-0': !(openPanel === 1) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
</svg>
                  </span>
                </button>
              </dt>
              <dd className="mt-2 pr-12" data-todo-x-show="openPanel === 1">
                <p className="text-base text-gray-500">
                  You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.
                </p>
              </dd>
            </div>
          
            <div className="pt-6">
              <dt className="text-lg">
                <button data-todo-x-description="Expand/collapse question button" data-todo-at-click="openPanel = (openPanel === 2 ? null data-todo-colon- 2)" className="text-left w-full flex justify-between items-start text-gray-400" data-todo-x-bind-aria-expanded="openPanel === 2">
                  <span className="font-medium text-gray-900">
                    What do you call someone with no body and no nose?
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg className="-rotate-180 h-6 w-6 transform" data-todo-x-description="Heroicon name: chevron-down" data-todo-x-state-on="Open" data-todo-x-state-off="Closed" data-todo-x-bind-className="{ '-rotate-180': openPanel === 2, 'rotate-0': !(openPanel === 2) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
</svg>
                  </span>
                </button>
              </dt>
              <dd className="mt-2 pr-12" data-todo-x-show="openPanel === 2">
                <p className="text-base text-gray-500">
                  Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.
                </p>
              </dd>
            </div>
          
            <div className="pt-6">
              <dt className="text-lg">
                <button data-todo-x-description="Expand/collapse question button" data-todo-at-click="openPanel = (openPanel === 3 ? null data-todo-colon- 3)" className="text-left w-full flex justify-between items-start text-gray-400" data-todo-x-bind-aria-expanded="openPanel === 3">
                  <span className="font-medium text-gray-900">
                    Why do you never see elephants hiding in trees?
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg className="-rotate-180 h-6 w-6 transform" data-todo-x-description="Heroicon name: chevron-down" data-todo-x-state-on="Open" data-todo-x-state-off="Closed" data-todo-x-bind-className="{ '-rotate-180': openPanel === 3, 'rotate-0': !(openPanel === 3) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
</svg>
                  </span>
                </button>
              </dt>
              <dd className="mt-2 pr-12" data-todo-x-show="openPanel === 3">
                <p className="text-base text-gray-500">
                  Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </p>
              </dd>
            </div>
          
            <div className="pt-6">
              <dt className="text-lg">
                <button data-todo-x-description="Expand/collapse question button" data-todo-at-click="openPanel = (openPanel === 4 ? null data-todo-colon- 4)" className="text-left w-full flex justify-between items-start text-gray-400" data-todo-x-bind-aria-expanded="openPanel === 4">
                  <span className="font-medium text-gray-900">
                    Why can't you hear a pterodactyl go to the bathroom?
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg className="-rotate-180 h-6 w-6 transform" data-todo-x-description="Heroicon name: chevron-down" data-todo-x-state-on="Open" data-todo-x-state-off="Closed" data-todo-x-bind-className="{ '-rotate-180': openPanel === 4, 'rotate-0': !(openPanel === 4) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
</svg>
                  </span>
                </button>
              </dt>
              <dd className="mt-2 pr-12" data-todo-x-show="openPanel === 4">
                <p className="text-base text-gray-500">
                  Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.
                </p>
              </dd>
            </div>
          
            <div className="pt-6">
              <dt className="text-lg">
                <button data-todo-x-description="Expand/collapse question button" data-todo-at-click="openPanel = (openPanel === 5 ? null data-todo-colon- 5)" className="text-left w-full flex justify-between items-start text-gray-400" data-todo-x-bind-aria-expanded="openPanel === 5">
                  <span className="font-medium text-gray-900">
                    Why did the invisible man turn down the job offer?
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg className="-rotate-180 h-6 w-6 transform" data-todo-x-description="Heroicon name: chevron-down" data-todo-x-state-on="Open" data-todo-x-state-off="Closed" data-todo-x-bind-className="{ '-rotate-180': openPanel === 5, 'rotate-0': !(openPanel === 5) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
</svg>
                  </span>
                </button>
              </dt>
              <dd className="mt-2 pr-12" data-todo-x-show="openPanel === 5">
                <p className="text-base text-gray-500">
                  He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.
                </p>
              </dd>
            </div>
          
        </dl>
      </div>
    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
