const express = require('express');
const res = require('express/lib/response');
const { user } = require('pg/lib/defaults');
const PORT = process.env.PORT || 3001;
// "const models" is the same as "const db (db for database)" -- models is referring to the sql tbl, correct?
const models = require('./models');
const app = express();

app.use(express.json());
// Do I need the line below?
// app.use(express.static(__dirname + "/public"));

app.post('/form', (req, res) => {
    const { data } = req.body
    console.log(data)
})





app.listen(PORT, () => {
    console.log(`App started in port ${PORT}`)
  })