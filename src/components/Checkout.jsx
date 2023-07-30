import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const Checkout = () => {
    const { items, clearCart } = useContext(CartContext);
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const sendOrder = () => {
        if (!formValues.name || !formValues.phone || !formValues.email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor complete todos los campos!',

            })
            return;
        }

        const order = {
            buyer: formValues,
            items: items,
            total: total(),
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(response => {
            if (response.id) {
                clearCart()
                showSuccessAlert(response.id);
            }
        })
    }
    const total = () =>
        items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price, 0
        )
    const showSuccessAlert = (orderId) => {
        Swal.fire({
            title: 'Muchas gracias por su compra. La orden: ' + orderId + ' fue generada con exito.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    const handleChange = (evento) => {
        setFormValues(prev => ({
            ...prev, [evento.target.name]: evento.target.value,
        }))
    }
    return (
        <Container>
            <h3>Datos del usuario</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingrese su nombre</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.name} type="text" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.phone} type="text" name="phone" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.email} type="email" name="email" required />
                </Form.Group>
                <Button variant="primary" type="button" onClick={sendOrder}>
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}