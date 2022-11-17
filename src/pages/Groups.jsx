import React from "react";
import Navbar from "../components/Navbar";
import GroupCards from "../components/GroupCards";

function Groups() {
  return (
    <div>
      <Navbar />
      <div className="title pb-4">
        <div
          className="hero min-h-96 h-96"
          style={{
            backgroundImage: `url("https://futbol.si.com/.image/t_share/MTg4NDM1MDczNDQ2OTc4NzIz/al-rihla.webp")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Groups</h1>
              <p className="mb-5">QATAR 2022 - GROUPS</p>
            </div>
          </div>
        </div>
      </div>
      <GroupCards />
    </div>
  );
}

export default Groups;
