const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Bem-vindo a API de comentario')
})

module.exports = app 