import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const NavBar = () => {
    const [prodNav, setProdNav] = useState([])
    useEffect(() => {
        const db = getFirestore()
        const refDoc = collection(db, "items")
        getDocs(refDoc).then(snapshot => {
            if (snapshot.size === 0) { }
            else {
                const category = snapshot.docs.map(
                    prod => prod.data().categoryId
                )
                const uniqueCategory = new Set(category)
                setProdNav([...uniqueCategory].sort())
            }
        })
    }, [])

    return (
        <Navbar className='border border-dark' bg="light " variant="light">
            <Container>
                <NavLink style={{ textDecoration: 'none' }} to={`/`}>
                    <Navbar.Brand >My Friendly Pet</Navbar.Brand>
                </NavLink>
                {prodNav.map((item) => (
                    <NavLink key={item} className="nav-link" to={`/tipo/${item}`} >
                        {item}
                    </NavLink>
                )
                )}
                <CartWidget />
            </Container>
        </Navbar>
    )
}