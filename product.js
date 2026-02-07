let products = []

let numero = 1


function resetProducts(){
    products.splice(0,products.length);
    numero=1
}

function addProduct (producto,price){
    if ( producto === undefined || price ===undefined){
        throw new Error('Nombre y precio son necesarios')
    }
    const productoexistente = products.find(u=>u.nombre===producto)
    if(productoexistente){
        throw new Error('El nombre está repetido')
    }
    const result = {
        id:numero,
        nombre: `${producto}`,
        precio: price
    }
    products.push(result)
    numero++
}




function removeProduct (producto){
    const productoexistente = products.find(u=>u.nombre===producto)
    if(productoexistente===undefined){
        throw new Error('El producto no existe')
    } else {
        products.splice(productoexistente.id,1)
        numero--
    }

    
}

function getProduct (n){
    const productoexistente = products.find(u=>u.id===n)
    if(productoexistente===undefined){
        throw new Error('El producto no existe')
    }
    console.log(productoexistente)
    return productoexistente
}

function updateProduct (id,name,price){
    const productoexistente = products.find(u=>u.id===id)
    if(productoexistente===undefined){
        throw new Error('El producto no existe')
    }
    products[productoexistente.id-1].nombre = `${name}`
    products[productoexistente.id-1].precio = price

}



module.exports = {addProduct,products, resetProducts,removeProduct, getProduct, updateProduct}