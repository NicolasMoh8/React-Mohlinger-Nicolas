import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const MyCard = ({ articulo }) => (
    <Card className='bg-secondary' key={articulo.id} style={{ width: '12rem' }}>
        <Card.Img variant="top" src={articulo.image} />
        <Card.Body>
            <Card.Title>{articulo.title}</Card.Title>
            <Card.Text>
                {articulo.kilos}
            </Card.Text>
            <Card.Text>
                {articulo.categoryId} {articulo.description}
            </Card.Text>
            <Card.Text>
                Precio ${articulo.price}.-
            </Card.Text>
            <Link to={`/item/${articulo.id}`}>
                <Button variant="light">Ir</Button>
            </Link>
        </Card.Body>        
    </Card>
    
)