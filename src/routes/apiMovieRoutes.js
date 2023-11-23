const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiMoviesController.js');

router.get('/movies', apiController.list);
router.get('/search', apiController.search);
router.get('/movies/:id', apiController.show);
router.post('/movies', apiController.store);
router.delete('/movies/:id', apiController.delete);

module.exports = router;