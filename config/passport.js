const passport = require('passport');
const { BasicStrategy } = require('passport-http');

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(403).send('Unauthorized');
}

function isAuthorized(req, res, next) {
  if (req.user.username === 'admin') {
    return next();
  }
  res.status(403).send('Forbidden');
}

passport.use(
  new BasicStrategy((username, password, done) => {
    if (username === 'admin' && password === 'admin') {
      return done(null, {
        username,
        password,
      });
    }
    return done(null, false);
  })
);

module.exports = {
  isAuthenticated,
  isAuthorized,
};
