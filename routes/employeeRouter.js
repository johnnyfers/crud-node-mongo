const express = require('express');
const employeeController = require('../controllers/employeeController')
const router = express.Router();

router.get('/', employeeController.allLinks);

router.get('/:name', employeeController.redirect);

router.get("/edit/:id", employeeController.loadLink)

router.post('/', express.urlencoded({extended: true}), employeeController.addLink);
router.post('/edit/:id',express.urlencoded({extended: true}), employeeController.editLink )

router.get('/add', (req, res) => res.render('index',{error:false, body:{}}))

router.delete('/:id', employeeController.deleteLink);
router.delete('/', express.json(), employeeController.deleteLink)

module.exports = router;