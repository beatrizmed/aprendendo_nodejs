const http = require('http')

http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })

    if (request.url === "/produto") {
      response.end(
        JSON.stringify({
          message: "Rota de produto",
        })
      )
    }

    if (request.url === "/usuarios") {
      response.end(
        JSON.stringify({
          message: "Rota de usuários",
        })
      )
    }

    response.end(
      JSON.stringify({
        message: "Rota não encontrada",
      })
    )
  })
  .listen(4001, () => console.log('Servidor está rodando na porta 4001'))
