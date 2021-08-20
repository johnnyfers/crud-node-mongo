const express = require('express');
const productController = require('../controllers/productController')
const router = express.Router();

router.get('/', productController.allLinks);

router.get('/:name', productController.redirect);

router.get("/edit/:id", productController.loadLink)

router.post('/', express.urlencoded({extended: true}), productController.addLink);
router.post('/edit/:id',express.urlencoded({extended: true}), productController.editLink )

router.get('/add', (req, res) => res.render('index',{error:false, body:{}}))

router.delete('/:id', productController.deleteLink);
router.delete('/', express.json(), productController.deleteLink)

module.exports = router;