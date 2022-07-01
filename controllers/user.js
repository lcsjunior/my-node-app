function index(req, res, next) {
  res.render('index', { title: 'respond with a resource' });
}

module.exports = {
  index,
};
