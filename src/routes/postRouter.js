const express = require('express');

const { postController } = require('../controller');

const { verifyFields, verifyCategories } = require('../middlewares/postMiddlewares');
const { validadeToken } = require('../middlewares/tokenMiddlewares');

const postRouter = express.Router();

postRouter.post('/', validadeToken, verifyFields, verifyCategories, postController.createPost);
postRouter.get('/', validadeToken, postController.getAll);


module.exports = postRouter;