const express = require('express');
const teamRouter = require('./team/router');
const playerRouter = require('./player/router');
const cityRouter =  require('./city/router');
const bodyParser = require('body-parser');


const app =  express();

app.use(bodyParser.json())
app.use(teamRouter);
app.use(playerRouter);
app.use(cityRouter);

const port = process.env.PORT || 4000

app.listen(port, () => {console.log('server up and running on port:', port)})