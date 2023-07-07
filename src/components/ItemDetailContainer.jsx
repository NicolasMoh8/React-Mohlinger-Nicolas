import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import data from '../data/MOCK_DATA.json';
import { ItemDetail } from '../components/ItemDetail';

const styles = {
    h1: {
        color: "white",
    },
};

export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([]);



    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })
        promise.then((data) => {
            setProduct(data[1])
        })
}, []);
return (
    <Container >
        <h1 className='mt-5 bg-success d-flex align-items-center justify-content-center' style={styles.h1}>Detalle</h1>
        {product.length === 0 ? (
            <div>Cargando...</div>
        ) : (
            <ItemDetail articulo={product} />
        )

        }
        
    </Container>
);
};
