const express = require('express')
const app = express()
const port = 3000

//informar o caminho dos arquivos estáticos
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//conectar ao banco
const db = require('./db');

//rota principaç
app.get('/', (req, res) => {
//  res.send('Hello World!')
    res.sandfile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

