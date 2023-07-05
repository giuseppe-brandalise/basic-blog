const { categoryService } = require('../service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const serviceResponse = await categoryService.createCategory(name);
  return res.status(201).json(serviceResponse);
};

const getAll = async (req, res) => {
  const serviceResponse = await categoryService.getAll();
  return res.status(200).json(serviceResponse);
}

module.exports = {
  createCategory,
  getAll,
};