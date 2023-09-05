import http from 'node:http'
import fs from 'node:fs'

const host = '0.0.0.0'
const port = 3000

const requestListener = function (request, response) {
  fs.promises.readFile('./data/people.json')
    .then(contents => {
      response.setHeader('Content-Type', 'application/json')
      response.writeHead(200)
      response.end(contents)
    })
    .catch((error) => {
      response.writeHead(500)
      response.end(error.message)
    })
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
