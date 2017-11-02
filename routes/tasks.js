const express = require('express');
const router = express.Router();
const db = require('../models');
const Task = db.task;
const Priority = db.priority;
const User = db.user;
const Status = db.status;

router.get('/todo', (req, res) => {
  console.log(req.body);
  return Task.findAll({include:[{model: Priority}, {model: User}, {model: Status}],
    where: {
      status_id: 1
    }
  })
  .then((tasks) => {
    res.json(tasks);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/doing', (req, res) => {
  console.log(req.body);
  return Task.findAll({include:[{model: Priority}, {model: User}, {model: Status}],
    where: {
      status_id: 2
    }
  })
  .then((tasks) => {
    res.json(tasks);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/done', (req, res) => {
  console.log(req.body);
  return Task.findAll({include:[{model: Priority}, {model: User}, {model: Status}],
    where: {
      status_id: 3
    }
  })
  .then((tasks) => {
    res.json(tasks);
  })
  .catch((error) => {
    console.log(error);
  });
});

// router.get('/', (req, res) => {
//   console.log(req.body);
//   return Task.findAll({include:[{model: Priority}, {model: User}, {model: Status}]})
//   .then((tasks) => {
//     res.json(tasks);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

router.post('/', (req, res) => {
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
    .then((taskInfo) => {
      res.json(taskInfo);
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

// router.delete('/:id', (req, res) => {

// })

module.exports = router;