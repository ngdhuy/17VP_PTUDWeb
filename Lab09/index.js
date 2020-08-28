const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://18VP_DBU:Admin123@cluster0.3djsh.mongodb.net/?retryWrites=true&w=majority', {dbName: 'db_test', useNewUrlParser: true, useUnifiedTopology: true })

var productSchema = mongoose.Schema({
    name: String, 
    price: Number
})

var product = mongoose.model("product", productSchema)

app.get('/', (req, res) => {
    var newProduct = new product({
        name: "iPhone 11 Pro Max", 
        price: 1000
    })

    newProduct.save((err, Product) => {
        if(err)
            console.log("=> error: ", err)
        else
            console.log("OK")
    })
})


app.listen(3000, () => {
    console.log("Website is running at http://localhost:3000")
})