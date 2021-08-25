const express = require('express');
const categoryController = require('../controllers/categoryController')
const router = express.Router();

router.get('/getLinks', categoryController.getLinks);

router.get('/add', (req, res) => res.render('addCategory',{error:false, body:{}}))
router.get('/:name', categoryController.redirect);

router.post('/', express.urlencoded({extended: true}), categoryController.addLink);

module.exports = router;