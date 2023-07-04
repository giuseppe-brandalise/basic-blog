const { loginService } = require('../service');

const doLogin = async (req, res) => {
  const { email, password } = req.body;
  const serviceResponce = await loginService(email, password);
  return res.status(200).json({ token: serviceResponce });
};

module.exports = { doLogin };