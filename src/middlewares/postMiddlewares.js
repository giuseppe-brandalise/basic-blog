const { Category } = require('../models');

const verifyFieldsCreation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const verifyCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  const serviceResponse = await Category.findAll({ where: { id: categoryIds } });
  if (categoryIds.length !== serviceResponse.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

const verifyFieldsEdit = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  verifyFieldsCreation,
  verifyCategories,
  verifyFieldsEdit,
};