const { Category } = require('../models');

const createCategory = async (name) => {
  const modelResponse = await Category.create({ name });
  return modelResponse;
};

module.exports = {
  createCategory,
};