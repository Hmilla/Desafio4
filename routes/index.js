const {Router} = require("express")
const router = Router()
const path=require('path');
const isNumber = require('is-number');
const productos = require(path.join(__dirname, "..") + "/productos.js")


router.get('/',(req,res)=>{
    res.json(productos.getAll())
}) 

router.post('/',(req,res)=>{
    const {title, price, thumbnail} = req.body
    productos.createProduct({title,price,thumbnail})
    res.sendStatus(201)
})

router.get('/:id',(req,res)=>{
    const id = Number(req.params.id)
    if(!isNumber(id)){
        return res.json({ error: "El parámetro no es un número" })
    }
    const producto = productos.getById(id)
    if(!producto.length){
        return res.status(404).json({error: "Producto no encontrado"})
    }
    res.json(producto)
})

router.put('/:id', (req, res)=>{
    const {title, price, thumbnail} = req.body
    const id = Number(req.params.id)
    if(!isNumber(id)){
        return res.json({ error: "El parámetro no es un número" })
    }
    const producto = productos.getById(id)
    if(!producto.length){
        return res.status(404).json({error: "Producto no encontrado"})
    }
    productos.updateProduct(id, title, price, thumbnail)
    const productoCambiado = productos.getById(id)
    res.json(productoCambiado)
})

router.delete('/:id', (req, res)=>{
    const id = Number(req.params.id)
    productos.deleteProduct(id)
    res.json(productos.getAll())
})

module.exports = router