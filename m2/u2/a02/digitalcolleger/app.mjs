import http from 'node:http'
import { URLSearchParams } from 'url'

const server = http.createServer(function (request, response) {
    switch (request.url) {
        case '/salvar':
            let body = '';
            request.on('data', function (chunk) {
                body += chunk.toString();
            })
            request.on('end', function () {
                const data = new URLSearchParams(body)
                const nome = data.get('nome')
                if (nome.length === 0) {
                    response.end('te peguei seu hacker safado')
                    return
                }
                response.end('tudo certo! bora salvar o : ' + nome)
            })
            break;
        default:
            response.end(`
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <style>
                        .erro {
                            display: none;
                        }
                        .erro.ativo {
                            display: block;
                        }
                    </style>
                </head>
                <body>
                    <form novalidate action="/salvar" method="POST">
                        <input type="text" name="nome">
                        <span class="erro">O nome é inválido</span>
                        <button>Enviar</button>
                    </form>
                    <script>
                        const nome = document.querySelector('[name="nome"]')
                        const span = document.querySelector('span')
                        const form = document.querySelector('form')
                        form.addEventListener('submit', function (event) {
                            span.classList.remove('ativo')
                            if (nome.value.length === 0) {
                                span.classList.add('ativo')
                                event.preventDefault()
                            }
                        })
                    </script>
                </body>
                </html>
            `)
            break;
    }
})

server.listen(8080, function () {
    console.log('server is alive on http://localhost:8080')
})
