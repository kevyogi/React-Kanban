const express = require('express');
const router = express.Router();
const db = require('../models');
const Task = db.task;
const Priority = db.priority;
const User = db.user;
const Status = db.status;

router.get('/', (req, res) => {
  console.log(req.body);
  return Task.findAll({include:[{model: Priority}, {model: User}, {model: Status}]})
  .then((tasks) => {
    res.json(tasks);
  });
});

router.get('/')

router.post('/', (req, res) => {
  console.log('post request', req.body);
  return Task.create({
    title: req.body.title,
    status_id: req.body.status_id,
    priority_id: req.body.priority_id,
    assignedTo_id: req.body.assignedTo_id,
    createdBy_id: req.body.createdBy_id
  })
  .then((newTask) => {
    return Task.findOne({include:[{model: Priority}, {model: User}, {model: Status}],
      where: {
        id: newTask.id
      }
    })
  });
});

module.exports = router;