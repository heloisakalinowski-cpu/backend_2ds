// importação moderna com ESM (import)
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Home Ok!')
})
app.get('/', (req, res) => {
    res.send('Fala chefe!')
})

app.listen(3000, ()=> {console.log('Servidor está vivo!')})