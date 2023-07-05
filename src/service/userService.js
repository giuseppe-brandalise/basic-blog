const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const createUser = async (displayName, email, password, image) => {
  const user = { displayName, email, password, image };
  const modelResponse = await User.create(user);
  const payload = {
    id: modelResponse.id,
    name: modelResponse.displayName,
  };
  const token = createToken(payload);
  return token;
};

const getAll = async () => {
  const modelResponse = User.findAll({ attributes: { exclude: ['password'] } });
  return modelResponse;
};

const getById = async (id) => {
  const modelResponse = await User.findOne({
    attributes: { exclude: 'password' },
    where: { id },
  });
  return modelResponse;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
  return 'done';
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};