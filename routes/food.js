const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isAuthorized } = require('../config/passport');
const { list, create, detail, update, remove } = require('../controllers/food');

router.get('/', list);
router.post(
  '/',
  passport.authenticate('basic', { session: false }),
  isAuthorized,
  create
);
router.get('/:id', detail);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
