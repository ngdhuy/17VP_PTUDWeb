const http = require('http')
const hostname = 'localhost'
const port = 4000

const server = http.createServer((req, res) => {
    res.status = 200
    res.setHeader('Content-Type', 'text/json')
    // res.end('Hello <b>Class 18VP</b>! Today, we are learing about NodeJS + ExpressJS')
    res.end(JSON.stringify(
        [
            {
                'id': 1,
                'name': "Product 01", 
                "price": 1000
            }
        ]
    ))
})

server.listen(port, hostname, () => {
    console.log(`Server is running att http://${hostname}:${port}`)
})