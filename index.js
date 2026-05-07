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
  const categoria = req.query.categoria
  if(categoria) {
    const filtrados = productos.filter(p => p.categoria === categoria)
    res.json(filtrados)
  } else {
    res.json(productos)
  }
})

app.get('/productos/:id', async function(req, res){
    const id = req.params.id
    
    const producto = productos.find(p =>p.id === Number(id))
    if(!producto){
        res.status(404).json({error: 'Producto no encontrado'})
        return
    }
    res.json(producto)
})
app.post('/productos', async function(req, res){

    const nombre = req.body.nombre
    const precio = req.body.precio
    const categoria = req.body.categoria
    
    if(!nombre || !precio || !categoria || Number(precio)<=0){
       res.json('El nombre, el precio y la categoria son obligatorios')
    }else{
       const nuevoProducto = {
           id: productos.length+1,
           nombre: nombre,
           precio: precio,
           categoria: categoria,
           stock:  req.body.stock || 0,
       }
       productos.push(nuevoProducto)
       res.json(nuevoProducto)
    }
})
app.put('/productos/:id', async function(req, res){
    const id = req.params.id
    const indice = productos.findIndex(p=>p.id === Number(id))
    if(indice === -1){
        res.status(404).json({error: 'Producto no encontrado'})
        return
    }else{
        const actProducto ={
            id: productos[indice].id,
            nombre: req.body.nombre,
            precio: req.body.precio,
            categoria: req.body.categoria,
            stock: req.body.stock
        }
        productos[indice]=actProducto
    }
    res.status(200).json({mensaje: 'Producto actualizado'})
})
app.delete('/productos/:id', async function(req, res){

})

app.listen(3000, function(){
    console.log('Servidor corriendo en http://localhost:3000')
})

const stock = req.params.stock
if(producto.stock === Number(0)){
        res.status(404).json({error: 'Este producto no tiene stock'})
        return}