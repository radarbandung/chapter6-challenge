const express = require("express");
const userGameController = require("./user_game.controller");
const userGameRouter = express.Router();

userGameRouter.get("/user-game", userGameController.getAllUserGame);
userGameRouter.post("/user-game", userGameController.createUserGame);
userGameRouter.delete("/user-game/:id", userGameController.deleteUserGame);
userGameRouter.put("/user-game/:id", userGameController.updateUserGame);

module.exports = userGameRouter;