import http from 'node:http'

const host = '0.0.0.0'
const port = 8000

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'text/html')
  res.writeHead(200)
  res.end(`<html lang="pt-br"><body><h1>Hello, World!</h1></body></html>`)
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
