const express = require('express');
const teamRoute = require('./team/router');
const bodyParser = require('body-parser');
//const db = require('./db');
//const Team = require('./team/model')

const app =  express();

app.use(bodyParser.json())
app.use(teamRoute);

const port = process.env.PORT || 4000

app.listen(port, () => {console.log('server up and running on port:', port)})