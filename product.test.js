const { resetProducts,  addProduct, removeProduct, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe ('Adding Products', ()=> {
    
    it('should add a product',()=>{
        addProduct('agua',5)
        expect(()=>products.length.toBe(1))
    })
    it('should fail when adding a product with no price ', ()=>{
        expect(()=>addProduct('agua', undefined)).toThrow('Nombre y precio son necesarios')
        expect(()=>addProduct(undefined,5 )).toThrow('Nombre y precio son necesarios')
    })
    it('should fail when adding a repeated product', ()=>{
        addProduct('vaso',6)
        expect(()=>addProduct('vaso',6)).toThrow('El nombre está repetido')
    })      
    
})

describe ('Removing Products', ()=>{
    
    it('should remove a product', ()=>{
        expect(()=>removeProduct('agua')).toThrow('El producto no existe')
    })
})

describe ('Getting a single product',()=>{
    
    it ('should get a product', ()=> {
        addProduct('vaso',5)
        expect(()=>getProduct(1).name.toBe('vaso'))
    })
})


describe ('Updating Products', ()=>{

    it('should fail when updating a product that does not exist', ()=>{
        expect(()=>updateProduct(5,'lampara',5)).toThrow('El producto no existe')
    }) 

    it ('should update a product', ()=> {
        addProduct('silla',5)
        updateProduct(1,'mesa',5)
        expect(getProduct(1).nombre).toBe('mesa')
    })

})
