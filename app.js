const express = require("express");
const userGameRouter = require("./src/user_game/user_game.route");
const app = express();
require("dotenv").config();
const port =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_PORT
    : process.env.DEV_PORT;

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.use(userGameRouter)

app.listen(port, () =>
  console.log(
    `> Server in ${process.env.NODE_ENV} mode, and running on port: ${port}`
  )
);
