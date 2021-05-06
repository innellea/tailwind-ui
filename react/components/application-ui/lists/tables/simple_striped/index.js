import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100 py-6">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody data-todo-x-max="2">
              
                <tr className="bg-white" data-todo-x-description="Odd row">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Jane Cooper
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Regional Paradigm Technician
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    jane.cooper@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              
                <tr className="bg-gray-50" data-todo-x-description="Even row">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Cody Fisher
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Product Directives Officer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    cody.fisher@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Owner
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              
                <tr className="bg-white" data-todo-x-description="Odd row">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Esther Howard
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Forward Response Developer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    esther.howard@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Member
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              
                <tr className="bg-gray-50" data-todo-x-description="Even row">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Jenny Wilson
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Central Security Manager
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    jenny.wilson@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Member
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              
                <tr className="bg-white" data-todo-x-description="Odd row">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Kristin Watson
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Lead Implementation Liaison
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    kristin.watson@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              
                <tr className="bg-gray-50" data-todo-x-description="Even row">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Cameron Williamson
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Internal Applications Engineer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    cameron.williamson@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Member
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
