const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
const tasksRoute = require('../routes/tasks.js');
const usersRoute = require('../routes/users.js');
const statusRoute = require('../routes/status.js');
const priorityRoute = require('../routes/priority.js');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/api/tasks', tasksRoute);
app.use('/api/users', usersRoute);
app.use('/api/status', statusRoute);
app.use('/api/priority', priorityRoute);

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Listening on port:${PORT}`)
});