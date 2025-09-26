import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="main-container-landing min-h-screen text-white flex flex-col items-center justify-center p-4 md:p-8 rounded-xl overflow-hidden">
        <div className="stars"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>

        <div className="welcome-section ">
          <h1>Your gateway to smart hiring and effortless job search.</h1>
          <h2>
            SkillMatcher is your ultimate Job Recruiting Service. Find matching
            jobs or filter CVs effortlessly.
          </h2>
        </div>

        <div className="cv-upload-section">
          <h2>Find the Job for Your CV</h2>

          <label htmlFor="cv-upload" className="file-label">
            Select your PDF (max 20MB)
          </label>
          <input id="cv-upload" type="file" accept="application/pdf" />

          <button type="button" className="cv-btn">
            Match My CV 🚀
          </button>
        </div>

        <div className="features-grid">
          <div className="feature-card animate-fadeIn">
            <div className="feature-header">
              <div className="icon-bg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 
          10 10 10 10-4.48 10-10S17.52 2 
          12 2zm-1 15.01L7.5 13.5l1.06-1.06L11 
          14.91V7h1.5v7.91l2.44-2.45L16.5 
          13.5 12 18.01z"
                  />
                </svg>
              </div>
              <h2 className="gradient-text">For Job Seekers</h2>
            </div>
            <ul className="feature-list">
              <li>
                <span>✔</span> Personalized Job Matching Upload your CV and get
                tailored recommendations.
              </li>
              <li>
                <span>✔</span> AI-Powered Resume Analyzer Suggestions to improve
                your CV for better matching.
              </li>
              <li>
                <span>✔</span> Advanced Search & Filters Find jobs by location,
                salary, skills, and more.
              </li>
              <li>
                <span>✔</span> Job Alerts & Notifications Real-time updates for
                matching job postings.
              </li>
              <li>
                <span>✔</span> Application Tracking Track applications,
                interviews, and offers easily.
              </li>
              <li>
                <span>✔</span> Skill Assessments Showcase your abilities to
                stand out to recruiters.
              </li>
            </ul>
          </div>

          <div className="feature-card animate-fadeIn animate-delay">
            <div className="feature-header">
              <div className="icon-bg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 
          12s4.48 10 10 10 10-4.48 
          10-10S17.52 2 12 2zm-1 15.01L7.5 
          13.5l1.06-1.06L11 14.91V7h1.5v7.91l2.44-2.45L16.5 
          13.5 12 18.01z"
                  />
                </svg>
              </div>
              <h2 className="gradient-text">For Recruiters & Employers</h2>
            </div>
            <ul className="feature-list">
              <li>
                <span>✔</span> Seamless Job Posting Post vacancies quickly and
                manage applications.
              </li>
              <li>
                <span>✔</span> Candidate Matching Access curated profiles that
                fit job requirements.
              </li>
              <li>
                <span>✔</span> Recruiter Analytics Insights into applicants,
                engagement, and hiring trends.
              </li>
              <li>
                <span>✔</span> Company Profiles & Reviews Build trust and
                attract top talent.
              </li>
              <li>
                <span>✔</span> Application Management Streamline reviewing,
                shortlisting, and communication.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
