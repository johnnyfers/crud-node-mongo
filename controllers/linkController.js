const LinkModel = require('../models/Link');

const redirect = async (req, res, next) => {
    let title = req.params.title;

    try {
        let doc = await LinkModel.findOne({ title })
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
    let link = new LinkModel(req.body)

    try {
        let doc = await link.save()
        res.redirect('/');
    } catch (error) {
        res.render('index', { error, body: req.body });
    }
}

const allLinks = async (req, res) => {
    try {
        let links = await LinkModel.find({})
        res.render('all', { links })
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
        await LinkModel.findByIdAndDelete(id)
        res.send(id)
    } catch (error) {
        res.send(error);
    }
}

const loadLink = async (req, res)=>{

    let id = req.params.id;

    try{
        let link = await LinkModel.findById(id)
        res.render('edit',{error:false, body: link})
    } catch (error) {
        res.send(error);
    }
}  

const editLink = async (req,res)=>{
    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

    let id = req.params.id;

    if(!id){
        id = req.body.id;
    }

    try {
        let doc = await LinkModel.findByIdAndUpdate(id, link)
        res.redirect('/');
    } catch (error) {
        res.render('edit', { error, body: req.body });
    }
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink};