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

router.post('/team', (req, res, next) => {
    console.log('req:', req)
    Team.create({
        name: req.body.name
    })  
    .then(team => {
        console.log(team.get({plain: true}))
        res.status(200).send(team)
    })
    .catch(next)
})

router.get('/team/:id', (req, res, next) => {
    const teamId = req.params.id
    Team.findByPk(teamId)
    .then(team => {
        if (!team) return res.status(404).end();
        console.log(team.get({plain: true}))
        res.status(200).send(team)
    })
    .catch(next)
})

module.exports = router