import { useContext, useState } from 'react'
import { ItemCount } from "./ItemCount"
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"

const styles = {
    img: {
        height: "20rem",
        width: "auto",
    },
}

export const ItemDetail = ({ articulo }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [total, setTotal] = useState(0)
    const { addArticulo } = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        setTotal(articulo.price * quantity)
        addArticulo(articulo, quantity)
    }

    return (
        <>
            <div className='bg-success text-center text-xl'>
                <h1 className='bg-warning text-light'>{articulo.title}</h1>
                <div className='border'>
                    <br />
                    <h5>{articulo.kilos}</h5>
                    <h5>{articulo.description}</h5>
                    <h5>{articulo.categoryId}</h5>
                    <h5>${articulo.price}</h5>
                    <h4 className='text-light'>Total ${total}</h4>
                    <br />
                </div>
                <img className='bg-light' src={articulo.image} style={styles.img} alt={articulo.title} />
            </div>
            <footer>
                {quantityAdded > 0 ? (
                    <Link className="btn btn-primary d-flex justify-content-center" to='/cart'>Finalizar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={articulo.stock} onAdd={handleOnAdd} />
                )
                }
                {<Link className="btn btn-primary d-flex justify-content-center" to='/'>Seguir comprando</Link>}
            </footer>
        </>
    )
}



