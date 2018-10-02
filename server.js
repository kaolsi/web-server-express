//CARGAR EXPRESS:
const express = require('express')
const app = express()
const path = require('path')

//const { appendLog, logTxt } = require('./utils.js')
const middleware = require('./middleware')

const { consoleLogMiddleware,fileLogMiddleware } = require('./middleware')

// const hbs = require('hbs')
app.set('view engine', 'hbs'); // clave valor


//2 middleware, va de uno a otro
/*app.use('/contactar', (req, res, next) =>{
  var now = new Date().toString()
  var entryLog= logTxt(now , req.method ,req.url)
  res.send(entryLog)
  appendLog(entryLog)
  req.user='pepe'
  next()
})
app.use('/', (req, res, next) =>{
  console.log(req.user)
  next()
})*/


app.use(consoleLogMiddleware)

app.use(fileLogMiddleware)

const staticRoute = path.join(__dirname, 'public')
app.use(express.static(staticRoute))
app.use('/index', express.static(staticRoute))

//Ruta con protocolo get: req(request)  res(response)
app.get('/', (req, res) => {
  res.send('Hola Lolo')
})
app.listen(3000)

app.get('/contactar', (req,res) =>{
  //res.send({ nombre: 'lolo', correo: 'lolo@lolez.com' })
  res.render('contactar')
})

/*app.listen(3000, () =>{
  console.log('App listening on port 3000')
})*/