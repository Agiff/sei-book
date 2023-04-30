'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ebook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ebook.belongsTo(models.User);
      Ebook.hasOne(models.Annotation);
    }
  }
  Ebook.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    originalName: DataTypes.STRING,
    fileName: DataTypes.STRING,
    path: DataTypes.STRING,
    size: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ebook',
  });
  return Ebook;
};