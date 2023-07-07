import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

import data from '../data/MOCK_DATA.json';


const tipos = data.map(articulo => articulo.tipo)

const unique = new Set(tipos)

export const NavBar = () => (
    <Navbar className='border border-dark' bg="light " variant="light">
        <Container>

            <Nav>
                <NavLink style={{textDecoration: 'none'}}to={`/`}>
                    <Navbar.Brand >My Friendly Pet</Navbar.Brand>
                </NavLink>
            </Nav>
            <Nav className="me-auto">
                {[...unique].map(item => (
                    <NavLink key={item} className="nav-link" to={`/tipo/${item}`} >
                        {item}
                    </NavLink>
                ))}
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
)
