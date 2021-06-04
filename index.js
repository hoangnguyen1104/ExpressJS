const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);

app.get('/test', (req,res) =>{
  const db = require('./db/db');
  db('person')
      .insert({
        email: "hoanghuy11042001@gmail.com",
        first_name: "Hoang",
        last_name: "Nguyen",
      });
  res.send("Hello Hoang");
})

app.listen(8080, () => console.log('server listening on port 8080'));