const EmployeeModel = require('../models/Employee');

const redirect = async (req, res, next) => {
    let name = req.params.name;

    try {
        let doc = await EmployeeModel.findOne({ name })
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
    let employee = new EmployeeModel(req.body)

    try {
        await employee.save()
        res.redirect('/');
    } catch (error) {
        res.render('addEmployee', { error, body: req.body });
    }
}

const allLinks = async (req, res) => {
    try {
        let employees = await EmployeeModel.find({})
        res.render('all', { employees })
    } catch (error) {
        res.send(error);
    }
}

const loadLink = async (req, res)=>{
    let id = req.params.id;

    try{
        let employee = await EmployeeModel.findById(id)
        res.render('editEmployee',{error:false, body: employee})
    } catch (error) {
        res.send(error);
    }
}  

const editLink = async (req,res)=>{
    let employee = {};
    
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.salary = req.body.salary;
    employee.feedback = req.body.feedback;

    let id = req.params.id;

    if(!id){
        id = req.body.id;
    }

    try {
        let doc = await EmployeeModel.findByIdAndUpdate(id, employee)
        res.redirect('/');
    } catch (error) {
        res.render('editEmployee', { error, body: req.body });
    }
}

const deleteLink = async (req,res)=>{
    let id = req.params.id;

    if(!id){
        id = req.body.id;
    }

    try{
        await EmployeeModel.findByIdAndDelete(id)
        res.send(id)
    } catch (error) {
        res.send(error);
    }
}

module.exports = { redirect, addLink, allLinks, loadLink, editLink, deleteLink};