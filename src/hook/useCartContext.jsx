import { useState } from "react";
import Swal from "sweetalert2";

export const useCartContext = () => {
    const [items, setItems] = useState([])

    const addArticulo = (articulo, quantity) => {
        if (!isInCart(articulo.id)) {
            setItems(prev => [...prev, { ...articulo, quantity }])
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El producto ya ha sido agregado!',

            })
            return;
        }
    }

    const removeArticulo = (cantidadId) => {
        const cartUpdated = items.filter(prod => prod.id !== cantidadId)
        setItems(cartUpdated)
    }

    const clearCart = () => {
        setItems([])
    }

    const isInCart = (cantidadId) => {
        return items.some(prod => prod.id === cantidadId)
    }

    const totalQuantity = items.reduce((total, prod) => total + prod.quantity, 0);

    return {
        items, addArticulo, removeArticulo, clearCart, isInCart, totalQuantity
    }
}