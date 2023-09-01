import http from 'node:http'

const host = '0.0.0.0'
const port = 8080

const server = http.createServer(function (request, response) {
    console.log(request.url)
    response.end('<html>' +
        '<head><title>Hello ' + request.url + '</title>' +
        '</head><body>Hello World ' + request.url + '!</body>' +
        '</html>')
})

server.listen(port, host, function () {
    console.log('arroxe! em http://' + host + ':' + port)
})