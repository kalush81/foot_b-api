const { Router } = require('express');
const Team = require('./model');
const router =  new Router();

router.get('/team', (req, res, next) => {
    Team.findAll()
    .then(res => {
        console.log(res.body)
    })
    .catch(next)
})
module.exports = router