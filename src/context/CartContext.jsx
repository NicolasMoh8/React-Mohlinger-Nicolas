import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addArticulo = (articulo, quantity) => {
        if (!isInCart(articulo.id)) {
            setCart(prev => [...prev, { ...articulo, quantity }])
        } else {
            console.error('El producto ya ha sido agregado')
        }
    }

    const removeItem = (cantidadId) => {
        const cartUpdated = cart.filter(prod => prod.id !== cantidadId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (cantidadId) =>{
        return cart.some(prod=>prod.id===cantidadId)
    }

    return(
        <CartContext.Provider value={{cart, addArticulo, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )    


}