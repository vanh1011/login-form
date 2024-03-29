import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Kira Tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-de ">
                        <Link className=' btn nav-link' to="/">Home</Link>
                        <Link className='btn nav-link' to="/About">About</Link>
                        <Link className='btn nav-link' to="content">Content</Link>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
                            <NavDropdown.Item href="register">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default Header