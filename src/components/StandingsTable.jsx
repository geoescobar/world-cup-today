import { useState, useEffect } from "react";
import axios from "axios";

function StandingsTable() {
  const [groupAStats, setGroupAStats] = useState([]);
  const [groupBStats, setGroupBStats] = useState([]);
  const [groupCStats, setGroupCStats] = useState([]);
  const [groupDStats, setGroupDStats] = useState([]);
  const [groupEStats, setGroupEStats] = useState([]);
  const [groupFStats, setGroupFStats] = useState([]);
  const [groupGStats, setGroupGStats] = useState([]);
  const [groupHStats, setGroupHStats] = useState([]);

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/standings",
    params: { season: "2022", league: "1" },
    headers: {
      "X-RapidAPI-Key": "a6816aa53dmshecb40f0249c9ca6p168409jsna9f0721a101f",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        setGroupAStats(response.data.response[0].league.standings[0]);
        setGroupBStats(response.data.response[0].league.standings[1]);
        setGroupCStats(response.data.response[0].league.standings[2]);
        setGroupDStats(response.data.response[0].league.standings[3]);
        setGroupEStats(response.data.response[0].league.standings[4]);
        setGroupFStats(response.data.response[0].league.standings[5]);
        setGroupGStats(response.data.response[0].league.standings[6]);
        setGroupHStats(response.data.response[0].league.standings[7]);
        console.log(response.data.response[0].league.standings[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="overflow-x-auto pb-4">
        <table className="table w-full md:w-auto">
          <thead>
            <tr>
              <th>GROUP A</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupAStats[3]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>

              <td>{groupAStats[3]?.team.name}</td>
              <td> {groupAStats[3]?.all.played} </td>
              <td> {groupAStats[3]?.all.win} </td>
              <td> {groupAStats[3]?.all.draw} </td>
              <td> {groupAStats[3]?.all.lose} </td>
              <td> {groupAStats[3]?.all.goals.for} </td>
              <td> {groupAStats[3]?.all.goals.against} </td>
              <td> {groupAStats[3]?.points} </td>
            </tr>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupAStats[1]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupAStats[1]?.team.name}</td>
              <td> {groupAStats[1]?.all.played} </td>
              <td> {groupAStats[1]?.all.win} </td>
              <td> {groupAStats[1]?.all.draw} </td>
              <td> {groupAStats[1]?.all.lose} </td>
              <td> {groupAStats[1]?.all.goals.for} </td>
              <td> {groupAStats[1]?.all.goals.against} </td>
              <td> {groupAStats[1]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupAStats[2]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupAStats[2]?.team.name}</td>
              <td> {groupAStats[2]?.all.played} </td>
              <td> {groupAStats[2]?.all.win} </td>
              <td> {groupAStats[2]?.all.draw} </td>
              <td> {groupAStats[2]?.all.lose} </td>
              <td> {groupAStats[2]?.all.goals.for} </td>
              <td> {groupAStats[2]?.all.goals.against} </td>
              <td> {groupAStats[2]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupAStats[0]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupAStats[0]?.team.name}</td>
              <td> {groupAStats[0]?.all.played} </td>
              <td> {groupAStats[0]?.all.win} </td>
              <td> {groupAStats[0]?.all.draw} </td>
              <td> {groupAStats[0]?.all.lose} </td>
              <td> {groupAStats[0]?.all.goals.for} </td>
              <td> {groupAStats[0]?.all.goals.against} </td>
              <td> {groupAStats[0]?.points} </td>
            </tr>
          </tbody>
        </table>
        <table className="table w-full md:w-auto ">
          <thead>
            <tr>
              <th>GROUP B</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupBStats[3]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupBStats[3]?.team.name}</td>
              <td> {groupBStats[3]?.all.played} </td>
              <td> {groupBStats[3]?.all.win} </td>
              <td> {groupBStats[3]?.all.draw} </td>
              <td> {groupBStats[3]?.all.lose} </td>
              <td> {groupBStats[3]?.all.goals.for} </td>
              <td> {groupBStats[3]?.all.goals.against} </td>
              <td> {groupBStats[3]?.points} </td>
            </tr>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupBStats[1]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupBStats[1]?.team.name}</td>
              <td> {groupBStats[1]?.all.played} </td>
              <td> {groupBStats[1]?.all.win} </td>
              <td> {groupBStats[1]?.all.draw} </td>
              <td> {groupBStats[1]?.all.lose} </td>
              <td> {groupBStats[1]?.all.goals.for} </td>
              <td> {groupBStats[1]?.all.goals.against} </td>
              <td> {groupBStats[1]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupBStats[2]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupBStats[2]?.team.name}</td>
              <td> {groupBStats[2]?.all.played} </td>
              <td> {groupBStats[2]?.all.win} </td>
              <td> {groupBStats[2]?.all.draw} </td>
              <td> {groupBStats[2]?.all.lose} </td>
              <td> {groupBStats[2]?.all.goals.for} </td>
              <td> {groupBStats[2]?.all.goals.against} </td>
              <td> {groupBStats[2]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupBStats[0]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupBStats[0]?.team.name}</td>
              <td> {groupBStats[0]?.all.played} </td>
              <td> {groupBStats[0]?.all.win} </td>
              <td> {groupBStats[0]?.all.draw} </td>
              <td> {groupBStats[0]?.all.lose} </td>
              <td> {groupBStats[0]?.all.goals.for} </td>
              <td> {groupBStats[0]?.all.goals.against} </td>
              <td> {groupBStats[0]?.points} </td>
            </tr>
          </tbody>
        </table>
        <table className="table w-full md:w-auto ">
          <thead>
            <tr>
              <th>GROUP C</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupCStats[3]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupCStats[3]?.team.name}</td>
              <td> {groupCStats[3]?.all.played} </td>
              <td> {groupCStats[3]?.all.win} </td>
              <td> {groupCStats[3]?.all.draw} </td>
              <td> {groupCStats[3]?.all.lose} </td>
              <td> {groupCStats[3]?.all.goals.for} </td>
              <td> {groupCStats[3]?.all.goals.against} </td>
              <td> {groupCStats[3]?.points} </td>
            </tr>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupCStats[1]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupCStats[1]?.team.name}</td>
              <td> {groupCStats[1]?.all.played} </td>
              <td> {groupCStats[1]?.all.win} </td>
              <td> {groupCStats[1]?.all.draw} </td>
              <td> {groupCStats[1]?.all.lose} </td>
              <td> {groupCStats[1]?.all.goals.for} </td>
              <td> {groupCStats[1]?.all.goals.against} </td>
              <td> {groupCStats[1]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupCStats[2]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupCStats[2]?.team.name}</td>
              <td> {groupCStats[2]?.all.played} </td>
              <td> {groupCStats[2]?.all.win} </td>
              <td> {groupCStats[2]?.all.draw} </td>
              <td> {groupCStats[2]?.all.lose} </td>
              <td> {groupCStats[2]?.all.goals.for} </td>
              <td> {groupCStats[2]?.all.goals.against} </td>
              <td> {groupCStats[2]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupCStats[0]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupCStats[0]?.team.name}</td>
              <td> {groupCStats[0]?.all.played} </td>
              <td> {groupCStats[0]?.all.win} </td>
              <td> {groupCStats[0]?.all.draw} </td>
              <td> {groupCStats[0]?.all.lose} </td>
              <td> {groupCStats[0]?.all.goals.for} </td>
              <td> {groupCStats[0]?.all.goals.against} </td>
              <td> {groupCStats[0]?.points} </td>
            </tr>
          </tbody>
        </table>
        <table className="table w-full md:w-auto ">
          <thead>
            <tr>
              <th>GROUP D</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupDStats[3]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupDStats[3]?.team.name}</td>
              <td> {groupDStats[3]?.all.played} </td>
              <td> {groupDStats[3]?.all.win} </td>
              <td> {groupDStats[3]?.all.draw} </td>
              <td> {groupDStats[3]?.all.lose} </td>
              <td> {groupDStats[3]?.all.goals.for} </td>
              <td> {groupDStats[3]?.all.goals.against} </td>
              <td> {groupDStats[3]?.points} </td>
            </tr>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupDStats[1]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupDStats[1]?.team.name}</td>
              <td> {groupDStats[1]?.all.played} </td>
              <td> {groupDStats[1]?.all.win} </td>
              <td> {groupDStats[1]?.all.draw} </td>
              <td> {groupDStats[1]?.all.lose} </td>
              <td> {groupDStats[1]?.all.goals.for} </td>
              <td> {groupDStats[1]?.all.goals.against} </td>
              <td> {groupDStats[1]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupDStats[2]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupDStats[2]?.team.name}</td>
              <td> {groupDStats[2]?.all.played} </td>
              <td> {groupDStats[2]?.all.win} </td>
              <td> {groupDStats[2]?.all.draw} </td>
              <td> {groupDStats[2]?.all.lose} </td>
              <td> {groupDStats[2]?.all.goals.for} </td>
              <td> {groupDStats[2]?.all.goals.against} </td>
              <td> {groupDStats[2]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupDStats[0]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupDStats[0]?.team.name}</td>
              <td> {groupDStats[0]?.all.played} </td>
              <td> {groupDStats[0]?.all.win} </td>
              <td> {groupDStats[0]?.all.draw} </td>
              <td> {groupDStats[0]?.all.lose} </td>
              <td> {groupDStats[0]?.all.goals.for} </td>
              <td> {groupDStats[0]?.all.goals.against} </td>
              <td> {groupDStats[0]?.points} </td>
            </tr>
          </tbody>
        </table>
        <table className="table w-full md:w-auto ">
          <thead>
            <tr>
              <th>GROUP E</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupEStats[3]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupEStats[3]?.team.name}</td>
              <td> {groupEStats[3]?.all.played} </td>
              <td> {groupEStats[3]?.all.win} </td>
              <td> {groupEStats[3]?.all.draw} </td>
              <td> {groupEStats[3]?.all.lose} </td>
              <td> {groupEStats[3]?.all.goals.for} </td>
              <td> {groupEStats[3]?.all.goals.against} </td>
              <td> {groupEStats[3]?.points} </td>
            </tr>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupEStats[1]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupEStats[1]?.team.name}</td>
              <td> {groupEStats[1]?.all.played} </td>
              <td> {groupEStats[1]?.all.win} </td>
              <td> {groupEStats[1]?.all.draw} </td>
              <td> {groupEStats[1]?.all.lose} </td>
              <td> {groupEStats[1]?.all.goals.for} </td>
              <td> {groupEStats[1]?.all.goals.against} </td>
              <td> {groupEStats[1]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupEStats[2]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupEStats[2]?.team.name}</td>
              <td> {groupEStats[2]?.all.played} </td>
              <td> {groupEStats[2]?.all.win} </td>
              <td> {groupEStats[2]?.all.draw} </td>
              <td> {groupEStats[2]?.all.lose} </td>
              <td> {groupEStats[2]?.all.goals.for} </td>
              <td> {groupEStats[2]?.all.goals.against} </td>
              <td> {groupEStats[2]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupEStats[0]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupEStats[0]?.team.name}</td>
              <td> {groupEStats[0]?.all.played} </td>
              <td> {groupEStats[0]?.all.win} </td>
              <td> {groupEStats[0]?.all.draw} </td>
              <td> {groupEStats[0]?.all.lose} </td>
              <td> {groupEStats[0]?.all.goals.for} </td>
              <td> {groupEStats[0]?.all.goals.against} </td>
              <td> {groupEStats[0]?.points} </td>
            </tr>
          </tbody>
        </table>
        <table className="table w-full md:w-auto ">
          <thead>
            <tr>
              <th>GROUP F</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupFStats[3]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupFStats[3]?.team.name}</td>
              <td> {groupFStats[3]?.all.played} </td>
              <td> {groupFStats[3]?.all.win} </td>
              <td> {groupFStats[3]?.all.draw} </td>
              <td> {groupFStats[3]?.all.lose} </td>
              <td> {groupFStats[3]?.all.goals.for} </td>
              <td> {groupFStats[3]?.all.goals.against} </td>
              <td> {groupFStats[3]?.points} </td>
            </tr>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupFStats[1]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupFStats[1]?.team.name}</td>
              <td> {groupFStats[1]?.all.played} </td>
              <td> {groupFStats[1]?.all.win} </td>
              <td> {groupFStats[1]?.all.draw} </td>
              <td> {groupFStats[1]?.all.lose} </td>
              <td> {groupFStats[1]?.all.goals.for} </td>
              <td> {groupFStats[1]?.all.goals.against} </td>
              <td> {groupFStats[1]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupFStats[2]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupFStats[2]?.team.name}</td>
              <td> {groupFStats[2]?.all.played} </td>
              <td> {groupFStats[2]?.all.win} </td>
              <td> {groupFStats[2]?.all.draw} </td>
              <td> {groupFStats[2]?.all.lose} </td>
              <td> {groupFStats[2]?.all.goals.for} </td>
              <td> {groupFStats[2]?.all.goals.against} </td>
              <td> {groupFStats[2]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupFStats[0]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupFStats[0]?.team.name}</td>
              <td> {groupFStats[0]?.all.played} </td>
              <td> {groupFStats[0]?.all.win} </td>
              <td> {groupFStats[0]?.all.draw} </td>
              <td> {groupFStats[0]?.all.lose} </td>
              <td> {groupFStats[0]?.all.goals.for} </td>
              <td> {groupFStats[0]?.all.goals.against} </td>
              <td> {groupFStats[0]?.points} </td>
            </tr>
          </tbody>
        </table>
        <table className="table w-full md:w-auto ">
          <thead>
            <tr>
              <th>GROUP G</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupGStats[3]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupGStats[3]?.team.name}</td>
              <td> {groupGStats[3]?.all.played} </td>
              <td> {groupGStats[3]?.all.win} </td>
              <td> {groupGStats[3]?.all.draw} </td>
              <td> {groupGStats[3]?.all.lose} </td>
              <td> {groupGStats[3]?.all.goals.for} </td>
              <td> {groupGStats[3]?.all.goals.against} </td>
              <td> {groupGStats[3]?.points} </td>
            </tr>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupGStats[1]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupGStats[1]?.team.name}</td>
              <td> {groupGStats[1]?.all.played} </td>
              <td> {groupGStats[1]?.all.win} </td>
              <td> {groupGStats[1]?.all.draw} </td>
              <td> {groupGStats[1]?.all.lose} </td>
              <td> {groupGStats[1]?.all.goals.for} </td>
              <td> {groupGStats[1]?.all.goals.against} </td>
              <td> {groupGStats[1]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupGStats[2]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupGStats[2]?.team.name}</td>
              <td> {groupGStats[2]?.all.played} </td>
              <td> {groupGStats[2]?.all.win} </td>
              <td> {groupGStats[2]?.all.draw} </td>
              <td> {groupGStats[2]?.all.lose} </td>
              <td> {groupGStats[2]?.all.goals.for} </td>
              <td> {groupGStats[2]?.all.goals.against} </td>
              <td> {groupGStats[2]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupGStats[0]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupGStats[0]?.team.name}</td>
              <td> {groupGStats[0]?.all.played} </td>
              <td> {groupGStats[0]?.all.win} </td>
              <td> {groupGStats[0]?.all.draw} </td>
              <td> {groupGStats[0]?.all.lose} </td>
              <td> {groupGStats[0]?.all.goals.for} </td>
              <td> {groupGStats[0]?.all.goals.against} </td>
              <td> {groupGStats[0]?.points} </td>
            </tr>
          </tbody>
        </table>
        <table className="table w-full md:w-auto ">
          <thead>
            <tr>
              <th>GROUP H</th>
              <th>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupHStats[3]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupHStats[3]?.team.name}</td>
              <td> {groupHStats[3]?.all.played} </td>
              <td> {groupHStats[3]?.all.win} </td>
              <td> {groupHStats[3]?.all.draw} </td>
              <td> {groupHStats[3]?.all.lose} </td>
              <td> {groupHStats[3]?.all.goals.for} </td>
              <td> {groupHStats[3]?.all.goals.against} </td>
              <td> {groupHStats[3]?.points} </td>
            </tr>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupHStats[1]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupHStats[1]?.team.name}</td>
              <td> {groupHStats[1]?.all.played} </td>
              <td> {groupHStats[1]?.all.win} </td>
              <td> {groupHStats[1]?.all.draw} </td>
              <td> {groupHStats[1]?.all.lose} </td>
              <td> {groupHStats[1]?.all.goals.for} </td>
              <td> {groupHStats[1]?.all.goals.against} </td>
              <td> {groupHStats[1]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupHStats[2]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupHStats[2]?.team.name}</td>
              <td> {groupHStats[2]?.all.played} </td>
              <td> {groupHStats[2]?.all.win} </td>
              <td> {groupHStats[2]?.all.draw} </td>
              <td> {groupHStats[2]?.all.lose} </td>
              <td> {groupHStats[2]?.all.goals.for} </td>
              <td> {groupHStats[2]?.all.goals.against} </td>
              <td> {groupHStats[2]?.points} </td>
            </tr>
            <tr>
              <th>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={groupHStats[0]?.team.logo} alt="flag" />
                  </div>
                </div>
              </th>
              <td>{groupHStats[0]?.team.name}</td>
              <td> {groupHStats[0]?.all.played} </td>
              <td> {groupHStats[0]?.all.win} </td>
              <td> {groupHStats[0]?.all.draw} </td>
              <td> {groupHStats[0]?.all.lose} </td>
              <td> {groupHStats[0]?.all.goals.for} </td>
              <td> {groupHStats[0]?.all.goals.against} </td>
              <td> {groupHStats[0]?.points} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StandingsTable;
