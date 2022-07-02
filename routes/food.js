const express = require('express');
const router = express.Router();
const { list, create, detail, update, remove } = require('../controllers/food');

router.get('/', list);
router.post('/', create);
router.get('/:id', detail);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
