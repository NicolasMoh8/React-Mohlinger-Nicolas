import { createContext } from "react"
import { useCartContext } from "../hook/useCartContext"

export const CartContext = createContext({
    items: []
})
export const CartProvider = ({ children }) => {

    const cart = useCartContext()

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}