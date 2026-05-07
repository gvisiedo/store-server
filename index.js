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
    const id = req.paramas.id
    const stock = req.params.stock
    const producto = productos.find(p =>p.id === Number(id))
    if(producto.stock === Number(0)){
        res.status(404).json({error: 'Este producto no tiene stock'})
        return
    }
    res.json(producto)
})
app.get('/productos?categoria=x', async function(req, res){
    const categoria = req.query.categoria  // ← lee el parámetro ?categoria=X
    const categoria = productos.find(c=>c.categoria === categoria) //busca la categoria

    if(!categoria){
        res.status(404).json({error: 'Categoria no encontrada'})
        return
    }
    res.json(categoria)
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