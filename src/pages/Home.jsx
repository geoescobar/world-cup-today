import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MDMxNjg1NTQ5ODI3MzQ1/how-heavy-is-world-cup-trophyjpg.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="hero-img"
          />
          <div>
            <h1 className="text-5xl font-bold">World Cup Today!</h1>
            <p className="py-6">
              The World Cup is here! Stay up to date with the latests scores and
              results
            </p>
            <Link to="/groups">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
