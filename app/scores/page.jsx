import React from "react";
import { GET } from "../api/dailyScores/route";

const Scores = async () => {
  const games = await GET();

  return (
    <div>
      <h1>Todays Scores</h1>
      {games.games.map((currentGame, index) => {
        console.log(currentGame.schedule.awayTeam);
        return (
          <div key={index} className="box-score">
            <div>
              {currentGame.schedule.awayTeam.abbreviation}{" "}
              {currentGame.score.awayScoreTotal}
            </div>
            <div>
              {currentGame.schedule.homeTeam.abbreviation}{" "}
              {currentGame.score.homeScoreTotal}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Scores;
