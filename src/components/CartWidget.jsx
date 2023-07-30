import cartImage from './assets/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const styles = {
    img: {
        height: "2rem",
        width: "auto",
    },
    span: {
        color: "green",
        paddingLeft: 20,
        fontSize: "1.2rem",
    },
    link: {
        textDecoration: "none",
    }
}

export const CartWidget = () => {
    const { items } = useContext(CartContext)
    const totalQuantity = items.reduce((total, prod) => total + prod.quantity, 0);

    return (
        <Link to='/cart' style={{ ...styles.link, display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img src={cartImage} style={styles.img} alt="carrito" />
            <span style={styles.span}>{totalQuantity}</span>
        </Link>
    )
}

