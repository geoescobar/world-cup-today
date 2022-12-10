import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8686f0b922cfc586/60dda9c815da443b1033e811/26c6db0adf825c57ebc223ce75eaf2be2c1baf73.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">World Cup Today</h1>
            <p className="mb-5">
              Keep up with all the action at the Qatar 2022 World Cup. Check
              who's in what group, what teams advanced, top performers, and all
              the scores of every game!
            </p>
            <Link to="/groups">
              <button className="btn btn-primary">Get Started</button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
