import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineSportsSoccer } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <p className="btn btn-ghost normal-case text-xl">
              <MdOutlineSportsSoccer />
              World Cup Today
            </p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/groups">Groups</Link>
            </li>
            <li>
              <Link to="/standings">Standings</Link>
            </li>
            <li>
              <Link to="/player-stats">Player Stats</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
