const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const createUser = async (displayName, email, password, image) => {
  const user = { displayName, email, password, image };
  const userCreated = await User.create(user);
  const payload = {
    id: userCreated.id,
    name: userCreated.displayName,
  };
  const token = createToken(payload);
  return token;
//   return userCreated;
};

module.exports = {
  createUser,
};