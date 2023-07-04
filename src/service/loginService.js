const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const loginService = async (email, password) => {
  const user = await User.findOne({
      attributes: ['id', 'displayName'],
      where: { email, password },
  });
  const payload = {
    id: user.id,
    name: user.displayName,
  };
  const token = createToken(payload);
  return token;
};

module.exports = { loginService };