const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const controller = require('./controller/controller')

var app = express(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb+srv://mohammed:mohammed@cluster0.iykbgzf.mongodb.net/?retryWrites=true&w=majority')
    .then( () => {
        console.log('DB is connected')
    })
    .catch( err => {
        console.log(err)
    })

app.get('/',controller.reirection )
app.get('/feed',controller.homePage)
app.post('/postFeed',controller.newFeed)
app.get('/feed/:id',controller.selectFeed)
app.get('/deletPost/:id',controller.delPost)
app.get('/feed/edit/:id',controller.toUpdatePage)
app.post('/updateFeed/:id',controller.postUpdatedFeed)
app.get('/*', )


app.listen('9500', () => console.log('node js is running on 9500'))