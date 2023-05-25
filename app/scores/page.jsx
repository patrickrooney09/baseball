import React from "react";

const Scores = () => {
  async function getData() {
    let response = fetch(
      `https://api.mysportsfeeds.com/v2.1/pull/mlb/2023-regular/date/20230523/games.json`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic " + btoa(`86d6957a-ebe5-48a6-8a41-d69844:MYSPORTSFEEDS`),
        },
      }
    );
    let data = await response.json();
    console.log(data);
    return data;
  }

  getData();

  return (
    <div>
      <h1>Todays Scores</h1>
    </div>
  );
};

export default Scores;
