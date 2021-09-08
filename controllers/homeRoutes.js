const router = require('express').Router();
const { Project, Service, User } = require('../models');
// const getProjectsByUser = require('../utils/helpers');
const withAuth = require('../utils/auth');

router.get('/services', async (req, res) => {
  try {
    const dbServices = await Service.findAll();

    const services = dbServices.map((service) => service.get({ plain: true }));

    res.render('service', { services });

    // res.json(dbServices);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', async (req, res) => {

  res.render('homepage', {logged_in: req.session.logged_in});
// extra comment
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
