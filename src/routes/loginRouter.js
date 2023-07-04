const express = require('express');

const { loginController } = require('../controller');
const { verifyFields, verifyExistence } = require('../middlewares/loginMiddlewares');

const loginRouter = express.Router();

loginRouter.post('/', verifyFields, verifyExistence, loginController.doLogin);

module.exports = loginRouter;