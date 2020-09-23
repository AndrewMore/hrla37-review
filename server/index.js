const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../database/index.js')

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('/api', (req, res) =>{
  db.query(`SELECT * FROM pokemon`,(err, result) =>{
    if(err){res.status(400).send(err)}
    else{res.status(200).send(result)}
  })
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))