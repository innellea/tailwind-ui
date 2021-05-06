import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white py-8">
    <div className="max-w-lg mx-auto px-6">
      
  <div>
    <ul className="divide-y divide-gray-200" data-todo-x-max="1">
      
        <li className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" alt="">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Whitney Francis</h3>
                <p className="text-sm text-gray-500">1h</p>
              </div>
              <p className="text-sm text-gray-500">Deployed Workcation (2d89f0c8 in master) to production</p>
            </div>
          </div>
        </li>
      
        <li className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" alt="">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Floyd Miles</h3>
                <p className="text-sm text-gray-500">3h</p>
              </div>
              <p className="text-sm text-gray-500">Deployed KiteTail (249df660 in master) to staging</p>
            </div>
          </div>
        </li>
      
        <li className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" alt="">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Floyd Miles</h3>
                <p className="text-sm text-gray-500">12h</p>
              </div>
              <p className="text-sm text-gray-500">Deployed Workcation (11464223 in master) to staging</p>
            </div>
          </div>
        </li>
      
        <li className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" alt="">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Whitney Francis</h3>
                <p className="text-sm text-gray-500">2d</p>
              </div>
              <p className="text-sm text-gray-500">Deployed Easywire (dad28e95 in master) to production</p>
            </div>
          </div>
        </li>
      
        <li className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" alt="">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Lindsay Walton</h3>
                <p className="text-sm text-gray-500">5d</p>
              </div>
              <p className="text-sm text-gray-500">Deployed Easywire (624bc94c in master) to production</p>
            </div>
          </div>
        </li>
      
        <li className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" alt="">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Floyd Miles</h3>
                <p className="text-sm text-gray-500">1w</p>
              </div>
              <p className="text-sm text-gray-500">Deployed Workcation (e111f80e in master) to production</p>
            </div>
          </div>
        </li>
      
        <li className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" alt="">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Courtney Henry</h3>
                <p className="text-sm text-gray-500">1w</p>
              </div>
              <p className="text-sm text-gray-500">Deployed Resumaid (5e136005 in master) to staging</p>
            </div>
          </div>
        </li>
      
        <li className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" alt="">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Whitney Francis</h3>
                <p className="text-sm text-gray-500">2w</p>
              </div>
              <p className="text-sm text-gray-500">Deployed KiteTail (5c1fd07f in master) to production</p>
            </div>
          </div>
        </li>
      
    </ul>
  </div>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
