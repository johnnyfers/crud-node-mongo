const ProductModel = require('../models/Product');

const redirect = async (req, res, next) => {
    let name = req.params.name;

    try {
        let doc = await ProductModel.findOne({ name })
        if(doc){
            res.redirect(doc.url);
        } else{
            next();
        }
    } catch (error) {
        res.send(error)
    }
}

const addLink = async (req, res) => {
    let product = new ProductModel(req.body)

    try {
        await product.save()
        res.redirect('/');
    } catch (error) {
        res.render('index', { error, body: req.body });
    }
}

const allLinks = async (req, res) => {
    try {
        let products = await ProductModel.find({})
        res.render('all', { products })
    } catch (error) {
        res.send(error);
    }
}

const deleteLink = async (req,res)=>{
    let id = req.params.id;

    if(!id){
        id = req.body.id;
    }

    try{
        await ProductModel.findByIdAndDelete(id)
        res.send(id)
    } catch (error) {
        res.send(error);
    }
}

const loadLink = async (req, res)=>{
    let id = req.params.id;

    try{
        let product = await ProductModel.findById(id)
        res.render('edit',{error:false, body: product})
    } catch (error) {
        res.send(error);
    }
}  

const editLink = async (req,res)=>{
    let product = {};
    
    product.name = req.body.name;
    product.description = req.body.description;
    product.category = req.body.category;
    product.quantity = req.body.quantity;
    product.brand = req.body.brand;
    product.price = req.body.price;

    let id = req.params.id;

    if(!id){
        id = req.body.id;
    }

    try {
        let doc = await ProductModel.findByIdAndUpdate(id, product)
        res.redirect('/');
    } catch (error) {
        res.render('edit', { error, body: req.body });
    }
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink};