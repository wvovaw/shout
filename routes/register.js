const express = require('express');
const User = require('../models/user');
const validate = require('../middleware/validate');
const router = express.Router();

/* get page. */
// Open /register
router.get('', (req, res) => {
  res.render('register', { title: 'Register' });
});

// FIXME: success register empty fields
/* POST method. Submit registration */
router.post('',
  validate.required('user[name]'),
  validate.lengthAbove('user[name]', 3),
  validate.required('user[pass]'),
  validate.lengthAbove('user[pass]', 8),
  (req, res, next) => {
    const data = req.body.user;
    User.getByName(data.name, (err, user) => {
      if (err) return next(err);
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
