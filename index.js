const express = require('express')
const cors = require('cors')
const app = express()
const productos = [
  { id: 1, nombre: 'Teclado', precio: 49.99, categoria: 'informatica', stock: 10 },
  { id: 2, nombre: 'Ratón', precio: 29.99, categoria: 'informatica', stock: 25 },
  { id: 3, nombre: 'Escritorio', precio: 199.99, categoria: 'muebles', stock: 5 },
  { id: 4, nombre: 'Silla', precio: 149.99, categoria: 'muebles', stock: 8 }
]

app.use(cors())
app.use(express.json())

app.get('/productos', async function(req, res){
    res.json(productos)
})
app.get('/productos/:id', async function(req, res){

})
app.get('/productos?categoria=x', async function(req, res){

})
app.post('/productos', async function(req, res){

})
app.put('/productos/:id', async function(req, res){

})
app.delete('/productos/:id', async function(req, res){

})

app.listen(3000, function(){
    console.log('Servidor corriendo en http://localhost:3000')
})