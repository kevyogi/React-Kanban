const express = require('express');
const router = express.Router();
const db = require('../models');
const Task = db.task;

router.get('/', (req, res) => {
  return Task.findAll()
  .then((tasks) => {
    res.json(tasks);
  });
});

module.exports = router;