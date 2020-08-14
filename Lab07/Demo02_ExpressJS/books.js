const express = require('express')
const router = express.Router()

const books = [
    {
        'id': 1, 
        'name': 'Web Programming', 
        'price': 1000
    }, 
    {
        'id': 2, 
        'name': 'Mobile Development', 
        'price': 2000
    }, 
    {
        'id': 3, 
        'name': 'Data Structure', 
        'price': 1500
    },
]

router.get('/', (req, res) => {
    res.send(books)
})

router.get('/:id', (req, res) => {
    let id = req.params['id'];
    res.send(books.filter(item => item.id == id))
})

router.all('/info', (req, res) => {
    res.send(books)
})

module.exports = router