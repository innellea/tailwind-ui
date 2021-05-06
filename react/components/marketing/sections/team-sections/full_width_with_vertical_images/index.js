import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our leadership</h2>

        <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0" data-todo-x-max="1">
          
            <li>
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img className="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt="">
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Whitney Francis</h3>
                      <p className="text-indigo-600">Copywriter</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          
            <li>
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img className="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt="">
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Leonard Krasner</h3>
                      <p className="text-indigo-600">Senior Designer</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est. </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          
            <li>
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img className="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt="">
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Floyd Miles</h3>
                      <p className="text-indigo-600">Principal Designer</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          
            <li>
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img className="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt="">
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Emily Selman</h3>
                      <p className="text-indigo-600">VP, User Experience</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna. </p>
                    </div>
                  </div>
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
