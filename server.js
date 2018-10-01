//CARGAR EXPRESS:
const express = require('express')
const app = express()
//Ruta con protocolo get: req(request)  res(response)
app.get('/', (req, res) => {
res.send('Hola Lolo')
})
app.listen(3000)