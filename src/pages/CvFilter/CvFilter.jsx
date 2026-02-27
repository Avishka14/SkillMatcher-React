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

export default function CvJobMatcher() {
  const [cv, setCv] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  const handleCvUpload = (e) => {
    setCv(e.target.files[0]);
  };

  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "All" || job.type === filterType)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          CV Upload & Job Matcher
        </h1>
        <p className="text-gray-500 text-lg">
          Upload your CV and explore the most relevant job listings.
        </p>
      </div>

      {/* 50/50 Split: CV Upload + Job Listings */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* CV Upload Section with fixed width and height */}
        <div className="w-[400px] h-[500px] bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 flex-shrink-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Upload Your CV
          </h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleCvUpload}
            className="border-2 border-dashed border-indigo-300 p-6 rounded-2xl w-full text-center cursor-pointer hover:bg-indigo-50 transition"
          />
          {cv && (
            <p className="mt-2 text-green-600 font-medium">
              Uploaded: {cv.name}
            </p>
          )}
          <button className="mt-4 w-full py-3 bg-indigo-600 text-white font-medium rounded-2xl hover:bg-indigo-700 transition">
            Submit CV
          </button>
          <p className="text-gray-500 text-center mt-4">
            Supported formats: PDF, DOC, DOCX
          </p>
        </div>

        {/* Job Listings Section with scrollable content */}
        <div className="flex-1 bg-white p-8 rounded-3xl shadow-lg flex flex-col gap-6 max-h-[500px] overflow-y-auto">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6 sticky top-0 bg-white pt-4 z-10">
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.length === 0 && (
              <p className="text-gray-500 text-center text-lg">
                No jobs found matching your criteria.
              </p>
            )}
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h2>
                    <p className="text-gray-600 mt-1">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-2xl font-medium">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-500 mb-2">{job.location}</p>
                <p className="text-gray-700 mb-3 line-clamp-3">
                  {job.description}
                </p>
                <p className="text-gray-600 font-medium mb-4">{job.salary}</p>
                <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-2xl hover:bg-indigo-700 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center gap-3">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
