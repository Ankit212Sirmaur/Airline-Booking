'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * In the City model, we define a one-to-many relationship with Airport using hasMany. This means one city can have many airports.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Airport, {
        foreignKey: 'city_id',
        onDelete: 'CASCADE',
      })
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,

    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};