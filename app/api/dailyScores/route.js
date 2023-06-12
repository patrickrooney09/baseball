import { NextResponse } from "next/server";

export async function GET() {
  let date = new Date().toJSON().slice(0, 10).replace(/-/g, "");
  const response = await fetch(
    `https://api.mysportsfeeds.com/v2.1/pull/mlb/current/date/${date}/games.json`,
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

  let data = await response.json();

  // return NextResponse.json({ data });
  return data;
}
