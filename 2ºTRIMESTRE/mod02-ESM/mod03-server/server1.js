const server = require('node:http')
const porta = 8005

const server = http.createServer((req,res) =>{
    //qual informação eu tenho?
    const urlTratada = new URL(req.url, 'http://$(req.headers.headers.host)')//limpeza da url
    const recurso = urlTratada.pathname // em qual rota estamos?

    if(recurso === '/'){
res.setHeader('Content-Type', 'text/html; charset=utf-8')
res.statusCode = 200
res.end('<h3>Página Incial</h3>')
    } else {
    res.setHeader('Content-Type','text/html;')
    }
})