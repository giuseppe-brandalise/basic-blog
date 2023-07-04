const { User } = require('../models');

const verifyFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const verifyExistence = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    attributes: ['id', 'displayName'],
    where: { email, password },
  });

  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  
  next();
};

module.exports = {
  verifyFields,
  verifyExistence,
};