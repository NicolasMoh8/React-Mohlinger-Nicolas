import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, clearCart, totalQuantity, } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <di>
                <h1>No hay productos en su carrito</h1>
                <Link to='/' >Productos</Link>
            </di>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id}{...p} />)}
            
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )

}