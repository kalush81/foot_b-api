const { Router } = require('express');
const Player = require('./model');
const Team =  require('../team/model');
const router =  new Router();

//get all players
router.get('/player', (req, res, next) => {
    Player.findAll()
        .then(players => {
            //if (!players) return res.status(404).send({msg: 'plyers not found'});
            return res.status(200).json(players)
        })
        .catch(next)
})

//get player by Id ( this time by teamId not in used)
router.get('/player/:id', (req, res, next) => {
    Player.findByPk(req.params.id, {include: [Team]})
    .then(player => {
        if (!player) return res.status(404).send({msg: 'user with id: ... not exist'});
        res.status(200).json(player)
    })
    .catch(next)
})

//create player
router.post('/player',(req, res, next) => {
    const {name, tshirtNumber, teamId} = req.body
    Player.create({
        name,
        tshirtNumber,
        teamId
    })
    .then(player => {
        console.log('player created')
        res.status(200).send(player);
    })
    .catch(next)
})
//update player
router.put('/player/:id', (req, res, next) => {
    const playerId = req.params.id
    Player.findByPk(playerId)
        .then(player => {
            player.update(req.body)
        })
        .then(updatedPlayer => {res.status(200).send(updatedPlayer)})
        .catch(next)
})
module.exports = router