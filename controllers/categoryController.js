const CategoryModel = require('../models/Category');

const redirect = async (req, res, next) => {
    let name = req.params.name;

    try {
        let doc = await CategoryModel.findOne({ name })
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
    let category = new CategoryModel(req.body)

    try {
        await category.save()
        res.redirect('/');
    } catch (error) {
        res.render('addCategory', { error, body: req.body });
    }
}

const getLinks = async (req, res) => {
    try {
        let categories = await CategoryModel.find({})
        res.json(categories)
    } catch (error) {
        res.send(error);
    }
}

module.exports = { redirect, addLink, getLinks };