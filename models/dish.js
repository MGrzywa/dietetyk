'use strict';
module.exports = (sequelize, DataTypes) => {
  const dish = sequelize.define('dish', {
    name: DataTypes.STRING
  }, {});
  dish.associate = function(models) {
    // associations can be defined here
    dish.hasMany(models.ingredient)
  };
  return dish;
};