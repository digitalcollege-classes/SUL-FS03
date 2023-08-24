import readline from 'node:readline'

export default async function (mensagem) {
    const leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const asyncOperation = () => {
        return new Promise((resolve) => {
            function callback(captura)
            {
                resolve(captura)
                leitor.close()
            }
            leitor.question(mensagem, callback)
        })
    }
    return await asyncOperation();
}