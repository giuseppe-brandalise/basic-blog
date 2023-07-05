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

module.exports = {
  createPost,
  getAll,
};