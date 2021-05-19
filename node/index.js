
const express = require('express');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const app = express()
const port = 3000
const config = {
  host: 'mysql',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql');

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);
  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals]
  });
  const insert = `INSERT INTO people (name) VALUES ('${randomName}');`;
  connection.query(insert);

  const select = 'SELECT name FROM people;';
  connection.query(select, (err, result) => {
    res.send(`
        <h1> Full Cycle Rocks! </h1>
        <ul>
          ${result.map(r => `<li> ${r.name} </li>`).join('')}
        </ul>
      `)
  });




  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})