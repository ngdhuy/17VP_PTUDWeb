const express = require('express')
const app = express()

const port = 3000
const books = require('./books')

app.use('/books', books)

app.get('/', (req, res) => {
    res.send('Get data - SELECT')
})

app.post('/', (req, res) => {
    res.send('Create data - INSERT')
})

app.put('/', (req, res) => {
    res.send('Update data - UPDATE')
})

app.delete('/', (req, res) => {
    res.send('Delete data - DELETE')
})



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})