const express = require('express');
const brandController = require('../controllers/brandController')
const router = express.Router();

router.get('/', brandController.allLinks);
router.get('/getLinks', brandController.getLinks);

router.get('/add', (req, res) => res.render('addBrand',{error:false, body:{}}))
router.get('/:name', brandController.redirect);

router.post('/', express.urlencoded({extended: true}), brandController.addLink);

router.delete('/:id', brandController.deleteLink);
router.delete('/', express.json(), brandController.deleteLink)

module.exports = router;