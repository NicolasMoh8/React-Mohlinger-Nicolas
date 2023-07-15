import cart from './assets/carrito.png'

import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const styles = {
    img: {
        height: "2rem",
        width: "auto",
    },
    span: {
        color: "blue",
        paddingLeft: 20,
    }
}

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

return (
    <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
        <img src={cart} style={styles.img} alt="carrito" />
        
        {totalQuantity}

    </Link>
)
    
}

