//const productos = [{"title": "Escuadra","price": 123.45,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png","id": 1},
//{"title": "Calculadora","price": 234.56,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png","id": 2},
//{"title": "Globo Terráqueo","price": 345.67,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png","id": 3}]

class Productos{
    constructor(productos){
        this.productos = productos
    }

    getAll(){
        return this.productos
    }
    getById(id){
        const productoParam = this.productos.filter(producto => {
            return producto.id === id
        })
        return productoParam
    }
    createProduct(producto){
        if(this.productos.length){
            const id = this.productos[this.productos.length - 1].id + 1
        producto.id = id
        }else{
            producto.id = 1
        }
        
        this.productos.push(producto)
        return producto
    }  
    
    updateProduct(id, title, price, thumbnail){
        const index=this.productos.findIndex(element=>element.id==id)
        if(title){
            this.productos[index].title = title
        }
        if(price){
            this.productos[index].price = price
        }
        if(thumbnail){
            this.productos[index].thumbnail = thumbnail
        }
        return this.productos[index]
    }

    deleteProduct(id){
        const productos = this.productos.filter(item=>item.id!=id)
        this.productos = productos  

        return this.productos
    }

}


module.exports = new Productos([])
