const feedSchme = require('../models/feedStrcture')

const reirection = (req, res) => {
    res.redirect('/feed')
}

const homePage = (req, res) => {
    feedSchme.find()
        .then(data => {
            // console.log(data)
            res.render('index.ejs', {
                data: data,
                mes: ''
            })
        })
        .catch(err => {
            console.log(err)
        })
}

const newFeed = (req, res) => {
    // console.log('new feed working')
    let newFeed = new feedSchme(req.body)
    newFeed.save()
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
            
            if (err.errors['name']) {
                mes = err.errors.name.properties.message
            } else {
                mes = err.errors.message.properties.message
            }
            res.render('index', {
                mes,
                data: ''
            })
        })
}

const selectFeed = (req, res) => {
    // console.log('selectFeed work')
    feedSchme.findById(req.params.id)
        .then((data) => {
            res.render('oneFeed.ejs', { data })
            console.log(data)
        }).catch(err => {
            console.log(err)
        })

}

const postUpdatedFeed = (req, res) => {
    // console.log('postUpdatedFeed work')
    // console.log(req.params.id)
    feedSchme.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}


const delPost = (req, res) => {
    // console.log('delete work')
    // console.log(req.params.id)
    feedSchme.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

const toUpdatePage = (req, res) => {
    feedSchme.findById(req.params.id)
        .then((data) => {
            res.render('editFeed.ejs', { data })
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
}



module.exports = {
    homePage,
    reirection,
    newFeed,
    selectFeed,
    postUpdatedFeed,
    delPost,
    toUpdatePage

}