const { Ebook } = require('../models');

const authorization = async (req, res, next) => {
  try {
    const { id } = req.params;

    const currentEbook = await Ebook.findByPk(id);
    if (!currentEbook) throw { name: 'NotFound' };

    if (req.user.id !== currentEbook.UserId) throw { name: 'Unauthorized' };

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;