const { Category } = require('../models');

const createCategory = async (name) => {
  const modelResponse = await Category.create({ name });
  return modelResponse;
};

const getAll = async () => {
    const modelResponse = Category.findAll();
    return modelResponse;
  };

module.exports = {
  createCategory,
  getAll,
};