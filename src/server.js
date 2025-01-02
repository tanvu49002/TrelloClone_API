// const express = require('express')
import express from 'express'
const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)
})