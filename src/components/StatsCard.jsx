import { useState, useEffect } from "react";
import axios from "axios";

function StatsCard() {
  const [mostGoals, setMostGoals] = useState([]);
  const [mostAssists, setMostAssists] = useState([]);

  const goals = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/players/topscorers",
    params: { league: "1", season: "2022" },
    headers: {
      "X-RapidAPI-Key": "a6816aa53dmshecb40f0249c9ca6p168409jsna9f0721a101f",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const assists = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/players/topassists",
    params: { league: "1", season: "2022" },
    headers: {
      "X-RapidAPI-Key": "a6816aa53dmshecb40f0249c9ca6p168409jsna9f0721a101f",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchGoals = () => {
    axios
      .request(goals)
      .then(function (response) {
        setMostGoals(response.data.response);
        console.log(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const fetchAssists = () => {
    axios
      .request(assists)
      .then(function (response) {
        setMostAssists(response.data.response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchGoals();
    fetchAssists();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div class="grid grid-cols-2 justify-items-center">
        {/* row1 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="p-4 bg-gradient-to-r from-[#B91372] via-[#6B0F1A] to-[#B91372]">
              <div className="divider">
                <h2 className="card-title">Most Goals</h2>
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={mostGoals[0]?.player.photo} alt="flag" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {mostGoals[0]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostGoals[0]?.statistics[0].goals.total}</div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={mostGoals[1]?.player.photo} alt="flag" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {" "}
                            {mostGoals[1]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostGoals[1]?.statistics[0].goals.total}</div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={mostGoals[2]?.player.photo} alt="flag" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {" "}
                            {mostGoals[2]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostGoals[2]?.statistics[0].goals.total}</div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={mostGoals[3]?.player.photo} alt="flag" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {" "}
                            {mostGoals[3]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostGoals[3]?.statistics[0].goals.total}</div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={mostGoals[4]?.player.photo} alt="flag" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {" "}
                            {mostGoals[4]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostGoals[4]?.statistics[0].goals.total}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="p-4 bg-gradient-to-r from-[#B91372] via-[#6B0F1A] to-[#B91372]">
              <div className="divider">
                <h2 className="card-title">Most Assists</h2>
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={mostAssists[0]?.player.photo}
                              alt="flag"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {mostAssists[0]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostAssists[0]?.statistics[0].goals.assists}</div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={mostAssists[1]?.player.photo}
                              alt="flag"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {" "}
                            {mostAssists[1]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostAssists[1]?.statistics[0].goals.assists}</div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={mostAssists[2]?.player.photo}
                              alt="flag"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {" "}
                            {mostAssists[2]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostAssists[2]?.statistics[0].goals.assists}</div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={mostAssists[3]?.player.photo}
                              alt="flag"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {" "}
                            {mostAssists[3]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostAssists[3]?.statistics[0].goals.assists}</div>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex justify-between">
                    {" "}
                    <div className="list-container">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={mostAssists[4]?.player.photo}
                              alt="flag"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {" "}
                            {mostAssists[4]?.player.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>{mostAssists[4]?.statistics[0].goals.assists}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
