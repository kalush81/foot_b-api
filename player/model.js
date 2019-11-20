const Sequelize = require('sequelize');
const db =  require('../db');
const Team = require('../team/model');
const City = require('../city/model');

const Player = db.define('player', {
    name: Sequelize.STRING,
    tshirtNumber: Sequelize.INTEGER,
})
Player.belongsTo(Team, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
Player.belongsTo(City);
module.exports = Player;