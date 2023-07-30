import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ItemList } from '../components/ItemList';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const styles = {
    h1: {
        color: "white",
    },
};

export const ItemListContainer = (props) => {
    const [product, setProduct] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const refDoc = id ? query(collection(db, "items"),
            where("categoryId", "==", id)) : collection(db, "items")
        getDocs(refDoc).then(snapshot => {
            if (snapshot.size === 0) setProduct([])
            else {
                setProduct(
                    snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                )
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
