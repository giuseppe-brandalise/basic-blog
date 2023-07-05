const express = require('express');

const { userController } = require('../controller');
const {
  verifyName,
  verifyEmail,
  verifyPassword,
} = require('../middlewares/userMiddlewares');

const userRouter = express.Router();

userRouter.post('/', verifyName, verifyEmail, verifyPassword, userController.createUser);

module.exports = userRouter;