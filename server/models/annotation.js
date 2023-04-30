'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Annotation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Annotation.belongsTo(models.Ebook);
    }
  }
  Annotation.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    data: DataTypes.TEXT,
    EbookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Annotation',
  });
  return Annotation;
};