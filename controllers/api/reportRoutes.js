const router = require('express').Router();
const { Activity, User, Service } = require('../../models');
// const withAuth = require("../../utils/auth");

router.get('/', async (req, res) => {
  try {
    const userData = await Activity.findAll({
      include: [User, Service],
     });
    //console.log({ userData });
    const reports = userData.map((report) => report.get({ plain: true }));

    const allUserData = await User.findAll();
    const users = allUserData.map((user) => user.get({ plain: true }));

    const allServiceData = await Service.findAll();
    const services = allServiceData.map((service) =>
      service.get({ plain: true })
    );
    // console.log({ reportData });

    // res.status(200).json(reportData);
    res.render('activity', { reports, users, services });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { service_id, user_id } = req.body;
    const newActivity = await Activity.create({
      service_id,
      user_id,
    });
    // console.log({ newActivity });
    res.status(200).json(newActivity);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const activityData = await Activity.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(activityData);
    if (!activityData) {
      res.status(404).json({ message: 'No activity found with this id' });
      return;
    }
    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
