// Bring express
const express = require('express')

// express app
const app = express()

// declare port to use for our site localhost:3000
const port = 3000

// initial path, it will reply to localhost:3000 url
app.get('/', (req, res) => {
    res.send('Hello world')
})

// launchx path
app.get('/launchx', (req, res) => {
    res.send('Welcome to launchx')
})

// this path will return an object
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Query params: this will receive parameters from the url
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// initialize the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})