
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user CRUD operations
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/youngsters',userController.getYoungsters);
router.get('/users/:id', userController.getUserById);
router.get('/user/search',userController.getUserByEmail);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);



module.exports = router;
