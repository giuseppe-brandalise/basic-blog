const { postService } = require('../service');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const serviceResponse = await postService.createPost(title, content, categoryIds, id);
  return res.status(201).json(serviceResponse);
};

const getAll = async (_req, res) => {
  const serviceResponse = await postService.getAll();
  return res.status(200).json(serviceResponse);
}

module.exports = {
  createPost,
  getAll,
};