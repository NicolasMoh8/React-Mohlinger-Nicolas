import Container from 'react-bootstrap/Container';
import { MyCard } from './Item';

export const ItemList = ({ product }) => (
    <Container className='d-flex flex-wrap justify-content-center mt-3'>
        {product.length === 0 ? (
            <div>Cargando...</div>
        ) : (
            product.map(articulo => <MyCard key={articulo.id} articulo={articulo} />)
        )}
    </Container>
)