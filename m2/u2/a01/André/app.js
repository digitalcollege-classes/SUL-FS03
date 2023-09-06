import http from 'node:http'
import fs from 'node:fs/promises'

const host = 'localhost'
const port = 8080

const server = http.createServer(function (request, response) {
    switch (request.url) {
        case '/pessoas':
            fs.readFile('./pessoas.json')
                .then(function (conteudo) {
                    response.end(conteudo)
                    break;
        default:
            fs.readFile('./fetch.html')
                .then(contents => {
                    response.setHeader('Content-Type', 'text/html')
                    response.writeHead(200)
                    response.end(contents)
                })
    }
})

server.listen(port, host, function () {
    console.log(`http://${host}:${port}`)
})
  })
