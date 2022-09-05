'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game_biodata.belongsTo(models.user_game, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  }
  user_game_biodata.init({
    dob: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone: DataTypes.INTEGER,
    occupation: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_game_biodata',
  });
  return user_game_biodata;
};