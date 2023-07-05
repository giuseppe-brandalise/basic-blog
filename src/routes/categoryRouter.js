const express = require('express');

const { categoryController } = require('../controller');

const { validateName } = require('../middlewares/categoryMiddlewares');
const { validadeToken } = require('../middlewares/tokenMiddlewares');

const categoryRouter = express.Router();

categoryRouter.post('/', validadeToken, validateName, categoryController.createCategory);

module.exports = categoryRouter;