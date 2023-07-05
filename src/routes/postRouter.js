const express = require('express');

const { postController } = require('../controller');

const {
  verifyFieldsCreation,
  verifyCategories,
  verifyFieldsEdit,
} = require('../middlewares/postMiddlewares');
const { validadeToken } = require('../middlewares/tokenMiddlewares');

const postRouter = express.Router();

postRouter.post(
  '/',
  validadeToken,
  verifyFieldsCreation,
  verifyCategories,
  postController.createPost,
);
postRouter.get('/', validadeToken, postController.getAll);
postRouter.get('/:id', validadeToken, postController.getById);

postRouter.put('/:id', validadeToken, verifyFieldsEdit, postController.updatePost);

postRouter.delete('/:id', validadeToken, postController.deletePost);

module.exports = postRouter;