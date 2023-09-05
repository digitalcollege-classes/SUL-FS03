import http from 'node:http'
import home from './routes/home.mjs'

function myServer (request, response) {
    switch (request.url) {
        case '/':
            home(request, response)
            break;
        case '/digitalcolleger/SUL-FS03/tree/main':
            response.end('veio do github')
            break;
        default:
            response.end('tem isso aqui não mah')
    }
}
const server = http.createServer(myServer)

server.listen(3010, 'localhost', function () {
    console.log('o servidor está de pé')
})