const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb+srv://18VP_DBU:Admin123@cluster0.3djsh.mongodb.net/db_test?retryWrites=true&w=majority'

MongoClient.connect(uri, (err, client) => {
    if(err)
        console.log("Cannot connect DB: ", err)
    else
    {
        console.log("=> DB is connected")

        const collection = client.db('db_test').collection('devices')
        
        client.close()
    }
})