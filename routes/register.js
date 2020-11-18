const express = require('express');
const User = require('../models/user');
const router = express.Router();

/* get page. */
// Open /register
router.get('', (req, res) => {
  res.render('register', { title: 'Register' });
});

/* POST method. Submit registration */
router.post('', (req, res, next) => {
  const data = req.body.user;
  User.getByName(data.name, (err, user) => {
    if (err) return next(err);
    // console.log('user: ', user);
    if (user.id) {
      res.error('Username already taken!');
      res.redirect('back');
    } else {
      user = new User({
        name: data.name,
        pass: data.pass
      });
      user.save((err) => {
        if (err) return next(err);
        req.session.uid = user.id;
        res.redirect('/');
      });
    }
  });
});

module.exports = router;
