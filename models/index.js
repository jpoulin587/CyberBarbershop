const User = require('./User');
const Activity = require('./Activity');
const Service = require('./Service');

User.hasMany(Activity, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Activity.belongsTo(User, {
  foreignKey: 'user_id'
});

Service.hasMany(Activity, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Activity.belongsTo(Service, {
    foreignKey: 'user_id'
  });
  

module.exports = { User, Activity, Service };