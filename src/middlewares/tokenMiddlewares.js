const { decodeToken } = require('../utils/JWT');

const validadeToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const validation = decodeToken(authorization);
    req.user = validation;
    next();
} catch (e) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validadeToken,
};