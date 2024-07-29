'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**In the Airport model, we define a many-to-one relationship with City using belongsTo. This means many airports can belong to one city.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
        onDelete: 'CASCADE',
      })
    }
  }
  Airport.init({
    name: {
     type: DataTypes.STRING,
     allowNull:false,
     unique:true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    address: {
      type: DataTypes.STRING,
      unique:true,
    },
    city_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};