const { Router } = require('express');
const Team = require('./model');
const router =  new Router();


//get all teams
router.get('/team', (req, res, next) => {
    Team.findAll()
    .then(teams => {
        res.json(teams)
    })
    .catch(next)
})
//create a team if not exist (isTeam)
function isTeam(req, res, next) {
    const {id, name} = req.body
    Team.findOne({
        where: {
            name: name
        }
    })
    .then(team => {
        if (team) return res.status(404).send({msg: 'team exist in our db'})
        next()
    })
    .catch(next)
}
router.post('/team', isTeam, (req, res, next) => {
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
//get a teamy by id
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

//update a team by id if exist
router.put('/team/:id', isTeam, (req, res, next) => {
    const teamId = req.params.id
    Team.findByPk(teamId)
        .then(team => {
            team.update(req.body)
        })
        .then(updatedTeam => {res.status(200).send(updatedTeam)})
        .catch(next)
})
module.exports = router