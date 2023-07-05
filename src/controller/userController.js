const { userService } = require('../service');

const createUser = async (req, res) => {
  const {
    displayName,
    email,
    password,
    image,
  } = req.body;
  const serviceResponse = await userService.createUser(displayName, email, password, image);
  return res.status(201).json({ token: serviceResponse });
};

const getAll = async (_req, res) => {
  const serviceResponse = await userService.getAll();
  return res.status(200).json(serviceResponse);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const serviceResponse = await userService.getById(id);
  if (!serviceResponse) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(serviceResponse);
};

module.exports = {
  createUser,
  getAll,
  getById,
};