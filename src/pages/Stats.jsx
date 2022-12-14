import React from "react";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";

function Stats() {
  return (
    <div>
      <Navbar />
      <div className="title pb-4">
        <div
          className="hero min-h-96 h-96"
          style={{
            backgroundImage:
              'url("https://i.ytimg.com/vi/dOwsfrhDZgg/maxresdefault.jpg")',
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Player Stats</h1>
              <p className="mb-5">QATAR 2022 - PLAYER STATISTICS</p>
            </div>
          </div>
        </div>
      </div>
      <StatsCard />
    </div>
  );
}

export default Stats;
