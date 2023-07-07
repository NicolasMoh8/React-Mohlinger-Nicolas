import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from '../data/MOCK_DATA.json';
import { ItemList } from '../components/ItemList';

const styles = {
    h1: {
        color: "white",
    },
};

export const ItemListContainer = (props) => {
    const [product, setProduct] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })
        promise.then((data) => {
            if (id) {
                setProduct(
                    data.filter(product => product.tipo === id)
                )
            } else {
                setProduct(data)
            }
        })
    }, [id]);
    return (
        <Container >
            <h1 className='mt-5 bg-success d-flex align-items-center justify-content-center' style={styles.h1}>{props.greeting}</h1>
            <ItemList product={product} />
        </Container>
    );
};
