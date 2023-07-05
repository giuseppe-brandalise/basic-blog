const { BlogPost, PostCategory } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const modelResponse = await BlogPost.create({ title, content, userId });
  await PostCategory
    .bulkCreate(categoryIds.map((categoryId) => ({ categoryId, postId: modelResponse.id })));
  return modelResponse;
};

module.exports = {
  createPost,
};