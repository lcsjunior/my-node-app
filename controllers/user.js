const { User } = require('../models');

async function list(req, res) {
  const users = await User.findAll();
  res.status(200).json(users);
}

module.exports = {
  list,
};
