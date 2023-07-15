import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export const MyCard = ({ articulo }) => (
    <Card className='bg-secondary' key={articulo.id} style={{ width: '12rem' }}>
        <Card.Img variant="top" src={articulo.imagen} />
        <Card.Body>
            <Card.Title>{articulo.nombre}</Card.Title>
            <Card.Text>
                {articulo.kilos}
            </Card.Text>
            <Card.Text>
                {articulo.tipo} {articulo.etapa}
            </Card.Text>
            <Card.Text>
                Precio ${articulo.precio}.-
            </Card.Text>
            <Link to={`/item/${articulo.id}`}>
                <Button variant="light">Ir</Button>
            </Link>

        </Card.Body>        
    </Card>
    
)