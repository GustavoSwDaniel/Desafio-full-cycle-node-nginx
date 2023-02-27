const express = require('express')
const axios = require('axios');

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const conncetion = mysql.createConnection(config)


app.get('/', async (req, res) => {
    const conncetion = mysql.createConnection(config)
    const response = await axios.get('https://api.namefake.com/');
    const personName = response.data.name
    const sql = `INSERT INTO people(name) values ('${personName}')`
    conncetion.query(sql)

    const sqlSelect = 'SELECT id, name FROM people;'

    conncetion.query(sqlSelect, (error, result) => {
        if (error) {
            console.log(error)
        };
        console.log(result)
        let table = '<table>';
        table += '<tr><th>id</th><th>Name</th></tr>';
        for (let data of result)
            table += `<tr><td>${data.id}</td><td>${data.name}</td></tr>`;
        
        res.send('<h1>Full Cycle</h1>' + table)
    })
    conncetion.end();
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})