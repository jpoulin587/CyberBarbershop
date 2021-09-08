const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
    service_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'service',
          key: 'id',
      }
  },
  user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      }
  }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity',
  }
);


module.exports = Activity;