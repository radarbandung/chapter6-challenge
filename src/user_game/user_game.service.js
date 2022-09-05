const userGameRepo = require("./user_game.repository");

const getAllUserGame = async () => {
  return await userGameRepo.getAllUserGame();
};

const createUserGame = async (
  username,
  password
) => {
  const userGameExists = await userGameRepo.getUserGameByName(username);
  if (!userGameExists) {
    return await userGameRepo.createNewUserGame(
      username,
      password,
    );
  } else return "Bad Requests!";
};

const deleteUserGame = async (userId) => {
  return await userGameRepo.deleteUserGame(userId);
};

const updateUserGame = async (
  productId,
  username,
  password,
) => {
  return await userGameRepo.updateUserGame(
    productId,
    username,
    password,
  );
};

const userGameService = {
  getAllUserGame,
  createUserGame,
  deleteUserGame,
  updateUserGame
}


module.exports = userGameService;