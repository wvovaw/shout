const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* get login page. */
router.get('', (req, res, next) => {
  res.render('login', { title: 'Log-In' });
});

/* POST login submit */
router.post('', (req, res, next) => {
  const data = req.body.user;
  User.authenticate(data.name, data.pass, (err, user) => {
    if (err) return next(err);
    if (user) {
      req.session.uid = user.id;
      res.redirect('/');
    } else {
      res.error('Sorry! Invalid credentials.');
      res.redirect('back');
    }
  });
});

module.exports = router;
