const express = require('express');
const router = express.Router();
const db = require('../models');
const Task = db.task;

router.get('/', (req, res) => {
  console.log(req);
  return Task.findAll()
  .then((tasks) => {
    res.json(tasks);
  });
});

module.exports = router;