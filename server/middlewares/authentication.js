const { verifyToken } = require("../helpers/jwt");
const { User } = require('../models');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: 'Unauthenticated' };

    const payload = verifyToken(access_token);

    const currentUser = await User.findByPk(payload.id);
    if (!currentUser) throw { name: 'Unauthenticated' };

    req.user = {
      id: currentUser.id,
      name: currentUser.name,
      role: currentUser.role
    }

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;