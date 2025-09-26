import React from "react";


export default function Account() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src="https://via.placeholder.com/120"
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-md"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-500">johndoe@example.com</p>
            <p className="text-gray-400 text-sm">Member since Jan 2023</p>
          </div>
        </div>


        <div className="my-6 border-t border-gray-200"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-100 rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">Personal Info</h2>
            <p className="mt-2 text-sm text-gray-600"><span className="font-medium">Full Name:</span> John Doe</p>
            <p className="text-sm text-gray-600"><span className="font-medium">Phone:</span> +1 234 567 890</p>
            <p className="text-sm text-gray-600"><span className="font-medium">Location:</span> New York, USA</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">Account Settings</h2>
            <p className="mt-2 text-sm text-gray-600"><span className="font-medium">Plan:</span> Free</p>
            <p className="text-sm text-gray-600"><span className="font-medium">Status:</span> Active</p>
            <p className="text-sm text-gray-600"><span className="font-medium">Last Login:</span> 2 days ago</p>
          </div>
        </div>


        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
          <button className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
            Edit Profile
          </button>
          <button className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition">
            Log Out
          </button>
        </div>

      </div>
    </div>
  );
}
