const express = require('express');
const res = require('express/lib/response');
const { user } = require('pg/lib/defaults');
const PORT = process.env.PORT || 3001;
// "const models" is the same as "const db (db for database)" -- models is referring to the sql tbl, correct?
const models = require('./models');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());
// Do I need the line below?
// app.use(express.static(__dirname + "/public"));

app.get('/form', (req, res) => {
    res.send('form');
  })

app.post('/form', (req, res) => {
    const data = req.body
    console.log(data);
    res.send(data)
    // res.json({})
})





app.listen(PORT, () => {
    console.log(`App started in port ${PORT}`)
  })