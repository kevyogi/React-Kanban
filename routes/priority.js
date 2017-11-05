const express = require('express');
const router = express.Router();
const db = require('../models');
const Priority = db.priority;

router.get('/', (req, res) => {
  return Priority.findAll()
  .then((priorities) => {
    res.json(priorities);
  });
});

module.exports = router;