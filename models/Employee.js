const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    salary:  {type: Number, required: true},
    task:  {type: String, required: false},
})

module.exports = mongoose.model('EmployeeModel', employeeSchema);

