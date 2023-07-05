const { categoryService } = require('../service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const serviceResponse = await categoryService.createCategory(name);
  return res.status(201).json(serviceResponse);
};

module.exports = {
  createCategory,
};