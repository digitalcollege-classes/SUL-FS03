import http from 'node:http'
import fs from 'node:fs'

const host = '0.0.0.0'
const port = 8000

const requestListener = function (req, res) {
  fs.promises.readFile('./public/index.html')
    .then(contents => {
      res.setHeader('Content-Type', 'text/html')
      res.writeHead(200)
      res.end(contents)
    })
    .catch(err => {
      res.writeHead(500)
      res.end(err.message)
    })
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
