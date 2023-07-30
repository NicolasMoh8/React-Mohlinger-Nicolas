import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const Cart = () => {

    const { items, clearCart, totalQuantity } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <Container>
                <div>
                    <h1>No hay productos en su carrito</h1>
                    <Link style={{ textDecoration: 'none' }} className="btn btn-success" to='/' >Productos</Link>
                </div>
            </Container>
        )
    }
    const total = () =>
        items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price, 0
        )

    return (
        <Container>
            <div className="d-grid gap-2">
                {items.map((p) => <CartItem key={p.id}{...p} />)}
                <h1 className="color-red">Total de la compra: ${total()}</h1>
                <Button variant="primary"
                    onClick={() => clearCart()}>Limpiar carrito
                </Button>
                <Link className="btn btn-primary" to='/checkout'>Checkout</Link>
            </div>
        </Container>
    );
}