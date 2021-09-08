const router = require('express').Router();
const { Activity, User, Service } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userData = await Activity.findAll({
      // TODO joining logic goes here.
      include: [
        {
          model: NameOfModel,
        },
      ],
    });

    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
