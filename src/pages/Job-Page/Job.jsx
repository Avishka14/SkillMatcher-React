import React, { useState } from "react";

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York, USA",
    type: "Full-time",
    salary: "$80k - $100k",
    description:
      "We are looking for a skilled Frontend Developer with React experience to join our dynamic team.",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "DataWorks",
    location: "San Francisco, USA",
    type: "Full-time",
    salary: "$90k - $110k",
    description:
      "Seeking a talented Backend Developer with Node.js and database experience to handle large-scale applications.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "CreativeLabs",
    location: "Remote",
    type: "Contract",
    salary: "$50/hr",
    description:
      "Looking for a UI/UX designer to craft engaging and modern interfaces for web and mobile apps.",
  },

];

export default function Job() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");


  const filteredJobs = jobData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "All" || job.type === filterType)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Job Listings
        </h1>
        <p className="text-gray-500">
          Find your dream job from our curated job listings.
        </p>
      </div>


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="All">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No jobs found
          </p>
        )}
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {job.title}
                </h2>
                <p className="text-gray-500">{job.company}</p>
              </div>
              <span className="px-2 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-lg">
                {job.type}
              </span>
            </div>

            <p className="text-gray-500 mt-2">{job.location}</p>
            <p className="text-gray-700 mt-4 line-clamp-3">{job.description}</p>
            <p className="text-gray-600 mt-2 font-medium">{job.salary}</p>

            <button className="mt-4 w-full py-2 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>


      <div className="max-w-6xl mx-auto mt-8 flex justify-center gap-2">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
          1
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
          2
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
          3
        </button>
      </div>
    </div>
  );
}
