import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { groupBy } from "lodash";

function ScoreCard() {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: {
      league: "1",
      season: "2022",
      from: "2022-11-20",
      to: "2022-12-18",
    },
    headers: {
      "X-RapidAPI-Key": "a6816aa53dmshecb40f0249c9ca6p168409jsna9f0721a101f",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios(options)
      .then((response) => {
        const games = response.data.response;
        console.log(response.data);
        setGames(games);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const sortedGames = games.sort(
    (a, b) => new Date(a.fixture.date) - new Date(b.fixture.date)
  );

  const dateGroupedGames = groupBy(sortedGames, (game) =>
    dayjs(game.fixture.date).format("MMMM DD, YYYY")
  );

  return (
    <div>
      <div>
        {Object.entries(dateGroupedGames).map(([date, games]) => (
          <div
            className="card content-center mb-4 w-full bg-neutral shadow-xl text-neutral-content"
            key={date}
          >
            <div className="p-4 mb-2 bg-gradient-to-r from-[#B91372] via-[#6B0F1A] to-[#B91372]">
              <div className="divider">
                <h2 className="card-title">{date}</h2>
              </div>
            </div>
            {games.map((game) => (
              <div
                key={game.response}
                className="card mb-4 w-full justify-center content-center justify-items-center"
              >
                <div className="flex justify-center content-center text-center w-full">
                  <div className="grid h-30 p-2 w-full card bg-base-300 rounded-box justify-center place-items-center">
                    <div className="team-container">
                      <div className="stat-value">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={game.teams.home.logo} alt="flag" />
                          </div>
                        </div>
                      </div>
                      <div className="stat-title">{game.teams.home.name}</div>
                    </div>
                    <div className="score-container">
                      <div className="stat-value">
                        {game.score.fulltime.home}
                      </div>
                    </div>
                  </div>
                  <div className="divider divider-horizontal">VS</div>
                  <div className="grid h-30 p-2 w-full card bg-base-300 rounded-box justify-center place-items-center">
                    <div className="team-container">
                      <div className="stat-value">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={game.teams.away.logo} alt="flag" />
                          </div>
                        </div>
                      </div>
                      <div className="stat-title">{game.teams.away.name}</div>
                    </div>
                    <div className="score-container">
                      <div className="stat-value">
                        {game.score.fulltime.away}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreCard;
