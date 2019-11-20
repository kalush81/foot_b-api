const { Router } = require('express');
const City = require('./model');
const router =  new Router();

router.get('/city', (req, res) => {
    City.findAll()
        .then(cities => {
            res.status(200).json(cities);
        } )
})

module.exports = router