import http from 'node:http'
import fs from 'node:fs'

const host = '0.0.0.0'
const port = 8080

const server = http.createServer(function (request, response) {
    fs.promises.readFile('./public/index.html')
        .then(function (contents) {
            response.setHeader('content-type', 'text/html')
            response.end(contents)
        })
        .catch(function () {
            response.writeHead(500)
            response.end('deu errado ai má!')
        })
})

server.listen(port, host, function () {
    console.log('arroxe! em http://' + host + ':' + port)
})