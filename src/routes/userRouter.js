const express = require('express');

const { userController } = require('../controller');
const {
  verifyName,
  verifyEmail,
  verifyPassword,
} = require('../middlewares/userMiddlewares');
const { validadeToken } = require('../middlewares/tokenMiddlewares');

const userRouter = express.Router();

userRouter.post('/', verifyName, verifyEmail, verifyPassword, userController.createUser);
userRouter.get('/', validadeToken, userController.getAll);
userRouter.get('/:id', validadeToken, userController.getById);

module.exports = userRouter;