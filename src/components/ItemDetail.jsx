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

    const { addArticulo } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        addArticulo(articulo, quantity)
    }

    return (
        <>
            <div className='bg-success text-center text-xl'>
                <h1 className='bg-warning text-light'>{articulo.nombre}</h1>

                <div className='border'>
                    <br />
                    <h5>{articulo.kilos}</h5>
                    <h5>{articulo.etapa}</h5>
                    <h5>{articulo.tipo}</h5>
                    <h5>${articulo.precio}</h5>
                    <br />
                </div>
                <img className='bg-light' src={articulo.imagen} style={styles.img} alt={articulo.nombre} />
            </div>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link className="btn btn-primary d-flex justify-content-center" to='/cart'>Finalizar compra</Link>
                    ) : (
                        
                        <ItemCount initial={1} stock={articulo.stock} onAdd={handleOnAdd} />

                    )

                }
            </footer>
        </>
    )
}



