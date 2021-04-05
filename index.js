const express = require('express');
const app = express();
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path')

let db = mongoose.connection;

app.use(express.static('public'))

db.once('open', () => {console.log('ok its working')})

mongoose.connect('mongodb://localhost/newLinks', { useNewUrlParser: true , useUnifiedTopology: true })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', linkRoute)


app.listen(3000, () => {
    console.log('running on port 3000')
})