'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    name: DataTypes.STRING,
    dishId: DataTypes.INTEGER
  }, {});
  ingredient.associate = function(models) {
    // associations can be defined here
    ingredient.belongsTo(models.dish)
  };
  return ingredient;
};