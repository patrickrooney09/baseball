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
          <div key={index}>
            <div>{currentGame.schedule.awayTeam.abbreviation}</div>
            <div>{currentGame.schedule.homeTeam.abbreviation}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Scores;
