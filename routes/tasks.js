const express = require('express');
const router = express.Router();
const db = require('../models');
const Task = db.task;
const Priority = db.priority;
const User = db.user;
const Status = db.status;

router.get('/', (req, res) => {
  console.log(req.body);
  return Task.findAll({include:[{model: Priority}, {model: User, as: 'creator'}, {model: User, as: 'dev'}, {model: Status}]})
  .then((tasks) => {
    res.json(tasks);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.post('/', (req, res) => {
  return Task.create({
    title: req.body.title,
    status_id: req.body.status_id,
    priority_id: req.body.priority_id,
    assigned_to_id: req.body.assigned_to_id,
    created_by_id: req.body.created_by_id
  })
  .then((newTask) => {
    return Task.findOne({include:[{model: Priority}, {model: User, as: 'creator'}, {model: User, as: 'dev'}, {model: Status}],
      where: {
        id: newTask.id
      }
    })
    .then((taskInfo) => {
      res.json(taskInfo);
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

router.put('/', (req, res) => {
  const data = req.body;
  return Task.findOne({
    where: {
      id: data.id
    }
  })
  .then((task) => {
    return Task.update({
      title: data.title || task.title,
      status_id: data.status_id || task.status_id,
      priority_id: data.priority_id || task.priority_id,
      assigned_to_id: data.assigned_to_id || task.assigned_to_id,
      created_by_id: data.created_by_id || task.created_by_id
    }, {
      where: {
        id: data.id
      }
    })
    .then((updatedTask) => {
      return Task.findAll({include:[{model: Priority}, {model: User, as: 'creator'}, {model: User, as: 'dev'}, {model: Status}]
      })
      .then((taskInfo) => {
        res.json(taskInfo);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

router.delete('/:id', (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((response) => {
    res.json(response);
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;

//include: [{model: user, as 'creator'}, {model: user, as 'dev'}]