const express = require('express');

function message (req) {
  return (msg, type) => {
    type = type || 'info';
    const sess = req.session;
    sess.message = sess.messages || [];
    sess.message.push({ type: type, string: msg });
  };
};

module.exports = (req, res, next) => {
  res.message = message(req);
  res.error = (msg) => {
    return res.message(msg, 'error');
  };
  res.locals.messages = req.session.messages || [];
  res.locals.removeMessages = () => {
    req.session.messages = [];
  }
  next();
};
