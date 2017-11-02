const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
const tasksRoute = require('../routes/tasks.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/api/tasks', tasksRoute);

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Listening on port:${PORT}`)
});