import { useState } from 'react'
import { Container } from 'react-bootstrap'

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <Container className="d-flex justify-content-center">
            <div>
                <div className="input-group">
                    <button className="btn btn-secondary" onClick={decrement}>-</button>
                    <input type="text" className="form-control form-control-sm text-center" value={quantity} readOnly />
                    <button className="btn btn-secondary" onClick={increment}>+</button>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </Container>

    )
}


