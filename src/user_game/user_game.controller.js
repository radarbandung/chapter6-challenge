const userGameService = require("./user_game.service")

const getAllUserGame = async (req, res) => {
  try {
    const userGame = await userGameService.getAllUserGame();
    console.log(userGame)
    if(res.status(200))
      res.json(userGame);
    else
      res.json('Bad requests');
  } catch (error) {
    res.status(500).json(error);
  }
}

const createUserGame = async (req, res) => {
  try {
    const {username, password} = req.body;
    if(username == '' || password == '') {
      return res.status(400).json('Bad requests!');
    }
    else {
      const newUserGame = await userGameService.createUserGame(
        username,
        password
      );
      return res.json(newUserGame);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteUserGame = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUserGame = await userGameService.deleteUserGame(id);
    res.status(200).json(deleteUserGame);
  } catch (error) {
    res.status(500).json("Cannot delete the data!");
  }
};

const updateUserGame = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
    const updateUserGame = await userGameService.updateUserGame(
      id,
      username,
      password
    );
    res.status(200).json(updateUserGame);
  } catch (error) {
    console.log(error);
    res.status(500).json("Cannot update the data!");
  }
};

const userGameController = {
  getAllUserGame,
  createUserGame,
  deleteUserGame,
  updateUserGame
}

module.exports = userGameController