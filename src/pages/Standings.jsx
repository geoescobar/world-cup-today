import React from "react";
import Navbar from "../components/Navbar";
import StandingsTable from "../components/StandingsTable";

function Standings() {
  return (
    <div>
      <Navbar />
      <div className="title pb-4">
        <div
          className="hero min-h-96 h-96"
          style={{
            backgroundImage:
              'url("https://digitalhub.fifa.com/m/74dcea0f99c7fa98/webimage-Previews-FIFA-World-Cup-Qatar-2022.png")',
            backgroundSize: "cover",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Current Standings</h1>
              <p className="mb-5">QATAR 2022 - GROUP STANDINGS</p>
            </div>
          </div>
        </div>
      </div>
      <StandingsTable />
    </div>
  );
}

export default Standings;
