const { User } = require('../models');

async function list(req, res) {
  const users = await User.findAll();
  res.status(200).json(users);
}

async function create(req, res) {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.create({ firstName, lastName, email });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function detail(req, res) {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.status(200).json(user);
}

async function update(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const [updatedRows] = await User.update(
    { firstName, lastName, email },
    { where: { id } }
  );
  res.status(200).json({ updatedRows });
}

async function remove(req, res) {
  const { id } = req.params;
  const deleted = await User.destroy({ where: { id } });
  res.status(200).json({ deleted });
}

module.exports = {
  list,
  create,
  detail,
  update,
  remove,
};
