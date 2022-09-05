const { user_game } = require('../database/models');

// cari semua user game
const getAllUserGame = async () => {
  return await user_game.findAll();
}

//cari semua user game by username
const getUserGameByName = async (username) => {
  return await user_game.findOne({
    where: { username: username },
  });
}

//cari semua user game by username
const getUserGameById = async (userId) => {
  return await user_game.findOne({
    where: { id: userId },
  });
}

//buat user game baru
const createNewUserGame = async (
  username,
  password,
) => {
  return await user_game.create({
    username,
    password,
  });
};

//hapus userGame
const deleteUserGame = async (userId) => {
  return await user_game.destroy({
    where: {
      id: userId,
    },
  });
};

//edit user game
const updateUserGame = async (
  userId,
  username,
  password
  ) => {
  return await user_game.update(
    {
      userId,
      username,
      password
    },
    {
      where: {
        id: userId,
      },
      returning: true,
    }
  );
};

const userGameRepository = {
  getAllUserGame,
  getUserGameByName,
  createNewUserGame,
  deleteUserGame,
  updateUserGame
}

module.exports = userGameRepository;
