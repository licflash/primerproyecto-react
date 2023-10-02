import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ( ) => {
  return (
    <Navbar>
    <Container>
      <Navbar.Brand href="#home">Compra Online</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/">Home</NavLink>
        <NavLink className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/novedades">Novedades</NavLink>
        <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/contact">Contacto</NavLink>
        <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/user">Perfil</NavLink>
        <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/cart">Carrito</NavLink>
      </Nav>
    </Container>
    <CartWidget />
  </Navbar>
  );
}

export default NavBar;