import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-gray-100 h-screen" style={{minHeight: "960px"}}>
    
  <div data-todo-x-data="{ open: true }" data-todo-at-keydown-window-escape="open = false; setTimeout(() => open = true, 1000);" className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <section data-todo-at-click-away="open = false; setTimeout(() => open = true, 1000);" className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16" aria-labelledby="slide-over-heading">
        <div className="w-screen max-w-2xl" data-todo-x-description="Slide-over panel, show/hide based on slide-over state." data-todo-x-show="open" data-todo-x-transition-enter="transform transition ease-in-out duration-500 sm:duration-700" data-todo-x-transition-enter-start="translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transform transition ease-in-out duration-500 sm:duration-700" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="translate-x-full">
          <form className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
            <div className="flex-1">
              {/* Header */}
              <div className="px-4 py-6 bg-gray-50 sm:px-6">
                <div className="flex items-start justify-between space-x-3">
                  <div className="space-y-1">
                    <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                      New project
                    </h2>
                    <p className="text-sm text-gray-500">
                      Get started by filling in the information below to create your new project.
                    </p>
                  </div>
                  <div className="h-7 flex items-center">
                    <button data-todo-at-click="open = false; setTimeout(() => open = true, 1000);" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <span className="sr-only">Close panel</span>
                      <svg className="h-6 w-6" data-todo-x-description="Heroicon name: x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Divider container */}
              <div className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                {/* Project name */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label htmlFor="project_name" className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                      Project name
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <input type="text" name="project_name" id="project_name" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                  </div>
                </div>

                {/* Project description */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label htmlFor="project_description" className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                      Description
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <textarea id="project_description" name="project_description" rows="3" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                  </div>
                </div>

                {/* Team members */}
                <div className="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:px-6 sm:py-5">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Team Members
                    </h3>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex space-x-2">
                      
                        <a href="/" className="flex-shrink-0 rounded-full hover:opacity-75">
                          <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Tom Warner">
                        </a>
                      
                        <a href="/" className="flex-shrink-0 rounded-full hover:opacity-75">
                          <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Tom Warner">
                        </a>
                      
                        <a href="/" className="flex-shrink-0 rounded-full hover:opacity-75">
                          <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Tom Warner">
                        </a>
                      
                        <a href="/" className="flex-shrink-0 rounded-full hover:opacity-75">
                          <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Tom Warner">
                        </a>
                      
                        <a href="/" className="flex-shrink-0 rounded-full hover:opacity-75">
                          <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Tom Warner">
                        </a>
                      

                      <button type="button" className="flex-shrink-0 bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Add team member</span>
                        <svg className="h-5 w-5" data-todo-x-description="Heroicon name: plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
</svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Privacy */}
                <fieldset>
                  <div className="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5">
                    <div>
                      <legend className="text-sm font-medium text-gray-900">
                        Privacy
                      </legend>
                    </div>
                    <div className="space-y-5 sm:col-span-2">
                      <div className="space-y-5 sm:mt-0">
                        
                          <div className="relative flex items-start">
                            <div className="absolute flex items-center h-5">
                              
                                <input id="public_access" name="public_access" aria-describedby="public_access_description" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked="">
                              </div>
                            <div className="pl-7 text-sm">
                              <label htmlFor="public_access" className="font-medium text-gray-900">
                                Public access
                              </label>
                              <p id="public_access_description" className="text-gray-500">
                                Everyone with the link will see this project
                              </p>
                            </div>
                          </div>
                        
                          <div className="relative flex items-start">
                            <div className="absolute flex items-center h-5">
                              
                                <input id="restricted_access" name="restricted_access" aria-describedby="restricted_access_description" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                              </div>
                            <div className="pl-7 text-sm">
                              <label htmlFor="restricted_access" className="font-medium text-gray-900">
                                Private to Project Members
                              </label>
                              <p id="restricted_access_description" className="text-gray-500">
                                Only members of this project would be able to access
                              </p>
                            </div>
                          </div>
                        
                          <div className="relative flex items-start">
                            <div className="absolute flex items-center h-5">
                              
                                <input id="private_access" name="private_access" aria-describedby="private_access_description" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                              </div>
                            <div className="pl-7 text-sm">
                              <label htmlFor="private_access" className="font-medium text-gray-900">
                                Private to you
                              </label>
                              <p id="private_access_description" className="text-gray-500">
                                You are the only one able to access this project
                              </p>
                            </div>
                          </div>
                        
                      </div>
                      <hr className="border-gray-200">
                      <div className="flex flex-col space-between space-y-4 sm:flex-row sm:items-center sm:space-between sm:space-y-0">
                        <div className="flex-1">
                          <a href="/" className="group flex items-center text-sm text-indigo-600 hover:text-indigo-900 font-medium space-x-2.5">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" data-todo-x-description="Heroicon name: link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
</svg>
                            <span>
                              Copy link
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/" className="group flex items-center text-sm text-gray-500 hover:text-gray-900 space-x-2.5">
                            <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: question-mark-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
</svg>
                            <span>
                              Learn more about sharing
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6">
              <div className="space-x-3 flex justify-end">
                <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Cancel
                </button>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
