const BrandModel = require('../models/Brand');

const redirect = async (req, res, next) => {
    let name = req.params.name;

    try {
        let doc = await BrandModel.findOne({ name })
        if (doc) {
            res.redirect(doc.url);
        } else {
            next();
        }
    } catch (error) {
        res.send(error)
    }
}

const addLink = async (req, res) => {
    let brand = new BrandModel(req.body)

    try {
        await brand.save()
        res.redirect('/');
    } catch (error) {
        res.render('addBrand', { error, body: req.body });
    }
}

const getLinks = async (req, res) => {
    try {
        let brands = await BrandModel.find({})
        res.json(brands)
    } catch (error) {
        res.send(error);
    }
}

module.exports = { redirect, addLink, getLinks };