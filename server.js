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

// app.get('/form', (req, res) => {
//     res.send('form);
//   })


app.post('/form', (req, res) => {
    const data = req.body
    console.log(data);
    models.Customer.create({
        occasion: data.occasion,
        color: data.color,
        guests: data.guests,
        name: data.name,
        phone: data.phone,
        location: data.location,
        date: data.date,
        email: data.email,
    }).then(customer => {
        res.json(customer)
    })
    
})





app.listen(PORT, () => {
    console.log(`App started in port ${PORT}`)
  })