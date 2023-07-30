import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export const CartItem = ({ id, title, kilos, price, quantity, categoryId, description, image }) => {
    const { removeArticulo } = useContext(CartContext);
    return (
        <Container className='d-flex align-items-center justify-content-center'>
            <Card className='mt-5 bg-success ' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {kilos}
                    </Card.Text>
                    <Card.Text>
                        {categoryId} {description}
                    </Card.Text>
                    <Card.Text>
                        Precio: ${price}.-
                    </Card.Text>
                    <Card.Text>
                        Cantidad:{quantity}.-
                    </Card.Text>
                    <Card.Text>
                        TOTAL ${quantity * price}.-
                    </Card.Text>

                    <Button variant="light" onClick={() => removeArticulo(id)}>Quitar
                    </Button>
                </Card.Body>
            </Card>
        </Container>

    );
};