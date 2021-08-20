const express = require('express');

const app = express();
const mongoose = require('mongoose');

const productRoute = require('./routes/productRoute');
const employeeRoute = require('./routes/employeeRouter');
const categoryRoute = require('./routes/categoryRoute');
const brandRoute = require('./routes/brandRoute');

const path = require('path')

let db = mongoose.connection;

app.use(express.static('public'))

db.once('open', () => {console.log('ok its working')})

mongoose.connect('mongodb://localhost/newProducts', { useNewUrlParser: true , useUnifiedTopology: true })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', productRoute)
app.use('/employee', employeeRoute)
app.use('/category', categoryRoute)
app.use('/brand', brandRoute)

app.listen(3000, () => {
    console.log('running on port 3000')
})