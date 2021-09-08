const sequelize = require('../config/connection');
const { User, Service, Activity } = require('../models');

const userData = require('./userData.json');
const serviceData = require('./serviceData.json');
const activityData = require('./activityData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const service = await Service.bulkCreate(serviceData);
  const activity = await Activity.bulkCreate(activityData);

  process.exit(0);
};

seedDatabase();