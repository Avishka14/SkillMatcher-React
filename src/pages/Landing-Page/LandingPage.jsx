import React from "react";
import "./LandingPage.css";
import Header from "../../components/Header/Header";

const LandingPage = () => {
  return (
    <>
    <Header/>
    <div className="main-container-landing min-h-screen text-white flex flex-col items-center justify-center p-4 md:p-8 rounded-xl overflow-hidden">
      <div className="stars"></div>
      <div className="stars-medium"></div>
      <div className="stars-large"></div>

        <div className="welcome-section">
          <h1 >
            Your gateway to smart hiring and effortless job search.
          </h1>
          <h2 >
            SkillMatcher is your ultimate Job Recruiting Service. Find matching jobs or filter CVs effortlessly.
          </h2>
        </div>

        <div class="features-grid">

  <div class="feature-card animate-fadeIn">
    <div class="feature-header">
      <div class="icon-bg">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 
          10 10 10 10-4.48 10-10S17.52 2 
          12 2zm-1 15.01L7.5 13.5l1.06-1.06L11 
          14.91V7h1.5v7.91l2.44-2.45L16.5 
          13.5 12 18.01z"/>
        </svg>
      </div>
      <h2 class="gradient-text">For Job Seekers</h2>
    </div>
    <ul class="feature-list">
      <li><span>✔</span> Personalized Job Matching  Upload your CV and get tailored recommendations.</li>
      <li><span>✔</span> AI-Powered Resume Analyzer Suggestions to improve your CV for better matching.</li>
      <li><span>✔</span> Advanced Search & Filters Find jobs by location, salary, skills, and more.</li>
      <li><span>✔</span> Job Alerts & Notifications Real-time updates for matching job postings.</li>
      <li><span>✔</span> Application Tracking Track applications, interviews, and offers easily.</li>
      <li><span>✔</span> Skill Assessments Showcase your abilities to stand out to recruiters.</li>
    </ul>
  </div>


  <div class="feature-card animate-fadeIn animate-delay">
    <div class="feature-header">
      <div class="icon-bg">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 
          12s4.48 10 10 10 10-4.48 
          10-10S17.52 2 12 2zm-1 15.01L7.5 
          13.5l1.06-1.06L11 14.91V7h1.5v7.91l2.44-2.45L16.5 
          13.5 12 18.01z"/>
        </svg>
      </div>
      <h2 class="gradient-text">For Recruiters & Employers</h2>
    </div>
    <ul class="feature-list">
      <li><span>✔</span> Seamless Job Posting Post vacancies quickly and manage applications.</li>
      <li><span>✔</span> Candidate Matching  Access curated profiles that fit job requirements.</li>
      <li><span>✔</span> Recruiter Analytics Insights into applicants, engagement, and hiring trends.</li>
      <li><span>✔</span> Company Profiles & Reviews Build trust and attract top talent.</li>
      <li><span>✔</span> Application Management Streamline reviewing, shortlisting, and communication.</li>
    </ul>
  </div>

</div>


    </div>

    </>
  );
};

export default LandingPage;
