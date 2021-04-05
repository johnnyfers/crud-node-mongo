const express = require('express');
const linkController = require('../controllers/linkController')
const router = express.Router();

router.get('/', linkController.allLinks);

router.get('/:title', linkController.redirect);

router.get("/edit/:id", linkController.loadLink)

router.post('/', express.urlencoded({extended: true}), linkController.addLink);
router.post('/edit/:id',express.urlencoded({extended: true}), linkController.editLink )

router.get('/add', (req, res) => res.render('index',{error:false, body:{}}))

router.delete('/:id', linkController.deleteLink);
router.delete('/', express.json(), linkController.deleteLink)


module.exports = router;