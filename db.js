const Sequelize =  require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const databaseURL = process.env.DATABASE_URL || process.env.DB_CONNECTION_DATA;

const db = new Sequelize(databaseURL);

db.sync({force: false})
    .then(()=>{console.log('database connected')})
    .catch(err => console.log(err));

module.exports = db;    
