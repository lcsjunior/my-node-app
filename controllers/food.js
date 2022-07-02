const Food = require('../models/food');

async function list(req, res) {
  const foods = await Food.find({});
  res.status(200).json(foods);
}

async function create(req, res) {
  const { name, calories } = req.body;
  try {
    const food = await Food.create({ name, calories });
    res.status(200).json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function detail(req, res) {
  const { id } = req.params;
  const food = await Food.findById(id).exec();
  res.status(200).json(food);
}

async function update(req, res) {
  const { id } = req.params;
  const { name, calories } = req.body;
  const food = await Food.findOneAndUpdate(
    { id },
    { name, calories },
    {
      new: true,
    }
  );
  res.status(200).json(food);
}

async function remove(req, res) {
  const { id } = req.params;
  const deleted = await Food.findOneAndDelete({ id });
  res.status(200).json({ deleted });
}

module.exports = {
  list,
  create,
  detail,
  update,
  remove,
};
