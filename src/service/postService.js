const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const modelResponse = await BlogPost.create({ title, content, userId });
  await PostCategory
    .bulkCreate(categoryIds.map((categoryId) => ({ categoryId, postId: modelResponse.id })));
  return modelResponse;
};

const getAll = async () => {
  const modelResponse = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return modelResponse;
};

const getById = async (id) => {
  const modelResponse = await BlogPost.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id },
  });
  return modelResponse;
};

const updatePost = async (id, title, content, userId) => {
  const oldPost = await BlogPost.findByPk(id);
  if (oldPost.id !== userId) {
    return 'Unauthorized user';
  }
  await BlogPost.update({ title, content }, { where: { id } });
  const modelResponse = await BlogPost.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id },
  });
  return modelResponse;
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
};