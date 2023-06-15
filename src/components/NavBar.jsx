import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';


export const NavBar =()=> (
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="My_Friendly_Pet">My Friendly Pet</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="Perros">Perros</Nav.Link>
                <Nav.Link href="Gatos">Gatos</Nav.Link>
                <Nav.Link href="Accesorios">Accesorios</Nav.Link>
            </Nav>
            <CartWidget/>
        </Container>
    </Navbar>         
)
