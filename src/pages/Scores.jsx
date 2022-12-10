import React from "react";
import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";

function Scores() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="title pb-4">
          <div
            className="hero min-h-96 h-96"
            style={{
              backgroundImage: `url("https://sportzpoint.com/wp-content/uploads/2022/12/43Ja5NtwGtuk_aONV3IXKt5UJ_1440x960-scaled.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Results</h1>
                <p className="mb-5">QATAR 2022 - RESULTS</p>
              </div>
            </div>
          </div>
        </div>
        <ScoreCard />
      </div>
    </div>
  );
}

export default Scores;
