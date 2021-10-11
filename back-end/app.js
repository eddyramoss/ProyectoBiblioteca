
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('HOLA MUNDO CTM!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:123456789@localhost:5433/biblioteca");

db.one("SELECT * FROM btc.persona")
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });