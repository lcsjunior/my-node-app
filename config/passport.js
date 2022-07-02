const passport = require('passport');
const { BasicStrategy } = require('passport-http');

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function isAuthorized(req, res, next) {
  return next();
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
    // User.findOne({ username: username }, (err, user) => {
    //   if (err) {
    //     return done(err);
    //   }
    //   if (!user) {
    //     return done(null, false);
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false);
    //   }
    //   return done(null, user);
    // });
  })
);

module.exports = {
  isAuthenticated,
  isAuthorized,
};
