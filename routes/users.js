const express = require('express');
const router = express.Router();
const db = require('../models');
const Task = db.task;
const Priority = db.priority;
const User = db.user;
const Status = db.status;

router.get('/', (req, res) => {
  return User.findAll({include:[{model:Task, as: 'cards'}, {model:Task, as: 'tasks'}]})
  .then((users) => {
    res.json(users);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.post('/', (req, res) => {
  return User.create({
    name: req.body.name
  })
  .then((newUser) => {
    return User.findOne({include:[{model:Task, as: 'cards'}, {model:Task, as: 'tasks'}],
      where: {
        id: newUser.id
      }
    })
    then((user) => {
      res.json(user);
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;