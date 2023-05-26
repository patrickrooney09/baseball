import React from "react";
async function getData() {
  const response = await fetch(
    `https://api.mysportsfeeds.com/v2.1/pull/mlb/current/date/20230523/games.json`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.MY_SPORTS_FEEDS_API_KEY +
              ":" +
              process.env.MY_SPORTS_FEEDS_PASSWORD
          ).toString("base64"),
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  let data = await response.json();
  return data;
}
const Scores = async () => {
  await getData();

  return (
    <div>
      <h1>Todays Scores</h1>
    </div>
  );
};

export default Scores;
