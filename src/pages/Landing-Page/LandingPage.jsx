import React from "react";
import "./LandingPage.css";


const LandingPage = () => {
  return (
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
    </div>
  );
};

export default LandingPage;
