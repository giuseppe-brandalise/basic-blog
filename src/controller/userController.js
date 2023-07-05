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

module.exports = {
  createUser,
};