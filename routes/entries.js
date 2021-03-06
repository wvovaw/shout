const express = require('express');
const router = express.Router();
const Entry = require('../models/entry')
const validate = require('../middleware/validate');

/* GET posts page. */
router.get('/post', (req, res, next) => {
  res.render('post', { title: 'Post' });
});

/* GET list of posts page. */
router.get('/', (req, res, next) => {
  Entry.getRange(0, -1, (err, entries) => {
    if (err) return next(err);
    res.render('entries', {
      title: 'Entries',
      entries: entries
    });
  });
});

/* POST posts page. */
// Submit form
router.post('/post',
  validate.required('entry[title]'),
  validate.required('entry[body]'),
  (req, res, next) => {
    const data = req.body.entry;
    const user = res.locals.user;
    const date = new Date();
    let username = 'Anonimalus';
    if (!data.incognito)
      username = user ? user.name : 'Anonimalus';

    const entry = new Entry({
      username: username,
      title: data.title,
      body: data.body,
      date: date
    });
    entry.save((err) => {
      if (err) return next(err);
      res.redirect('/');
    })
  }
);

module.exports = router;
