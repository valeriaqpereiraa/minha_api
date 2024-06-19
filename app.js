
require('dotenv').config();


const express = require('express');
const app = express();

const sequelize = require('./config/database');
const userRoutes = require('./routes/userroutes');
const taskRoutes = require('./routes/taskroutes.js');


dotenv.config();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

