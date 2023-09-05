import http from 'node:http'
import fs from 'node:fs'

const host = 'localhost'
const port = 3000

const requestListener = function (request, response) {
  switch (request.url) {
    case '/pessoas':
      fs.promises.readFile('./data/pessoas.json')
        .then(contents => {
          response.setHeader('Content-Type', 'application/json')
          response.writeHead(200)
          response.end(contents)
        })
        .catch((error) => {
          response.writeHead(500)
          response.end(error.message)
        })
      break
    default:
      fs.promises.readFile('./public/index.html')
        .then(contents => {
          response.setHeader('Content-Type', 'text/html')
          response.writeHead(200)
          response.end(contents)
        })
        .catch((error) => {
          response.writeHead(500)
          response.end(error.message)
        })
      break
  }
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
