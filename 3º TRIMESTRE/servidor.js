// importação moderna com ESM (import)
import express from 'express'

const app = express() // Instanciar Express

app.get('/', (req, res) => {
    res.send(`
        <h3> Página Inicial</h3>\n
        <p>Loja especializada em roupas</p>`)
})
app.get('/roupas', (req, res) => {
    res.send('Fala chefe!')
})

app.listen(5000, ()=> {console.log('Servidor está vivo!')})