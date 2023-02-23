import React from 'react';
import{Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbars() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Dinakar Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/login'>Login</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/students'>Students</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/login'>Logout</Link></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </div>
  )
}

export default Navbars;