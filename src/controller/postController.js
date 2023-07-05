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
};

const getById = async (req, res) => {
  const { id } = req.params;
  const serviceResponse = await postService.getById(id);
  if (!serviceResponse) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(serviceResponse);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;
  const serviceResponse = await postService.updatePost(id, title, content, userId);
  if (serviceResponse === 'Unauthorized user') {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return res.status(200).json(serviceResponse);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const serviceResponse = await postService.deletePost(id, userId);
  if (serviceResponse === 'Post does not exist') {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  if (serviceResponse === 'Unauthorized user') {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return res.status(204).json();
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
  deletePost,
};