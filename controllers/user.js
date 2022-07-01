const { User } = require('../models');

async function index(req, res, next) {
  const users = await User.findAll();
  res.status(200).json(users);
}

module.exports = {
  index,
};
