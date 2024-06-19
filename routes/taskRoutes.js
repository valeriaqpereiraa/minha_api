const express = require('express');
const router = express.Router();
const taskcontroller = require('../controllers/taskcontroller');

router.post('/', taskcontroller.createTask);
router.get('/', taskcontroller.getTasks);
router.get('/:id', taskcontroller.getTask);
router.put('/:id', taskcontroller.updateTask);
router.delete('/:id', taskcontroller.deleteTask);

module.exports = router;